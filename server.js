import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'archiportfolio-api' });
});

app.get('/api/marketplace', (_req, res) => {
  res.json([
    { id: 1, name: 'Rina Ali', role: 'Interior designer', rating: 4.9, category: 'Interior', description: 'Warm, modern interiors for residential living and hospitality spaces.' },
    { id: 2, name: 'Malik Oseni', role: 'Architectural designer', rating: 4.8, category: 'Urban', description: 'Concept-led residential and mixed-use developments with a strong urban approach.' },
    { id: 3, name: 'Lina Kadi', role: 'Graduate architect', rating: 4.7, category: 'Residential', description: 'Sustainable residential architecture and thoughtfully detailed spaces.' }
  ]);
});

app.post('/api/inquiries', (req, res) => {
  const { name, email, brief } = req.body || {};
  if (!name || !email || !brief) {
    return res.status(400).json({ error: 'name, email, and brief are required' });
  }
  res.status(201).json({ id: Date.now(), message: 'Inquiry received', inquiry: { name, email, brief } });
});

if (process.env.NODE_ENV !== 'production') {
  const dist = path.join(__dirname, 'dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.listen(port, () => console.log(`ArchiPortfolio API listening on http://localhost:${port}`));
