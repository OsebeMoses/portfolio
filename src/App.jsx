import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-300">
      {/* Accessibility: Skip link for keyboard and screen reader navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-500 focus:text-white focus:font-semibold focus:rounded focus:outline-none transition-all duration-300"
      >
        Skip to main content
      </a>

      {/* Atmospheric diffused ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-indigo-500/[0.06] blur-[140px] rounded-full" />
      </div>

      <main
        id="main-content"
        tabIndex={-1}
        className="relative max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28 focus:outline-none"
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}