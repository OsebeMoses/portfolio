import { EXPERIENCE_DATA, TECHNICAL_DOMAINS } from '../constants'

export default function About() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-zinc-800/80 pb-4">
        <h2
          id="experience-heading"
          className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100"
        >
          {EXPERIENCE_DATA.sectionTitle}
        </h2>
      </div>

      {/* Industrial Attachment / Work Experience Card */}
      <div className="bg-zinc-900/40 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100">
              {EXPERIENCE_DATA.role}
            </h3>
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
          {EXPERIENCE_DATA.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Architecture Matrix */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
          System Competencies &amp; Technical Stack
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECHNICAL_DOMAINS.map((domain) => (
            <div
              key={domain.category}
              className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 space-y-3"
            >
              <h4 className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                {domain.category}
              </h4>
              <ul className="flex flex-wrap gap-1.5" role="list">
                {domain.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs font-mono px-2 py-1 rounded bg-zinc-800/50 text-zinc-300 border border-zinc-700/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



