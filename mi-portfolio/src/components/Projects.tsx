import useLanguage from '../hooks/useLanguage'
import Section from './Section'

const LINK_CLASS = 'text-sm font-medium text-accent-text hover:underline'

const Projects = () => {
  const { content } = useLanguage()
  const { title, items } = content.projects

  if (items.length === 0) return null

  return (
    <Section id="projects" title={title}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10 transition duration-300 dark:shadow-black/40 hover:-translate-y-1 hover:border-accent-text hover:shadow-[0_0_30px_-8px_var(--accent)]"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 flex-1 text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-tag px-3 py-1 font-mono text-xs font-medium text-tag-text"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  Repo
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
