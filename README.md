# Baseball Team — Cloudflare Workers + SvelteKit + Drizzle (D1)

Phase 1 skeleton: minimal, barebone, black/white, fluid container, Tailwind base with custom.css for overrides.
Pages scaffolded per spec; data is static for now. D1 + Drizzle wired via `/api/health` and seed helper.

## Quickstart

```bash
# 1) Install
npm i

# 2) Create the D1 DB (once)
npx wrangler d1 create baseball_team_db

# 3) Copy the printed database_id into wrangler.jsonc -> d1_databases[0].database_id

# 4) Dev
npm run dev

# In another shell: seed / health check
curl http://127.0.0.1:8787/api/health
```

## Deploy
```bash
npm run build
npm run cf:deploy
```

## Notes
- Strictly black/white, no radius. Fluid container via `container-fluid` utility.
- Design tokens via CSS variables; later we will read/write from `design_tokens` table in admin UI.
- Drizzle schema is a skeleton; venue/ticketing tables are stubbed for Phase 2.
- No external CDNs. Minimal JS (SvelteKit defaults only).
