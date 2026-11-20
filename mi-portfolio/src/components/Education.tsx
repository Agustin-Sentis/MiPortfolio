import useLanguage from '../hooks/useLanguage'
import Section from './Section'

const Education = () => {
  const { content } = useLanguage()
  const { title, items, certTitle, certifications } = content.education

  if (items.length === 0 && certifications.length === 0) return null

  return (
    <Section id="education" title={title}>
      <div className="grid gap-10 md:grid-cols-2">
        {items.length > 0 && (
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.institution}-${item.title}`}>
                <p className="font-mono text-xs text-accent-text">{item.period}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="text-muted">{item.institution}</p>
              </li>
            ))}
          </ul>
        )}
        {certifications.length > 0 && (
          <div>
            <h3 className="mb-4 text-xl font-semibold">{certTitle}</h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={`${cert.name}-${cert.year}`}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}

export default Education
