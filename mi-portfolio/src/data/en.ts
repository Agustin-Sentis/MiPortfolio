import type { Content } from '../types/content'

const en: Content = {
  meta: {
    title: 'Agustín Sentis | Junior Full Stack Developer',
    description:
      'Portfolio of Agustín Sentis, Junior Full Stack Developer with experience in JavaScript, React, Node.js, ASP.NET and Flask.',
  },
  ui: {
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Agustín Sentis',
    roles: ['Junior Full Stack Developer'],
    tagline:
      'I build web applications with JavaScript, React, Node.js and ASP.NET. Based in Rosario, Argentina.',
    ctaCv: 'Download CV',
    ctaContact: 'Contact me',
    cvUrl: '/CV_Agustin_Sentis_EN.pdf',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Graduate of the University Technical Degree in Programming (Universidad Tecnológica Nacional), with hands-on experience in Full Stack development using JavaScript, React, Node.js, ASP.NET and Flask.',
      'I have solid knowledge of relational and non-relational databases, version control, continuous integration (CI/CD) and AI tools applied to software development. I stand out for teamwork, problem-solving and results-oriented logical thinking.',
    ],
  },
  experience: { title: 'Experience', items: [] },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'DualBalance',
        description:
          'Full stack personal finance app to track income and expenses in pesos or US dollars. USD amounts are converted to ARS using the rate of the day (official, blue or MEP) and stored with each transaction, so closed months never change. Features JWT authentication with two-step verification, monthly summaries with charts, per-category budgets, CSV export and light/dark themes.',
        tech: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Query',
          '.NET 10',
          'ASP.NET Core',
          'Entity Framework Core',
          'PostgreSQL',
          'Docker',
          'GitHub Actions',
        ],
        repoUrl: 'https://github.com/Agustin-Sentis/GestionApp',
        demoUrl: 'https://gestionapp-frontend-delta.vercel.app',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'Languages & Frontend',
        skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React', 'Bootstrap'],
      },
      {
        label: 'Backend',
        skills: ['C#', 'Node.js', 'ASP.NET', 'Flask', 'REST APIs'],
      },
      { label: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
      {
        label: 'ORM',
        skills: ['Entity Framework', 'Sequelize', 'SQLAlchemy'],
      },
      {
        label: 'DevOps / CI-CD',
        skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Microsoft Azure'],
      },
      {
        label: 'AI Tools',
        skills: ['Claude Code', 'AI agent CLI tools'],
      },
      {
        label: 'Languages',
        skills: ['Spanish (native)', 'English (intermediate)'],
      },
      {
        label: 'Personal skills',
        skills: ['Organized and proactive', 'Teamwork', 'Problem-solving'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        institution: 'Universidad Tecnológica Nacional (UTN)',
        title: 'University Technical Degree in Programming',
        period: 'Jul 2024 – Sep 2026',
      },
      {
        institution: 'Escuela San Francisco de Asís (E.E.S. No. 8051)',
        title: 'High School Diploma',
        period: '2014 – 2019',
      },
    ],
    certTitle: 'Certifications',
    certifications: [],
  },
  contact: {
    title: 'Contact',
    intro: "Let's talk. Drop me a line and I'll get back to you soon.",
    email: 'agussentis@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Agustin-Sentis' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/agust%C3%ADn-sentis-60840b346',
      },
    ],
  },
  footer: { rights: 'All rights reserved.' },
}

export default en
