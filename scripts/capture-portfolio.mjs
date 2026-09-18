import { chromium } from '@playwright/test';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';

const dist = resolve('dist');
const contentTypes = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
const server = createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(dist + sep)) return response.writeHead(403).end();
  try { response.writeHead(200, { 'Content-Type': contentTypes[extname(file)] || 'application/octet-stream' }).end(readFileSync(file)); }
  catch { response.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
mkdirSync('.portfolio-audit.local/screenshots', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  for (const [name, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
    await page.route('https://fonts.googleapis.com/**', route => route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}`, { waitUntil: 'load' });
    await page.locator('h1').waitFor();
    await page.screenshot({ path: `.portfolio-audit.local/screenshots/${name}.png`, fullPage: true });
  }
  console.log('Captured desktop and mobile portfolio screenshots.');
} finally {
  await browser.close();
  server.close();
}
