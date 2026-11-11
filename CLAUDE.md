# CLAUDE.md

Project conventions for the expense tracker (Averon). Read `docs/SPEC.md` first: it defines scope, data model and API. If a request conflicts with the spec, say so before building.

## Stack

- Frontend: React + Vite + TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, React Hook Form + Zod, Recharts
- Backend: Python, FastAPI, Pydantic, SQLAlchemy, Alembic
- Database: PostgreSQL (SQLite allowed for early local dev)
- Tests: pytest (backend), Vitest (frontend)

## Repo layout

```
frontend/src/   api/ components/ features/ hooks/ pages/ lib/
backend/app/    main.py core/ db/ models/ schemas/ routers/ services/ deps.py
backend/alembic/   migrations
backend/tests/
docs/SPEC.md
```

## Hard rules

1. **Money is integer minor units** (`amount_cents`), never floats. Convert and format only in the UI.
2. **Every query on user data filters by the authenticated user's id.** No exceptions. Add a test that a second user cannot read or change the first user's data.
3. **Layering:** router -> service -> model. Routers parse input and return output; business logic lives in services.
4. **Validate all request and response bodies** with Pydantic schemas (backend) and Zod (frontend forms).
5. **No secrets in git.** Config comes from environment variables; commit only `.env.example`.
6. **Passwords are hashed** (argon2 or bcrypt), never logged, never returned in responses.
7. **Schema changes go through Alembic migrations**, never manual edits to the database.

## Code style

- Python: type hints everywhere, `snake_case`, format with `ruff format`, lint with `ruff check`.
- TypeScript: strict mode, no `any`, `PascalCase` components, `camelCase` functions and variables, one component per file.
- API paths are plural nouns (`/transactions`); JSON fields are `snake_case`.
- Every page and data-driven component handles loading, empty and error states.
- UI must work at phone width. Use design tokens from the Tailwind config, not hard-coded colours.

## Workflow

- Never commit directly to `main`. Work on a branch: `feat/<slice>`, `fix/<thing>`, `docs/<thing>`, `chore/<thing>`.
- Build in vertical slices (API + tests + UI for one feature) rather than all backend then all frontend.
- Write tests alongside code, especially for auth, transactions and anything involving money.
- Before saying a task is done: run backend tests, run frontend tests and lint, and confirm the app starts.
- Keep changes small and focused. Show the plan for anything touching more than a few files before editing.
- Commit messages use conventional style: `feat: add transactions endpoint`.

## Commands

Fill these in as each part is set up.

```
# backend (from backend/)
python -m venv .venv
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8085   # http://localhost:8085/docs
pytest

# frontend (from frontend/)
npm install
npm run dev                          # http://localhost:5173
npm test
npm run lint
```

## Out of scope

Do not add receipts uploads, multi-currency, roles/teams, bank integrations or email/SMS notifications unless the spec is updated first.
