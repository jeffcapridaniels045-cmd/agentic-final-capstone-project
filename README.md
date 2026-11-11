# Averon – Intelligent Financial Management Platform

**A comprehensive financial management platform designed to streamline expense tracking, budget planning, income monitoring, and financial reporting while providing actionable insights to support informed financial decision-making.**

**A smarter way to track expenses, manage budgets, monitor income and make informed financial decisions.**

---

## Overview

**Averon** is a modern financial management platform designed to simplify how individuals and businesses track, organise and manage their financial activities.

The platform provides a centralised environment for monitoring expenses, managing income, planning budgets, tracking financial transactions and generating meaningful financial insights.

By bringing essential financial management capabilities into one platform, Averon empowers users with greater visibility, control and confidence over their finances.

## Vision

To make financial management smarter, simpler and more accessible through technology-driven financial insights and intelligent expense management.

## Core Objectives

- Simplify personal and business expense tracking.
- Provide visibility into income and expenditure.
- Support effective budgeting and financial planning.
- Enable data-driven financial decision-making.
- Generate meaningful financial reports and insights.
- Promote better financial discipline and accountability.

## Project Scope

The sections below describe the long-term vision for Averon. The first release is deliberately smaller: secure sign-in, transaction tracking, categories and a dashboard with charts. The exact scope, stretch goals and items that are out of scope are defined in [`docs/SPEC.md`](docs/SPEC.md).

## Key Features

### 1. Expense Management

- Record and categorise expenses.
- Track daily, weekly and monthly spending.
- Monitor transaction history.
- Manage recurring expenses.
- Attach supporting receipts and documentation.

### 2. Income Management

- Record and categorise income sources.
- Monitor income trends.
- Track received and expected payments.
- Maintain a consolidated income overview.

### 3. Budget Management

- Create and manage budgets.
- Set spending limits by category.
- Monitor budget utilisation.
- Receive alerts when approaching spending limits.
- Compare actual expenditure against planned budgets.

### 4. Financial Dashboard

- Overview of total income and expenditure.
- Current balance and cash-flow summaries.
- Spending breakdown by category.
- Monthly financial performance.
- Interactive charts and visual analytics.

### 5. Financial Reports and Analytics

- Generate financial summaries.
- Analyse spending patterns.
- Compare financial performance across periods.
- Export financial reports.
- Identify spending trends and opportunities to save.

### 6. User and Account Management

- Secure user authentication.
- Personalised financial dashboards.
- User profile management.
- Role-based access and permissions where applicable.
- Secure management of financial records.

## Platform Modules

| Module       | Description                                     |
| ------------ | ----------------------------------------------- |
| Dashboard    | Centralised overview of financial activities.   |
| Expenses     | Recording and management of expenditure.        |
| Income       | Management of income sources and receipts.      |
| Budgets      | Financial planning and spending limits.         |
| Transactions | Consolidated financial transaction history.     |
| Reports      | Financial reporting and performance analysis.   |
| Analytics    | Insights into spending and financial trends.    |
| Settings     | Account preferences and platform configuration. |

## Technology Stack

| Layer                 | Choice                                                          |
| --------------------- | --------------------------------------------------------------- |
| Frontend              | React + Vite + TypeScript, Tailwind CSS, shadcn/ui              |
| Data fetching / forms | TanStack Query, React Hook Form + Zod                           |
| Charts                | Recharts                                                        |
| Backend               | Python, FastAPI, Pydantic                                       |
| Database              | PostgreSQL (SQLite acceptable for early local development)      |
| ORM / migrations      | SQLAlchemy + Alembic                                            |
| Authentication        | JWT access token, passwords hashed with argon2 or bcrypt        |
| Testing               | pytest (backend), Vitest (frontend), optional Playwright (E2E)  |
| Tooling               | Docker Compose, GitHub Actions (lint + tests)                   |

## Project Structure

```text
averon/
├── frontend/
│   ├── src/
│   │   ├── api/            # API client and typed endpoint functions
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Auth, transactions, dashboard...
│   │   ├── hooks/
│   │   ├── lib/            # Formatters and utilities
│   │   └── pages/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── core/           # Settings, security
│   │   ├── db/             # Database session
│   │   ├── models/         # SQLAlchemy models
│   │   ├── schemas/        # Pydantic schemas
│   │   ├── routers/        # API routes
│   │   ├── services/       # Business logic
│   │   └── main.py
│   ├── alembic/            # Database migrations
│   ├── tests/
│   └── requirements.txt
│
├── docs/
│   └── SPEC.md
│
├── CLAUDE.md               # Conventions for AI coding assistants
├── .gitignore
└── README.md
```

*Some folders are added as the related features are built.*

## Security and Privacy

Averon is designed with financial data protection as a core consideration.

Security priorities include:

- Secure authentication and session management.
- Role-based access control.
- Protection of sensitive financial information.
- Secure API communication.
- Input validation and data integrity.
- Appropriate backup and recovery mechanisms.

## Development Roadmap

- [ ] Project setup and architecture.
- [ ] User authentication and account management.
- [ ] Financial dashboard.
- [ ] Expense tracking and categorisation.
- [ ] Income management.
- [ ] Budget creation and monitoring.
- [ ] Transaction management.
- [ ] Financial reports and analytics.
- [ ] Notifications and spending alerts.
- [ ] Data export functionality.
- [ ] Testing and security validation.
- [ ] Production deployment.

## Getting Started

### Prerequisites

- Python 3.11 or newer
- Node.js 20 or newer
- Git

### Backend

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1          # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
copy .env.example .env              # macOS/Linux: cp .env.example .env
pytest
uvicorn app.main:app --reload --port 8085
```

The API runs at <http://localhost:8085>. Interactive documentation is at <http://localhost:8085/docs> and a health check is at <http://localhost:8085/health>.

### Frontend

```powershell
cd frontend
npm install
copy .env.example .env              # macOS/Linux: cp .env.example .env
npm run dev
```

The app runs at <http://localhost:5173> and talks to the API URL set in `VITE_API_URL`.

## Contributing

Contributions, improvements and suggestions are welcome.

- Work on a feature branch (`feat/...`, `fix/...`, `docs/...`), never directly on `main`.
- Open a pull request for each change and make sure tests pass.
- Follow the conventions in [`CLAUDE.md`](CLAUDE.md) and the scope in [`docs/SPEC.md`](docs/SPEC.md).

## License

The licensing terms for Averon will be defined as part of the project's release and distribution strategy.

---

**Averon**

*Intelligent Financial Management.*

**Track Better. Spend Smarter. Manage with Confidence.**
