* {
  box-sizing: border-box;
}

:root {
  --bg: #f5efe7;
  --bg-2: #efe3d4;
  --ink: #1a1a1a;
  --muted: #5c564f;
  --card: #fffdf9;
  --line: rgba(26, 26, 26, 0.08);
  --accent: #be7a52;
  --accent-2: #d7b28d;
  --olive: #304a39;
  --shadow: 0 18px 40px rgba(26, 26, 26, 0.1);
  --radius: 26px;
  --max: 1180px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  background: linear-gradient(180deg, var(--bg) 0%, #f7f2ec 100%);
  color: var(--ink);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(var(--max), calc(100% - 30px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 239, 231, 0.78);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), #e7b58e);
  color: white;
  font-size: 1.1rem;
  box-shadow: var(--shadow);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.96rem;
}

.nav-links a:hover,
.active-nav {
  color: var(--ink);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 999px;
  padding: 0 22px;
  height: 48px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  background: #111;
  color: white;
  box-shadow: var(--shadow);
}

.btn.secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--ink);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.35);
  border-color: var(--line);
  color: var(--ink);
}

.btn.full-width {
  width: 100%;
}

.small-btn {
  height: 38px;
  padding: 0 18px;
}

.mobile-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
  font-size: 1.3rem;
  cursor: pointer;
}

.hero {
  padding: 72px 0 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 34px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(190, 122, 82, 0.12);
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow.alt {
  background: rgba(255, 255, 255, 0.08);
  color: #f3d7bc;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  letter-spacing: -0.07em;
  line-height: 0.94;
  margin: 18px 0 18px;
}

.lead {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 620px;
  margin: 0 0 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 26px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  max-width: 620px;
  margin-top: 12px;
}

.stat {
  background: rgba(255, 255, 255, 0.42);
  border: 1px solid var(--line);
  padding: 18px 18px 16px;
  border-radius: 18px;
}

.stat strong {
  display: block;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  letter-spacing: -0.06em;
  line-height: 1.1;
  margin-bottom: 4px;
}

.stat span {
  color: var(--muted);
  font-size: 0.83rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-card {
  width: min(100%, 520px);
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.66);
  box-shadow: var(--shadow);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.35));
}

.visual-image {
  height: 610px;
  background:
    linear-gradient(rgba(17, 17, 17, 0.18), rgba(17, 17, 17, 0.18)),
    url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.floating {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(26, 26, 26, 0.05);
  backdrop-filter: blur(12px);
  padding: 18px 18px 12px;
  border-radius: 18px;
}

.floating .tiny {
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.floating strong {
  display: block;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  letter-spacing: -0.06em;
  margin-top: 6px;
  margin-bottom: 8px;
}

.mini {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-size: 0.8rem;
}

.mini span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  background: var(--olive);
}

section {
  padding: 54px 0;
}

.section-head {
  text-align: center;
  margin-bottom: 28px;
}

.section-head h2 {
  margin: 16px auto 10px;
  max-width: 800px;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.section-head p {
  max-width: 760px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1.04rem;
}

.logos {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin-top: 25px;
}

.logo-box {
  min-height: 72px;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.28);
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 18px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px 22px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.02);
}

.icon-box {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(190, 122, 82, 0.2), rgba(215, 178, 141, 0.18));
  color: var(--accent);
  font-size: 1.4rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  letter-spacing: -0.05em;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 12px;
}

.portfolio-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.025);
}

.portfolio-preview {
  height: 260px;
  background-size: cover;
  background-position: center;
}

.preview-one {
  background-image: linear-gradient(rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 0.1)), url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80");
}

.preview-two {
  background-image: linear-gradient(rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 0.1)), url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80");
}

.portfolio-body {
  padding: 18px 20px 20px;
}

.portfolio-body h3 {
  margin: 0 0 8px;
  font-size: 1.55rem;
  letter-spacing: -0.05em;
}

.portfolio-body p {
  margin: 0 0 14px;
  color: var(--muted);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(48, 74, 57, 0.08);
  color: var(--olive);
  font-size: 0.77rem;
  font-weight: 700;
}

.split {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  align-items: center;
  gap: 28px;
}

.split-card {
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px;
}

.split-card h2 {
  margin: 16px 0 10px;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
  line-height: 1.08;
}

.split-card p {
  margin: 0;
  color: var(--muted);
}

.check-list {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--muted);
}

.check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(48, 74, 57, 0.12);
  color: var(--olive);
  font-size: 0.8rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 1px;
}

.steps {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
  border-radius: 20px;
  padding: 16px;
  display: grid;
  gap: 12px;
}

.step {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 16px;
  padding: 12px 16px;
}

.step-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.step-no {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(190, 122, 82, 0.12);
  color: var(--accent);
  font-weight: 800;
}

.step strong {
  display: block;
  font-size: 1rem;
}

.step span {
  color: var(--muted);
  font-size: 0.8rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 16px;
}

.price-card {
  position: relative;
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px 22px;
}

