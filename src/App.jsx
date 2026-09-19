import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)

  // Global shortcut: ⌘K or Ctrl+K opens command palette
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-300">
      {/* Accessibility: Skip link for keyboard and screen reader navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-500 focus:text-white focus:font-semibold focus:rounded focus:outline-none transition-all duration-300"
      >
        Skip to main content
      </a>

      {/* Blueprint Dot-Matrix Engineering Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"
        aria-hidden="true"
      />

      {/* Atmospheric diffused ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-indigo-500/[0.07] blur-[140px] rounded-full" />
      </div>

      <main
        id="main-content"
        tabIndex={-1}
        className="relative max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28 focus:outline-none"
      >
        <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        {/* Lead with Projects (Top priority for software engineering graduate portfolios) */}
        <Projects activeSkill={activeSkill} />
        {/* Experience, Education, Certifications & Competencies */}
        <About activeSkill={activeSkill} onSelectSkill={setActiveSkill} />
        {/* Contact & Footer */}
        <Contact />
      </main>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  )
}