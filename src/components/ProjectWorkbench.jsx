import { useState } from 'react'
import { useSpotlight } from '../hooks/useSpotlight'

export default function ProjectWorkbench({ project, isHighlighted }) {
  const [activeTab, setActiveTab] = useState('preview')
  const [copiedPayload, setCopiedPayload] = useState(false)
  const { coords, isHovered, spotlightProps } = useSpotlight()

  const handleCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(project.payloadSample, null, 2))
      setCopiedPayload(true)
      setTimeout(() => setCopiedPayload(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <article
      aria-labelledby={`project-${project.id}`}
      {...spotlightProps}
      className={`group relative rounded-2xl bg-zinc-900/40 border transition-all duration-300 overflow-hidden ${
        isHighlighted
          ? 'border-indigo-500/80 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/40'
          : 'border-zinc-800/80 hover:border-zinc-700/90'
      }`}
    >
      {/* Radial Spotlight Glow layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
            : undefined,
        }}
        aria-hidden="true"
      />

      {/* Workbench Chrome Titlebar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40 inline-block" />
          </div>

          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">|</span>

          {/* Branch & Domain */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-zinc-200 font-medium">{project.title}</span>
            <span className="text-zinc-600 font-mono hidden md:inline">({project.branch})</span>
          </div>
        </div>

        {/* Role Pill & Environment */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="hidden sm:inline-block text-[11px] text-zinc-400 bg-zinc-800/60 border border-zinc-700/60 px-2 py-0.5 rounded">
            Role: {project.role}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.environment.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Viewport Sub-Header & Tab Selector */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-zinc-900/60 border-b border-zinc-800/60 text-xs font-mono">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-zinc-800 text-zinc-100 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            Interface Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-zinc-800 text-zinc-100 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            Architecture Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('payload')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'payload'
                ? 'bg-zinc-800 text-zinc-100 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            Telemetry Spec
          </button>
        </div>

        {activeTab === 'payload' && (
          <button
            type="button"
            onClick={handleCopyPayload}
            className="text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors px-2 py-1 rounded bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 cursor-pointer inline-flex items-center gap-1.5"
          >
            {copiedPayload ? (
              <span className="text-emerald-400">Copied!</span>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy JSON</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Interactive Workbench Tab Viewport */}
      <div className="p-4 sm:p-6 bg-zinc-950/70 border-b border-zinc-800/60">
        {activeTab === 'preview' && (
          <div className="space-y-4">
            {project.id === 'coldtrace' && (
              <div className="rounded-xl bg-zinc-900/60 border border-zinc-800/80 p-4 space-y-4 font-mono text-xs">
                {/* ColdTrace Telemetry Dashboard UI */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-zinc-200 font-semibold">{project.preview.unitId}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400">{project.preview.route}</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    Battery: <span className="text-emerald-400 font-semibold">{project.preview.battery}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Current Thermal State</div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">{project.preview.temp}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{project.preview.tempRange}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Client Offline Buffer</div>
                    <div className="text-sm font-semibold text-zinc-200 mt-1.5 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {project.preview.bufferedEvents}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-1">IndexedDB Persistence Active</div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Arrhenius Decay Risk</div>
                    <div className="text-sm font-semibold text-indigo-300 mt-1.5">0.0014 hr⁻¹ (Nominal)</div>
                    <div className="text-[10px] text-zinc-500 mt-1">Kinetic shelf-life safe</div>
                  </div>
                </div>

                {/* Simulated Telemetry Sparkline */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1.5">
                    <span>Recent Continuous Sensor Stream (5-min windows)</span>
                    <span className="text-zinc-400 font-mono">Last Ingest: {project.preview.lastPing}</span>
                  </div>
                  <div className="flex items-end gap-2 h-16 px-3 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
                    {project.preview.chartPoints.map((pt, idx) => {
                      const heightPercent = Math.round(((pt - 3.5) / 1.5) * 100)
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            className="w-full bg-indigo-500/50 group-hover/bar:bg-indigo-400 rounded-t transition-colors"
                            style={{ height: `${Math.max(15, heightPercent)}%` }}
                          />
                          <span className="text-[9px] text-zinc-500 hidden sm:inline">{pt}°</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {project.id === 'wakili-mkononi' && (
              <div className="rounded-xl bg-zinc-900/60 border border-zinc-800/80 p-4 space-y-4 font-mono text-xs">
                {/* Wakili Mkononi Legal Query RAG UI */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-zinc-200 font-semibold">Verified Semantic Retrieval Engine</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-indigo-400 font-semibold">{project.preview.confidence}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{project.preview.latency}</span>
                  </div>
                </div>

                {/* User Prompt Box */}
                <div className="p-3 rounded-lg bg-zinc-950/90 border border-zinc-800">
                  <div className="text-[10px] uppercase text-zinc-500 tracking-wider">User Natural Language Query</div>
                  <div className="text-zinc-300 font-sans mt-1 text-sm">
                    &ldquo;{project.preview.query}&rdquo;
                  </div>
                </div>

                {/* Grounded Citation Box */}
                <div className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-indigo-300 text-xs font-semibold flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {project.preview.citation}
                    </div>
                    <span className="text-[10px] text-zinc-500">{project.preview.corpusStatus}</span>
                  </div>
                  <p className="text-zinc-400 font-sans text-xs italic leading-relaxed border-l-2 border-indigo-500/50 pl-3">
                    {project.preview.rulingSnippet}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-400 mb-2">
              System Ingestion Pipeline &amp; Fault Boundaries:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.architecturePipeline.map((node, idx) => (
                <div
                  key={node.step}
                  className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 relative group/node hover:border-indigo-500/60 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                    <span className="text-indigo-400 font-semibold">{node.step}</span>
                    {idx < project.architecturePipeline.length - 1 && (
                      <span className="text-zinc-600 hidden lg:inline" aria-hidden="true">&rarr;</span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-zinc-200">{node.name}</div>
                  <div className="text-xs text-zinc-400 mt-1 leading-snug">{node.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payload' && (
          <div className="space-y-2 font-mono text-xs">
            <pre className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-300 overflow-x-auto text-[11px] leading-relaxed">
              <code>{JSON.stringify(project.payloadSample, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Mini Case Study: Problem, Role, What Was Built, Challenge, Outcome */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header: Domain, Title & Subtitle */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
              {project.domain}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">{project.architectureType}</span>
          </div>

          <h3
            id={`project-${project.id}`}
            className="text-2xl sm:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight"
          >
            {project.title}
          </h3>
        </div>

        {/* 1. Problem Statement Box */}
        <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-500/20 space-y-1">
          <div className="text-xs font-mono font-semibold text-amber-400/90 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>The Problem</span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* 2. What He Built & Role */}
        <div className="space-y-1">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            What Was Built &amp; Role ({project.role})
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {project.whatBuilt}
          </p>
        </div>

        {/* 3. Real Technical Challenge & Engineering Solution Callout */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Key Engineering Challenge &amp; Resolution</span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            <div>
              <span className="font-semibold text-zinc-200">The Challenge: </span>
              <span className="text-zinc-400">{project.technicalChallenge}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-200">Engineering Solution: </span>
              <span className="text-zinc-400">{project.solution}</span>
            </div>
          </div>
        </div>

        {/* 4. Verifiable Outcome */}
        <div className="space-y-1">
          <div className="text-xs font-mono font-semibold text-emerald-400/90 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Verified Outcome</span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.outcome}
          </p>
        </div>

        {/* 5. Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/80"
              >
                <div className="text-[11px] font-mono text-zinc-500 uppercase">{metric.label}</div>
                <div className="text-xs sm:text-sm font-mono font-medium text-zinc-200 mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* 6. Technology Stack & Action Links (GitHub + Working Live Demo / Status) */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/60">
          <div className="flex flex-wrap gap-1.5" aria-label={`Technologies in ${project.title}`}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800/40 text-zinc-400 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-indigo-200 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-700/60 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Live Demo</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg"
                title={project.demoStatus}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                <span>Local Verified Prototype</span>
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-800/70 hover:bg-zinc-800 border border-zinc-700/80 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