.price-card.featured {
  background: linear-gradient(180deg, #fffaf4, #f5efe7);
  border-color: rgba(190, 122, 82, 0.26);
  box-shadow: 0 18px 38px rgba(190, 122, 82, 0.08);
}

.badge {
  position: absolute;
  right: 20px;
  top: 20px;
  background: #111;
  color: #fff;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.price-card h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 2.3rem;
  font-weight: 900;
  letter-spacing: -0.07em;
  margin: 8px 0 16px;
}

.price small {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: normal;
}

.price-card p {
  margin: 0 0 16px;
  color: var(--muted);
}

.plan-list {
  display: grid;
  gap: 10px;
  margin: 18px 0 22px;
  color: var(--muted);
}

.plan-list li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.plan-list li::before {
  content: "✓";
  color: var(--olive);
  font-weight: 900;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 16px;
}

.quote-card {
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
}

.quote {
  margin: 0 0 20px;
  color: var(--ink);
  font-size: 1.04rem;
}

.person {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #d4a98d, #7c6758);
  color: white;
  font-weight: 800;
}

.avatar.large {
  width: 42px;
  height: 42px;
}

.person strong {
  display: block;
  font-size: 0.95rem;
}

.person small {
  color: var(--muted);
  font-size: 0.76rem;
}

.cta-wrap { padding-top: 24px; padding-bottom: 90px; }

.cta-box {
  background: linear-gradient(135deg, #1c1a18, #2f2a27);
  color: #f6efe8;
  border-radius: 30px;
  padding: 38px 28px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: center;
}

.cta-box h2 {
  margin: 16px 0 10px;
  font-size: clamp(2rem, 4vw, 3.1rem);
  letter-spacing: -0.06em;
  line-height: 1.06;
}

.cta-box p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
}

.cta-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}

.site-footer {
  padding: 0 0 34px;
  color: var(--muted);
}

.footer-inner {
  border-top: 1px solid var(--line);
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f3eadf, #f8f3ef);
}

.auth-shell {
  width: min(1100px, calc(100% - 28px));
  min-height: 700px;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  border: 1px solid var(--line);
  border-radius: 30px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: var(--shadow);
}

.auth-panel {
  min-height: 100%;
}

.auth-visual {
  background:
    linear-gradient(rgba(18, 18, 18, 0.28), rgba(18, 18, 18, 0.28)),
    url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
  display: flex;
  align-items: end;
}

.auth-overlay {
  padding: 42px 36px 38px;
  color: white;
  max-width: 480px;
}

.auth-overlay h2 {
  margin: 18px 0 10px;
  font-size: clamp(2.2rem, 4vw, 3.1rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.auth-overlay p {
  margin: 0;
  color: rgba(255,255,255,0.78);
}

.auth-card {
  background: rgba(255,255,255,0.76);
  padding: 44px 34px;
}

.auth-head {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
}

.auth-head h3 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.auth-form {
  display: grid;
  gap: 18px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--ink);
}

.auth-form input,
.auth-form select,
.auth-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.66);
  border-radius: 14px;
  min-height: 52px;
  padding: 0 16px;
  color: var(--ink);
}

.auth-form textarea {
  padding: 14px 16px;
  min-height: 110px;
  resize: vertical;
}

.auth-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.checkbox-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500 !important;
}

.checkbox-row input {
  width: 16px;
  height: 16px;
}

.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.divider::before,
.divider::after {
  content: "";
  height: 1px;
  background: var(--line);
  flex: 1;
}

.switch {
  margin: 0;
  color: var(--muted);
  text-align: center;
}

