# Type Safety

> TypeScript conventions for App Router and Fumadocs data.

---

## Overview

TypeScript runs in strict mode with Next.js generated route types. Types should describe Fumadocs and App Router data at boundaries instead of duplicating inferred structures.

## Type Organization

- Use generated `LayoutProps<...>`, `PageProps<...>`, and `MetadataRoute` types.
- Use Fumadocs source and page tree types where available.
- Keep cross-layer route constants in `src/lib/shared.ts`.
- Define explicit interfaces for reusable component props.

## Validation

- Parse migration metadata in scripts with explicit checks and clear errors.
- Use Zod only when runtime validation is needed; do not validate already-typed internal objects unnecessarily.
- Preserve legacy `sidebar_position` through migration logic; do not inject it into immutable MDX frontmatter.

## Common Patterns

```ts
export default function Layout({ children }: LayoutProps<'/docs'>) {}
```

```ts
export default async function Page(props: PageProps<'/docs/[...slug]'>) {
  const params = await props.params;
}
```

## Forbidden Patterns

- Replacing `pnpm types:check` with `tsc --noEmit`, because it misses Next.js route generation.
- Using `any` for Fumadocs page data when a public type exists.
- Hardcoding route prefixes when `docsRoute` is available.
- Widening types only to silence a migration error.
