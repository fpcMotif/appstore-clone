# Convex Backend for App Store Clone

This directory contains the Convex backend functions and schema.

## Setup

1. Ensure `.env.local` contains `VITE_CONVEX_URL` (generated during `bunx convex dev`)
2. Run `bunx convex dev` to start development server

## Seeding the Database

To populate the Today shelves with initial data:

```bash
bunx convex run seed:seedTodayShelves
```

Or run from the Convex dashboard under Functions > seed > seedTodayShelves

## Schema

- **todayShelves** - Dynamic content shelves for the Today page
  - position: Display order
  - title, subtitle: Shelf metadata
  - cardLayout: "2-card" or "4-card"
  - cards: Array of card data (apps, videos, etc.)

## Functions

### Queries
- `today:list` - Returns all Today shelves ordered by position

### Mutations
- `seed:seedTodayShelves` - Seeds the database with initial Today page content
