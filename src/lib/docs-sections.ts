import type { Root } from 'fumadocs-core/page-tree';
import { docsRoute } from './shared';

export interface DocsSection {
  slug: string;
  name: string;
  description?: string;
  url: string;
}

function firstPageUrl(node: Root['children'][number]): string | undefined {
  if (node.type === 'page') return node.url;
  if (node.type !== 'folder') return undefined;
  if (node.index) return node.index.url;

  for (const child of node.children) {
    const url = firstPageUrl(child);
    if (url) return url;
  }
}

export function collectDocsSections(tree: Root): DocsSection[] {
  return tree.children.flatMap((node) => {
    if (node.type !== 'folder' || !node.$ref || typeof node.name !== 'string') return [];

    const slug = node.$ref.folder;
    return [
      {
        slug,
        name: node.name,
        description: typeof node.description === 'string' ? node.description : undefined,
        url: firstPageUrl(node) ?? `${docsRoute}/${slug}`,
      },
    ];
  });
}
