import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';

const expectedPreviews = [
  '/work/attention-factory/content-strategy.html',
  '/work/attention-factory/three-week-calendar.html',
  '/work/attention-factory/transcriptx-marketing-plan.html',
  '/work/attention-factory/meet-the-builders.html',
  '/work/attention-factory/community-engagement.html',
  '/work/grouby/grouby-is-your-go.html',
  '/work/grouby/weekend-food-ideas.html',
  '/work/grouby/dfc-foods-vendor-showcase.html',
  '/work/grouby/ram-delivery-copy.html',
];
const expectedDownloads = expectedPreviews.map(url => url.replace('/work/', '/documents/').replace('.html', url.includes('community-engagement') ? '.xlsx' : '.docx'));
const hash = path => crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex');
assert.equal(hash('public/Eniolami-Saheed-CV.pdf'), hash('C:/Users/LENOVO/Downloads/Eniolami-Saheed-CV (3).pdf'), 'Published CV must match the supplied replacement');
for (const url of [...expectedPreviews, ...expectedDownloads]) assert.ok(fs.statSync('public' + url).size > 100, `Missing or empty ${url}`);

const dist = resolve('dist');
const contentTypes = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' };
const server = createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const requestedPath = resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
  const requested = extname(requestedPath) ? requestedPath : resolve(dist, 'index.html');
  if (!requested.startsWith(dist + sep)) return response.writeHead(403).end();
  try { response.writeHead(200, { 'Content-Type': contentTypes[extname(requested)] || 'application/octet-stream' }).end(fs.readFileSync(requested)); }
  catch { response.writeHead(404).end(); }
});
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
let browser;
try {
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await page.route('https://fonts.googleapis.com/**', route => route.abort());
  const base = `http://127.0.0.1:${server.address().port}`;
  await page.goto(base + '/work', { waitUntil: 'load', timeout: 60000 });
  await page.getByRole('heading', { name: 'Strategy, execution and proof' }).waitFor();
  for (const button of await page.getByRole('button', { name: /Explore the work/ }).all()) await button.click();
  const previewLinks = await page.locator('a[href^="/work/"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')))]);
  const downloadLinks = await page.locator('a[href^="/documents/"][download]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')))]);
  assert.deepEqual(previewLinks.sort(), expectedPreviews.slice().sort(), 'Expected all unique document previews');
  assert.deepEqual(downloadLinks.sort(), expectedDownloads.slice().sort(), 'Expected all original document downloads');
  await page.getByRole('button', { name: /View Codevant X analytics showing 100K impressions/ }).click();
  await page.getByRole('dialog').waitFor();
  await page.keyboard.press('Escape');
  for (const preview of expectedPreviews) {
    const response = await page.goto(base + preview, { waitUntil: 'load' });
    assert.equal(response.status(), 200, `${preview} should load`);
    assert.ok((await page.locator('article').innerText()).trim().length > 100, `${preview} should contain readable content`);
  }
  const cv = await page.request.get(base + '/Eniolami-Saheed-CV.pdf');
  assert.equal(cv.status(), 200);
  assert.equal((await cv.body()).subarray(0, 5).toString(), '%PDF-');
  console.log('PASS: 9 unique browser previews, 9 original downloads, image dialog, and replacement CV are accessible.');
} finally {
  await browser?.close();
  server.close();
}
