# Portfolio CMS Boilerplate

A **scalable, full-stack monorepo** boilerplate for building content-managed portfolio websites with modern tooling, atomic design, and developer-first workflows.

## 🚀 Tech Stack \& Architecture

- **Monorepo powered by Turborepo** for fast incremental builds, caching, and task orchestration
- **Next.js 15** with App Router and **Atomic Design** pattern for frontend
- **TypeScript** everywhere for type safety and shared contracts
- **Tailwind CSS v4** + **Shadcn/ui** for accessible, composable UI components
- **Payload CMS** as headless CMS backend
- **PostgreSQL** with **Drizzle ORM** for type-safe database access
- **Arktype** for runtime validation of API contracts
- **Testing with Vitest \& Playwright** following TDD principles
- **Optional Better Auth** for flexible authentication providers (OAuth, email/password, magic links)


## 📁 Monorepo Structure

```
portfolio-cms/
├── apps/
│   ├── web/              # Next.js frontend app (Atomic Design)
│   ├── cms/              # Payload CMS backend
├── packages/
│   ├── ui/               # Shared component library (shadcn/ui based)
│   ├── config/           # Shared configs & env validation
│   ├── db/               # Database schema, migrations, and types
│   ├── auth/             # Authentication logic (Better Auth integration optional)
│   └── utils/            # Shared utilities and helpers
├── tooling/              # Linting, formatting, testing configs
├── .github/
│   └── workflows/        # CI/CD pipeline definitions
├── turbo.json            # Turborepo config
├── package.json
└── tsconfig.json
```


## 🧱 Frontend: Atomic Design Pattern

The `apps/web` directory follows atomic design principles:

```
apps/web/src/
├── components/
│   ├── atoms/            # Smallest reusable UI elements (buttons, inputs)
│   ├── molecules/        # Composed groups of atoms (form fields, nav items)
│   ├── organisms/        # Complex UI sections (headers, footers, content blocks)
│   └── templates/        # Page layouts (dashboard, auth pages)
├── hooks/                # Custom React hooks
├── lib/                  # Business logic and API clients
├── pages/                # Next.js page routes (if using pages router)
├── styles/               # Tailwind CSS globals and overrides
└── types/                # Shared TypeScript types/interfaces
```


## 🧪 Testing Strategy (TDD)

- **Unit Tests:** Vitest for components, hooks, and utilities
- **Integration Tests:** API routes and database interactions
- **End-to-End Tests:** Playwright for realistic user flows
- Tests live close to the code they cover within each package/app
- Run tests incrementally with Turborepo for fast feedback


## 🔐 Authentication (Optional)

- Integrate **Better Auth** in `packages/auth` for modern, extensible authentication
- Supports OAuth providers, email/password, magic links
- Role-based access control configurable
- Easily plugged into frontend and backend apps


## ⚙️ CI/CD Workflow

The `.github/workflows/ci.yml` pipeline includes:

1. **Install \& Build:**
    - Install dependencies with caching
    - Run `turbo run build` for incremental builds
2. **Lint \& Format:**
    - Run ESLint and Prettier checks
3. **Test:**
    - Run unit and integration tests with Vitest
    - Run E2E tests with Playwright
4. **Deploy:**
    - On successful tests, build Docker image for `apps/web` and `apps/cms`
    - Deploy to your cloud provider (e.g., Vercel, AWS ECS)
    - Use zero-downtime deployment strategies
5. **Monitoring:**
    - Integrate Sentry or equivalent for error and performance monitoring

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Git


### Development Setup

```bash
git clone https://github.com/yourusername/portfolio-cms-boilerplate.git
cd portfolio-cms-boilerplate

npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Setup database schema and seed data
npm run db:push
npm run db:seed

# Start full dev environment (frontend + CMS)
npm run dev
```


## 🛠️ Available Scripts

- `npm run dev` — Start frontend and CMS with hot reload
- `npm run build` — Build all apps and packages incrementally
- `npm run lint` — Run ESLint across the monorepo
- `npm run format` — Format codebase with Prettier
- `npm run test` — Run unit and integration tests
- `npm run test:e2e` — Run end-to-end tests with Playwright
- `npm run db:push` — Apply DB schema migrations
- `npm run db:seed` — Seed database with sample data


## 🔧 Customization

- Extend or customize UI components in `packages/ui`
- Add new content types in `apps/cms/collections`
- Modify Tailwind config and global styles in `apps/web/styles`
- Configure authentication providers and roles in `packages/auth`


## 📚 Documentation \& Contribution

- Architecture overview and API references in `/docs` (can be a dedicated app)
- Follow TDD and code quality standards
- Submit PRs with clear commit messages and tests


## 🙏 Acknowledgments

Inspired by the [turborepo-shadcn-ui-tailwindcss](https://github.com/henriqpohl/turborepo-shadcn-ui-tailwindcss) repo and Graphite.dev monorepo principles emphasizing:

- **Incremental builds \& tests** for fast feedback
- **Atomic design** for scalable UI
- **Unified TypeScript codebase** for consistency
- **Single deployment artifact per app** for operational simplicity
