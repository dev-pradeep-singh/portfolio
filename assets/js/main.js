// Renders all data-driven sections from data.js and wires up interactivity.
// No build step, no dependencies — open index.html directly or serve statically.

const icons = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 19h14"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><path d="M14 6l6 6-6 6"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c2.5 2 4 5.5 4 9 0 2-1 4-2 5l-2 3-2-3c-1-1-2-3-2-5 0-3.5 1.5-7 4-9z"/><path d="M8 15c-2 1-3 3-3 6 2.5 0 4.5-1 6-3"/><path d="M16 15c2 1 3 3 3 6-2.5 0-4.5-1-6-3"/><circle cx="12" cy="9" r="1.5"/></svg>',
  code2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l-6 6 6 6"/><path d="M15 6l6 6-6 6"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 2z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C0.3 8.4 1.8 5 5.2 4.2 7.5 3.6 9.8 4.6 12 7c2.2-2.4 4.5-3.4 6.8-2.8 3.4.8 4.9 4.2 3.2 7.5C19.5 16.4 12 21 12 21z"/></svg>'
};

function icon(name, extraClass) {
  return `<span class="${extraClass || ''}">${icons[name] || ''}</span>`;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
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
        <button class="nav-logo" data-scroll="home">{ PS }</button>
        <div class="nav-links">
          ${navItems.map(item => `
            <button class="nav-link" data-section="${item.id}" data-scroll="${item.id}">
              ${item.label}<span class="underline"></span>
            </button>
          `).join('')}
        </div>
        <button class="nav-toggle" id="nav-toggle">${icons.menu}</button>
      </div>
    </div>
    <div class="nav-mobile" id="nav-mobile">
      <div class="nav-mobile-inner">
        ${navItems.map(item => `
          <button class="nav-mobile-link" data-section="${item.id}" data-scroll="${item.id}">${item.label}</button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToSection(btn.dataset.scroll);
      closeMobileMenu();
    });
  });

  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => {
    const mobile = document.getElementById('nav-mobile');
    const isOpen = mobile.classList.toggle('open');
    toggle.innerHTML = isOpen ? icons.x : icons.menu;
  });
}

function closeMobileMenu() {
  const mobile = document.getElementById('nav-mobile');
  const toggle = document.getElementById('nav-toggle');
  mobile.classList.remove('open');
  toggle.innerHTML = icons.menu;
}

function setActiveSection(id) {
  document.querySelectorAll('[data-section]').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
}

function initScrollSpy() {
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'connect'];
  const nav = document.getElementById('nav');

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);

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
  const iconsHtml = floatingIcons.map(fi => {
    const style = [
      fi.position.top ? `top:${fi.position.top}` : '',
      fi.position.left ? `left:${fi.position.left}` : '',
      fi.position.right ? `right:${fi.position.right}` : '',
      `animation-delay:${fi.delay}s`,
      'animation-duration:6s'
    ].filter(Boolean).join(';');
    return `
      <div class="floating-icon animate-float" style="${style}">
        <div class="floating-icon-badge" style="background-color:${fi.color}20;color:${fi.color}">${fi.name}</div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="hero-icons">${iconsHtml}</div>
    <div class="bg-grid-pattern" style="position:absolute;inset:0;opacity:0.05"></div>
    <div class="container hero-content">
      <div class="hero-main animate-fade-in-up">
        <div>
          <h1 class="hero-heading">Hi, I'm <span class="gradient-text">${profileData.name}</span></h1>
          <div class="hero-sub">
            <span>I'm passionate about</span>
            <span class="hero-word" id="hero-word">${heroWords[0]}</span>
          </div>
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
      <div class="hero-scroll">
        <div class="hero-scroll-inner animate-bounce" data-scroll="about">
          <span>Scroll to explore</span>${icons.chevronDown}
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-resume').addEventListener('click', () => {
    window.open(profileData.resumeUrl, '_blank');
  });
  section.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => scrollToSection(btn.dataset.scroll));
  });

  let wordIndex = 0;
  setInterval(() => {
    wordIndex = (wordIndex + 1) % heroWords.length;
    const wordEl = document.getElementById('hero-word');
    wordEl.classList.remove('animate-fade-in');
    wordEl.textContent = heroWords[wordIndex];
    void wordEl.offsetWidth; // restart animation
    wordEl.classList.add('animate-fade-in');
  }, 3000);
}

