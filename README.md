# Smart Meal Planner & Grocery Saver

An Angular + NestJS project that helps you plan balanced weekly meals, automatically build a grocery list, and discover cheaper substitutions before you shop.

## Project structure

```
./backend   # NestJS API with SQLite + TypeORM
./frontend  # Angular single-page application
```

## Getting started

1. **Install dependencies** (requires Node.js 18+):
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Seed the database** with curated ingredients, recipes, and an initial weekly plan:
   ```bash
   cd backend
   npm run seed
   ```

3. **Run the backend API**:
   ```bash
   cd backend
   npm run start:dev
   ```
   The NestJS server listens on [http://localhost:3000](http://localhost:3000) by default.

4. **Run the Angular SPA**:
   ```bash
   cd frontend
   npm start
   ```
   The app uses a development proxy so API calls to `/meal-plans`, `/grocery-list`, etc. are forwarded to the NestJS server.

## Features

- Weekly meal planner that balances breakfast, lunch, and dinner across your recipe library.
- Smart grocery list builder with automatic quantity aggregation and estimated costs.
- Cheaper substitution suggestions per ingredient based on category pricing.
- Interactive Angular dashboard to review the menu, tweak highlighted recipes, and regenerate plans.
- Automatic tracking of when each plan was generated so the newest schedule is always treated as current, even if it starts in the past.
- One-command seed script to populate the database with example data for immediate exploration.

## API overview

| Endpoint | Method | Description |
| --- | --- | --- |
| `/meal-plans/current` | GET | Fetch the most recent meal plan |
| `/meal-plans/:id` | GET | Fetch a meal plan by id |
| `/meal-plans/current/summary` | GET | Plan + recipe summary to power the UI |
| `/meal-plans/generate` | POST | Generate and persist a new 7-day plan |
| `/grocery-list/current` | GET | Aggregated grocery list with substitution hints |
| `/recipes` | GET | List all available recipes (with ingredients) |
| `/ingredients` | GET | List all ingredients |

> **Note:** The generator requires at least one breakfast, lunch, and dinner recipe. The seed script already provides a balanced selection.

## Seeding details

The seed script loads:

- 20+ pantry staples with pricing, unit, and category metadata.
- 9 balanced recipes (3 each for breakfast, lunch, and dinner) with ingredient breakdowns.
- An automatically generated weekly plan using those recipes.

You can safely re-run `npm run seed` to reset the database and regenerate a fresh plan.

## Testing

For now there are no automated tests configured, but the backend and frontend projects both include linting scripts:

```bash
cd backend && npm run lint
cd frontend && npm run lint
```

Feel free to expand this workflow with Jest (Nest) and Karma/Jest (Angular) as the project evolves.
