'use client'

import { X, Github, ExternalLink, CheckCircle, Target } from 'lucide-react'
import { MotionDiv } from '@/lib/animation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

type ProjectDetailModalProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <MotionDiv
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-zinc-900/95 px-6 py-5 backdrop-blur-md">
          <div>
            <Badge variant="outline" className="mb-2 border-white/20 text-white/70 text-xs">
              {project.duration}
            </Badge>
            <h2 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{project.organization}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42]/90 text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <CheckCircle className="h-4 w-4 text-[#FF8C42]" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
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
              Outcomes
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5E9FF]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-5">
          {project.github && (
            <Button asChild className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.live && !project.live.startsWith('/') && (
            <Button asChild variant="outline" className="border-white/20 text-slate-200">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </MotionDiv>
    </div>
  )
}