.switch a {
  color: var(--ink);
  font-weight: 700;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: rgba(255,255,255,0.55);
  border-right: 1px solid var(--line);
  padding: 24px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand-wrap {
  padding: 6px 8px 0;
}

.side-nav {
  display: grid;
  gap: 8px;
}

.side-link {
  padding: 12px 14px;
  border-radius: 12px;
  color: var(--muted);
  font-weight: 600;
}

.side-link.active,
.side-link:hover {
  background: rgba(190, 122, 82, 0.12);
  color: var(--ink);
}

.user-box {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 10px 8px;
  border-top: 1px solid var(--line);
}

.user-box strong { display: block; }
.user-box small { color: var(--muted); }

.dashboard-main {
  padding: 34px 26px 42px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 26px;
}

.topbar h2 {
  margin: 8px 0 0;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  letter-spacing: -0.06em;
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.mini-card {
  background: rgba(255,255,255,0.52);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 18px 16px;
}

.mini-card span,
.mini-card small {
  display: block;
  color: var(--muted);
}

.mini-card strong {
  display: block;
  margin: 8px 0 6px;
  font-size: clamp(1.6rem, 2vw, 2.5rem);
  letter-spacing: -0.06em;
}

.content-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: rgba(255,255,255,0.5);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px 18px 16px;
}

.panel-lg {
  min-height: 240px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.panel-head h3 {
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: -0.04em;
}

.panel-head a,
.panel-head .chip {
  color: var(--muted);
  font-size: 0.82rem;
  background: rgba(190, 122, 82, 0.08);
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(190,122,82,0.12);
}

.chart-box {
  height: 180px;
  display: flex;
  align-items: end;
  padding-top: 12px;
}

.bars {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 12px;
}

.bars span {
  display: block;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  border-radius: 12px 12px 0 0;
}

.inquiry-list,
.todo-list {
  display: grid;
  gap: 12px;
}

.inquiry-list li,
.todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.inquiry-list li:last-child,
.todo-list li:last-child {
  border-bottom: 0;
}

.inquiry-list strong,
.project-item strong {
  display: block;
}

.inquiry-list small,
.project-item small {
  color: var(--muted);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.7rem;
  padding: 6px 8px;
  font-weight: 700;
}

.badge.neutral { background: rgba(26,26,26,0.07); }
.badge.success { background: rgba(48,74,57,0.12); color: var(--olive); }
.badge.warning { background: rgba(190,122,82,0.12); color: var(--accent); }

.project-list {
  display: grid;
  gap: 14px;
}

.project-item {
  display: grid;
  grid-template-columns: 62px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.project-item:last-child { border-bottom: 0; }

.project-thumb {
  width: 62px;
  height: 62px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}

.thumb-one { background-image: url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"); }
.thumb-two { background-image: url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"); }
.thumb-three { background-image: url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"); }

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 74px;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status.good { background: rgba(48,74,57,0.12); color: var(--olive); }
.status.neutral { background: rgba(26,26,26,0.06); color: var(--ink); }

.check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(48,74,57,0.12);
  color: var(--olive);
  font-weight: 800;
}

.builder-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
}

.builder-panel,
.preview-panel {
  min-height: 520px;
}

.form-stack {
  display: grid;
  gap: 18px;
}

.form-stack label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.form-stack input,
.form-stack select,
.form-stack textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  min-height: 52px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.68);
}

.upload-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border: 1px dashed var(--line);
  border-radius: 16px;
  padding: 16px 14px;
  background: rgba(255,255,255,0.44);
}

.project-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.layout-tile {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.46);
  border-radius: 12px;
  padding: 14px 12px;
  font-weight: 600;
  color: var(--muted);
}

.layout-tile.selected {
  background: rgba(190, 122, 82, 0.12);
  color: var(--ink);
  border-color: rgba(190, 122, 82, 0.24);
}

.portfolio-preview-card {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
}

.preview-hero {
  height: 220px;
  background:
    linear-gradient(rgba(17,17,17,0.12), rgba(17,17,17,0.12)),
    url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.preview-body {
  padding: 18px 18px 20px;
}

.faux-tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(48,74,57,0.08);
  color: var(--olive);
  font-size: 0.72rem;
  font-weight: 700;
}

.preview-body h4 {
  margin: 14px 0 8px;
  font-size: 1.7rem;
  letter-spacing: -0.05em;
}

.preview-body p {
  margin: 0 0 12px;
  color: var(--muted);
}

.preview-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--muted);
  font-size: 0.8rem;
}

.preview-meta span {
  background: rgba(26,26,26,0.05);
  padding: 6px 8px;
  border-radius: 999px;
}

.marketplace-page .market-wrap {
  padding: 40px 0 80px;
}

.marketplace-top h1 {
  margin: 14px 0 24px;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1;
  letter-spacing: -0.06em;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filter {
  border: 1px solid var(--line);
  color: var(--muted);
  background: rgba(255,255,255,0.4);
  border-radius: 999px;
  padding: 9px 14px;
  font-weight: 600;
}

.filter.active {
  background: rgba(190,122,82,0.12);
  color: var(--ink);
  border-color: rgba(190,122,82,0.2);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.market-card {
  background: rgba(255,255,255,0.52);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
}

.market-thumb {
  height: 210px;
  background-size: cover;
  background-position: center;
}

.market-info {
  padding: 18px 18px 20px;
}

.market-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: start;
  margin-bottom: 10px;
}

.market-head h3 {
  margin: 0 0 4px;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.market-head span {
  color: var(--muted);
}

.rating {
  background: rgba(48,74,57,0.12);
  color: var(--olive);
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 700;
}

.market-info p {
  margin: 0 0 12px;
  color: var(--muted);
}

.market-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.market-tags span {
  font-size: 0.74rem;
  font-weight: 700;
  background: rgba(26,26,26,0.05);
  border-radius: 999px;
  padding: 7px 10px;
}

@media (max-width: 980px) {
  .hero-grid,
  .split,
  .cta-box,
  .showcase,
  .builder-grid,
  .auth-shell,
  .content-grid,
  .bottom-grid,
  .stats-row,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .pricing-grid,
  .testimonial-grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav-links {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav.open .nav-links {
    position: absolute;
    top: 76px;
    left: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    padding: 18px 18px 16px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  .nav.open .nav-actions {
    display: none;
  }

  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .cta-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 680px) {
  .feature-grid,
  .pricing-grid,
  .testimonial-grid,
  .logos,
  .stats {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 44px;
  }

  .visual-image {
    height: 500px;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar,
  .auth-row,
  .market-head,
  .header-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
