# Component Guidelines

> Component conventions for the Next.js and Fumadocs site.

---

## Overview

Components use React function components with TypeScript. Server Components are the default. Add `"use client"` only when a component needs browser state, event handlers, context, or Fumadocs client APIs.

## Component Structure

- Keep one exported primary component per file.
- Prefer named exports for reusable components.
- Use Fumadocs UI primitives before rebuilding navigation, search, buttons, callouts, tabs, accordions, or documentation layouts.
- Define all props explicitly with TypeScript interfaces or inferred framework types.

## MDX Component Mapping

`src/components/mdx.tsx` is the single MDX component registry. It maps images to `DocImage` and exposes default Fumadocs markdown elements, tabs, steps, accordions, files, and image zoom.

When adding an MDX component, register it in `getMDXComponents` so both normal rendering and component lookup remain consistent. Do not define content-only components inside legacy MDX files.

## Styling Patterns

- Use Tailwind CSS v4 utility classes and Fumadocs semantic tokens such as `bg-fd-card`, `text-fd-muted-foreground`, and `border-fd-border`.
- Prefer responsive utility prefixes over custom media-query files.
- Use existing `lucide-react` icons.
- Keep visual presentation in components; do not restyle documentation content to compensate for a migration issue.

## Generated Images

OG image routes must use the bundled font assets under `src/assets/fonts` instead of runtime Google Font fallback downloads. The Noto Sans SC subset covers the current page titles and descriptions, so update the subset when introducing characters outside that set.

## Accessibility

- Use semantic headings, links, lists, and buttons.
- Mark decorative icons with `aria-hidden="true"`.
- Preserve visible focus states provided by Fumadocs primitives.
- Do not remove keyboard navigation from search, view options, AI view, or navigation controls.

## Common Mistakes

- Editing legacy MDX files to solve a component-layer problem.
- Importing browser-only APIs into a Server Component.
- Creating a parallel MDX component registry.
- Hardcoding site domain or repository values instead of using `src/lib/shared.ts`.
