'use client'

import { X, Github, ExternalLink, Target, Zap } from 'lucide-react'
import { MotionDiv } from '@/lib/animation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { CybersecurityTool } from '@/data/cybersecurity-tools'
import { CYBERSECURITY_REPO } from '@/data/cybersecurity-tools'
import ToolHeaderBackground from '@/components/security-tool-headers/ToolHeaderBackground'

type SecurityToolModalProps = {
  tool: CybersecurityTool | null
  onClose: () => void
}

export default function SecurityToolModal({ tool, onClose }: SecurityToolModalProps) {
  if (!tool) return null

  const repoUrl = `${CYBERSECURITY_REPO}/tree/main/${tool.slug}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tool-modal-title"
    >
      <MotionDiv
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 border-b border-white/10">
          <div className="relative min-h-[7.5rem] overflow-hidden">
            <ToolHeaderBackground slug={tool.slug} />

            <div className="relative flex items-start justify-between gap-4 px-6 py-5">
              <div className="min-w-0 max-w-[72%] sm:max-w-[68%]">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#FF8C42]">
                    #{String(tool.id).padStart(2, '0')}
                  </span>
                  <Badge variant="outline" className="border-[#A5E9FF]/30 text-[#A5E9FF] text-xs">
                    {tool.period}
                  </Badge>
                </div>
                <h2 id="tool-modal-title" className="text-xl font-bold text-white drop-shadow-sm sm:text-2xl">
                  {tool.name}
                </h2>
                <p className="mt-1 text-sm text-slate-300">{tool.stack}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6 py-6">
          <p className="text-sm leading-relaxed text-slate-300">{tool.overview}</p>

          <div className="flex flex-wrap gap-1.5">
            {tool.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#FF8C42]/30 text-[#FF8C42]/90 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Zap className="h-4 w-4 text-[#FF8C42]" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {tool.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8C42]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Target className="h-4 w-4 text-[#A5E9FF]" />
              Use Cases
            </h3>
            <ul className="space-y-2">
              {tool.useCases.map((useCase) => (
                <li key={useCase} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5E9FF]" />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-5">
          <Button asChild className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View in Repo
            </a>
          </Button>
          <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/5">
            <a href={CYBERSECURITY_REPO} target="_blank" rel="noopener noreferrer">
              Full Monorepo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </MotionDiv>
    </div>
  )
}
