import useLanguage from '../hooks/useLanguage'
import Reveal from './Reveal'
import Section from './Section'

const Experience = () => {
  const { content } = useLanguage()
  const { title, items } = content.experience

  if (items.length === 0) return null

  return (
    <Section id="experience" title={title}>
      <ol className="relative space-y-10 border-l border-border pl-8">
        {items.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <Reveal>
              <span
                aria-hidden="true"
                className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full bg-accent-text shadow-[0_0_12px_var(--accent-text)]"
              />
              <p className="font-mono text-xs text-accent-text">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 text-muted">{item.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experience
