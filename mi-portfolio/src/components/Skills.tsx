import useLanguage from '../hooks/useLanguage'
import Section from './Section'

const Skills = () => {
  const { content } = useLanguage()
  const { title, groups } = content.skills

  if (groups.length === 0) return null

  return (
    <Section id="skills" title={title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10 dark:shadow-black/40"
          >
            <h3 className="mb-4 font-semibold">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-tag px-3 py-1 font-mono text-xs font-medium text-tag-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
