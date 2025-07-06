# Portfolio CMS Boilerplate
A production-ready, full-stack portfolio website boilerplate built with modern technologies and enterprise-grade tooling. This monorepo provides a scalable foundation for building content-managed portfolio sites with robust authentication, seamless content editing, and bulletproof deployment workflows.
## 🚀 Tech Stack
### Frontend

- Next.js 15 - React framework with App Router and Server Components
- TypeScript - Type-safe development with strict configuration
- Tailwind CSS v4 - Utility-first styling with latest features
- Shadcn/ui - High-quality, accessible component library
- Better Auth - Modern authentication with flexible providers

### Backend & Database

- Payload CMS - Headless CMS with admin panel
- PostgreSQL - Robust relational database
- Drizzle ORM - Type-safe database operations

### Architecture & Structure

- Atomic Design Pattern - Scalable component organization
- Monorepo Structure - Organized codebase with clear separation
- T3 Env - Environment variable validation
- Arktype - Runtime type validation

## 🛠️ Developer Experience
### Code Quality & Standards

- ESLint - Comprehensive linting rules
- Prettier - Consistent code formatting
- Commitlint & Commitizen - Standardized commit messages
- Cspell - Spell checking for code and docs
- MarkdownLint - Documentation consistency

- Testing & Quality Assurance

- Playwright - End-to-end testing framework
- Vitest - Fast unit and component testing
- Total TypeScript Reset - Enhanced TypeScript defaults
- Strict TypeScript - Maximum type safety

### Deployment & Monitoring

- GitHub Actions - CI/CD automation
- Changesets - Version management and changelog generation
- Sentry - Error tracking and performance monitoring
- Lefthook - Git hooks for pre-commit and commit-msg validation

## Project Structure
```
portfolio-cms/
├── apps/
│   ├── web/              # Next.js frontend
│   │   ├── src/
│   │   │   ├── assets/         # Static assets (images, fonts)
│   │   │   │   ├── fonts/
│   │   │   │   └── images/
│   │   │   │
│   │   │   ├── components/     # UI Components (Atomic Design)
│   │   │   │   ├── atoms/      # Smallest reusable components
│   │   │   │   ├── molecules/  # Grouped atoms forming functional components
│   │   │   │   ├── organisms/  # Complex UI structures combining molecules
│   │   │   │   └── templates/  # Page layouts (AuthLayout, DashboardLayout)
│   │   │   │
│   │   │   ├── lib/            # Business logic and utilities
│   │   │   │   ├── constants/  # Global constants
│   │   │   │   ├── helpers/    # Utility functions
│   │   │   │   ├── hooks/      # Custom reusable hooks
│   │   │   │   ├── store/      # State management (Zustand)
│   │   │   │   └── types/      # Shared TypeScript types and interfaces
│   │   │   │
│   │   │   ├── pages/          # Page components (LoginPage, DashboardPage)
│   │   │   │   └── App.tsx     # Main app entry point
│   │   │   │
│   │   │   ├── routes/         # Centralized app routing
│   │   │   │   └── routes.tsx
│   │   │   │
│   │   │   ├── services/       # API services (fetching data)
│   │   │   │   └── products/   # Product API services
│   │   │   │       ├── queries.ts    # React Query fetching
│   │   │   │       ├── keys.ts       # Query keys
│   │   │   │       ├── mutations.ts  # React Query mutations
│   │   │   │       └── api.ts        # API functions
│   │   │   │
│   │   │   ├── styles/         # Global styles (Tailwind v4, etc.)
│   │   │   │   └── globals.css
│   │   │   │
│   │   │   └── index.tsx       # React root file
│   │   │
│   │   ├── .env.local          # Environment variables
│   │   ├── .gitignore
│   │   └── package.json
│   │
│   └── cms/              # Payload CMS backend
├── packages/
│   ├── ui/               # Shared component library
│   ├── config/           # Shared configurations
│   └── database/         # Database schemas and migrations
├── .github/
│   └── workflows/        # GitHub Actions
└── tooling/
    ├── eslint/
    ├── prettier/
    └── typescript/
```
## 🎯 Key Features
### Content Management

- Visual Editor - WYSIWYG editing with live preview
- Media Management - Image optimization and CDN integration
- SEO Optimization - Meta tags, structured data, and sitemap generation
- Multi-language Support - Internationalization ready

### Authentication & Security

- Multiple Auth Providers - OAuth, email/password, and magic links
- Role-based Access - Admin, editor, and viewer permissions
- Session Management - Secure token handling
- Rate Limiting - API protection and abuse prevention

### Performance & Scalability

- Server-Side Rendering - Optimal SEO and performance
- Static Generation - Pre-built pages for lightning speed
- Image Optimization - Automatic resizing and format conversion
- Database Migrations - Version-controlled schema changes

##🚦 Getting Started
### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Git

### Installation
```bash#
Clone the repository
git clone https://github.com/yourusername/portfolio-cms-boilerplate.git
cd portfolio-cms-boilerplate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up database
npm run db:push
npm run db:seed

# Start development servers
npm run dev
```
### Environment Variables
```
env# Database
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_cms"

# Authentication
BETTER_AUTH_SECRET="your-auth-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Payload CMS
PAYLOAD_SECRET="your-payload-secret"

# Sentry
SENTRY_DSN="your-sentry-dsn"

# Email (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 📝 Usage
### Development

```bash
npm run dev          # Start all development servers
npm run dev:web      # Start frontend only
npm run dev:cms      # Start CMS only
npm run build        # Build for production
npm run test         # Run all tests
npm run test:e2e     # Run E2E tests
npm run lint         # Lint codebase
npm run format       # Format code
Database Operations
bashnpm run db:push      # Push schema changes
npm run db:studio    # Open database studio
npm run db:seed      # Seed with sample data
npm run db:reset     # Reset database
```
### Deployment

```bash
npm run changeset    # Create changeset for release
npm run release      # Release new version
npm run deploy       # Deploy to production
```
 ## 🧪 Testing Strategy

- Unit Tests - Component and utility function testing
- Integration Tests - API and database interaction testing
- E2E Tests - Full user journey testing
- Visual Regression - Component visual consistency
- Performance Tests - Load time and Core Web Vitals

## 📊 Monitoring & Analytics

- Error Tracking - Sentry integration for bug reporting
- Performance Monitoring - Real User Monitoring (RUM)
- Analytics - Built-in page view and user interaction tracking
- Uptime Monitoring - Health checks and status page

## 🔧 Customization
### Theming

- Modify tailwind.config.js for design system
- Update src/styles/globals.css for global styles
- Customize Shadcn/ui components in components/ui/

### Content Types

- Add new collections in cms/collections/
- Define TypeScript types in packages/database/types/
- Create corresponding frontend components

### Authentication

- Configure providers in lib/auth/config.ts
- Add custom authentication logic in lib/auth/
- Update user roles and permissions

## 📚 Documentation

### Architecture Overview
- Component Library
- API Reference
- Deployment Guide
- Contributing Guidelines

## 🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details on:

- Code of conduct
- Development workflow
- Pull request process
- Issue reporting

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Payload CMS for the powerful headless CMS
- Vercel for deployment platform
- Open source community for the incredible tools


Ready to build your next portfolio? Star this repo and get started in minutes! 🌟
