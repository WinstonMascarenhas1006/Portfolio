'use client'

import Link from 'next/link'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  fadeInUp,
  staggerContainer,
  hoverScale,
  smoothTransition,
} from '@/lib/animation'
import { Shield, Github, ExternalLink, ArrowLeft, Calendar, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  cybersecurityTools,
  CYBERSECURITY_REPO,
} from '@/data/cybersecurity-tools'

export default function CybersecurityPortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      <MotionSection
        className="relative overflow-hidden text-white py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <MotionDiv variants={fadeInUp}>
              <Link
                href="/projects"
                className="inline-flex items-center text-[#A5E9FF] hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <MotionH1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4">
                Cybersecurity{' '}
                <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">
                  Projects Portfolio
                </span>
              </MotionH1>
              <MotionP variants={fadeInUp} className="text-xl text-[#E0E0E0] max-w-3xl mx-auto mb-8">
                Fifteen security tools built between April 2025 and June 2026 — one project per month
                in Python, Go, C++, V, and Bash.
              </MotionP>
              <MotionDiv variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <MotionDiv {...hoverScale}>
                  <Button asChild className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white">
                    <a href={CYBERSECURITY_REPO} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </MotionDiv>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        className="py-12 lg:py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cybersecurityTools.map((tool, index) => (
                <MotionDiv
                  key={tool.id}
                  variants={fadeInUp}
                  transition={{ ...smoothTransition, delay: index * 0.04 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-[#FF8C42]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-[#FF8C42]">#{String(tool.id).padStart(2, '0')}</span>
                    <Badge variant="outline" className="text-xs border-[#FF8C42]/30 text-white/80">
                      {tool.stack}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-[#E0E0E0] leading-relaxed mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-white/20 text-white/70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-[#A5E9FF]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {tool.period}
                  </div>
                  <div className="flex items-center text-xs text-[#E0E0E0]/70 mt-1">
                    <Code2 className="w-3 h-3 mr-1" />
                    {tool.slug}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-20" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
        <div className="flex justify-center">
          <div className="text-center px-4">
            <p className="text-[#E0E0E0] mb-4">Full source code, setup scripts, and architecture docs in the monorepo.</p>
            <Button asChild variant="outline" className="border-[#FF8C42]/40 text-[#FF8C42]">
              <a href={CYBERSECURITY_REPO} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                github.com/WinstonMascarenhas1006/cybersecurity-projects
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
