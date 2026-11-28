#!/usr/bin/env node

import { createHash } from 'node:crypto';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';

const repoRoot = process.cwd();
const docsRoot = resolve(repoRoot, 'content/docs');
const publicRoot = resolve(repoRoot, 'public');
const migrationRoot = resolve(repoRoot, 'migration');
const targetRepo = resolve(
  repoRoot,
  process.env.SIMPFUN_WIKI_TARGET ?? '../Simpfun-Wiki',
);
const legacyRouteManifestPath = resolve(migrationRoot, 'legacy-routes.json');

const sections = [
  {
    id: 'web',
    source: 'docs-web',
    title: '官网使用指南',
    description: '简幻欢官网使用指南',
  },
  {
    id: 'mcje',
    source: 'docs-mcje',
    title: 'MCJE 文档',
    description: 'Minecraft Java 版文档',
  },
  {
    id: 'mcbe',
    source: 'docs-mcbe',
    title: 'MCBE 文档',
    description: 'Minecraft 基岩版文档',
  },
  {
    id: 'terraria',
    source: 'docs-terraria',
    title: '泰拉瑞亚',
    description: '泰拉瑞亚服务端文档',
  },
  {
    id: 'mindustry',
    source: 'docs-mindustry',
    title: '像素工厂',
    description: '像素工厂服务端文档',
  },
  {
    id: 'rusted-warfare',
    source: 'docs-rusted-warfare',
    title: '铁锈战争',
    description: '铁锈战争服务端文档',
  },
  {
    id: 'custom-image',
    source: 'docs-custom-image',
    title: '自定义镜像',
    description: '简幻欢自定义镜像文档',
  },
];

const pageExtensions = new Set(['.md', '.mdx']);
const numericPrefix = /^\d+-/;

function toPosix(path) {
  return path.replaceAll('\\', '/');
}

function sha256(path, normalizeLineEndings = false) {
  const content = readFileSync(path);
  // Git checks out text with platform-dependent endings. Normalize text
  // fingerprints so a Windows checkout and a Linux deployment agree.
  const data = normalizeLineEndings
    ? Buffer.from(content.toString('utf8').replaceAll('\r\n', '\n'))
    : content;
  return createHash('sha256').update(data).digest('hex');
}

