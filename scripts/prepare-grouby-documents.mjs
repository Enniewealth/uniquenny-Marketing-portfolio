import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const records = JSON.parse(fs.readFileSync('.portfolio-audit.local/grouby.json', 'utf8'));
const choices = [
  ['Grouby is your go.docx', 'grouby-is-your-go', 'Grouby is your go-to', 'Convenience-led brand copy positioning Grouby as an affordable source for household groceries.'],
  ['Weekend food ideas you should try out.docx', 'weekend-food-ideas', 'Weekend food ideas', 'A food-content article covering accessible Nigerian meals from breakfast through dinner.'],
  ['Content on 3 tips to  save money on grocery.docx', 'dfc-foods-vendor-showcase', 'DFC Foods vendor showcase', 'Vendor-led copy introducing DFC Foods and the benefits of its plantain chips.'],
  ['Are you planning to go through that stressful and unsecured journey in Lagos just to get your Rams.docx', 'ram-delivery-copy', 'Ram delivery campaign copy', 'Seasonal sales copy focused on convenience, choice and doorstep delivery in Lagos.'],
];
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const css = `:root{color-scheme:light;font-family:Inter,Arial,sans-serif;color:#202535;background:#f1f4f8}*{box-sizing:border-box}body{margin:0;line-height:1.75}header{background:#141621;color:#e8edff;padding:24px max(20px,calc((100vw - 850px)/2))}nav{display:flex;gap:20px;flex-wrap:wrap}a{color:#3369c4}header a{color:#a9c9ff}main{max-width:850px;margin:32px auto;padding:clamp(20px,5vw,52px);background:white;border:1px solid #dce2eb;border-radius:16px}h1{font-size:clamp(1.7rem,5vw,2.6rem);line-height:1.2;overflow-wrap:anywhere}.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;color:#52627c}.intro{color:#52627c;font-size:1.05rem;border-bottom:1px solid #dce2eb;padding-bottom:24px}article p{white-space:pre-wrap;overflow-wrap:anywhere;margin:1.1rem 0}.lead{font-size:1.15rem;font-weight:650;color:#243f74}footer{color:#52627c;font-size:.85rem;margin-top:40px}:focus-visible{outline:3px solid #527cd0;outline-offset:4px}@media(max-width:600px){main{margin:0;border:0;border-radius:0}header{padding:20px}}@media print{header{display:none}main{margin:0;padding:0;border:0;max-width:none}}`;
fs.mkdirSync('public/documents/grouby', { recursive: true });
fs.mkdirSync('public/work/grouby', { recursive: true });
const manifest = [];
for (const [fileName, slug, title, description] of choices) {
  const record = records.find(item => path.basename(item.source) === fileName);
  if (!record) throw Error(`Missing audited source: ${fileName}`);
  const original = fs.readFileSync(record.source);
  if (crypto.createHash('sha256').update(original).digest('hex') !== record.hash) throw Error(`Source changed since audit: ${fileName}`);
  const download = `/documents/grouby/${slug}.docx`;
  const preview = `/work/grouby/${slug}.html`;
  fs.writeFileSync('public' + download, original);
  const paragraphs = record.blocks.filter(block => block.type === 'paragraph' && block.text.trim());
  const article = paragraphs.map((block, index) => `<p${index === 0 ? ' class="lead"' : ''}>${escape(block.text.trim())}</p>`).join('\n');
  fs.writeFileSync('public' + preview, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} · Eniolami Saheed</title><style>${css}</style></head><body><header><nav aria-label="Document navigation"><a href="/work#grouby">← Back to portfolio</a><a href="${download}" download>Download original DOCX</a></nav></header><main><p class="eyebrow">Grouby · Copywriting sample</p><h1>${escape(title)}</h1><p class="intro">${escape(description)}</p><article>${article}</article><footer>Eniolami Saheed · Browser reading view. The original Word document is available above.</footer></main></body></html>`);
  manifest.push({ title, description, preview, download, format: 'DOCX', category: 'Copywriting sample' });
}
fs.writeFileSync('.portfolio-audit.local/grouby-manifest.json', JSON.stringify(manifest, null, 2));
console.log(`Prepared ${manifest.length} unique Grouby previews and original downloads.`);
