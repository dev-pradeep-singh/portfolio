// Portfolio content. Edit this file to update what the site displays.
// (Mirrors the previous frontend/src/data/mockData.js — single source of truth for content.)

const profileData = {
  name: "Pradeep Singh",
  title: "Senior Embedded Software Developer",
  tagline: "Building automotive embedded systems",
  location: "Munich, Germany",
  experience: "12+ Years Experience",
  email: "pradeepsingh@example.com",
  phone: "+49-15163733485",
  linkedin: "https://www.linkedin.com/in/pradeepsinghem",
  github: "https://github.com/pradeepsingh",
  resumeUrl: "https://customer-assets.emergentagent.com/job_09ec7e19-ef7c-4caa-94a9-9dd82346df4f/artifacts/8hlggv5p_PradeepSingh-SeniorEmbeddedSoftwareDeveloper.pdf",
  profileImage: "assets/img/profile.jpg"
};

const aboutData = {
  title: "My Journey",
  description: "Hi, I'm a Senior Embedded Software Developer with 12+ years of experience specializing in automotive ECUs. I enjoy turning complex embedded challenges into robust, safety-critical solutions.",
  detailedDescription: "I've been working in automotive embedded systems for over 12 years, with expertise spanning AUTOSAR, RTOS, and low-level drivers. I'm fascinated by creating reliable systems that power next-generation vehicles for leading OEMs like BMW, VW, Volvo, and JLR.",
  additionalInfo: "When I'm not developing embedded software professionally, you'll find me exploring emerging automotive technologies, contributing to automation tools, and constantly expanding my technical skillset.",
  highlights: [
    {
      title: "Problem Solver",
      icon: "rocket",
      description: "I approach complex embedded challenges with analytical thinking and break them down into efficient, maintainable solutions."
    },
    {
      title: "Quality Advocate",
      icon: "code2",
      description: "I value robust, well-tested code that follows AUTOSAR standards, MISRA compliance, and automotive best practices."
    },
    {
      title: "Innovation Driver",
      icon: "lightbulb",
      description: "I constantly develop automation tools and frameworks to improve testing efficiency and reduce manual efforts."
    },
    {
      title: "Team Collaborator",
      icon: "users",
      description: "I work effectively across global teams, leading domain development and mentoring fellow engineers."
    }
  ]
};

const projectsData = [
  {
    id: 1,
    title: "Automated ECU Test Framework (AETF)",
    category: "Automation",
    description: "Python-based automated ECU test framework enabling Excel-driven test scripting and execution across Vector CANcase, HW I/Os, and Lauterbach debugger.",
    technologies: ["Python", "CANoe", "Lauterbach"],
    impact: "Reduced ECU validation time by 50% and saved €60,000 annually",
    links: {
      documentation: "https://customer-assets.emergentagent.com/job_09ec7e19-ef7c-4caa-94a9-9dd82346df4f/artifacts/uafzibzt_AETF_Presentation.pdf"
    }
  },
  {
    id: 2,
    title: "JTAG Selector Switch",
    category: "Hardware Tool",
    description: "Python-based tool with custom hardware to remotely switch between two microcontrollers, eliminating the need for a second debugger.",
    technologies: ["Python", "Hardware", "JTAG"],
    impact: "Hardware cost savings up to €7,000 and improved remote debugging flexibility",
    links: {
      documentation: "https://customer-assets.emergentagent.com/job_09ec7e19-ef7c-4caa-94a9-9dd82346df4f/artifacts/pry0sqsu_JTAG_Selector_Switch_Presentation.pdf"
    }
  },
  {
    id: 3,
    title: "CAN/LIN Bus Selector Switch",
    category: "Hardware Tool",
    description: "Custom hardware solution for switching between multiple CAN and LIN bus connections for efficient ECU testing and validation.",
    technologies: ["Python", "CAN", "LIN"],
    impact: "Streamlined multi-ECU testing and reduced setup time",
    links: {
      documentation: "https://customer-assets.emergentagent.com/job_09ec7e19-ef7c-4caa-94a9-9dd82346df4f/artifacts/eyfutqk1_CAN_LIN_Bus_Selector_Switch_Presentation.pdf"
    }
  }
];

