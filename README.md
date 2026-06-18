# Portfolio Website - Pradeep Singh

A modern, responsive portfolio website showcasing my professional journey as a Senior Embedded Software Developer with 12+ years of experience in automotive embedded systems.

[![React](https://img.shields.io/badge/dependencies-zero-brightgreen)]()

## 🌟 Features

### ✨ Hero Section
- Animated typewriter effect displaying key expertise areas
- Floating tech icons with smooth animations (C, AUTOSAR, CAN, ARM, RTOS, Python, Docker, LIN)
- Professional introduction with call-to-action buttons
- Smooth scroll indicator to guide users

### 👤 About Section
- Professional circular profile photo with elegant white border and glow effect
- Comprehensive career overview and professional journey
- Four key highlight cards showcasing core strengths:
  - Problem Solver
  - Quality Advocate
  - Innovation Driver
  - Team Collaborator

### 💼 Work Experience
- Vertical timeline layout with connected dots
- Complete 12+ year career history (2010 - Present)
- 8 professional roles across Luxoft GmbH, Lear Automotive, and KPIT Infosystems
- Each role displays:
  - Position title
  - Company name and location
  - Project name in emerald badge
  - Duration with calendar icon

### 🚀 Projects
- Showcase of 3 automation tools:
  1. **Automated ECU Test Framework (AETF)** - Reduced validation time by 50%, €60K annual savings
  2. **JTAG Selector Switch** - €7K cost savings, improved debugging flexibility
  3. **CAN/LIN Bus Selector Switch** - Streamlined multi-ECU testing
- Each project card includes:
  - Description and impact metrics
  - Technology stack badges
  - Links to documentation

### 🛠️ Technical Skills
- Compact, organized skill badges with professional icons from [skillicons.dev](https://skillicons.dev/)
- Five categories:
  - Embedded Core (C/C++, AUTOSAR, RTOS, ARM Cortex, PowerPC, Bootloader)
  - Protocols (CAN, LIN, Ethernet, SPI, I2C, UART, UDS, OBD-II)
  - Tools & IDEs (Vector CANoe, Lauterbach, Git, Docker, Jenkins)
  - Testing & Quality (GTest/GMock, HIL Testing, MISRA C, Python)
  - Build & DevOps (CMake, CI/CD, VSCode, Linux)

### 📧 Connect
- Simple, clean contact section with three social platforms:
  - GitHub
  - LinkedIn
  - Email
- Hover effects and smooth transitions

### 🎨 Design Features
- Dark theme (gray-900/800) with emerald-to-blue gradient accents
- Native system font stack (no webfont request)
- Character-by-character typewriter effect with blinking cursor in the hero
- Scroll-triggered fade-in reveals on every section
- Floating brand-colored tech icon cluster in the hero
- Per-platform brand-colored Connect cards with an animated gradient border on hover
- Smooth scroll navigation with active section highlighting
- Responsive design for all devices

## 🚀 Tech Stack

Plain **HTML, CSS, and vanilla JavaScript** — no framework, no build step, no package manager. The whole site is `index.html` plus the files in `assets/`.

## 📦 Running it

There's nothing to install. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so relative paths and any future routing work cleanly:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## 📁 Project Structure

```
portfolio/
├── index.html              # Single-page markup (nav, sections, footer containers)
├── assets/
│   ├── css/style.css       # All styling: layout, colors, animations, responsive rules
│   └── js/
│       ├── data.js         # Portfolio content — edit this to update what the site says
│       └── main.js         # Renders data.js into the DOM + interactivity (nav, typewriter, etc.)
└── README.md
```

## 🎨 Customization Guide

### Update Personal Information
Edit `assets/js/data.js`:

```javascript
const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Add/Remove Experience
```javascript
const experienceData = [
  {
    id: 1,
    company: "Company Name",
    location: "City, Country",
    position: "Your Position",
    period: "Jan 2020 - Present",
    project: "Project Name"
  },
  // Add more roles...
];
```

### Modify Projects
```javascript
const projectsData = [
  {
    id: 1,
    title: "Project Title",
    category: "Category",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    impact: "Impact statement",
    links: {
      documentation: "url"
    }
  },
  // Add more projects...
];
```

### Update Skills
Edit the `skillsData` object in `assets/js/data.js`:

```javascript
const skillsData = {
  "Category Name": [
    { name: "Skill Name", icon: "iconname" }, // icon from skillicons.dev, or null
    // Add more skills...
  ]
};
```

### Color Scheme
Colors are plain hex values in `assets/css/style.css` (no CSS variable indirection) — search for the emerald (`#34d399`)/blue (`#3b82f6`) gradient accents or the gray background shades (`#111827`, `#1f2937`, `#374151`) and replace as needed.

## 🌐 Deployment

Any static host works — there's no build step:

- **GitHub Pages**: point it at the repo root.
- **Vercel/Netlify**: deploy as a static site (no build command needed).

## 📸 Screenshots

### Hero Section
![Hero Section](./docs/screenshots/hero.png)

### About & Experience
![About Section](./docs/screenshots/about.png)
![Experience Timeline](./docs/screenshots/experience.png)

### Projects & Skills
![Projects](./docs/screenshots/projects.png)
![Skills](./docs/screenshots/skills.png)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pradeep Singh**
- LinkedIn: [linkedin.com/in/pradeepsinghem](https://www.linkedin.com/in/pradeepsinghem)
- GitHub: [@pradeepsingh](https://github.com/pradeepsingh)
- Email: pradeepsingh@example.com

## 🙏 Acknowledgments

- Visual design system (fonts, colors, icon style, animations) adapted from [praveengongada.com](https://praveengongada.com)
- Skill icons from [skillicons.dev](https://skillicons.dev/); hero icon cluster brand logos from [Simple Icons](https://simpleicons.org/) via cdn.simpleicons.org

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!
