import { useState } from 'react'
import { PERSONAL_INFO } from '../constants'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`
    }
  }

  return (
    <section aria-label="Candidate Overview" className="space-y-6 pt-4 sm:pt-8">
      {/* Live Status & Metadata Pill */}
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>{PERSONAL_INFO.status}</span>
        </div>
        <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
        <span className="text-zinc-500">{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
      </div>

      {/* Main Title & Role with Luminous Titanium Gradient */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-300 font-medium tracking-tight">
          {PERSONAL_INFO.title} &mdash; <span className="text-zinc-100">{PERSONAL_INFO.focus}</span>
        </p>
      </div>

      {/* Executive Bio */}
      <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
        {PERSONAL_INFO.summary}
      </p>

      {/* Action Row: Copy Email, GitHub, Direct Message */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-white active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={copied ? "Email copied to clipboard" : `Copy email address ${PERSONAL_INFO.email}`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied to Clipboard</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-zinc-700 group-hover:text-zinc-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-sm font-medium px-4 py-2.5 rounded-lg active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Visit Derrick Osebe's GitHub Profile"
        >
          <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 text-sm font-medium px-3 py-2.5 transition-colors duration-300"
        >
          <span>Send message</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}



