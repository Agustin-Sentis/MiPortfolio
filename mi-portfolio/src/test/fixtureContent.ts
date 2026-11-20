import type { Content } from '../types/content'

// Datos de prueba independientes del contenido real del portfolio.
const fixtureContent: Content = {
  meta: { title: 'Fixture | Portfolio', description: 'Fixture description' },
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
    name: 'Nombre Fixture',
    roles: ['Rol A', 'Rol B'],
    tagline: 'Tagline fixture',
    ctaCv: 'Descargar CV',
    ctaContact: 'Contactame',
    cvUrl: '/cv.pdf',
  },
  about: { title: 'Sobre mí', paragraphs: ['Párrafo uno', 'Párrafo dos'] },
  experience: {
    title: 'Experiencia',
    items: [
      {
        company: 'Empresa X',
        role: 'Dev',
        period: '2022 - 2024',
        description: 'Descripción X',
        achievements: ['Logro uno', 'Logro dos'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    items: [
      {
        name: 'Proyecto X',
        description: 'Descripción proyecto',
        tech: ['React'],
        repoUrl: 'https://example.com/repo',
      },
    ],
  },
  skills: { title: 'Skills', groups: [{ label: 'Frontend', skills: ['React'] }] },
  education: {
    title: 'Educación',
    items: [{ institution: 'Inst X', title: 'Título X', period: '2020' }],
    certTitle: 'Certificaciones',
    certifications: [{ name: 'Cert X', issuer: 'Emisor', year: '2023' }],
  },
  contact: {
    title: 'Contacto',
    intro: 'Intro',
    email: 'test@example.com',
    links: [{ label: 'GitHub', url: 'https://example.com/gh' }],
  },
  footer: { rights: 'Derechos fixture.' },
}

export default fixtureContent
