import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const passwordHash = await bcrypt.hash('ChangeMe123!', 12);
const user = await prisma.user.upsert({
  where: { email: 'demo@archiportfolio.com' },
  update: {},
  create: { name: 'Demo Architect', email: 'demo@archiportfolio.com', passwordHash },
});

await prisma.portfolio.upsert({
  where: { userId: user.id },
  update: {},
  create: {
    userId: user.id,
    title: 'Demo Architecture Portfolio',
    slug: 'demo-architect',
    summary: 'A sample portfolio for local development.',
    published: true,
    projects: { create: [{ title: 'Maison Courtyard', category: 'Residential', summary: 'A light-filled courtyard residence.', year: 2026, published: true }] },
  },
});

console.log('Seeded demo@archiportfolio.com / ChangeMe123!');
await prisma.$disconnect();
