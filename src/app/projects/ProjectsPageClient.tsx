'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'
import { Shield, Github, ExternalLink, Code, Cloud, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PageContainer from '@/components/PageContainer'
import { projects } from '@/data/projects'
import { cybersecurityTools, CYBERSECURITY_REPO } from '@/data/cybersecurity-tools'

type Tab = 'featured' | 'security'

export default function ProjectsPageClient() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<Tab>('featured')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (searchParams.get('tab') === 'security') {
      setTab('security')
    }
  }, [searchParams])

  const featured = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      <MotionSection className="py-12 lg:py-20" initial="initial" animate="animate" variants={staggerContainer}>
        <PageContainer>
          <MotionDiv variants={fadeInUp} className="text-center mb-12">
            <MotionH1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Work</span>
            </MotionH1>
            <MotionP variants={fadeInUp} className="text-[#E0E0E0] text-base sm:text-lg max-w-2xl mx-auto">
              Featured builds and a 15-tool security portfolio — everything in one place.
            </MotionP>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="flex justify-center mb-10">
            <div className="inline-flex rounded-2xl bg-white/5 p-1.5 border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={() => setTab('featured')}
                className={`rounded-xl px-6 py-2.5 text-sm font-medium transition-all ${
                  tab === 'featured'
                    ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white shadow-lg'
                    : 'text-[#E0E0E0] hover:text-white'
                }`}
              >
                Featured Projects
              </button>
              <button
                type="button"
                onClick={() => setTab('security')}
                className={`rounded-xl px-6 py-2.5 text-sm font-medium transition-all ${
                  tab === 'security'
                    ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white shadow-lg'
                    : 'text-[#E0E0E0] hover:text-white'
                }`}
              >
                Security Tools (15)
              </button>
            </div>
          </MotionDiv>

          {tab === 'featured' && (
            <>
              <MotionDiv variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-10">
                {[
                  { id: 'all', label: 'All', icon: Code },
                  { id: 'cybersecurity', label: 'Security', icon: Shield },
                  { id: 'cloud', label: 'Cloud', icon: Cloud },
                  { id: 'full-stack', label: 'Full-Stack', icon: Globe },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFilter(id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium border transition-colors ${
                      filter === id
                        ? 'border-[#FF8C42] bg-[#FF8C42]/15 text-[#FF8C42]'
                        : 'border-white/15 text-[#E0E0E0] hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </MotionDiv>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((project, index) => (
                  <MotionDiv
                    key={project.id}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-lg hover:border-[#FF8C42]/40 hover:shadow-[#FF8C42]/10 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] mb-4 group-hover:w-16 transition-all" />
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                      <Badge variant="outline" className="shrink-0 text-xs border-white/20 text-white/70">
                        {project.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#E0E0E0]/90 leading-relaxed mb-4 line-clamp-3 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 5).map((t) => (
                        <Badge key={t} variant="outline" className="text-xs border-[#FF8C42]/25 text-white/75">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.github && (
                        <Button asChild size="sm" variant="outline" className="border-[#FF8C42]/40 text-[#FF8C42] hover:bg-[#FF8C42]/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3.5 w-3.5 mr-1.5" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.live?.startsWith('/') && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] hover:opacity-90 text-white"
                          onClick={() => setTab('security')}
                        >
                          View 15 Tools
                        </Button>
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </>
          )}

          {tab === 'security' && (
            <MotionDiv variants={fadeInUp}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 rounded-2xl border border-[#FF8C42]/25 bg-gradient-to-r from-[#FF8C42]/10 to-[#FF5E78]/5 p-5 sm:p-6">
                <div className="text-center sm:text-left">
                  <p className="text-white font-semibold text-lg">Cybersecurity Beginner Projects</p>
                  <p className="text-sm text-[#E0E0E0] mt-1">April 2025 – June 2026 · Python, Go, C++, V, Bash</p>
                </div>
                <Button asChild size="sm" className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white shrink-0 mx-auto sm:mx-0">
                  <a href={CYBERSECURITY_REPO} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Full Repo
                  </a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {cybersecurityTools.map((tool, index) => (
                  <MotionDiv
                    key={tool.id}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.02 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#FF8C42]/30 hover:bg-white/[0.07] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#FF8C42] font-mono font-semibold">#{String(tool.id).padStart(2, '0')}</span>
                      <span className="text-xs text-[#A5E9FF]">{tool.period}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1.5">{tool.name}</h3>
                    <p className="text-xs text-[#E0E0E0] leading-relaxed mb-2 line-clamp-2">{tool.description}</p>
                    <p className="text-xs text-white/50">{tool.stack}</p>
                  </MotionDiv>
                ))}
              </div>

              <p className="text-center text-sm text-[#E0E0E0]/70 mt-10">
                Source and setup docs for every tool in the{' '}
                <a href={CYBERSECURITY_REPO} className="text-[#FF8C42] hover:underline inline-flex items-center gap-1">
                  monorepo <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </MotionDiv>
          )}
        </PageContainer>
      </MotionSection>
    </div>
  )
}
