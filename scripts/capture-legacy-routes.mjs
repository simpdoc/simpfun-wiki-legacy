#!/usr/bin/env node

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const repoRoot = process.cwd();
const buildDir = resolve(repoRoot, process.argv[2] ?? 'build');
const outputPath = resolve(repoRoot, 'migration/legacy-routes.json');
const sectionNames = new Set([
  'web',
  'mcje',
  'mcbe',
  'terraria',
  'mindustry',
  'rusted-warfare',
  'custom-image',
]);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function toRoute(path) {
  const normalized = relative(buildDir, path).replaceAll('\\', '/');
  const withoutExtension = normalized.replace(/\.html$/, '');
  return `/${withoutExtension.replace(/\/index$/, '')}`;
}

function toDocsRoute(route) {
  return route === '/' ? '/docs' : `/docs${route}`;
}

const pages = [];
const redirects = [];

for (const path of walk(buildDir).filter((file) => file.endsWith('.html'))) {
  const legacyUrl = toRoute(path);
  const section = legacyUrl.split('/')[1];
  if (!sectionNames.has(section)) continue;

  const html = readFileSync(path, 'utf8');
  const redirectTarget = html.match(
    /<meta\s+http-equiv=["']refresh["']\s+content=["']0;\s*url=([^"']+)["']/i,
  )?.[1];

  if (redirectTarget) {
    redirects.push({
      legacyUrl,
      newUrl: toDocsRoute(redirectTarget),
      kind: 'redirect',
    });
  } else {
    pages.push({
      legacyUrl,
      newUrl: toDocsRoute(legacyUrl),
      kind: 'page',
    });
  }
}

pages.sort((a, b) => a.legacyUrl.localeCompare(b.legacyUrl));
redirects.sort((a, b) => a.legacyUrl.localeCompare(b.legacyUrl));

if (pages.length === 0) {
  throw new Error(`No legacy documentation routes found under ${buildDir}`);
}

const manifest = {
  generatedFrom: 'Docusaurus production build',
  site: 'https://legacy.simpdoc.top',
  pageCount: pages.length,
  redirectCount: redirects.length,
  pages,
  redirects,
  ignoredRoutes: ['/', '/404.html', '/search'],
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `[legacy-routes] captured ${pages.length} page routes and ${redirects.length} entry redirects`,
);
