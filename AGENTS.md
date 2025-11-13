# App Store Today Clone - AI Agent Guide

## Commands
- Install: `bun install`
- Dev server: `bun run dev` (port 3000)
- Build: `bun run build`
- Lint: `bun run lint` / `bun run lint:fix`
- No test runner configured - manual testing via dev server

## Architecture
React 19.2 + TypeScript + Vite 6.2 + Tailwind CSS 4.1 + Bun
- Client-side hash routing (`#/route`)
- Components in `/components/`, pages in `/pages/`
- Types in `types.ts`, constants in `constants.tsx`
- Environment: GEMINI_API_KEY in `.env.local`

## Code Style
- **TypeScript:** Strict null checks, `@/` path aliases, interfaces over types
- **React:** Functional components, hooks (useState/useEffect), explicit prop interfaces
- **Styling:** Tailwind utilities, custom CSS vars, mobile-first responsive
- **Imports:** Relative paths or `@/` aliases, type imports with `import type`
- **Linting:** Biome with Ultracite (auto-fix on commit via Husky)
- **Naming:** PascalCase components, camelCase props/functions, kebab-case CSS classes

## Cursor Rules
Apply concise.mdc: sacrifice grammar for concision, list unresolved questions at end.