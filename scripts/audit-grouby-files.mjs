import fs from 'node:fs';
import crypto from 'node:crypto';
import { unzip, inspectDocx } from './audit-portfolio-files.mjs';

const sources = [
  'C:/Users/LENOVO/OneDrive/Desktop/New folder/Grouby is your go.docx',
  'C:/Users/LENOVO/OneDrive/Desktop/New folder/Weekend food ideas you should try out.docx',
  'C:/Users/LENOVO/OneDrive/Desktop/uniquenny project/Content on 3 tips to  save money on grocery.docx',
  'C:/Users/LENOVO/OneDrive/Desktop/New folder/Are you planning to go through that stressful and unsecured journey in Lagos just to get your Rams.docx',
];
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const records = sources.map(source => {
  const bytes = fs.readFileSync(source);
  const inspected = inspectDocx(unzip(bytes));
  return {
    source,
    bytes: bytes.length,
    hash: hash(bytes),
    contentHash: hash(inspected.text.replace(/\s+/g, ' ').trim().toLowerCase()),
    ...inspected,
  };
});
fs.mkdirSync('.portfolio-audit.local', { recursive: true });
fs.writeFileSync('.portfolio-audit.local/grouby.json', JSON.stringify(records, null, 2));
console.log(JSON.stringify(records.map(({ source, bytes, hash, contentHash, text }) => ({ source, bytes, hash, contentHash, text })), null, 2));
