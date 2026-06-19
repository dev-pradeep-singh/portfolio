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
  linkedin: "https://www.linkedin.com/in/pradeepsinghembeddedengineer",
  github: "https://github.com/dev-pradeep-singh",
  resumeUrl: "assets/docs/cv/CV_PradeepSingh_SeniorEmbeddedEngineer.pdf",
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
    position: "Domain Lead",
    period: "Feb 2022 - Present",
    project: "BMW IPBasis - Body & Gateway ECU",
    details: {
      mcu: "Stellar G7, S32G3 (ARM Cortex-M4)",
      language: "Embedded C/C++",
      responsibilities: [
        "Architected a modular firmware stack (MCAL → BSW → RTE → Application) for the BMW Body/Gateway ECU, enabling scalable integration of 15+ software components across the AUTOSAR platform.",
        "Designed BSP-level peripheral drivers and RTOS-based task scheduling (FreeRTOS), cutting CPU load by ~18% under peak communication load.",
        "Led export and integration of MATLAB/Simulink control algorithms into the embedded framework with bit-accurate traceability to system requirements in IBM DOORS.",
        "Maintained and optimized GitLab/Jenkins CI/CD pipelines (automated build, static analysis, regression tests), reducing regression defects by 35%.",
        "Built and owned a Python-based Automated ECU Test Framework (AETF) spanning CAN/LIN, HW I/O, and Lauterbach debugger scripting, cutting validation cycle time by 50%.",
        "Mentored a cross-functional team of 10+ engineers on firmware development, debugging, and MISRA C coding standards.",
        "Led daily standups and change-request planning with BMW stakeholders."
      ]
    }
  },
  {
    id: 2,
    company: "Luxoft GmbH",
    location: "Munich, Germany",
    position: "Domain Lead",
    period: "Dec 2019 - Jan 2022",
    project: "BMW BCP21 - Body & Gateway ECU",
    details: {
      mcu: "SPC58NH92 (PowerPC)",
      language: "Embedded C/C++",
      responsibilities: [
        "Drove full lifecycle development of AUTOSAR-compliant Body & Comfort application modules, from requirements analysis in IBM DOORS through unit test and in-vehicle validation.",
        "Designed and maintained bootloader integration and the firmware update sequence for a multi-core PowerPC ECU, aligned with BMW flashing standards.",
        "Implemented and enforced a GTest/GMock unit-testing strategy in CI/CD, achieving >90% code coverage on new modules.",
        "Performed HIL and in-vehicle debugging with Lauterbach TRACE32 and CANoe, validating 200+ test cases with 98% requirement coverage.",
        "Acted as primary liaison with OEM stakeholders for architecture discussions, change-request planning, and sprint coordination."
      ]
    }
  },
  {
    id: 3,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Technical Lead",
    period: "Jul 2017 - Nov 2019",
    project: "JLR D8 BISG Inverter ECU",
    details: {
      mcu: "MPC5744P, MPC5746x (PowerPC)",
      language: "Embedded C",
      responsibilities: [
        "Led the BSW team configuring and integrating AUTOSAR COM (CAN, FlexRay), the DCM/DEM diagnostic stack (ISO 14229 / OBD-II), and the NvM memory stack in the KSAR toolchain.",
        "Aligned BSW and application architecture to ISO 26262 ASIL-B, maintaining 100% bidirectional traceability across 300+ safety requirements.",
        "Developed low-level SPI, I2C, DIO, PWM/ICU, and ADC peripheral drivers for motor-control and inverter interfaces.",
        "Drove integration validation on HIL platforms, achieving >95% test coverage.",
        "Managed and mentored a 5-person development team distributed across India and US engineering centers.",
        "Acted as AUTOSAR technical authority, enforcing coding guidelines and best practices across 8+ engineers."
      ]
    }
  },
  {
    id: 4,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Aug 2017 - Jun 2018",
    project: "VOLVO HCM Gen2 - Headlight Control Module",
    details: {
      mcu: "Renesas RH850/F1x",
      language: "Embedded C",
      responsibilities: [
        "Configured the AUTOSAR CAN stack and RTE signal mapping between application and BSW using DaVinci Configurator.",
        "Maintained a CMake-based build environment for AUTOSAR-generated code.",
        "Integrated AUTOSAR Port, DIO, and Watchdog modules; ran unit and integration testing on test bench and HIL setups.",
        "Designed and executed automated integration tests with static code analysis, achieving high defect containment before system-level testing.",
        "Performed board-level debugging and in-vehicle validation, reducing field issues during production release."
      ]
    }
  },
  {
    id: 5,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Jun 2016 - Jul 2017",
    project: "JLR X590 Hybrid EV Charger",
    details: {
      mcu: "MPC5744P, MPC5746x (PowerPC)",
      language: "Embedded C",
      responsibilities: [
        "Implemented a bootloader from scratch for the secondary microcontroller, including linker-script authoring and S-record/Intel-hex binary merging.",
        "Developed a custom secondary bootloader supporting UART-based firmware updates, accelerating validation cycles by 60%.",
        "Validated end-to-end OTA download and reprogramming sequences against OEM flashing standards.",
        "Built SPI, I2C, DIO, and PWM/ADC drivers for Control Pilot and Proximity Connection signals on the EV charging interface.",
        "Designed linker scripts and optimized memory mapping for a dual-image (bootloader + application) architecture."
      ]
    }
  },
  {
    id: 6,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Senior Software Engineer",
    period: "Jan 2014 - May 2016",
    project: "Volkswagen PQ26 - Body Control Module",
    details: {
      mcu: "PowerPC MPC5646C",
      language: "Embedded C/C++",
      responsibilities: [
        "Developed AUTOSAR 4.2-compliant SWC application software for the exterior/interior lights and wiper/washer system, in compliance with MISRA C.",
        "Configured RTE mappings and validated signal interfaces between the application layer and BSW.",
        "Modeled control logic in MATLAB/Simulink/Stateflow and generated production-ready C/C++ code via Embedded Coder.",
        "Validated control algorithms through HIL (VeriStand) and SIL test automation, plus in-vehicle testing.",
        "Supported ISO 26262 safety-concept alignment and safety reviews; performed design and code reviews.",
        "Provided technical direction to the team, driving 100% requirements coverage, and presented technical solutions directly to the OEM."
      ]
    }
  },
  {
    id: 7,
    company: "Lear Automotive",
    location: "Pune, India",
    position: "Software Engineer",
    period: "Apr 2013 - Dec 2013",
    project: "Hyundai Body Control Module",
    details: {
      mcu: "PowerPC MPC5646C",
      language: "Embedded C/C++, MATLAB/Simulink",
      responsibilities: [
        "Analyzed OEM system requirements and derived structured, traceable software specifications.",
        "Modeled control logic for body-control functions in MATLAB/Simulink/Stateflow and auto-generated production C/C++ code.",
        "Validated generated code against requirements via SIL and HIL (VeriStand) test automation.",
        "Ensured MISRA C compliance and maintained traceability between the model, generated code, and requirements."
      ]
    }
  },
  {
    id: 8,
    company: "KPIT Infosystems Ltd.",
    location: "Pune, India",
    position: "Software Engineer",
    period: "Jun 2010 - Mar 2013",
    project: "Freescale Automotive MCUs",
    details: {
      mcu: "Freescale PowerPC MPC55xx / MPC56xx",
      language: "Embedded C",
      responsibilities: [
        "Developed and validated BSP/MCAL-level peripheral driver initialization code for pre-production PowerPC microcontrollers, working directly from register-level reference manuals.",
        "Validated tool-generated peripheral configuration code against target hardware.",
        "Performed single- and multi-core debugging with the Lauterbach TRACE32 debugger.",
        "Authored automated VBA/VB test scripts to support tool validation."
      ]
    }
  }
];

