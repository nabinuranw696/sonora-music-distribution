# SONORA

Music distribution platform for independent artists. **Status: Phase 1 (backend foundation) + Phase 2 (web shell, public site).**

## Done in Phase 1
- Monorepo, Docker, Compose, Render config, `.env.example`
- Prisma schema (all models from the spec), no migrations generated yet
- Clerk session verification on the Express backend, DB-sourced roles, RBAC matrix
- MFA gate and re-verification middleware for admins, audit logging
- Idempotent admin provisioning script, Clerk webhook with signature check
- RBAC unit tests

## Done in Phase 2
- Vite + React + TS + Tailwind web app, original SONORA logo/favicon (web/public)
- Homepage and every public route, light/dark theme, responsive nav, 404
- Clerk sign-in/sign-up, route guard (UX only; the API enforces access)
- Contact form wired to POST /api/contact (stored in DB, rate-limited)
- Routed dashboards: 30 artist, 21 admin (+detail), 5 support (+conversation) pages with
  searchable sidebar, Show more/less and mobile drawer. Only the artist dashboard calls the API;
  the rest are labelled "UI shell: backend not implemented yet".
- Legal pages and blog posts are labelled template/sample content. Pricing shows no invented prices.

## Not done yet (honest list)
Real data and APIs behind the dashboard pages, platform catalog data (needs verified entries), uploads, catalog, ledger, payouts,
Socket.IO chat, CMS, email, OpenAPI docs, integration tests, CI.
Nothing here has been installed, type-checked or run: the build sandbox had no network access.
Expect to fix some compile errors on first `npm install && npm run build`; send them to me.

## Run locally
    cp .env.example .env        # fill in Clerk keys
    docker compose up -d db
    npm install
    npx -w server prisma migrate dev --name init
    npm run test
    npm run dev:server
    cp web/.env.example web/.env   # add VITE_CLERK_PUBLISHABLE_KEY
    npm run dev:web
    npm run provision:admins    # after both emails have signed up and verified in Clerk

## Admin safety
Admin rights are granted only by `provision:admins`, never by signup. Enable MFA
enforcement for those accounts in Clerk. No passwords are stored or printed.
