import { defineConfig } from 'fumadocs-mdx/config';
import { remarkDirectiveAdmonition } from 'fumadocs-core/mdx-plugins';
import remarkDirective from 'remark-directive';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition],
    rehypeCodeOptions: {
      fallbackLanguage: 'plaintext',
    },
    remarkImageOptions: {
      useImport: false,
    },
  },
});
