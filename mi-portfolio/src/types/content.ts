export type Locale = 'es' | 'en'

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

export interface ProjectItem {
  name: string
  description: string
  tech: string[]
  repoUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  title: string
  period: string
}

export interface CertificationItem {
  name: string
  issuer: string
  year: string
}

export interface ContactLink {
  label: string
  url: string
}

export interface Content {
  meta: { title: string; description: string }
  ui: {
    toggleTheme: string
    toggleLanguage: string
    openMenu: string
    closeMenu: string
    skipToContent: string
  }
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    roles: string[]
    tagline: string
    ctaCv: string
    ctaContact: string
    cvUrl: string
  }
  about: { title: string; paragraphs: string[] }
  experience: { title: string; items: ExperienceItem[] }
  projects: { title: string; items: ProjectItem[] }
  skills: { title: string; groups: SkillGroup[] }
  education: {
    title: string
    items: EducationItem[]
    certTitle: string
    certifications: CertificationItem[]
  }
  contact: { title: string; intro: string; email: string; links: ContactLink[] }
  footer: { rights: string }
}
