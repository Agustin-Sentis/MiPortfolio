import { useEffect, useState } from 'react'
import useLanguage from '../hooks/useLanguage'

const ROLE_INTERVAL_MS = 2600

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  const { content } = useLanguage()
  const { hero } = content

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || hero.roles.length < 2) return

    const id = setInterval(() => {
      setRoleIndex((index) => (index + 1) % hero.roles.length)
    }, ROLE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [hero.roles.length])

  const role = hero.roles[roleIndex % Math.max(hero.roles.length, 1)] ?? ''

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-4 font-mono text-sm text-accent-text">{hero.greeting}</p>
        <h1 className="font-display text-6xl font-thin italic leading-none sm:text-8xl">
          {hero.name}
        </h1>
        <p
          aria-live="polite"
          className="mt-6 min-h-8 text-2xl font-medium text-accent-text sm:text-3xl"
        >
          {role}
        </p>
        <p className="mt-6 max-w-xl text-lg text-muted">{hero.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.cvUrl}
            download
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            {hero.ctaCv}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent-text hover:text-accent-text"
          >
            {hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
