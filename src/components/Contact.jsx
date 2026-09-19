import { CONTACT_DATA, PERSONAL_INFO } from '../constants'
import { useSpotlight } from '../hooks/useSpotlight'

export default function Contact() {
  const { coords, isHovered, spotlightProps } = useSpotlight()

  return (
    <section aria-labelledby="contact-heading" className="space-y-10 pt-4">
      {/* Section Header */}
      <div className="border-b border-zinc-800/80 pb-4">
        <h2
          id="contact-heading"
          className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100"
        >
          {CONTACT_DATA.sectionTitle}
        </h2>
      </div>

      {/* Direct Contact Card with Spotlight */}
      <div
        {...spotlightProps}
        className="group relative bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-10 space-y-8 transition-all duration-300 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
              : undefined,
          }}
          aria-hidden="true"
        />

        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            {CONTACT_DATA.headline}
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            {CONTACT_DATA.copy}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 font-medium text-sm px-5 py-3 rounded-lg hover:bg-white active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md shadow-black/30 border-t border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{CONTACT_DATA.email}</span>
          </a>

          <a
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-sm font-medium px-5 py-3 rounded-lg active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Visit Derrick Osebe's GitHub Profile"
          >
            <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub ({CONTACT_DATA.githubHandle})</span>
          </a>
        </div>

        {/* Location & Academic Metadata */}
        <div className="pt-4 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-500">
          <div>
            <span className="text-zinc-400">Location:</span> {CONTACT_DATA.location} ({CONTACT_DATA.timezone})
          </div>
          <div>
            <span className="text-zinc-400">Education:</span> {PERSONAL_INFO.education}
          </div>
        </div>
      </div>

      {/* Footer Colophon with dual Resume & Contact links */}
      <footer className="pt-8 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/80">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-colors flex items-center gap-1 font-medium"
          >
            <span>Download CV (PDF)</span>
            <span aria-hidden="true">&darr;</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            {CONTACT_DATA.email}
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {CONTACT_DATA.githubHandle}
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Derrick Osebe &bull; React 19 &bull; Vite &bull; Tailwind CSS</p>
      </footer>
    </section>
  )
}