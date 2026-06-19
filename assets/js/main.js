// Renders all data-driven sections from data.js and wires up interactivity.
// No build step, no dependencies — open index.html directly or serve statically.

const icons = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  code2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5 5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5V14M12 14 6.5 17M12 14l5.5 3"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  cable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"/><path d="M8 21v-4M16 21v-4"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94L9.41 17.6a2 2 0 0 1-2.83-2.83l4.13-4.13a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.8 10A10 10 0 1 1 17 3.34"/><path d="M22 4 12 14.01l-3-3"/></svg>',
  gitBranch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>'
};

const highlightGradients = [
  ['#34d399', '#3b82f6'],
  ['#3b82f6', '#8b5cf6'],
  ['#a855f7', '#6366f1'],
  ['#6366f1', '#22d3ee']
];

const techBadgePalette = [
  { bg: 'rgba(8,145,178,0.2)', text: '#67e8f9', border: 'rgba(8,145,178,0.4)' },
  { bg: 'rgba(29,78,216,0.2)', text: '#93c5fd', border: 'rgba(29,78,216,0.4)' },
  { bg: 'rgba(219,39,119,0.2)', text: '#f9a8d4', border: 'rgba(219,39,119,0.4)' },
  { bg: 'rgba(14,165,233,0.2)', text: '#7dd3fc', border: 'rgba(14,165,233,0.4)' },
  { bg: 'rgba(16,185,129,0.15)', text: '#6ee7b7', border: 'rgba(16,185,129,0.4)' },
  { bg: 'rgba(168,85,247,0.2)', text: '#d8b4fe', border: 'rgba(168,85,247,0.4)' },
  { bg: 'rgba(99,102,241,0.2)', text: '#a5b4fc', border: 'rgba(99,102,241,0.4)' },
  { bg: 'rgba(139,92,246,0.2)', text: '#c4b5fd', border: 'rgba(139,92,246,0.4)' }
];

const categoryIcons = [
  { icon: 'cpu', color: '#f472b6' },
  { icon: 'network', color: '#34d399' },
  { icon: 'wrench', color: '#60a5fa' },
  { icon: 'checkCircle', color: '#a78bfa' },
  { icon: 'gitBranch', color: '#fb923c' }
];

const floatingIconGlyph = {
  C: { img: 'https://skillicons.dev/icons?i=c' },
  CPP: { img: 'https://skillicons.dev/icons?i=cpp' },
  Python: { img: 'https://skillicons.dev/icons?i=python' },
  //AUTOSAR: { icon: 'shield' },
  //CAN: { icon: 'network' },
  RTOS: { icon: 'activity' },
  ARM: { img: 'assets/img/icons/mcu.png' },
  //LIN: { icon: 'cable' },
  Docker: { img: 'https://skillicons.dev/icons?i=docker' },
  Github: { img: 'https://skillicons.dev/icons?i=github' },
  Rpi: { img: 'https://skillicons.dev/icons?i=raspberrypi' },
  Arduino: { img: 'https://skillicons.dev/icons?i=arduino' },
  Jenkins: { img: 'https://skillicons.dev/icons?i=jenkins' },
  Linux: { img: 'https://skillicons.dev/icons?i=linux' },
  CMake: { img: 'https://skillicons.dev/icons?i=cmake' },
  Vscode: { img: 'https://skillicons.dev/icons?i=vscode' }
};

