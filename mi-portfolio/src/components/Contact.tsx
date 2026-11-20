import useLanguage from '../hooks/useLanguage'
import Section from './Section'

const Contact = () => {
  const { content } = useLanguage()
  const { title, intro, email, links } = content.contact

  return (
    <Section id="contact" title={title}>
      <p className="max-w-xl text-lg text-muted">{intro}</p>
      <a
        href={`mailto:${email}`}
        className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
      >
        {email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-6">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-text hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact
