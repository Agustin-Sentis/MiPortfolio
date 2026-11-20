import { useState } from 'react'
import { SECTION_IDS } from '../constants/sections'
import useActiveSection from '../hooks/useActiveSection'
import useLanguage from '../hooks/useLanguage'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { content } = useLanguage()
  const active = useActiveSection(SECTION_IDS)

  const handleToggleMenu = () => setMenuOpen((open) => !open)
  const handleCloseMenu = () => setMenuOpen(false)

  const menuLabel = menuOpen ? content.ui.closeMenu : content.ui.openMenu

  const hasContent: Record<(typeof SECTION_IDS)[number], boolean> = {
    about: true,
    experience: content.experience.items.length > 0,
    projects: content.projects.items.length > 0,
    skills: content.skills.groups.length > 0,
    education:
      content.education.items.length > 0 ||
      content.education.certifications.length > 0,
    contact: true,
  }
  const visibleIds = SECTION_IDS.filter((id) => hasContent[id])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-accent focus:px-3 focus:py-1 focus:text-white"
      >
        {content.ui.skipToContent}
      </a>
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-accent-text"
        >
          {content.hero.name}
        </a>
        <ul
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-border/60 bg-bg/95 p-4 md:static md:flex md:w-auto md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {visibleIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleCloseMenu}
                aria-current={active === id ? 'true' : undefined}
                className={`block py-1 text-sm transition hover:text-accent-text ${active === id ? 'text-accent-text' : 'text-muted'}`}
              >
                {content.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={handleToggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuLabel}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
