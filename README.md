# International Cooperation Management System

A full-featured frontend for managing international cooperation agreements, projects, opportunities, travel arrangements, budgets, and inventory.

> **Note:** The entire UI is in Spanish. This project was originally built during a professional internship for a government agency. I cleaned out all real data, removed backend dependencies, and created a mock API + mock dataset so the app runs entirely in the browser with no server required.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| UI Components | PrimeReact 10 · Tailwind CSS 3 |
| Charts | Chart.js · Recharts |
| Timeline | vis-timeline |
| Animations | Framer Motion |
| PDF Export | jsPDF + jspdf-autotable |
| Data Layer | In-memory Mock API |

## Modules

- **Convenios** (Agreements) — Full lifecycle management of cooperation agreements (negotiation, review, legal analysis, signing). Includes a process registry with an interactive timeline.
- **Proyectos** (Projects) — Project tracking and administration with analytical charts.
- **Oportunidades** (Opportunities) — Logging cooperation opportunities with charts by population, sector, topic, and partner.
- **Inventario** (Inventory) — Active agreement inventory with PDF document uploads.
- **Acuerdos de Viajes** (Travel Agreements) — International travel tracking with PDF report generation and observation logs.
- **Presupuestos** (Budgets) — Financial planning by budget line with procurement request control.
- **Estadísticas** (Statistics) — Dashboards with charts by phase, sector, and strategic area.

## Getting Started

```bash
git clone https://github.com/alessg1414/CoopDashboard-NextJS.git
cd CoopDashboard-NextJS

npm install
npm run dev
```

Open `http://localhost:3000`. Any email with a valid format and any password will log you in — it's a demo.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/           # Header, Sidebar, AuthGuard
│   │   ├── convenios/        # Agreement dialogs & table
│   │   ├── oportunidades/    # Opportunities module
│   │   ├── proyectos/        # Project dialogs & list
│   │   ├── viajes/           # Travel agreements & observations
│   │   ├── presupuestos/     # Budget & procurement dialogs
│   │   ├── inventario/       # Inventory module
│   │   └── estadisticas/     # Statistics & chart components
│   │       └── graficos/     # Reusable chart components
│   ├── context/              # Sidebar context provider
│   ├── dashboard/            # Route pages for each module
│   └── login/                # Login page
├── data/                     # Mock data (mockData.ts)
├── types/                    # Centralized TypeScript interfaces
└── utils/                    # Mock API, constants, PDF generator
```

## How the Mock API Works

All CRUD operations run in memory for the duration of the browser session. Data resets on page reload. `src/utils/mockApi.ts` intercepts fetch calls and operates on the dataset defined in `src/data/mockData.ts`.
