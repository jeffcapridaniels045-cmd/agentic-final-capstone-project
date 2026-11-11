# Averon: Project Spec

> One-page scope document for the capstone build. The README describes the long-term vision; this file defines what is built first.

## 1. Goal

A full-stack web app where a signed-in user records income and expenses, organises them by category, and sees their financial picture on a clean, aesthetic dashboard.

## 2. MVP (must ship)

| # | Feature | Acceptance criteria |
|---|---------|---------------------|
| 1 | Register / login | A user can sign up with email + password, log in, log out. Protected pages redirect to login when signed out. |
| 2 | Transactions CRUD | Add, edit and delete an income or expense (amount, category, date, note). List is paginated and filterable by date range, category and type. |
| 3 | Categories | App ships with default categories; a user can add, rename and delete their own. |
| 4 | Dashboard | Shows total income, total expenses, balance for the selected month, a spending-by-category chart, and a 6-month income vs expense trend chart. |
| 5 | Data isolation | A user can never read or modify another user's data (every query is scoped by `user_id`). |

## 3. Stretch goals (only after MVP is done and tested)

- Budgets with per-category limits and progress bars
- Spending alerts near a budget limit
- Recurring transactions
- CSV export of transactions
- Dark mode toggle

## 4. Out of scope (not building)

- Receipt or document uploads
- Multi-currency and exchange rates
- Role-based access, teams, or business/multi-user accounts
- Bank or mobile-money integrations
- Notifications by email or SMS
- Production cloud deployment (Docker Compose for local run is enough)

## 5. Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | React + Vite + TypeScript, Tailwind CSS, shadcn/ui |
| Data fetching / forms | TanStack Query, React Hook Form + Zod |
| Charts | Recharts |
| Backend | Python, FastAPI, Pydantic |
| Database | PostgreSQL (SQLite acceptable for early local dev) |
| ORM / migrations | SQLAlchemy + Alembic |
| Auth | JWT access token, passwords hashed with argon2 or bcrypt |
| Testing | pytest (backend), Vitest (frontend), optional Playwright (E2E) |
| Tooling | Docker Compose, GitHub Actions (lint + tests) |

## 6. Conventions (also copy into CLAUDE.md)

- Money is stored as **integer minor units** (cents), never floats. Format only in the UI.
- Every database query on user data filters by the authenticated user's id.
- Backend layers: router → service → repository/model. Routers hold no business logic.
- All request/response bodies are validated with Pydantic schemas.
- Secrets live in `.env` files; only `.env.example` is committed.
- New work happens on a feature branch and merges via pull request.

## 7. Data model

- **User**: id, email (unique), password_hash, created_at
- **Category**: id, user_id, name, type (income | expense), color, icon
- **Transaction**: id, user_id, category_id, type, amount_cents, date, note, created_at

(Stretch: **Budget**: id, user_id, category_id, month, limit_cents)

## 8. API surface (v1)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/health` | Liveness check |
| POST | `/auth/register` | Create account |
| POST | `/auth/login` | Return access token |
| GET | `/auth/me` | Current user |
| GET / POST | `/transactions` | List (filters, pagination) / create |
| PATCH / DELETE | `/transactions/{id}` | Update / delete |
| GET / POST | `/categories` | List / create |
| PATCH / DELETE | `/categories/{id}` | Update / delete |
| GET | `/reports/summary?month=YYYY-MM` | Totals, by-category breakdown, 6-month trend |

## 9. Frontend pages

1. Login / Register
2. Dashboard
3. Transactions (table, filters, add/edit dialog)
4. Categories (inside Settings)

Every page needs loading, empty and error states, and must work at phone width.

## 10. Design direction

One accent colour, one font pair, generous whitespace, rounded cards, subtle shadows. Design tokens (colours, radius, fonts) are defined once in the Tailwind config. *To be decided: accent colour and fonts.*

## 11. Security baseline

- Passwords hashed, never logged or returned
- JWT expiry enforced; CORS limited to the frontend origin
- Input validated on both client and server
- No secrets in the repository

## 12. Definition of done

- A new user can sign up, add 10 transactions across several categories, and see correct totals and charts on the dashboard.
- Another user's account cannot see or change those transactions (covered by a test).
- Backend tests for auth, transactions and reports pass in CI.
- `docker compose up` starts the whole app; README explains setup with screenshots.

## 13. Milestones

| Week | Target |
|------|--------|
| 10 | Repo + CI, `/health` wired to React, auth, transactions CRUD (API + tests + UI) |
| 11 | Categories, report endpoints, dashboard with both charts, filters |
| 12 | Polish (states, responsive), Docker Compose, README, demo; stretch goals if time allows |

## 14. Open questions

- Final product name: Averon or Outflow?
- Default currency for new users?
- Accent colour and font pair?
