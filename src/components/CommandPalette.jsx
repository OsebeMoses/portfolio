import { useState, useEffect, useRef, useMemo } from 'react'
import { PERSONAL_INFO } from '../constants'

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const actions = useMemo(
    () => [
      {
        id: 'jump-projects',
        title: 'Jump to Case Studies & Projects',
        subtitle: 'ColdTrace & Wakili Mkononi workbench',
        category: 'Navigation',
        icon: (
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        perform: () => {
          const el = document.getElementById('case-studies-heading')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'jump-experience',
        title: 'Jump to Experience & Competencies',
        subtitle: 'Telematics Africa & 4-tier stack matrix',
        category: 'Navigation',
        icon: (
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        perform: () => {
          const el = document.getElementById('experience-heading')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'jump-contact',
        title: 'Jump to Contact',
        subtitle: 'Direct email & communication',
        category: 'Navigation',
        icon: (
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        perform: () => {
          const el = document.getElementById('contact-heading')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'copy-email',
        title: 'Copy Email Address',
        subtitle: PERSONAL_INFO.email,
        category: 'Actions',
        icon: (
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        ),
        perform: async () => {
          try {
            await navigator.clipboard.writeText(PERSONAL_INFO.email)
          } catch {
            window.location.assign(`mailto:${PERSONAL_INFO.email}`)
          }
        },
      },
      {
        id: 'open-github',
        title: 'Open GitHub Profile',
        subtitle: PERSONAL_INFO.githubHandle,
        category: 'Actions',
        icon: (
          <svg className="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        ),
        perform: () => {
          window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer')
        },
      },
      {
        id: 'download-cv',
        title: 'Download Curriculum Vitae (CV)',
        subtitle: 'Direct PDF document',
        category: 'Actions',
        icon: (
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        perform: () => {
          window.open(PERSONAL_INFO.resumeUrl, '_blank')
        },
      },
    ],
    []
  )

  const filteredActions = useMemo(() => {
    if (!query) return actions
    const q = query.toLowerCase()
    return actions.filter(
      (action) =>
        action.title.toLowerCase().includes(q) || action.subtitle.toLowerCase().includes(q)
    )
  }, [actions, query])

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    setSelectedIndex(0)
  }

  const handleClose = useCallback(() => {
    setQuery('')
    setSelectedIndex(0)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform()
          handleClose()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredActions, selectedIndex, handleClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-sm transition-all"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-700/80 shadow-2xl shadow-black/80 overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
            aria-label="Search command"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => (
              <button
                key={action.id}
                type="button"
                onClick={() => {
                  action.perform()
                  handleClose()
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                  idx === selectedIndex ? 'bg-indigo-600/20 text-white border border-indigo-500/40' : 'text-zinc-300 hover:bg-zinc-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-zinc-800/80 border border-zinc-700/60">
                    {action.icon}
                  </div>
                  <div>
                    <div className="font-medium text-zinc-100">{action.title}</div>
                    <div className="text-[11px] text-zinc-400 font-mono mt-0.5">{action.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">{action.category}</span>
                  {idx === selectedIndex && (
                    <kbd className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-700/60 px-1.5 py-0.5 rounded">
                      ↵
                    </kbd>
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-950/80 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Navigation: <kbd className="px-1 bg-zinc-800 rounded text-zinc-400">↑</kbd><kbd className="px-1 bg-zinc-800 rounded text-zinc-400">↓</kbd></span>
            <span>Select: <kbd className="px-1 bg-zinc-800 rounded text-zinc-400">↵</kbd></span>
          </div>
          <span>Derrick Osebe Portfolio</span>
        </div>
      </div>
    </div>
  )
}
