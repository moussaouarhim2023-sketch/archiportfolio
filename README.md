# ArchiPortfolio — React SaaS starter

ArchiPortfolio is now a Vite + React frontend with an Express API starter. It includes:

- responsive marketing homepage
- login flow mockup
- dashboard with portfolio analytics
- interactive portfolio builder
- marketplace filtering
- client inquiry form connected to the API

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The API runs at `http://localhost:3001`.

Build and preview:

```bash
npm run build
npm run start
```

## API endpoints

- `GET /api/health`
- `GET /api/marketplace`
- `POST /api/inquiries` with `{ "name", "email", "brief" }`

The API currently uses in-memory/demo data. Add a database and authentication provider before handling production user data.

## Deploy

The frontend can be deployed to Vercel, Netlify, or any static host after `npm run build`. For a single-server deployment, run `npm run build` and `npm start`. The `api/index.js` file is included as a Vercel-compatible serverless API entry point.

## Next production steps

1. Add managed authentication (Clerk, Auth.js, Supabase, or Firebase).
2. Add PostgreSQL/Supabase for users, projects, services, and inquiries.
3. Add object storage for portfolio images.
4. Add Stripe subscriptions and marketplace payments.
5. Add validation, rate limiting, email notifications, and moderation.
