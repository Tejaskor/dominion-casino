# Dominion (SUPREX) — Social Casino UI

A React + Vite + Tailwind CSS application for the SUPREX social casino experience.

## Tech Stack

- **Build:** Vite 5
- **Framework:** React 18
- **Routing:** React Router DOM 6
- **Styling:** Tailwind CSS 3
- **Icons:** lucide-react

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run dev server
```bash
npm run dev
```
The app will be available at http://localhost:5173.

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Environment Variables
Copy `.env.example` to `.env.local` and fill in values. Only variables prefixed with `VITE_` are exposed to client code.

## Project Structure

```
src/
├── assets/images/         # Imported image assets, grouped by feature
├── components/
│   ├── common/            # Reusable, generic UI components
│   ├── layout/            # App shell, header, sidebar, footer
│   └── features/          # Feature-scoped components (e.g. home)
├── constants/             # App-wide constants (route paths, enums)
├── context/               # React Context providers
├── data/                  # Static / mock data
├── hooks/                 # Custom React hooks
├── pages/                 # Route-level page components
├── routes/                # Route definitions
├── services/              # API / data-access layer (placeholder)
├── styles/                # Global styles & Tailwind entry
├── utils/                 # Pure helper functions (placeholder)
├── App.jsx                # Root component, providers, top-level routes
└── main.jsx               # Entry point
```

## Coding Standards

- **Path alias:** Import from `@/` for any non-sibling module — e.g. `import GameCard from '@/components/features/home/GameCard.jsx'`.
- **Formatting:** Prettier (`.prettierrc`). Run your editor's "format on save" or `npx prettier --write .`.
- **Linting:** ESLint flat config (`eslint.config.js`). Run `npm run lint`.
- **Components:** One component per file, default export, PascalCase filename.
- **Hooks:** camelCase, prefixed with `use`.
- **Constants:** SCREAMING_SNAKE_CASE in `src/constants/`.

## Available Scripts

| Script           | Purpose                          |
|------------------|----------------------------------|
| `npm run dev`    | Start Vite dev server            |
| `npm run build`  | Build for production             |
| `npm run preview`| Preview the production build     |
| `npm run lint`   | Run ESLint                        |
