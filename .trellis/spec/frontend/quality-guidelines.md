# Quality Guidelines

> Required checks and protected migration invariants.

---

## Overview

The site uses pnpm, Next.js, Fumadocs, and static export. Every frontend change should be validated locally before completion.

## Required Commands

```bash
pnpm install
pnpm lint
pnpm types:check
pnpm build
pnpm start
```

`pnpm types:check` includes `next typegen`; do not replace it with plain `tsc --noEmit`. `pnpm build` also runs `verify:legacy`.

## Content Immutability

Legacy documentation under the seven migrated section directories is protected content. Do not edit prose or punctuation, frontmatter, admonition syntax, numeric filename prefixes, `_category_.json`, or image bytes.

The authoritative check is:

```bash
pnpm verify:legacy
```

It compares source and destination files against SHA-256 baselines and validates the old-to-new route map.

## Required Patterns

- Use pnpm; never introduce a second lockfile.
- Keep routes unified under `/docs` and EdgeOne redirects for legacy paths.
- Keep Fumadocs source construction and shared constants centralized.
- Use build-time static data for the static export.
- Keep Markdown responses uncached and serve the static search index as JSON.
- Update `migration/legacy-routes.json` through `capture-legacy-routes.mjs` when legacy content intentionally changes.

## Static Export Limits

- Avoid server-only runtime APIs.
- Keep route handlers exportable as static files.
- Keep `images.unoptimized: true`.
- Verify routes work as files under `out/`.

## Code Review Checklist

- [ ] `pnpm lint` passes.
- [ ] `pnpm types:check` passes.
- [ ] `pnpm build` passes.
- [ ] `pnpm verify:legacy` passes.
- [ ] No legacy document content changed.
- [ ] Generated `meta.json` and route output remain consistent.
- [ ] EdgeOne headers and redirects remain complete.
