import { useState } from 'react'
import { PERSONAL_INFO } from '../constants'
import { useNairobiClock } from '../hooks/useNairobiClock'

export default function Hero({ onOpenCommandPalette }) {
  const [copied, setCopied] = useState(false)
  const [avatarLoaded, setAvatarLoaded] = useState(true)
  const nairobiTime = useNairobiClock()

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
    <section aria-label="Candidate Overview" className="space-y-8 pt-4 sm:pt-8">
      {/* Top Bar: Live Nairobi Telemetry & Command Palette Shortcut */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-semibold text-zinc-200">
            {nairobiTime ? `${nairobiTime} EAT` : 'Nairobi, Kenya'}
          </span>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-zinc-400 hidden sm:inline">{PERSONAL_INFO.status}</span>
        </div>

        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/70 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer text-xs"
          aria-label="Open Command Palette"
        >
          <svg className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:inline">Commands</span>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 group-hover:text-zinc-200 font-mono">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Hero Body: Profile Avatar & Luminous Headings */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        {/* Profile Avatar Frame with Titanium Border and Radar Ping */}
        <div className="relative group shrink-0 w-24 h-24 sm:w-28 sm:h-28">
          {/* Ambient Indigo Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-indigo-500/20 blur-lg group-hover:bg-indigo-500/30 transition-all duration-500" aria-hidden="true" />

          {/* Squircle Image Container */}
          <div className="relative w-full h-full rounded-2xl bg-zinc-900 border-2 border-zinc-800/90 group-hover:border-indigo-500/50 overflow-hidden shadow-2xl transition-all duration-300">
            {avatarLoaded ? (
              <img
                src={PERSONAL_INFO.avatar}
                alt={`${PERSONAL_INFO.name}'s profile`}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                onError={() => setAvatarLoaded(false)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-indigo-400 font-mono font-bold text-2xl">
                DO
              </div>
            )}
          </div>

          {/* Active Presence Radar Ping on Avatar */}
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-900 flex items-center justify-center"
            title="Active & Available"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Name, Role & Focus */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-medium tracking-tight">
            {PERSONAL_INFO.title} &mdash; <span className="text-indigo-400 font-mono text-lg sm:text-xl font-normal">{PERSONAL_INFO.focus}</span>
          </p>
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
            <span>{PERSONAL_INFO.location}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.education}</span>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
        {PERSONAL_INFO.summary}
      </p>

      {/* Tactile Action Suite: Copy Email, Download CV, GitHub, Contact */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* Copy Email Button with Specular Highlight */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-white active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md shadow-black/30 border-t border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
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

        {/* Download Resume / CV Button */}
        <a
          href={PERSONAL_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 text-sm font-medium px-4 py-2.5 rounded-lg active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 shadow-sm"
          aria-label="Download Derrick Osebe Curriculum Vitae"
        >
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download CV</span>
        </a>

        {/* GitHub Button */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-sm font-medium px-4 py-2.5 rounded-lg active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Visit Derrick Osebe's GitHub Profile"
        >
          <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>

        {/* Message Anchor */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 text-sm font-medium px-3 py-2.5 transition-colors duration-200"
        >
          <span>Get in touch</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}