import { screen } from '@testing-library/react'
import renderWithProviders from '../test/renderWithProviders'
import fixtureContent from '../test/fixtureContent'
import type { Content } from '../types/content'
import useLanguage from '../hooks/useLanguage'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

vi.mock('../hooks/useLanguage', () => ({ default: vi.fn() }))

const es = fixtureContent

const withContent = (patch: (c: Content) => Content = (c) => c) => {
  vi.mocked(useLanguage).mockReturnValue({
    locale: 'es',
    content: patch(structuredClone(es)),
    setLocale: vi.fn(),
  })
}

describe('sections with content', () => {
  beforeEach(() => withContent())

  it('Hero shows name, CV download and contact link', () => {
    renderWithProviders(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(es.hero.name)
    expect(screen.getByRole('link', { name: es.hero.ctaCv })).toHaveAttribute('href', es.hero.cvUrl)
    expect(screen.getByRole('link', { name: es.hero.ctaContact })).toHaveAttribute('href', '#contact')
  })

  it('About renders one paragraph per entry', () => {
    renderWithProviders(<About />)
    for (const p of es.about.paragraphs) expect(screen.getByText(p)).toBeInTheDocument()
  })

  it('Skills renders groups and tags', () => {
    renderWithProviders(<Skills />)
    expect(screen.getByText(es.skills.groups[0].label)).toBeInTheDocument()
    expect(screen.getByText(es.skills.groups[0].skills[0])).toBeInTheDocument()
  })

  it('Experience renders items and achievements', () => {
    renderWithProviders(<Experience />)
    expect(screen.getByText(es.experience.items[0].achievements[0])).toBeInTheDocument()
  })

  it('Education renders studies and certifications', () => {
    renderWithProviders(<Education />)
    expect(screen.getByText(es.education.certTitle)).toBeInTheDocument()
    expect(screen.getByText(es.education.items[0].title)).toBeInTheDocument()
  })

  it('Projects renders external links safely', () => {
    renderWithProviders(<Projects />)
    const repo = screen.getByRole('link', { name: 'Repo' })
    expect(repo).toHaveAttribute('target', '_blank')
    expect(repo).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.queryByRole('link', { name: 'Demo' })).not.toBeInTheDocument()
  })

  it('Contact exposes a mailto link and Footer shows rights', () => {
    renderWithProviders(
      <>
        <Contact />
        <Footer />
      </>,
    )
    expect(screen.getByRole('link', { name: es.contact.email })).toHaveAttribute(
      'href',
      `mailto:${es.contact.email}`,
    )
    expect(screen.getByText(new RegExp(es.footer.rights))).toBeInTheDocument()
  })
})

describe('sections with empty lists', () => {
  it('render nothing and do not throw', () => {
    withContent((c) => ({
      ...c,
      hero: { ...c.hero, roles: [] },
      experience: { ...c.experience, items: [] },
      projects: { ...c.projects, items: [] },
      skills: { ...c.skills, groups: [] },
      education: { ...c.education, items: [], certifications: [] },
    }))
    const { container } = renderWithProviders(
      <>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </>,
    )
    expect(container).toBeEmptyDOMElement()
    expect(() => renderWithProviders(<Hero />)).not.toThrow()
  })
})
