import useLanguage from '../hooks/useLanguage'
import Section from './Section'

const About = () => {
  const { content } = useLanguage()
  const { title, paragraphs } = content.about

  return (
    <Section id="about" title={title}>
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}

export default About
