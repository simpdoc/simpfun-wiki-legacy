import { llms, loader } from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { imgIcons } from './img-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { licenseNoticeMarkdown } from './license';
import { z } from 'zod';

const docusaurusPrefix = /^\d+-/;

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // Fumadocs strips fields outside this schema after parsing. Legacy
    // `sidebar_position` values are therefore accepted and consumed by the
    // migration script when it generates meta.json.
    schema: ({ source }) => {
      const heading = source.match(/^#\s+(.+?)\s*$/m)?.[1];
      return pageSchema.extend({
        title: z.string().default(heading ?? '未命名文档'),
      });
    },
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  slugs(_file, next) {
    const slugs = next().map((segment) => segment.replace(docusaurusPrefix, ''));

    // Docusaurus treats `01-index.mdx` as the directory index. Its default
    // slug generator only recognizes an unprefixed `index.mdx`.
    if (slugs.at(-1) === 'index') slugs.pop();
    return slugs;
  },
  plugins: [imgIcons()],
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}

---

${licenseNoticeMarkdown}`,
  renderUrl: (item) =>
    /^\/.*\.(md|txt)$/.test(item.url) ? `${docsContentRoute}${item.url}` : item.url,
});