/* ---------- About ---------- */
function renderAbout() {
  const section = document.getElementById('about');
  section.innerHTML = `
    <div class="container">
      <div class="section-title animate-fade-in-up">
        <h2>About <span class="accent">Me</span></h2>
        <div class="underline"></div>
      </div>

      <div class="about-photo-wrap animate-fade-in-up">
        <div class="about-photo">
          <div class="about-photo-glow"></div>
          <div class="about-photo-img">
            <img src="${profileData.profileImage}" alt="${profileData.name}">
          </div>
        </div>
      </div>

      <div class="about-grid">
        <div class="animate-fade-in-left">
          <div class="card journey-card">
            <h3>${aboutData.title}</h3>
            <p>${aboutData.description}</p>
            <p>${aboutData.detailedDescription}</p>
            <p>${aboutData.additionalInfo}</p>
            <div class="journey-stats">
              <div class="journey-stat"><span class="dot dot-teal"></span>${profileData.location}</div>
              <div class="journey-stat"><span class="dot dot-cyan"></span>${profileData.experience}</div>
            </div>
          </div>
        </div>
        <div class="highlights-grid animate-fade-in-right">
          ${aboutData.highlights.map(h => `
            <div class="card hover-accent highlight-card">
              <div class="highlight-icon">${icons[h.icon] || icons.rocket}</div>
              <h4>${h.title}</h4>
              <p>${h.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ---------- Experience ---------- */
function renderExperience() {
  const section = document.getElementById('experience');
  section.innerHTML = `
    <div class="container">
      <div class="section-title lg-only animate-fade-in-up">
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
                <div class="card hover-accent timeline-card">
                  <div class="timeline-card-top">
                    <div>
                      <h3>${exp.position}</h3>
                      <div class="timeline-meta">
                        <span class="company">${exp.company}</span><span>•</span><span>${exp.location}</span>
                      </div>
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
}

/* ---------- Projects ---------- */
function renderProjects() {
  const section = document.getElementById('projects');
  section.innerHTML = `
    <div class="container">
      <div class="section-title animate-fade-in-up">
        <h2>My <span class="accent">Projects</span></h2>
        <div class="underline"></div>
        <p>Here's a selection of automation tools and projects that showcase my expertise in embedded systems development and testing efficiency.</p>
      </div>

      <div class="projects-grid">
        ${projectsData.map(project => `
          <div class="card project-card">
            <div class="project-thumb">
              <div class="project-thumb-overlay"></div>
              ${icons.fileText}
            </div>
            <div class="project-body">
              <div>
                <h3>${project.title}</h3>
                <span class="badge badge-teal">${project.category}</span>
              </div>
              <p class="project-desc">${project.description}</p>
              <div class="project-tech">
                ${project.technologies.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
              </div>
              <div class="project-impact">
                <p><span class="star">★</span> ${project.impact}</p>
              </div>
              <div class="project-links">
                ${project.links.documentation ? `
                  <button class="btn btn-doc" data-doc="${project.links.documentation}">${icons.fileText}Documentation</button>
                ` : ''}
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

  section.querySelectorAll('[data-doc]').forEach(btn => {
    btn.addEventListener('click', () => window.open(btn.dataset.doc, '_blank'));
  });
  document.getElementById('btn-more-projects').addEventListener('click', () => {
    window.open(profileData.linkedin, '_blank');
  });
}

/* ---------- Skills ---------- */
function renderSkills() {
  const section = document.getElementById('skills');
  const getSkillIcon = (iconName) => iconName ? `https://skillicons.dev/icons?i=${iconName}` : null;

  section.innerHTML = `
    <div class="container">
      <div class="section-title lg-only animate-fade-in-up">
        <h2>Technical <span class="accent">Skills</span></h2>
        <div class="underline"></div>
        <p>I've gained deep expertise in embedded systems and automotive technologies throughout my 12+ year career.</p>
      </div>

      <div class="skills-grid">
        ${Object.entries(skillsData).map(([category, skills]) => `
          <div class="card hover-accent skill-category">
            <h3><span class="skill-category-bar"></span>${category}</h3>
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
        `).join('')}
      </div>

      <div class="skills-footnote">
        <div class="card">
          <p>Specialized in <strong>AUTOSAR</strong>, <strong>MISRA C</strong> compliance, and <strong>safety-critical</strong> automotive systems for leading OEMs.</p>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Connect ---------- */
function renderConnect() {
  const section = document.getElementById('connect');
  const links = [
    { name: 'GitHub', icon: 'github', url: profileData.github },
    { name: 'LinkedIn', icon: 'linkedin', url: profileData.linkedin },
    { name: 'Email', icon: 'mail', url: `mailto:${profileData.email}` }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-title animate-fade-in-up">
        <h2>Connect <span class="accent">With Me</span></h2>
        <div class="underline"></div>
        <p>Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!</p>
      </div>
      <div class="connect-grid">
        ${links.map(link => `
          <a class="connect-link" href="${link.url}" target="_blank" rel="noopener noreferrer">
            <div class="connect-icon">${icons[link.icon]}</div>
            <h3>${link.name}</h3>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const footer = document.getElementById('footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-line"><span>© ${year} ${profileData.name}.</span><span class="sep-text">All rights reserved.</span></div>
      <div class="footer-line"><span>Built with</span>${icons.heart}<span>using HTML, CSS &amp; JavaScript</span></div>
    </div>
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
