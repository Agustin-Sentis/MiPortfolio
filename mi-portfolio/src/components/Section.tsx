import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  id: string
  title: string
  children: ReactNode
}

const Section = ({ id, title, children }: Props) => {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6"
    >
      <Reveal>
        <h2
          id={titleId}
          className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          <span className="text-accent-text">/</span> {title}
        </h2>
        {children}
      </Reveal>
    </section>
  )
}

export default Section
