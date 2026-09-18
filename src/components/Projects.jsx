import { PROJECTS_DATA } from '../constants'

export default function Projects() {
  return (
    <section aria-labelledby="case-studies-heading" className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-zinc-800/80 pb-4">
        <h2
          id="case-studies-heading"
          className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100"
        >
          {PROJECTS_DATA.sectionTitle}
        </h2>
      </div>

      {/* Case Studies Container */}
      <div className="space-y-8">
        {PROJECTS_DATA.projects.map((project) => (
          <article
            key={project.id}
            aria-labelledby={`project-${project.id}`}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/90 p-6 sm:p-8 rounded-2xl transition-all duration-300 space-y-6"
          >
            {/* Header: Domain, Title & Repository Link */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
                  {project.domain}
                </span>
                <h3
                  id={`project-${project.id}`}
                  className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  {project.architectureType}
                </p>
              </div>

              {project.githubUrl && (
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-100 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Repository</span>
                  </a>
                </div>
              )}
            </div>

            {/* Architecture Overview */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Architectural Highlights */}
            {project.architectureHighlights && (
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Key Architectural Decisions
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400" role="list">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-mono select-none" aria-hidden="true">&rarr;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Engineering Metrics / Specs */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                  >
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">{metric.label}</div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-zinc-200 mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Badges */}
            <div className="pt-2 flex flex-wrap gap-1.5" aria-label={`Technologies in ${project.title}`}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800/40 text-zinc-400 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



