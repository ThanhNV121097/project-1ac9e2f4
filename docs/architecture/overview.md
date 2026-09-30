# Architecture — Nhà hàng Mây

## Shape and stack

Static frontend only. No backend, database, API, migrations, secrets, or persisted booking data. Approved app stays at `code/frontend/`: Vite 6, React 18, TypeScript, Tailwind v3, ESLint. Nginx serves build output on port 3000.

## Layout

```text
code/frontend/
  src/App.tsx             page composition
  src/components/         approved section components
  src/content.json        approved visible copy
  src/theme.css           approved design tokens
  src/index.css           Tailwind entry styles
  eslint.config.js        lint rules
  .env.example            client environment contract
```

`docs/site/` holds requirements, stories, and tests. No `code/backend/` exists for static shape.

## Conventions

Keep approved `src/App.tsx`, `src/theme.css`, and `src/content.json` unchanged unless stakeholder approves design change. Use semantic tokens already declared in `src/theme.css`; no raw visual values in future CSS modules. Components use PascalCase. Client variables use `VITE_` prefix. No personal data leaves browser: booking form remains static.

## Decisions

| Decision | Reason | Rejected alternative and cost |
|---|---|---|
| Static Vite build | SRS has one public page and no writes | Go/API/Postgres adds operations and privacy surface with no scoped use |
| Keep approved React app | Owner approved this source design | Next.js rewrite risks copy/layout drift and breaks existing Nginx image |
| ESLint flat config | CI needs lint rules beyond TypeScript | TypeScript-only lint misses unused code, `any`, complexity, and file size |
| Nginx container | Existing Dockerfile serves `dist` on 3000 | Node runtime adds no value for static assets |

## Environment

`code/frontend/.env.example` documents `VITE_API_URL`; it is intentionally unset because no API exists. Root `.env.example` documents Compose controls: `FRONTEND_PORT`, `FRONTEND_MEM_LIMIT`, `IMAGE_REPO`, `IMAGE_TAG`. No secrets.

## Run and verify

```sh
docker compose up --build
# http://localhost:3000
```

For CI-equivalent frontend checks:

```sh
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

Compatibility: Node 20 image; browser support follows current Vite defaults. No rollout or migration: deploy replaces static assets. Add backend only after booking submission specifies validation, confirmation, failure behavior, retention, and access control.
