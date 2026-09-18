import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const downloads = 'C:/Users/LENOVO/Downloads';
const { records } = JSON.parse(fs.readFileSync('.portfolio-audit.local/inventory.json', 'utf8'));
const choices = [
  ['Attention Factory Content Strategy Matrix (1) (2).docx', 'content-strategy', 'Content strategy matrix', 'A four-pillar framework connecting brand authority, education and bootcamp campaigns.'],
  ['attention_factory_3_week_calendar (1) (2).docx', 'three-week-calendar', 'Three-week content calendar', '63 planned posts, with content angles and creative direction across three weekly themes.'],
  ['TranscriptX_30_Day_Marketing_Plan_Natural.docx', 'transcriptx-marketing-plan', 'TranscriptX · 30-day marketing plan', 'Product positioning, content experiments and a proposed growth sprint for an Attention Factory product.'],
  ['Meet The Builders strategy.docx', 'meet-the-builders', 'Meet the Builders strategy', 'A community participation programme, from member introductions to collaborative AI projects.'],
  ['COMMUNITY ENGAGEMENT TRACKING (2).xlsx', 'community-engagement', 'Community engagement tracker', 'Daily activity and weekly and monthly reporting, including the latest supplied July entries.'],
];
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const textHtml = value => escape(value).replace(/\n/g, '<br>');
const css = `:root{color-scheme:light;font-family:Inter,Arial,sans-serif;color:#202535;background:#f1f4f8}*{box-sizing:border-box}body{margin:0;line-height:1.7}header{background:#141621;color:#e8edff;padding:24px max(20px,calc((100vw - 1100px)/2))}header a{color:#a9c9ff}nav{display:flex;gap:20px;flex-wrap:wrap}main{max-width:1100px;margin:32px auto;padding:clamp(20px,4vw,48px);background:white;border:1px solid #dce2eb;border-radius:16px}h1{font-size:clamp(1.6rem,4vw,2.5rem);line-height:1.2;overflow-wrap:anywhere}h2{font-size:1.45rem;line-height:1.35;margin-top:2.4rem;color:#243f74}h3{font-size:1.1rem;margin-top:1.6rem}p,li{overflow-wrap:anywhere}p{white-space:pre-wrap}.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;color:#52627c}.note{padding:14px 18px;background:#f0f5ff;border-left:3px solid #668bd0;font-size:.9rem}.table-wrap{max-width:100%;overflow:auto;margin:24px 0;border:1px solid #dce2eb;border-radius:8px}table{border-collapse:collapse;width:100%;font-size:.9rem}th,td{padding:12px;text-align:left;vertical-align:top;border-bottom:1px solid #dce2eb;min-width:130px;white-space:pre-wrap;overflow-wrap:anywhere}th{background:#eaf0fa;color:#243f74}tbody tr:nth-child(even){background:#f8fafc}details{margin:24px 0}summary{cursor:pointer;font-size:1.2rem;font-weight:700;color:#243f74;padding:12px 0}:focus-visible{outline:3px solid #527cd0;outline-offset:4px}.doc-title{font-size:1.3rem;font-weight:bold}footer{color:#52627c;font-size:.85rem;margin-top:40px}@media(max-width:600px){main{margin:0;border:0;border-radius:0}header{padding:20px}th,td{padding:10px;min-width:120px}}@media print{header{display:none}main{margin:0;padding:0;border:0;max-width:none}.table-wrap{overflow:visible}table{font-size:9pt}th,td{min-width:0;padding:5px}}`;
function docHtml(record) {
  let first = true;
  return record.blocks.map(block => {
    if (block.type === 'table') {
      return `<div class="table-wrap" role="region" aria-label="Document table" tabindex="0"><table>${block.rows.map((row, i) => `<${i === 0 ? 'thead' : 'tbody'}><tr>${row.map(cell => `<${i === 0 ? 'th scope="col"' : 'td'} colspan="${cell.colspan}">${textHtml(cell.text)}</${i === 0 ? 'th' : 'td'}>`).join('')}</tr></${i === 0 ? 'thead' : 'tbody'}>`).join('')}</table></div>`;
    }
    if (!block.text.trim()) return '';
    const text = block.text.trim();
    const heading = /Heading1/i.test(block.style) || /^\d+\.\s+[A-Z]/.test(text) && text.length < 120 || /^Initiative \d:/.test(text);
    const subheading = /Heading2/i.test(block.style) || /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/.test(text) || /^Week \d:/.test(text) && text.length < 90;
    const tag = heading ? 'h2' : subheading ? 'h3' : 'p';
    const cls = first ? ' class="doc-title"' : '';
    first = false;
    return `<${tag}${cls}>${block.numbered || /ListBullet/i.test(block.style) ? '• ' : ''}${textHtml(block.text)}</${tag}>`;
  }).join('\n');
}
function workbookHtml(record) {
  const colNumber = ref => [...ref.replace(/\d/g, '')].reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0);
  const display = cell => {
    if (!cell) return '';
    if (cell.style === '5' && cell.value !== '') return new Date(Date.UTC(1899, 11, 30) + Number(cell.value) * 86400000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
    return /^-?\d+\.0$/.test(cell.value) ? String(Number(cell.value)) : cell.value;
  };
  return '<p class="note">Values are shown as saved in the source workbook. Blank cells indicate unrecorded activity, not zero. Open each sheet below to view its full contents.</p>' + record.sheets.map((sheet, index) => {
    const width = Math.max(...sheet.rows.flatMap(r => r.cells.map(c => colNumber(c.ref))));
    const rows = sheet.rows.map((row, rowIndex) => {
      const cells = new Map(row.cells.map(c => [colNumber(c.ref), c]));
      return `<tr>${Array.from({ length: width }, (_, i) => `<${rowIndex ? 'td' : 'th scope="col"'}>${textHtml(display(cells.get(i + 1)))}</${rowIndex ? 'td' : 'th'}>`).join('')}</tr>`;
    });
    return `<details ${index === 0 ? 'open' : ''}><summary>${escape(sheet.name)}</summary><div class="table-wrap" role="region" aria-label="${escape(sheet.name)}" tabindex="0"><table><thead>${rows[0]}</thead><tbody>${rows.slice(1).join('')}</tbody></table></div></details>`;
  }).join('\n');
}
fs.mkdirSync('public/documents/attention-factory', { recursive: true });
fs.mkdirSync('public/work/attention-factory', { recursive: true });
fs.mkdirSync('src/data', { recursive: true });
const manifest = [];
for (const [source, slug, title, description] of choices) {
  const record = records.find(r => r.source === source);
  if (!record || record.missing) throw Error(`Missing source ${source}`);
  const original = fs.readFileSync(path.join(downloads, source));
  if (crypto.createHash('sha256').update(original).digest('hex') !== record.hash) throw Error(`Source changed since audit: ${source}`);
  const ext = path.extname(source);
  const download = `/documents/attention-factory/${slug}${ext}`;
  const preview = `/work/attention-factory/${slug}.html`;
  fs.writeFileSync('public' + download, original);
  const body = record.blocks ? docHtml(record) : workbookHtml(record);
  fs.writeFileSync('public' + preview, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)} · Eniolami Saheed</title><style>${css}</style></head><body><header><nav aria-label="Document navigation"><a href="/work#attention-factory">← Back to portfolio</a><a href="${download}" download>Download original ${ext.slice(1).toUpperCase()}</a></nav></header><main><p class="eyebrow">Attention Factory · Work sample</p><h1>${escape(title)}</h1><p>${escape(description)}</p><article>${body}</article><footer>Eniolami Saheed · Browser reading view. The original document is available above.</footer></main></body></html>`);
  manifest.push({ title, description, preview, download, format: ext.slice(1).toUpperCase() });
}
fs.writeFileSync('src/data/portfolioDocuments.ts', `// One canonical entry per document; browser previews are public static pages.\nexport const attentionFactoryDocuments = ${JSON.stringify(manifest, null, 2)} as const;\n`);
const cv = fs.readFileSync(path.join(downloads, 'Eniolami-Saheed-CV (3).pdf'));
if (cv.subarray(0, 5).toString() !== '%PDF-') throw Error('CV is not a PDF');
fs.writeFileSync('public/Eniolami-Saheed-CV.pdf', cv);
fs.copyFileSync(path.join(downloads, 'WhatsApp Image 2026-09-18 at 14.01.39.jpeg'), 'src/assets/codevant-x-100k.jpeg');
fs.copyFileSync(path.join(downloads, 'WhatsApp Image 2026-08-14 at 15.18.06 (1).jpeg'), 'src/assets/techcrier-linkedin-growth.jpeg');
console.log(`Prepared ${manifest.length} unique document previews and original downloads; replaced CV; added two new proof images.`);
