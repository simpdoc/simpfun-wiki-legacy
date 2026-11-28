# Hook Guidelines

> React hook and data-fetching conventions.

---

## Overview

The site is statically exported, so documentation data is generated at build time through Fumadocs. Client hooks are limited to interactive UI such as search and popover state.

## Server Data

- Use Fumadocs `source` objects in Server Components.
- Prefer `source.getPages()`, `source.getPage()`, `source.getPageTree()`, and `source.generateParams()` over custom filesystem scans.
- Build page URL, GitHub, license, OG, and Markdown values through helpers in `src/lib`.

## Client Hook Patterns

- Use `useState` only for small interactive state.
- Use `useEffect` for DOM APIs such as clipboard fallback and timers.
- Use React Context only for values needed across separate client components, such as documentation section filters.
- Keep hook files colocated with their client component unless the logic is reusable.

## Search And Static Data

Static search uses Fumadocs' generated static index through `useStaticSearch`. Do not introduce a runtime search backend for the current static deployment.

## Common Mistakes

- Reading the filesystem inside a client component.
- Calling a hook from a non-client component without understanding its boundary.
- Replacing build-time source data with a runtime API request.
