# State Management

> State boundaries for the statically exported documentation site.

---

## Overview

The application favors build-time source data and local UI state. It does not use Redux, React Query, SWR, or another global state library.

## State Categories

| Category | Owner | Examples |
|---|---|---|
| Build-time content state | Fumadocs source | Page tree, routes, page data, search index |
| Local component state | `useState` | Popovers, search filters, copy status |
| Context state | Client providers | Documentation sections for scoped search |
| URL state | Route parameters and query strings | Documentation slugs and optional search parameters |

## Providers

`src/components/provider.tsx` mounts Fumadocs providers and the scoped search dialog. Keep this provider chain stable because layout, theme, i18n, and search behavior depend on it.

## Derived State

Derive section links and document counts from `source.getPageTree()` and `source.getPages()`. Do not duplicate section definitions in the home page, navigation, search, and content metadata.

## Common Mistakes

- Creating a duplicate docs-section definition that can drift from the generated page tree.
- Moving content data into global client state.
- Adding runtime-only state during static export.
