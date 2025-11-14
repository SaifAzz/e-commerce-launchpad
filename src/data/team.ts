export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface HighlightedWork {
  title: string;
  role: string;
  impact: string;
  achievements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin?: string;
  portfolio?: string;
  skillsSummary: string;
  education: {
    degree: string;
    field: string;
    university: string;
  };
  languages: {
    language: string;
    proficiency: string;
  }[];
  workExperience: WorkExperience[];
  skills: {
    category: string;
    items: string[];
  }[];
  portfolioUrl?: string;
  highlightedWork: HighlightedWork[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "mouaz",
    name: "Mouaz Al-Kassm",
    title: "Product Owner | Team Leader",
    email: "muazkassm99@gmail.com",
    phone: "+963 956-134-890",
    linkedin: "mouaz-al-kassm",
    portfolio: "mouaz-al-kassm.in",
    skillsSummary: "Product-driven professional with 6 years in software development and team leadership. Experienced in translating business goals into technical solutions, prioritizing features, and driving product roadmaps from concept to launch. Skilled in stakeholder communication, agile planning, and balancing user needs with technical feasibility.",
    education: {
      degree: "Bachelor in Information Technology",
      field: "Software Engineering",
      university: "Damascus University"
    },
    languages: [
      {
        language: "English",
        proficiency: "Fluent in English with excellent written and verbal communication skills, ensuring clear collaboration across international teams."
      }
    ],
    workExperience: [
      {
        company: "Cloudev",
        position: "Product Owner & Team Leader",
        period: "Dec 2024 – Present",
        location: "Turkey",
        responsibilities: [
          "Defined product roadmap and feature priorities for a scalable ERP system used across multiple departments.",
          "Collaborated with stakeholders to gather requirements and translate them into actionable user stories.",
          "Managed a cross-functional team of 3 developers, ensuring timely delivery and quality assurance.",
          "Introduced new process improvements that enhanced feature delivery speed and team communication."
        ]
      },
      {
        company: "Sheen Value",
        position: "Product Owner & Team Leader",
        period: "Apr 2022 – Oct 2024",
        location: "UAE",
        responsibilities: [
          "Coordinated with internal teams to design and deliver scalable website templates for mass production.",
          "Aligned development goals with business strategy, ensuring product consistency and scalability.",
          "Implemented CI/CD automation pipelines to reduce deployment time and increase release reliability.",
          "Collected and analyzed user feedback to refine post-launch features and improve UX."
        ]
      },
      {
        company: "VEGA SDS",
        position: "Frontend Developer",
        period: "May 2024 – Dec 2024",
        location: "Turkey",
        responsibilities: [
          "Developed websites as templates for mass production using Nuxt.js & Vue.js.",
          "Worked on CI/CD development to automate deployment processes.",
          "Maintained production websites and added new features using Laravel Blade."
        ]
      },
      {
        company: "ProTech Group/ProSoft",
        position: "Full Stack Developer",
        period: "Jul 2021 – Feb 2022",
        location: "Damascus",
        responsibilities: [
          "Developed frontend and backend applications using .NET Core and Razor.",
          "Built interactive dashboards with Blazor and VueJs."
        ]
      }
    ],
    skills: [
      {
        category: "Product Management & Leadership",
        items: [
          "Stakeholder Communication & Alignment",
          "Sprint Planning & Delivery Management",
          "User Story Definition & Acceptance Criteria",
          "Cross-functional Team Leadership"
        ]
      },
      {
        category: "Technical Literacy",
        items: [
          "Frontend: React, Next.js, Vue.js, Nuxt.js",
          "Backend: .NET Core, Laravel",
          "Tooling: Jira, Azure DevOps, ClickUp, Git, Docker",
          "CI/CD Integration, API Design, Version Control"
        ]
      },
      {
        category: "Strategic & Analytical Skills",
        items: [
          "Requirement Gathering & Business Analysis",
          "Process Optimization & Workflow Design",
          "Data-driven Decision Making",
          "Risk Assessment & Scope Management"
        ]
      },
      {
        category: "Soft Skills",
        items: [
          "Leadership, Communication, Decision Making, Problem Solving, Team Collaboration"
        ]
      }
    ],
    portfolioUrl: "mouaz-al-kassm.in",
    highlightedWork: [
      {
        title: "Analyzer - ERP System",
        role: "Product Owner & Team Leader",
        impact: "Delivered an enterprise ERP platform improving operational efficiency across time tracking, project management, and reporting.",
        achievements: [
          "Defined module priorities with stakeholders and managed feature releases.",
          "Led two developers in designing and deploying a new \"Staff Utilization\" module with Excel-style editable grids.",
          "Improved user productivity by automating manual reporting workflows."
        ]
      },
      {
        title: "House-EX - Real Estate Platform in UAE",
        role: "Product Owner & Team Leader",
        impact: "Managed product roadmap for a real estate SaaS serving hundreds of listings and active users.",
        achievements: [
          "Defined MVP scope and coordinated UX improvements based on user feedback.",
          "Oversaw integration of server-side rendering, multi-layer filters, and secure e-payments.",
          "Collaborated with marketing and dev teams to align product features with business goals."
        ]
      },
      {
        title: "Ilhem Taher — Learning Management System (LMS)",
        role: "Product Owner, Frontend & Design Lead",
        impact: "Delivered a custom LMS for an educational influencer brand, enhancing user experience and engagement.",
        achievements: [
          "Managed end-to-end product lifecycle from Figma design to launch.",
          "Supervised a 6-developer team and integrated e-payment and video streaming features.",
          "Increased customer retention and streamlined onboarding process."
        ]
      },
      {
        title: "All About Tech — E-commerce Platform (Germany)",
        role: "Product Owner & Project Lead",
        impact: "Built and scaled an e-commerce ecosystem supporting multi-currency, multi-language, and affiliate tracking.",
        achievements: [
          "Defined feature roadmap and collaborated with business stakeholders to optimize user flow.",
          "Integrated Amazon product listings and analytics for sales performance tracking.",
          "Managed 5 developers through iterative sprints, delivering ahead of schedule."
        ]
      }
    ]
  },
  {
    id: "saif",
    name: "Saif Azzam",
    title: "Tech Lead | Full Stack Developer",
    email: "saif@mindsync.dev",
    phone: "+1 (555) 000-0000",
    linkedin: "saif-azzam",
    skillsSummary: "Experienced Tech Lead and Full Stack Developer with expertise in architecting scalable systems and leading development teams. Specialized in building end-to-end solutions from frontend interfaces to backend infrastructure. Proficient in modern web technologies, cloud platforms, and DevOps practices. Strong focus on code quality, performance optimization, and technical mentorship.",
    education: {
      degree: "Bachelor in Computer Science",
      field: "Software Engineering",
      university: "University"
    },
    languages: [
      {
        language: "English",
        proficiency: "Fluent in English with excellent technical communication skills for cross-functional collaboration."
      }
    ],
    workExperience: [],
    skills: [
      {
        category: "Technical Leadership",
        items: [
          "Technical Architecture & System Design",
          "Code Review & Quality Assurance",
          "Team Mentorship & Knowledge Sharing",
          "Technical Decision Making & Strategy"
        ]
      },
      {
        category: "Full Stack Development",
        items: [
          "Frontend: React, Next.js, TypeScript, Vue.js, HTML5, CSS3",
          "Backend: Node.js, Python, Express.js, RESTful APIs, GraphQL",
          "Database: PostgreSQL, MongoDB, MySQL, Redis",
          "Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Git"
        ]
      },
      {
        category: "Software Engineering",
        items: [
          "System Architecture & Scalability",
          "Microservices & API Design",
          "Performance Optimization",
          "Testing & Quality Assurance"
        ]
      },
      {
        category: "Tools & Technologies",
        items: [
          "Version Control: Git, GitHub, GitLab",
          "Project Management: Jira, Trello, Linear",
          "Monitoring: Sentry, DataDog, CloudWatch",
          "Development Tools: VS Code, Postman, Docker Desktop"
        ]
      }
    ],
    portfolioUrl: undefined,
    highlightedWork: []
  }
];

