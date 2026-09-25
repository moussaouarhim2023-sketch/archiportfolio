import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const talent = [
  { name: 'Rina Ali', role: 'Interior designer', category: 'Interior', rating: '4.9', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', description: 'Warm, modern interiors for residential living and hospitality spaces.' },
  { name: 'Malik Oseni', role: 'Architectural designer', category: 'Urban', rating: '4.8', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', description: 'Concept-led residential and mixed-use developments with a strong urban approach.' },
  { name: 'Lina Kadi', role: 'Graduate architect', category: 'Residential', rating: '4.7', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80', description: 'Sustainable residential architecture and thoughtfully detailed spaces.' }
];

function App() {
  const [page, setPage] = useState('home');
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');
  const [notice, setNotice] = useState('');
  const [inquiry, setInquiry] = useState({ name: '', email: '', brief: '' });
  const filtered = filter === 'All' ? talent : talent.filter((person) => person.category === filter);

  useEffect(() => { document.title = `ArchiPortfolio | ${page === 'home' ? 'Build Your Career' : page[0].toUpperCase() + page.slice(1)}`; }, [page]);

  const go = (next) => { setPage(next); setMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const submitInquiry = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(inquiry) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to submit');
      setNotice('Thanks — your project brief has been received.');
      setInquiry({ name: '', email: '', brief: '' });
    } catch (error) { setNotice(error.message); }
  };

  return <>
    <header className="header"><div className="nav container">
      <button className="brand" onClick={() => go('home')}><span className="brand-mark">A</span> ArchiPortfolio</button>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <button onClick={() => go('home')}>Home</button><button onClick={() => go('builder')}>Builder</button><button onClick={() => go('marketplace')}>Marketplace</button><button onClick={() => go('dashboard')}>Dashboard</button>
      </nav>
      <div className="nav-actions"><button className="btn secondary" onClick={() => go('login')}>Login</button><button className="btn primary" onClick={() => go('builder')}>Start free</button></div>
      <button className="menu-button" onClick={() => setMenu(!menu)}>☰</button>
    </div></header>

    {page === 'home' && <Home go={go} />}
    {page === 'login' && <Login go={go} />}
    {page === 'dashboard' && <Dashboard go={go} />}
    {page === 'builder' && <Builder />}
    {page === 'marketplace' && <Marketplace filtered={filtered} filter={filter} setFilter={setFilter} go={go} inquiry={inquiry} setInquiry={setInquiry} submitInquiry={submitInquiry} notice={notice} />}
  </>;
}

function Home({ go }) { return <main>
  <section className="hero container"><div><span className="eyebrow">For students + junior architects</span><h1>Build a portfolio that opens doors.</h1><p className="lead">Create stunning portfolio websites, attract clients, and grow your architecture or interior design career with a platform built for emerging talent.</p><div className="hero-actions"><button className="btn primary" onClick={() => go('builder')}>Build your portfolio</button><button className="btn secondary" onClick={() => go('marketplace')}>Explore marketplace</button></div><div className="stats"><Stat value="14k+" label="Profiles launched" /><Stat value="92%" label="More inquiries" /><Stat value="$480k" label="Revenue generated" /></div></div><div className="hero-image"><div className="floating"><small>Portfolio growth</small><strong>+187% leads</strong><span>● 4.9/5 rating &nbsp; ● 3x bookings</span></div></div></section>
  <section className="container section"><div className="section-head"><span className="eyebrow">Everything you need</span><h2>Build, showcase, and sell your work.</h2><p>One focused workspace for your portfolio, content, clients, and career.</p></div><div className="feature-grid"><Feature icon="▣" title="Portfolio Builder" text="Build polished project pages with responsive layouts and smart content modules." /><Feature icon="✦" title="AI Content Assistant" text="Create clearer bios, project narratives, and descriptions in seconds." /><Feature icon="◎" title="Marketplace Access" text="Get discovered by clients, studios, and collaborators looking for talent." /></div></section>
  <section className="container section"><div className="section-head"><span className="eyebrow">Simple pricing</span><h2>Start free. Grow when you are ready.</h2></div><div className="pricing"><Price name="Starter" amount="$0" text="For students building their first portfolio." /><Price featured name="Growth" amount="$29" text="For designers ready to attract clients." /><Price name="Studio" amount="$79" text="For professionals managing multiple leads." /></div></section>
  <section className="cta container"><div><span className="eyebrow dark">Start today</span><h2>Turn creativity into opportunity.</h2><p>Build your portfolio, get discovered, and earn from your design skills.</p></div><button className="btn light" onClick={() => go('builder')}>Open the builder</button></section>
</main>; }
function Stat({ value, label }) { return <div className="stat"><strong>{value}</strong><span>{label}</span></div>; }
function Feature({ icon, title, text }) { return <article className="feature"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
function Price({ name, amount, text, featured }) { return <article className={featured ? 'price featured' : 'price'}>{featured && <span className="popular">Most popular</span>}<h3>{name}</h3><strong>{amount}<small>/ month</small></strong><p>{text}</p><ul><li>✓ Portfolio website</li><li>✓ Project uploads</li><li>✓ Marketplace profile</li></ul><button className="btn secondary">Choose plan</button></article>; }

function Login({ go }) { return <main className="auth container"><div className="auth-art"><span className="eyebrow dark">Build your story</span><h1>Bring your design work to the world.</h1><p>Showcase projects, build credibility, and turn your portfolio into real opportunities.</p></div><form className="auth-form" onSubmit={(event) => { event.preventDefault(); go('dashboard'); }}><span className="eyebrow">Welcome back</span><h2>Sign in to your workspace</h2><label>Email<input type="email" placeholder="name@studio.com" required /></label><label>Password<input type="password" placeholder="••••••••" required /></label><button className="btn primary">Sign in</button><button type="button" className="btn secondary">Continue with Google</button><p>New here? <button type="button" className="link" onClick={() => go('builder')}>Create a portfolio</button></p></form></main>; }

function Dashboard({ go }) { return <main className="container app-page"><div className="page-header"><div><span className="eyebrow">Dashboard</span><h1>Good morning, Rina</h1></div><button className="btn primary" onClick={() => go('builder')}>Edit portfolio</button></div><div className="dashboard-stats"><Stat value="12" label="Active projects" /><Stat value="28" label="New leads" /><Stat value="7" label="Bookable services" /><Stat value="$4.8k" label="Revenue" /></div><div className="dashboard-grid"><section className="panel chart"><div className="panel-head"><h2>Profile performance</h2><span>This month</span></div><div className="bars">{[40, 54, 62, 74, 81, 92, 78].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></section><section className="panel"><div className="panel-head"><h2>Recent inquiries</h2><button className="link" onClick={() => go('marketplace')}>View all</button></div><ul className="list"><li><b>North Villa Project</b><span>New</span></li><li><b>Cafe Interior Refresh</b><span>Booked</span></li><li><b>Loft Renovation</b><span>Review</span></li></ul></section></div><section className="panel"><div className="panel-head"><h2>Next steps</h2></div><div className="steps"><p>✓ Update your homepage</p><p>✓ Publish a new project gallery</p><p>○ Review client messages</p></div></section></main>; }

function Builder() { const [title, setTitle] = useState('Maison Courtyard'); const [summary, setSummary] = useState('A contemporary courtyard residence designed around natural light, tactile materials, and flexible family living spaces.'); return <main className="container app-page"><div className="page-header"><div><span className="eyebrow">Portfolio Builder</span><h1>Design your portfolio</h1></div><div><button className="btn secondary">Preview</button> <button className="btn primary" onClick={() => alert('Portfolio published!')}>Publish</button></div></div><div className="builder-grid"><section className="panel form-stack"><h2>Project editor</h2><label>Project title<input value={title} onChange={(event) => setTitle(event.target.value)} /></label><label>Category<select><option>Residential</option><option>Interior</option><option>Urban</option></select></label><label>Project summary<textarea rows="5" value={summary} onChange={(event) => setSummary(event.target.value)} /></label><div className="upload">Drop project images here or <button className="link">choose files</button></div><div className="layout-options"><button>Hero section</button><button>Gallery</button><button>Process</button><button>Testimonial</button></div></section><section className="panel preview"><h2>Live preview</h2><div className="preview-image" /><span className="tag">Residential</span><h2>{title}</h2><p>{summary}</p><small>2026 · Architecture · Interior concept</small></section></div></main>; }

function Marketplace({ filtered, filter, setFilter, go, inquiry, setInquiry, submitInquiry, notice }) { return <main className="container app-page"><div className="page-header"><div><span className="eyebrow">Marketplace</span><h1>Find design talent that fits your brief.</h1></div><button className="btn primary" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}>Post a project</button></div><div className="filters">{['All', 'Interior', 'Residential', 'Urban'].map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="talent-grid">{filtered.map((person) => <article className="talent" key={person.name}><img src={person.image} alt="" /><div><div className="talent-heading"><div><h2>{person.name}</h2><span>{person.role}</span></div><b>★ {person.rating}</b></div><p>{person.description}</p><span className="tag">{person.category}</span><button className="btn secondary full" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}>Contact designer</button></div></article>)}</div><section id="inquiry" className="inquiry panel"><div><span className="eyebrow">For clients</span><h2>Have a project in mind?</h2><p>Send a short brief and we will connect you with the right emerging designer.</p></div><form onSubmit={submitInquiry}><input value={inquiry.name} onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })} placeholder="Your name" required /><input type="email" value={inquiry.email} onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })} placeholder="Email address" required /><textarea value={inquiry.brief} onChange={(e) => setInquiry({ ...inquiry, brief: e.target.value })} placeholder="Tell us about your project" rows="4" required /><button className="btn primary">Send brief</button>{notice && <small>{notice}</small>}</form></section></main>; }

createRoot(document.getElementById('root')).render(<App />);
