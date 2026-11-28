# Frontend Development Guidelines

> Standards for the Next.js App Router and Fumadocs documentation site.

---

## Overview

This is a statically exported documentation site built with Next.js App Router, Fumadocs, Tailwind CSS v4, pnpm, and EdgeOne Pages. Legacy documentation is protected content and is rendered through build-time compatibility layers.

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | App, content, script, and generated-file layout | Ready |
| [Component Guidelines](./component-guidelines.md) | Server/client boundaries and MDX component mapping | Ready |
| [Hook Guidelines](./hook-guidelines.md) | Build-time source data and client UI hooks | Ready |
| [State Management](./state-management.md) | Build-time, context, local, and URL state | Ready |
| [Quality Guidelines](./quality-guidelines.md) | Validation commands and content immutability | Ready |
| [Type Safety](./type-safety.md) | App Router, Fumadocs, and migration types | Ready |

## Pre-Development Checklist

1. Read the relevant guideline files above.
2. Confirm whether the change touches legacy documentation; if it does, preserve byte-for-byte content unless the user explicitly requests a content change.
3. Keep static-export constraints in mind before adding runtime APIs.
4. Use `pnpm`, Fumadocs source APIs, and shared route constants.
5. Run `pnpm lint`, `pnpm types:check`, and `pnpm build` before completion.

---

**Language**: All documentation should be written in **English**.