function contentBytes(path, normalizeLineEndings = false) {
  if (!normalizeLineEndings) return statSync(path).size;
  return readFileSync(path).toString('utf8').replaceAll('\r\n', '\n').length;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function resetDirectory(path, allowedParent) {
  const resolved = resolve(path);
  const parent = resolve(allowedParent);
  if (resolved === parent || !resolved.startsWith(`${parent}${sep}`)) {
    throw new Error(`Refusing to reset directory outside ${parent}: ${resolved}`);
  }

  rmSync(resolved, { recursive: true, force: true });
  mkdirSync(resolved, { recursive: true });
}

function copyTree(source, destination) {
  if (!existsSync(source)) {
    throw new Error(`Missing legacy source directory: ${source}`);
  }

  for (const sourcePath of walk(source)) {
    const relativePath = relative(source, sourcePath);
    const destinationPath = join(destination, relativePath);
    mkdirSync(dirname(destinationPath), { recursive: true });
    copyFileSync(sourcePath, destinationPath);
  }
}

function stripNumericPrefix(segment) {
  return segment.replace(numericPrefix, '');
}

function routeSegments(section, relativePath) {
  const extension = relativePath.match(/\.[^.]+$/)?.[0] ?? '';
  const withoutExtension = extension ? relativePath.slice(0, -extension.length) : relativePath;
  const segments = [section, ...withoutExtension.split(/[\\/]/).map(stripNumericPrefix)];

  if (segments.at(-1) === 'index') segments.pop();
  return segments;
}

function legacyRouteFor(section, relativePath) {
  return `/${routeSegments(section, relativePath).join('/')}`;
}

function pagePosition(path) {
  const content = readFileSync(path, 'utf8').slice(0, 2000);
  return Number(content.match(/^sidebar_position:\s*["']?(\d+)/m)?.[1] ?? Infinity);
}

function prefixPosition(name) {
  return Number(name.match(/^(\d+)-/)?.[1] ?? Infinity);
}

function compareEntries(a, b) {
  return a.position - b.position || a.name.localeCompare(b.name, 'en');
}

function readCategory(dir) {
  const path = join(dir, '_category_.json');
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
}

function humanizeFolder(name) {
  return stripNumericPrefix(name).replaceAll('_', ' ');
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function generateMeta(section, dir, isRoot) {
  const category = readCategory(dir);
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.name !== '_category_.json' && entry.name !== 'meta.json')
    .flatMap((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        const folderCategory = readCategory(path);
        return [
          {
            name: entry.name,
            position: Number(folderCategory?.position ?? prefixPosition(entry.name)),
          },
        ];
      }

      const extension = entry.name.match(/\.[^.]+$/)?.[0];
      if (!extension || !pageExtensions.has(extension)) return [];

      return [
        {
          name: entry.name.slice(0, -extension.length),
          position: Math.min(pagePosition(path), prefixPosition(entry.name)),
        },
      ];
    })
    .sort(compareEntries);

  const meta = {
    title: isRoot ? section.title : (category?.label ?? humanizeFolder(basename(dir))),
    pages: entries.map((entry) => entry.name),
  };

  if (isRoot) {
    meta.description = section.description;
    // Each legacy Docusaurus docs instance had its own sidebar. Root folders
    // preserve those independent sidebars in Fumadocs.
    meta.root = true;
  } else if (category?.collapsed === false) {
    meta.defaultOpen = true;
  }

  writeJson(join(dir, 'meta.json'), meta);

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) generateMeta(section, join(dir, entry.name), false);
  }
}

function generateRootMeta() {
  writeJson(join(docsRoot, 'meta.json'), {
    title: '文档',
    pages: [...sections.map((section) => section.id), 'ai'],
  });
}

function buildContentManifest(entries) {
  return {
    sources: {
      docs: sections.map((section) => section.source),
      images: 'static/img',
      ai: toPosix(relative(repoRoot, aiSource)),
    },
    fileCount: entries.length,
    files: entries.sort((a, b) => a.destination.localeCompare(b.destination)),
  };
}

function loadLegacyRoutes() {
  if (!existsSync(legacyRouteManifestPath)) {
    throw new Error(
      `Missing ${legacyRouteManifestPath}. Capture it from a Docusaurus build before migration.`,
    );
  }

  return JSON.parse(readFileSync(legacyRouteManifestPath, 'utf8'));
}

const manifestEntries = [];

resetDirectory(docsRoot, resolve(repoRoot));
mkdirSync(migrationRoot, { recursive: true });

for (const section of sections) {
  const sourceDir = resolve(repoRoot, section.source);
  const destinationDir = join(docsRoot, section.id);
  copyTree(sourceDir, destinationDir);

  for (const sourcePath of walk(sourceDir)) {
    const destinationPath = join(destinationDir, relative(sourceDir, sourcePath));
    const sourceExtension = sourcePath.match(/\.[^.]+$/)?.[0] ?? '';
    const isDocument = pageExtensions.has(sourceExtension) || sourceExtension === '.json';
    manifestEntries.push({
      kind: 'document',
      source: toPosix(relative(repoRoot, sourcePath)),
      destination: toPosix(relative(repoRoot, destinationPath)),
      bytes: contentBytes(sourcePath, isDocument),
      sha256: sha256(sourcePath, isDocument),
    });
  }

  generateMeta(section, destinationDir, true);
}

const imageSource = resolve(repoRoot, 'static/img');
const imageDestination = resolve(publicRoot, 'img');
resetDirectory(imageDestination, publicRoot);
copyTree(imageSource, imageDestination);

for (const sourcePath of walk(imageSource)) {
  const destinationPath = join(imageDestination, relative(imageSource, sourcePath));
  manifestEntries.push({
    kind: 'asset',
    source: toPosix(relative(repoRoot, sourcePath)),
    destination: toPosix(relative(repoRoot, destinationPath)),
    bytes: statSync(sourcePath).size,
    sha256: sha256(sourcePath),
  });
}

const aiSource = join(targetRepo, 'content/docs/ai.mdx');
if (!existsSync(aiSource)) {
  throw new Error(`Missing AI tutorial in target repository: ${aiSource}`);
}

const aiContent = readFileSync(aiSource, 'utf8').replaceAll(
  'next.simpdoc.top',
  'legacy.simpdoc.top',
);
const aiDestination = join(docsRoot, 'ai.mdx');
writeFileSync(aiDestination, aiContent);

generateRootMeta();

const legacyRoutes = loadLegacyRoutes();
const generatedPages = [];

for (const section of sections) {
  const sectionDir = join(docsRoot, section.id);
  for (const sourcePath of walk(sectionDir)) {
    if (sourcePath.endsWith('meta.json')) continue;
    const extension = sourcePath.match(/\.[^.]+$/)?.[0];
    if (!extension || !pageExtensions.has(extension)) continue;

    const relativePath = relative(sectionDir, sourcePath);
    const legacyUrl = legacyRouteFor(section.id, relativePath);
    generatedPages.push({
      source: toPosix(relative(repoRoot, sourcePath)),
      legacyUrl,
      newUrl: `/docs${legacyUrl}`,
    });
  }
}

generatedPages.sort((a, b) => a.legacyUrl.localeCompare(b.legacyUrl));

const legacyPageMap = new Map(legacyRoutes.pages.map((page) => [page.legacyUrl, page.newUrl]));
const generatedPageMap = new Map(generatedPages.map((page) => [page.legacyUrl, page.newUrl]));
const missingPages = [...legacyPageMap.keys()].filter((url) => !generatedPageMap.has(url));
const extraPages = [...generatedPageMap.keys()].filter((url) => !legacyPageMap.has(url));
const wrongTargets = [...legacyPageMap].filter(([url, newUrl]) => generatedPageMap.get(url) !== newUrl);

if (missingPages.length || extraPages.length || wrongTargets.length) {
  throw new Error(
    [
      'Generated Fumadocs routes do not match the Docusaurus route manifest.',
      missingPages.length ? `Missing: ${missingPages.join(', ')}` : '',
      extraPages.length ? `Extra: ${extraPages.join(', ')}` : '',
      wrongTargets.length
        ? `Wrong targets: ${wrongTargets.map(([url, target]) => `${url} -> ${target}`).join(', ')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n'),
  );
}

writeJson(resolve(migrationRoot, 'generated-routes.json'), {
  pageCount: generatedPages.length,
  legacyRedirectCount: legacyRoutes.redirects.length,
  generatedAiRoute: '/docs/ai',
  pages: generatedPages,
  legacyRedirects: legacyRoutes.redirects,
});

writeJson(resolve(migrationRoot, 'legacy-content-manifest.json'), buildContentManifest(manifestEntries));

console.log(
  `[legacy-migration] copied ${generatedPages.length} legacy pages, ${manifestEntries.length} immutable files, and matched the Docusaurus route manifest`,
);