const floatingIcons = [
  { name: "Arduino", color: "#A8B9CC", position: { top: "15%", left: "10%" }, delay: 0 },
  { name: "Rpi", color: "#A8B9CC", position: { top: "15%", left: "10%" }, delay: 0 },
  { name: "Jenkins", color: "#A8B9CC", position: { top: "15%", left: "10%" }, delay: 0 },
  //{ name: "AUTOSAR", color: "#06B6D4", position: { top: "25%", right: "15%" }, delay: 0.5 },
  //{ name: "CAN", color: "#14B8A6", position: { top: "45%", left: "8%" }, delay: 1 },
  { name: "RTOS", color: "#3B82F6", position: { top: "60%", right: "12%" }, delay: 1.5 },
  { name: "ARM", color: "#F59E0B", position: { top: "35%", right: "25%" }, delay: 2 },
  //{ name: "LIN", color: "#10B981", position: { top: "55%", left: "18%" }, delay: 2.5 },
  { name: "CPP", color: "#3776AB", position: { top: "70%", right: "20%" }, delay: 3 },
  { name: "Docker", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "Python", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "C", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "Github", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "Linux", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "CMake", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 },
  { name: "Vscode", color: "#2496ED", position: { top: "20%", left: "25%" }, delay: 3.5 }
];

const heroWords = ['automotive systems', 'reliable solutions', 'embedded software'];
