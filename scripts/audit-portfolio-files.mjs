import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { inflateRawSync } from 'node:zlib';
import { JSDOM } from 'jsdom';

const downloads = 'C:/Users/LENOVO/Downloads';
export const sources = [
  'TranscriptX_30_Day_Marketing_Plan_Natural.docx',
  'Eniolami-Saheed-CV (3).pdf',
  'COMMUNITY ENGAGEMENT TRACKING (2).xlsx',
  'Attention Factory Content Strategy Matrix (1) (2).docx',
  'attention_factory_3_week_calendar (1) (2).docx',
  'COMMUNITY ENGAGEMENT TRACKING (1).xlsx',
  'Meet The Builders strategy.docx',
  'attention_factory_3_week_calendar (1).docx',
  'attention_factory_3_week_calendar.docx',
  'Attention Factory Content Strategy Matrix (1).docx',
  'WhatsApp Image 2026-09-18 at 14.01.39.jpeg',
  'WhatsApp Image 2026-09-18 at 14.02.05.jpeg',
  'WhatsApp Image 2026-08-14 at 15.19.34.jpeg',
  'WhatsApp Image 2026-08-14 at 15.18.05.jpeg',
  'WhatsApp Image 2026-08-14 at 15.18.06 (2).jpeg',
  'WhatsApp Image 2026-08-14 at 15.18.06 (1).jpeg',
];
export function unzip(buffer) {
  let end = buffer.length - 22;
  while (end >= 0 && buffer.readUInt32LE(end) !== 0x06054b50) end--;
  if (end < 0) throw Error('Not a ZIP archive');
  const files = {};
  let cursor = buffer.readUInt32LE(end + 16);
  const count = buffer.readUInt16LE(end + 10);
  for (let i = 0; i < count; i++) {
    const method = buffer.readUInt16LE(cursor + 10);
    const size = buffer.readUInt32LE(cursor + 20);
    const nameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const commentLength = buffer.readUInt16LE(cursor + 32);
    const offset = buffer.readUInt32LE(cursor + 42);
    const name = buffer.subarray(cursor + 46, cursor + 46 + nameLength).toString();
    const start = offset + 30 + buffer.readUInt16LE(offset + 26) + buffer.readUInt16LE(offset + 28);
    const compressed = buffer.subarray(start, start + size);
    if (method !== 0 && method !== 8) throw Error(`Unsupported ZIP method ${method}`);
    files[name] = method === 8 ? inflateRawSync(compressed) : compressed;
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return files;
}
export function xml(buffer) {
  return new JSDOM(buffer.toString('utf8'), { contentType: 'text/xml' }).window.document;
}
export const elements = (node, name) => [...node.getElementsByTagNameNS('*', name)];
export const textOf = node => elements(node, 't').map(t => t.textContent).join('');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');

export function inspectDocx(files) {
  const doc = xml(files['word/document.xml']);
  const body = elements(doc, 'body')[0];
  const blocks = [...body.children].flatMap(node => {
    if (node.localName === 'p') return [{ type: 'paragraph', text: textOf(node), style: elements(node, 'pStyle')[0]?.getAttribute('w:val') || '', numbered: !!elements(node, 'numPr').length }];
    if (node.localName === 'tbl') return [{ type: 'table', rows: [...node.children].filter(n => n.localName === 'tr').map(row => [...row.children].filter(n => n.localName === 'tc').map(cell => ({ text: elements(cell, 'p').map(textOf).join('\n'), colspan: Number(elements(cell, 'gridSpan')[0]?.getAttribute('w:val') || 1) }))) }];
    return [];
  });
  return { blocks, media: Object.keys(files).filter(name => name.startsWith('word/media/')), text: blocks.map(b => b.text ?? b.rows.map(r => r.map(c => c.text).join(' | ')).join('\n')).join('\n') };
}
export function inspectXlsx(files) {
  const shared = files['xl/sharedStrings.xml'] ? elements(xml(files['xl/sharedStrings.xml']), 'si').map(textOf) : [];
  const workbook = xml(files['xl/workbook.xml']);
  const relations = elements(xml(files['xl/_rels/workbook.xml.rels']), 'Relationship');
  return elements(workbook, 'sheet').map(sheet => {
    const rel = relations.find(r => r.getAttribute('Id') === sheet.getAttribute('r:id'));
    const target = rel.getAttribute('Target');
    const name = target.startsWith('/') ? target.slice(1) : path.posix.normalize('xl/' + target);
    const doc = xml(files[name]);
    const rows = elements(doc, 'row').map(row => ({ index: Number(row.getAttribute('r')), cells: elements(row, 'c').map(cell => {
      const value = elements(cell, 'v')[0]?.textContent || '';
      const type = cell.getAttribute('t');
      return { ref: cell.getAttribute('r'), value: type === 's' ? shared[Number(value)] : type === 'inlineStr' ? textOf(cell) : value, formula: elements(cell, 'f')[0]?.textContent, style: cell.getAttribute('s') };
    }).filter(c => c.value !== '' || c.formula) })).filter(r => r.cells.length);
    return { name: sheet.getAttribute('name'), rows, merges: elements(doc, 'mergeCell').map(c => c.getAttribute('ref')) };
  });
}

if (process.argv[1]?.endsWith('audit-portfolio-files.mjs')) {
  fs.mkdirSync('.portfolio-audit.local', { recursive: true });
  const records = [];
  for (const source of sources) {
    const file = path.join(downloads, source);
    if (!fs.existsSync(file)) { records.push({ source, missing: true }); continue; }
    const bytes = fs.readFileSync(file);
    const record = { source, bytes: bytes.length, hash: hash(bytes) };
    if (source.endsWith('.docx')) {
      Object.assign(record, inspectDocx(unzip(bytes)));
      record.contentHash = hash(JSON.stringify(record.blocks.map(b => b.type === 'table' ? b.rows : b.text.replace(/\s+/g, ' ').trim())));
    }
    if (source.endsWith('.xlsx')) {
      record.sheets = inspectXlsx(unzip(bytes));
      record.contentHash = hash(JSON.stringify(record.sheets.map(s => ({ name: s.name, rows: s.rows.map(r => r.cells.map(c => [c.ref, c.value, c.formula])) }))));
    }
    records.push(record);
  }
  const assets = fs.readdirSync('src/assets').map(source => ({ source, hash: hash(fs.readFileSync('src/assets/' + source)) }));
  fs.writeFileSync('.portfolio-audit.local/inventory.json', JSON.stringify({ records, assets }, null, 2));
  console.log(JSON.stringify(records.map(({ source, bytes, hash, contentHash, missing, text, media, sheets }) => ({ source, bytes, hash, contentHash, missing, media, text: text?.slice(0, 3000), sheets })), null, 2));
}
