#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = process.cwd();
const legacyRoutes = JSON.parse(
  readFileSync(resolve(repoRoot, 'migration/legacy-routes.json'), 'utf8'),
);
const generatedRoutes = JSON.parse(
  readFileSync(resolve(repoRoot, 'migration/generated-routes.json'), 'utf8'),
);

const sectionEntries = [
  ['web', '/docs/web/intro'],
  ['mcje', '/docs/mcje/select_server'],
  ['mcbe', '/docs/mcbe/select_server'],
  ['terraria', '/docs/terraria'],
  ['mindustry', '/docs/mindustry'],
  ['rusted-warfare', '/docs/rusted-warfare'],
  ['custom-image', '/docs/custom-image/multi_env/quick_start'],
];

const redirects = new Map();
function addRedirect(source, destination) {
  if (source !== destination) redirects.set(source, destination);
}

for (const page of legacyRoutes.pages) addRedirect(page.legacyUrl, page.newUrl);
for (const redirect of legacyRoutes.redirects) addRedirect(redirect.legacyUrl, redirect.newUrl);

for (const [section, entry] of sectionEntries) {
  addRedirect(`/${section}`, entry);
  addRedirect(`/${section}/*`, `/docs/${section}/:splat`);

  if (!generatedRoutes.pages.some((page) => page.newUrl === `/docs/${section}`)) {
    addRedirect(`/docs/${section}`, entry);
  }
}

const edgeone = {
  buildCommand: 'pnpm build',
  installCommand: 'pnpm install',
  framework: 'nextjs',
  redirects: [...redirects]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301,
    }))
    .concat({
      source: '/*/',
      destination: '/:splat',
      statusCode: 301,
    }),
  headers: [
    {
      source: '/llms.mdx/*',
      headers: [
        { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        { key: 'Cache-Control', value: 'no-cache' },
      ],
    },
    {
      source: '/_next/static/*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/img/*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
    },
    {
      source: '/',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/docs',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/docs/*',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/404.html',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/llms.txt',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/llms-full.txt',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
    {
      source: '/api/search',
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=utf-8' },
        { key: 'Cache-Control', value: 'no-cache' },
      ],
    },
    {
      source: '/api/*',
      headers: [{ key: 'Cache-Control', value: 'no-cache' }],
    },
  ],
};

writeFileSync(resolve(repoRoot, 'edgeone.json'), `${JSON.stringify(edgeone, null, 2)}\n`);
console.log(
  `[edgeone] generated ${edgeone.redirects.length} redirects and ${edgeone.headers.length} header rules`,
);
