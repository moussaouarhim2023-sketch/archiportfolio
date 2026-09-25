import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'archiportfolio-api' }));
app.get('/api/marketplace', (_req, res) => res.json([
  { id: 1, name: 'Rina Ali', role: 'Interior designer', rating: 4.9, category: 'Interior', description: 'Warm, modern interiors for residential living and hospitality spaces.' },
  { id: 2, name: 'Malik Oseni', role: 'Architectural designer', rating: 4.8, category: 'Urban', description: 'Concept-led residential and mixed-use developments with a strong urban approach.' },
  { id: 3, name: 'Lina Kadi', role: 'Graduate architect', rating: 4.7, category: 'Residential', description: 'Sustainable residential architecture and thoughtfully detailed spaces.' }
]));
app.post('/api/inquiries', (req, res) => {
  const { name, email, brief } = req.body || {};
  if (!name || !email || !brief) return res.status(400).json({ error: 'name, email, and brief are required' });
  res.status(201).json({ id: Date.now(), message: 'Inquiry received' });
});
export default app;
