import { PERSONAL_INFO, EXPERIENCE_DATA, ADDITIONAL_CREDENTIALS, TECHNICAL_DOMAINS } from '../constants'
import { useSpotlight } from '../hooks/useSpotlight'

export default function About({ activeSkill, onSelectSkill }) {
  const { coords: expCoords, isHovered: expHovered, spotlightProps: expSpotlight } = useSpotlight()
  const { coords: credCoords, isHovered: credHovered, spotlightProps: credSpotlight } = useSpotlight()

  return (
    <section aria-labelledby="about-experience-heading" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-zinc-800/80 pb-4">
        <h2
          id="about-experience-heading"
          className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100"
        >
          About &amp; Experience
        </h2>
      </div>

      {/* Short 3-4 Sentence Graduate Profile */}
      <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
        <h3 className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
          Background &amp; Target Roles
        </h3>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {PERSONAL_INFO.aboutBio}
        </p>
      </div>

      {/* Work Experience & Internship Card with Spotlight */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
          {EXPERIENCE_DATA.sectionTitle}
        </h3>

        <div
          {...expSpotlight}
          className="group relative bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: expHovered
                ? `radial-gradient(350px circle at ${expCoords.x}px ${expCoords.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
                : undefined,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h4 className="text-lg font-semibold text-zinc-100">
                {EXPERIENCE_DATA.role}
              </h4>
              <p className="text-indigo-400 font-mono text-sm font-medium">
                {EXPERIENCE_DATA.company} &mdash; <span className="text-zinc-400 font-normal">{EXPERIENCE_DATA.focusArea}</span>
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">{EXPERIENCE_DATA.period}</span>
          </div>

          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-400 leading-relaxed" role="list">
            {EXPERIENCE_DATA.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-zinc-500 font-mono select-none mt-1 text-xs" aria-hidden="true">&bull;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 flex flex-wrap gap-2" aria-label="Technologies used at Telematics Africa">
            {EXPERIENCE_DATA.technologies.map((tech) => {
              const isSelected = activeSkill === tech
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => onSelectSkill(isSelected ? null : tech)}
                  className={`text-xs font-mono px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border border-indigo-400 font-semibold'
                      : 'bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60'
                  }`}
                  title={`Filter projects by ${tech}`}
                >
                  {tech}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Certifications, Education & Open Source Block */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
          {ADDITIONAL_CREDENTIALS.sectionTitle}
        </h3>

        <div
          {...credSpotlight}
          className="group relative bg-zinc-900/40 border border-zinc-800/90 rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-300 overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: credHovered
                ? `radial-gradient(350px circle at ${credCoords.x}px ${credCoords.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
                : undefined,
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ADDITIONAL_CREDENTIALS.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="text-indigo-400 font-medium">{item.issuer}</span>
                  <span>{item.period}</span>
                </div>
                <div className="text-sm font-semibold text-zinc-200">{item.title}</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Architecture Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
            System Competencies &amp; Technical Stack
          </h3>
          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
            Click any skill to highlight related case studies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECHNICAL_DOMAINS.map((domain) => (
            <div
              key={domain.category}
              className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors space-y-3"
            >
              <h4 className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                {domain.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => {
                  const isSelected = activeSkill === skill
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => onSelectSkill(isSelected ? null : skill)}
                      className={`text-xs font-mono px-2.5 py-1 rounded transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border border-indigo-400 font-semibold scale-105 shadow-sm shadow-indigo-500/30'
                          : 'bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-700/40'
                      }`}
                    >
                      {skill}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}