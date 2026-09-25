# ArchiPortfolio production SaaS

The app is now a Vite + React frontend backed by an Express API, PostgreSQL via Prisma, and cookie-based JWT authentication.

## Local setup

1. Create a PostgreSQL database (Neon, Supabase, Railway, or local Postgres).
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a long random `JWT_SECRET`.
3. Install dependencies and initialize the database:

```bash
npm install
npx prisma generate
npm run db:migrate -- --name init
npm run db:seed
npm run dev
```

Open `http://localhost:5173`. Demo credentials after seeding:
`demo@archiportfolio.com` / `ChangeMe123!` — change this before sharing the environment.

## Authentication API

- `POST /api/auth/register` — `{ name, email, password }`
- `POST /api/auth/login` — `{ email, password }`
- `POST /api/auth/logout`
- `GET /api/auth/me`

Authentication uses an HTTP-only, secure-in-production cookie. Do not put JWT secrets in frontend code.

## SaaS API

- `GET /api/health`
- `GET /api/marketplace`
- `POST /api/inquiries`
- `GET /api/projects` (authenticated)
- `POST /api/projects` (authenticated)
- `PATCH /api/projects/:id` (authenticated owner)
- `DELETE /api/projects/:id` (authenticated owner)

## Production deployment

### Docker / Render / Railway

The included `Dockerfile` runs the Vite build, generates Prisma Client, applies migrations, and starts the Express server. Set these production environment variables:

- `DATABASE_URL`
- `JWT_SECRET`
- `CLIENT_ORIGIN` (your exact HTTPS frontend/app URL)
- `NODE_ENV=production`

The included `render.yaml` is a starting point for Render. For Railway, deploy the Dockerfile and add the same variables.

### Vercel

Vercel serverless functions are supported by `api/index.js`, but a managed PostgreSQL provider is required. Set the same environment variables and run `prisma migrate deploy` from CI before serving traffic. For the simplest single-service deployment, use the included Dockerfile instead.

## Security and next production work

Before launch, add email verification, password reset, CSRF protection if you change the cookie strategy, object storage for portfolio images, request logging, error monitoring, moderation, backups, and Stripe webhooks for subscriptions/marketplace payments. Never commit `.env` or real credentials.
