#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const repoRoot = process.cwd();
const manifest = JSON.parse(
  readFileSync(resolve(repoRoot, 'migration/legacy-content-manifest.json'), 'utf8'),
);
const legacyRoutes = JSON.parse(
  readFileSync(resolve(repoRoot, 'migration/legacy-routes.json'), 'utf8'),
);
const generatedRoutes = JSON.parse(
  readFileSync(resolve(repoRoot, 'migration/generated-routes.json'), 'utf8'),
);

function toPosix(path) {
  return path.replaceAll('\\', '/');
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

const errors = [];

for (const entry of manifest.files) {
  const source = resolve(repoRoot, entry.source);
  const destination = resolve(repoRoot, entry.destination);

  if (!existsSync(source)) {
    errors.push(`missing source: ${entry.source}`);
    continue;
  }
  if (!existsSync(destination)) {
    errors.push(`missing destination: ${entry.destination}`);
    continue;
  }

  const sourceHash = sha256(source);
  const destinationHash = sha256(destination);
  if (sourceHash !== entry.sha256) errors.push(`source changed: ${entry.source}`);
  if (destinationHash !== entry.sha256) errors.push(`copy changed: ${entry.destination}`);
  if (sourceHash !== destinationHash) {
    errors.push(`source/destination mismatch: ${entry.source} -> ${entry.destination}`);
  }
}

const documentEntries = manifest.files.filter((entry) => entry.kind === 'document');
const assetEntries = manifest.files.filter((entry) => entry.kind === 'asset');
const expectedDocuments = new Set(documentEntries.map((entry) => entry.destination));
const expectedAssets = new Set(assetEntries.map((entry) => entry.destination));

for (const path of walk(resolve(repoRoot, 'content/docs'))) {
  const relativePath = toPosix(relative(repoRoot, path));
  if (!relativePath.endsWith('.md') && !relativePath.endsWith('.mdx')) continue;
  if (relativePath === 'content/docs/ai.mdx') continue;
  if (!expectedDocuments.has(relativePath)) {
    errors.push(`unexpected imported document: ${relativePath}`);
  }
}

for (const path of walk(resolve(repoRoot, 'public/img'))) {
  const relativePath = toPosix(relative(repoRoot, path));
  if (!expectedAssets.has(relativePath)) {
    errors.push(`unexpected public image: ${relativePath}`);
  }
}

const expectedPages = new Map(
  legacyRoutes.pages.map((page) => [page.legacyUrl, page.newUrl]),
);
const generatedPages = new Map(
  generatedRoutes.pages.map((page) => [page.legacyUrl, page.newUrl]),
);

for (const [legacyUrl, newUrl] of expectedPages) {
  if (generatedPages.get(legacyUrl) !== newUrl) {
    errors.push(`legacy route mismatch: ${legacyUrl} should map to ${newUrl}`);
  }
}
for (const legacyUrl of generatedPages.keys()) {
  if (!expectedPages.has(legacyUrl)) errors.push(`unexpected generated route: ${legacyUrl}`);
}

const aiContent = readFileSync(resolve(repoRoot, 'content/docs/ai.mdx'), 'utf8');
if (aiContent.includes('next.simpdoc.top')) {
  errors.push('content/docs/ai.mdx still contains next.simpdoc.top');
}
if (!aiContent.includes('legacy.simpdoc.top')) {
  errors.push('content/docs/ai.mdx does not contain legacy.simpdoc.top');
}

if (errors.length) {
  console.error('[legacy-verify] failed');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `[legacy-verify] ${documentEntries.length} legacy files, ${assetEntries.length} images, and ${generatedPages.size} routes match the captured baseline`,
);
