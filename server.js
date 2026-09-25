import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcryptjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prisma } from './lib/prisma.js';
import { clearSession, requireAuth, setSession } from './lib/auth.js';
import { inquirySchema, loginSchema, projectSchema, registerSchema } from './lib/validation.js';

const app = express();
const port = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientOrigin = process.env.CLIENT_ORIGIN || true;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: clientOrigin, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: '1mb' }));
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true }));

const publicUser = (user) => ({ id: user.id, name: user.name, email: user.email, role: user.role, bio: user.bio, avatarUrl: user.avatarUrl });

app.get('/api/health', async (_req, res) => {
  try { await prisma.$queryRaw`SELECT 1`; res.json({ ok: true, database: 'connected' }); }
  catch { res.status(503).json({ ok: false, database: 'unavailable' }); }
});

app.post('/api/auth/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid registration data', details: parsed.error.flatten() });
  const { name, email, password } = parsed.data;
  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(409).json({ error: 'An account with this email already exists' });
    const user = await prisma.user.create({ data: { name, email, passwordHash: await bcrypt.hash(password, 12), portfolio: { create: { slug: `${email.split('@')[0]}-${Date.now()}` } } } });
    setSession(res, user);
    res.status(201).json({ user: publicUser(user) });
  } catch (error) { console.error(error); res.status(500).json({ error: 'Unable to create account' }); }
});

app.post('/api/auth/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid email or password' });
  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) return res.status(401).json({ error: 'Invalid email or password' });
  setSession(res, user);
  res.json({ user: publicUser(user) });
});

app.post('/api/auth/logout', (_req, res) => { clearSession(res); res.status(204).end(); });
app.get('/api/auth/me', requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.auth.sub }, include: { portfolio: { include: { projects: true } } } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user: publicUser(user), portfolio: user.portfolio });
});

app.get('/api/marketplace', async (_req, res) => {
  const portfolios = await prisma.portfolio.findMany({ where: { published: true }, include: { user: true, projects: { where: { published: true }, take: 3 } }, take: 50, orderBy: { updatedAt: 'desc' } });
  res.json(portfolios.map((portfolio) => ({ id: portfolio.id, name: portfolio.user.name, role: 'Architectural designer', category: portfolio.projects[0]?.category || 'Architecture', rating: 5, description: portfolio.summary || 'Emerging design talent on ArchiPortfolio.', portfolio })));
});

app.post('/api/inquiries', async (req, res) => {
  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Please provide a valid name, email, and project brief' });
  const inquiry = await prisma.inquiry.create({ data: { ...parsed.data, clientId: req.auth?.sub || null } });
  res.status(201).json({ id: inquiry.id, message: 'Inquiry received' });
});

app.get('/api/projects', requireAuth, async (req, res) => {
  const portfolio = await prisma.portfolio.findUnique({ where: { userId: req.auth.sub }, include: { projects: { orderBy: { updatedAt: 'desc' } } } });
  res.json(portfolio?.projects || []);
});

app.post('/api/projects', requireAuth, async (req, res) => {
  const parsed = projectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid project data', details: parsed.error.flatten() });
  const portfolio = await prisma.portfolio.findUnique({ where: { userId: req.auth.sub } });
  if (!portfolio) return res.status(404).json({ error: 'Portfolio not found' });
  const project = await prisma.project.create({ data: { ...parsed.data, portfolioId: portfolio.id } });
  res.status(201).json(project);
});

app.patch('/api/projects/:id', requireAuth, async (req, res) => {
  const parsed = projectSchema.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid project data' });
  const project = await prisma.project.findFirst({ where: { id: req.params.id, portfolio: { userId: req.auth.sub } } });
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(await prisma.project.update({ where: { id: project.id }, data: parsed.data }));
});

app.delete('/api/projects/:id', requireAuth, async (req, res) => {
  const project = await prisma.project.findFirst({ where: { id: req.params.id, portfolio: { userId: req.auth.sub } } });
  if (!project) return res.status(404).json({ error: 'Project not found' });
  await prisma.project.delete({ where: { id: project.id } });
  res.status(204).end();
});

const dist = path.join(__dirname, 'dist');
app.use(express.static(dist));
app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));

if (process.env.NODE_ENV !== 'test') app.listen(port, () => console.log(`ArchiPortfolio listening on port ${port}`));
export default app;