const skillsData = {
  "Embedded Core": [
    { name: "C/C++", icon: "c" },
    { name: "AUTOSAR", icon: null },
    { name: "RTOS", icon: null },
    { name: "ARM Cortex", icon: null },
    { name: "PowerPC", icon: null },
    { name: "Bootloader", icon: null }
  ],
  "Protocols": [
    { name: "CAN", icon: null },
    { name: "LIN", icon: null },
    { name: "Ethernet", icon: null },
    { name: "SPI", icon: null },
    { name: "I2C", icon: null },
    { name: "UART", icon: null },
    { name: "UDS (ISO14229)", icon: null },
    { name: "OBD-II", icon: null }
  ],
  "Tools & IDEs": [
    { name: "Vector CANoe", icon: null },
    { name: "Lauterbach", icon: null },
    { name: "DaVinci", icon: null },
    { name: "KSAR", icon: null },
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Jenkins", icon: "jenkins" },
    { name: "JIRA", icon: null }
  ],
  "Testing & Quality": [
    { name: "GTest/GMock", icon: null },
    { name: "HIL Testing", icon: null },
    { name: "MISRA C", icon: null },
    { name: "Unit Tests", icon: null },
    { name: "Integration Tests", icon: null },
    { name: "Python", icon: "python" },
    { name: "CAPL", icon: null }
  ],
  "Build & DevOps": [
    { name: "CMake", icon: "cmake" },
    { name: "CI/CD", icon: null },
    { name: "Codewarrior", icon: null },
    { name: "VSCode", icon: "vscode" },
    { name: "Linux", icon: "linux" }
  ]
};

const experienceData = [
  {
    id: 1,
    company: "Luxoft GmbH",
    location: "Munich, Germany",
    position: "Senior Software Developer",
    period: "Feb 2022 - Present",
    project: "BMW IPBasis"
  },
  {
    id: 2,
    company: "Luxoft GmbH",
    location: "Munich, Germany",
    position: "Senior Software Developer",
    period: "Dec 2019 - Jan 2022",
    project: "BMW BCP21"
  },
  {
    id: 3,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Technical Lead",
    period: "Jul 2017 - Nov 2019",
    project: "JLR D8 BISG Inverter ECU"
  },
  {
    id: 4,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Aug 2017 - Jun 2018",
    project: "VOLVO HCM Gen2"
  },
  {
    id: 5,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Jun 2016 - Jul 2017",
    project: "JLR X590 Hybrid EV Charger"
  },
  {
    id: 6,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Jan 2014 - May 2016",
    project: "Volkswagen BCM (PQ26)"
  },
  {
    id: 7,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Software Engineer",
    period: "Apr 2013 - Dec 2013",
    project: "Model-Based Development"
  },
  {
    id: 8,
    company: "KPIT Infosystems Ltd.",
    location: "Pune, India",
    position: "Software Engineer",
    period: "Jun 2010 - Mar 2013",
    project: "Freescale Automotive MCUs"
  }
];

const floatingIcons = [
  { name: "C", color: "#A8B9CC", position: { top: "15%", left: "10%" }, delay: 0 },
  { name: "AUTOSAR", color: "#06B6D4", position: { top: "25%", right: "15%" }, delay: 0.5 },
  { name: "CAN", color: "#14B8A6", position: { top: "45%", left: "8%" }, delay: 1 },
  { name: "RTOS", color: "#3B82F6", position: { top: "60%", right: "12%" }, delay: 1.5 },
  { name: "ARM", color: "#F59E0B", position: { top: "35%", right: "25%" }, delay: 2 },
  { name: "LIN", color: "#10B981", position: { top: "55%", left: "18%" }, delay: 2.5 },
  { name: "Python", color: "#3776AB", position: { top: "70%", right: "20%" }, delay: 3 },
  { name: "Docker", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 }
];

const heroWords = ['automotive systems', 'reliable solutions', 'embedded software'];
