import { PROJECTS_DATA } from '../constants'
import ProjectWorkbench from './ProjectWorkbench'

export default function Projects({ activeSkill }) {
  return (
    <section aria-labelledby="case-studies-heading" className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-800/80 pb-4">
        <div>
          <h2
            id="case-studies-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100"
          >
            {PROJECTS_DATA.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 mt-1">
            Production-grade systems engineered for resilient data buffering &amp; verified legal retrieval.
          </p>
        </div>

        {activeSkill && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/60 text-indigo-300 text-xs font-mono">
            <span>Filtering by:</span>
            <span className="font-semibold text-white">{activeSkill}</span>
          </div>
        )}
      </div>

      {/* Case Studies Workbenches */}
      <div className="space-y-10">
        {PROJECTS_DATA.projects.map((project) => {
          const isHighlighted = Boolean(
            activeSkill &&
              project.technologies.some((tech) =>
                tech.toLowerCase().includes(activeSkill.toLowerCase()) ||
                activeSkill.toLowerCase().includes(tech.toLowerCase())
              )
          )

          return (
            <ProjectWorkbench
              key={project.id}
              project={project}
              isHighlighted={isHighlighted}
            />
          )
        })}
      </div>
    </section>
  )
}