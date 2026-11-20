import type { Content } from '../types/content'

const es: Content = {
  meta: {
    title: 'Agustín Sentis | Desarrollador Full Stack Jr.',
    description:
      'Portfolio de Agustín Sentis, Desarrollador Full Stack Jr. con experiencia en JavaScript, React, Node.js, ASP.NET y Flask.',
  },
  ui: {
    toggleTheme: 'Cambiar tema',
    toggleLanguage: 'Cambiar idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skipToContent: 'Saltar al contenido',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Skills',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Agustín Sentis',
    roles: ['Desarrollador Full Stack Jr.'],
    tagline:
      'Desarrollo aplicaciones web con JavaScript, React, Node.js y ASP.NET. Rosario, Argentina.',
    ctaCv: 'Descargar CV',
    ctaContact: 'Contactame',
    cvUrl: '/CV_Agustin_Sentis.pdf',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Graduado de la Tecnicatura Universitaria en Programación (Universidad Tecnológica Nacional), con experiencia práctica en desarrollo Full Stack utilizando JavaScript, React, Node.js, ASP.NET y Flask.',
      'Tengo sólidos conocimientos en bases de datos relacionales y no relacionales, control de versiones, integración continua (CI/CD) y herramientas de inteligencia artificial aplicadas al desarrollo de software. Me destaco por el trabajo en equipo, la resolución de problemas y un pensamiento lógico orientado a resultados.',
    ],
  },
  experience: { title: 'Experiencia', items: [] },
  projects: {
    title: 'Proyectos',
    items: [
      {
        name: 'DualBalance',
        description:
          'App full stack de finanzas personales para registrar ingresos y gastos en pesos o dólares. Convierte los USD a ARS con la cotización del día (oficial, blue o MEP) y la guarda con cada movimiento, así los meses cerrados no cambian. Incluye autenticación JWT con verificación en dos pasos, resúmenes mensuales con gráficos, presupuestos por categoría, exportación a CSV y tema claro/oscuro.',
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
        label: 'Lenguajes y Frontend',
        skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React', 'Bootstrap'],
      },
      {
        label: 'Backend',
        skills: ['C#', 'Node.js', 'ASP.NET', 'Flask', 'API REST'],
      },
      { label: 'Bases de datos', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
      {
        label: 'ORM',
        skills: ['Entity Framework', 'Sequelize', 'SQLAlchemy'],
      },
      {
        label: 'DevOps / CI-CD',
        skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Microsoft Azure'],
      },
      {
        label: 'Herramientas de IA',
        skills: ['Claude Code', 'CLI de agentes de IA'],
      },
      {
        label: 'Idiomas',
        skills: ['Español (nativo)', 'Inglés (intermedio)'],
      },
      {
        label: 'Habilidades personales',
        skills: [
          'Organizado y proactivo',
          'Trabajo en equipo',
          'Resolución de problemas',
        ],
      },
    ],
  },
  education: {
    title: 'Educación',
    items: [
      {
        institution: 'Universidad Tecnológica Nacional (UTN)',
        title: 'Tecnicatura Universitaria en Programación',
        period: 'Jul 2024 – Sep 2026',
      },
      {
        institution: 'Escuela San Francisco de Asís (E.E.S. N.º 8051)',
        title: 'Educación Secundaria',
        period: '2014 – 2019',
      },
    ],
    certTitle: 'Certificaciones',
    certifications: [],
  },
  contact: {
    title: 'Contacto',
    intro: '¿Charlamos? Escribime y te respondo a la brevedad.',
    email: 'agussentis@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Agustin-Sentis' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/agust%C3%ADn-sentis-60840b346',
      },
    ],
  },
  footer: { rights: 'Todos los derechos reservados.' },
}

export default es