const connectBrand = {
  github: '#8b949e',
  linkedin: '#0077b5',
  mail: '#d44638'
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function hexToRgb(hex) {
  const m = hex.replace('#', '');
  const bigint = parseInt(m, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function reveal(el, opts) {
  if (!el) return;
  el.classList.add('reveal');
  if (opts && opts.dir) el.classList.add(`reveal-${opts.dir}`);
  if (opts && opts.delay) el.style.transitionDelay = `${opts.delay}ms`;
  revealObserver.observe(el);
}

/* ---------- Navigation ---------- */
function renderNav() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'connect', label: 'Connect' }
  ];

  const nav = document.getElementById('nav');
  nav.innerHTML = `
    <div class="container">
      <div class="nav-row">
        <div class="nav-links">
          ${navItems.map(item => `<button class="nav-link" data-section="${item.id}" data-scroll="${item.id}">${item.label}</button>`).join('')}
        </div>
        <button class="nav-toggle" id="nav-toggle">${icons.menu}</button>
      </div>
    </div>
    <div class="nav-mobile" id="nav-mobile">
      <div class="nav-mobile-inner">
        ${navItems.map(item => `<button class="nav-mobile-link" data-section="${item.id}" data-scroll="${item.id}">${item.label}</button>`).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToSection(btn.dataset.scroll);
      closeMobileMenu();
    });
  });

  document.getElementById('nav-toggle').addEventListener('click', () => {
    const mobile = document.getElementById('nav-mobile');
    const toggle = document.getElementById('nav-toggle');
    const isOpen = mobile.classList.toggle('open');
    toggle.innerHTML = isOpen ? icons.x : icons.menu;
  });
}

function closeMobileMenu() {
  document.getElementById('nav-mobile').classList.remove('open');
  document.getElementById('nav-toggle').innerHTML = icons.menu;
}

function setActiveSection(id) {
  document.querySelectorAll('[data-section]').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
}

function initScrollSpy() {
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'connect'];
  const onScroll = () => {
    const current = sections.find(id => {
      const el = document.getElementById(id);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });
    if (current) setActiveSection(current);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

/* ---------- Hero ---------- */
function renderHero() {
  const section = document.getElementById('home');

  const clusterHtml = floatingIcons.map((fi) => {
    const glyph = floatingIconGlyph[fi.name] || { icon: 'code' };
    const inner = glyph.img
      ? `<img src="${glyph.img}" alt="${fi.name}" title="${fi.name}">`
      : `<span style="color:${fi.color}" title="${fi.name}">${icons[glyph.icon]}</span>`;
    return `<div class="floating-icon">${inner}</div>`;
  }).join('');

  section.innerHTML = `
    <div class="hero-bg"></div>
    <div class="hero-dots"></div>
    <div class="hero-orb blue" id="orb-blue"></div>
    <div class="hero-orb emerald" id="orb-emerald"></div>
    <div class="container hero-grid">
      <div class="hero-text">
        <h1 class="hero-heading">
          <span class="white">Hi, I'm</span> <span class="gradient-text">${profileData.name}</span>
        </h1>
        <div class="hero-type">
          <span class="lead">I'm passionate about</span><span class="typed" id="hero-typed"></span><span class="typewriter-cursor"></span>
        </div>
        <p class="hero-desc">
          I'm a Senior Embedded Software Developer with 12+ years of experience specializing in automotive ECUs.
          My expertise drives innovation in creating robust, safety-critical embedded systems for leading OEMs like BMW, VW, Volvo, and JLR.
        </p>
        <div class="hero-ctas">
          <button class="btn btn-primary" id="btn-resume">${icons.download}Download Resume</button>
          <button class="btn btn-outline-hero" data-scroll="connect">Connect With Me${icons.arrowRight}</button>
        </div>
      </div>
      <div class="hero-cluster">
        <div class="icon-sphere" id="icon-sphere">${clusterHtml}</div>
        <div class="hero-photo">
          <div class="hero-photo-glow"></div>
          <div class="hero-photo-frame"><img src="${profileData.profileImage}" alt="${profileData.name}"></div>
        </div>
      </div>
    </div>
    <div class="hero-scroll" data-scroll="about">
      <span>Scroll to explore</span>${icons.chevronDown}
    </div>
  `;

  document.getElementById('btn-resume').addEventListener('click', () => window.open(profileData.resumeUrl, '_blank'));
  section.querySelectorAll('[data-scroll]').forEach(btn => btn.addEventListener('click', () => scrollToSection(btn.dataset.scroll)));

  startIconSphere(document.getElementById('icon-sphere'));

  const orbBlue = document.getElementById('orb-blue');
  const orbEmerald = document.getElementById('orb-emerald');
  section.addEventListener('mousemove', (e) => {
    const r = section.getBoundingClientRect();
    const x = (e.clientX - r.width / 2) / r.width;
    const y = (e.clientY - r.height / 2) / r.height;
    orbBlue.style.transform = `translate(${x * 24}px, ${y * 24}px)`;
    orbEmerald.style.transform = `translate(${-x * 24}px, ${-y * 24}px)`;
  });

  initTypewriter(document.getElementById('hero-typed'));
}

function initTypewriter(el) {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = heroWords[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 65);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % heroWords.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 35);
    }
  }
  tick();
}

/* ---------- Hero icon sphere ---------- */
function startIconSphere(container) {
  const items = Array.from(container.children);
  const n = items.length;
  if (!n) return;

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const innerClearance = 0.76; // keeps orbits clear of the centered photo
  const points = items.map((el, i) => {
    const y = 1 - (2 * i + 1) / n;
    const rawRadius = Math.sqrt(Math.max(0, 1 - y * y));
    const radiusAtY = innerClearance + rawRadius * (1 - innerClearance);
    const theta = goldenAngle * i;
    return { el, x: Math.cos(theta) * radiusAtY, y, z: Math.sin(theta) * radiusAtY };
  });

  let radius = 0;
  const computeRadius = () => {
    const rect = container.getBoundingClientRect();
    radius = Math.min(rect.width, rect.height) / 2 * 0.85;
  };
  computeRadius();
  window.addEventListener('resize', computeRadius);

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const speed = 0.80; // radians per second

  function paint(angle) {
    points.forEach(p => {
      const rx = p.x * Math.cos(angle) - p.z * Math.sin(angle);
      const rz = p.x * Math.sin(angle) + p.z * Math.cos(angle);
      const scale = 0.55 + (rz + 1) / 2 * 0.75;
      const opacity = 0.35 + (rz + 1) / 2 * 0.65;
      p.el.style.transform = `translate(${rx * radius}px, ${p.y * radius}px) scale(${scale})`;
      p.el.style.opacity = opacity;
      p.el.style.zIndex = Math.round((rz + 1) * 100);
    });
  }

  if (reduceMotion) {
    paint(0.6);
    return;
  }

  let last = performance.now();
  let angle = 0;
  function frame(now) {
    const dt = (now - last) / 1000;
    last = now;
    angle += speed * dt;
    paint(angle);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- About ---------- */
function renderAbout() {
  const section = document.getElementById('about');
  section.innerHTML = `
    <div class="section-divider"></div>
    <div class="orb" style="left:-5rem;top:10rem;width:16rem;height:16rem;background:rgba(59,130,246,0.05)"></div>
    <div class="orb" style="right:-5rem;bottom:10rem;width:20rem;height:20rem;background:rgba(16,185,129,0.05)"></div>
    <div class="container">
      <div class="section-title">
        <h2>About <span class="accent">Me</span></h2>
        <div class="underline"></div>
      </div>
      <div class="about-grid">
        <div>
          <div class="card journey-card">
            <h3>${aboutData.title}</h3>
            <p>${aboutData.description}</p>
            <p>${aboutData.detailedDescription}</p>
            <p>${aboutData.additionalInfo}</p>
            <div class="journey-badges">
              <span class="journey-badge"><span class="dot"></span>${profileData.location}</span>
              <span class="journey-badge"><span class="dot"></span>${profileData.experience}</span>
            </div>
          </div>
        </div>
        <div class="highlights-grid">
          ${aboutData.highlights.map((h, i) => {
            const [c1, c2] = highlightGradients[i % highlightGradients.length];
            return `
              <div class="card highlight-card">
                <div class="highlight-icon" style="background:linear-gradient(to right, ${c1}, ${c2})">${icons[h.icon] || icons.rocket}</div>
                <h4>${h.title}</h4>
                <p>${h.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  reveal(section.querySelector('.section-title'));
  reveal(section.querySelector('.journey-card'), { dir: 'left' });
  section.querySelectorAll('.highlight-card').forEach((el, i) => reveal(el, { delay: i * 100 }));
}

/* ---------- Experience ---------- */
function renderExperience() {
  const section = document.getElementById('experience');
  section.innerHTML = `
    <div class="section-divider"></div>
    <div class="container">
      <div class="section-title">
        <h2>Work <span class="accent">Experience</span></h2>
        <div class="underline"></div>
        <p>My professional journey in embedded systems and automotive software development.</p>
      </div>
      <div class="timeline-wrap">
        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-items">
            ${experienceData.map(exp => `
              <div class="timeline-item">
                <div class="timeline-dot"><div class="inner-dot"></div></div>
                <div class="card timeline-card">
                  <div class="timeline-card-top">
                    <div>
                      <h3>${exp.position}</h3>
                      <div class="timeline-meta"><span class="company">${exp.company}</span><span>•</span><span>${exp.location}</span></div>
                      ${exp.project ? `<div class="timeline-project-badge">${exp.project}</div>` : ''}
                    </div>
                    <div class="timeline-period">${icons.calendar}<span>${exp.period}</span></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  reveal(section.querySelector('.section-title'));
  section.querySelectorAll('.timeline-item').forEach((el, i) => reveal(el, { delay: Math.min(i * 60, 400) }));
}

/* ---------- Projects ---------- */
function renderProjects() {
  const section = document.getElementById('projects');
  section.innerHTML = `
    <div class="section-divider"></div>
    <div class="orb" style="right:-5rem;top:33%;width:18rem;height:18rem;background:rgba(16,185,129,0.05)"></div>
    <div class="orb" style="left:-5rem;bottom:33%;width:20rem;height:20rem;background:rgba(59,130,246,0.05)"></div>
    <div class="container">
      <div class="section-title">
        <h2>My <span class="accent">Projects</span></h2>
        <div class="underline"></div>
        <p>Here's a selection of automation tools and projects that showcase my expertise in embedded systems development and testing efficiency.</p>
      </div>
      <div class="projects-grid">
        ${projectsData.map(project => `
          <div class="card project-card">
            <div class="project-thumb">${icons.fileText}</div>
            <div class="project-body">
              <div class="project-title-row">
                <h3>${project.title}</h3>
                <span class="project-category-badge">${project.category}</span>
              </div>
              <p class="project-desc">${project.description}</p>
              <div class="project-tech">
                ${project.technologies.map((t, i) => {
                  const c = techBadgePalette[i % techBadgePalette.length];
                  return `<span class="tech-badge" style="background:${c.bg};color:${c.text};border-color:${c.border}">${t}</span>`;
                }).join('')}
              </div>
              <div class="project-impact"><span class="star">★</span> ${project.impact}</div>
              <div class="project-links">
                ${project.links.documentation ? `<button class="btn-doc" data-doc="${project.links.documentation}">${icons.fileText}Documentation</button>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="projects-more">
        <button class="btn btn-view-more" id="btn-more-projects">View More Projects${icons.externalLink}</button>
      </div>
    </div>
  `;

  section.querySelectorAll('[data-doc]').forEach(btn => btn.addEventListener('click', () => window.open(btn.dataset.doc, '_blank')));
  document.getElementById('btn-more-projects').addEventListener('click', () => window.open(profileData.linkedin, '_blank'));

  reveal(section.querySelector('.section-title'));
  section.querySelectorAll('.project-card').forEach((el, i) => reveal(el, { delay: i * 100 }));
}

/* ---------- Skills ---------- */
function renderSkills() {
  const section = document.getElementById('skills');
  const getSkillIcon = (iconName) => iconName ? `https://skillicons.dev/icons?i=${iconName}` : null;
  const categories = Object.entries(skillsData);

  section.innerHTML = `
    <div class="section-divider"></div>
    <div class="container">
      <div class="section-title">
        <h2>Technical <span class="accent">Skills</span></h2>
        <div class="underline"></div>
        <p>I've gained deep expertise in embedded systems and automotive technologies throughout my 12+ year career.</p>
      </div>
      <div class="skills-grid">
        ${categories.map(([category, skills], i) => {
          const ci = categoryIcons[i % categoryIcons.length];
          return `
            <div class="card skill-category">
              <h3>
                <span class="skill-category-icon" style="background:${ci.color}22"><span style="color:${ci.color}">${icons[ci.icon]}</span></span>
                ${category}
              </h3>
              <div class="skill-badges">
                ${skills.map(skill => {
                  const iconUrl = getSkillIcon(skill.icon);
                  return `
                    <div class="skill-badge">
                      ${iconUrl ? `<img src="${iconUrl}" alt="${skill.name}">` : icons.code}
                      <span>${skill.name}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="skills-footnote">
        <div class="card">
          <p>Specialized in <strong>AUTOSAR</strong>, <strong>MISRA C</strong> compliance, and <strong>safety-critical</strong> automotive systems for leading OEMs.</p>
        </div>
      </div>
    </div>
  `;

  reveal(section.querySelector('.section-title'));
  section.querySelectorAll('.skill-category').forEach((el, i) => reveal(el, { delay: i * 80 }));
}

/* ---------- Connect ---------- */
function renderConnect() {
  const section = document.getElementById('connect');
  const links = [
    { name: 'GitHub', key: 'github', url: profileData.github },
    { name: 'LinkedIn', key: 'linkedin', url: profileData.linkedin },
    { name: 'Email', key: 'mail', url: `mailto:${profileData.email}` }
  ];

  section.innerHTML = `
    <div class="section-divider"></div>
    <div class="orb" style="left:-5rem;top:10rem;width:18rem;height:18rem;background:rgba(168,85,247,0.05)"></div>
    <div class="orb" style="right:-5rem;bottom:10rem;width:20rem;height:20rem;background:rgba(59,130,246,0.05)"></div>
    <div class="container">
      <div class="section-title">
        <h2>Connect <span class="accent">With Me</span></h2>
        <div class="underline"></div>
        <p>Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!</p>
      </div>
      <div class="connect-grid">
        ${links.map(link => {
          const color = connectBrand[link.key];
          const [r, g, b] = hexToRgb(color);
          return `
            <a class="connect-link" href="${link.url}" target="_blank" rel="noopener noreferrer" style="box-shadow:0 8px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(${r},${g},${b},0.1)">
              <div class="connect-border" style="background:linear-gradient(45deg, rgba(${r},${g},${b},0.6), rgba(${r},${g},${b},0.1), rgba(${r},${g},${b},0.6))"></div>
              <div class="connect-inner">
                <div class="connect-icon" style="background:linear-gradient(135deg, rgba(${r},${g},${b},0.15), rgba(${r},${g},${b},0.3));box-shadow:0 4px 12px rgba(${r},${g},${b},0.15)">
                  <span style="color:${color}">${icons[link.key]}</span>
                </div>
                <h3>${link.name}</h3>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;

  reveal(section.querySelector('.section-title'));
  section.querySelectorAll('.connect-link').forEach((el, i) => reveal(el, { delay: i * 100 }));
}

/* ---------- Footer ---------- */
function renderFooter() {
  const footer = document.getElementById('footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <p class="copyright">© ${year} ${profileData.name}. All rights reserved.</p>
    <p class="credit">Designed and built with ❤️</p>
  `;
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderConnect();
  renderFooter();
  initScrollSpy();
});
