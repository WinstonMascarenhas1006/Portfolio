'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'

export default function HeroSection() {
  return (
    <MotionSection
      className="hero-premium relative min-h-[calc(100vh-3.5rem)] overflow-hidden bg-zinc-950"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Ambient depth — no center split line */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-[#FF8C42]/[0.07] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-700/20 blur-[100px]"
        aria-hidden
      />

      <div className="page-container relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy — left, asymmetrical */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <MotionDiv variants={fadeInUp}>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Enterprise Cloud & Security
              </p>
            </MotionDiv>

            <MotionH1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.08]"
            >
              <span className="block text-white">My name is</span>
              <span className="mt-2 block bg-gradient-to-r from-[#FF8C42] to-[#FF6B5A] bg-clip-text text-transparent">
                Winston
              </span>
              <span className="mt-1 block text-white">Mascarenhas</span>
            </MotionH1>

            <MotionP
              variants={fadeInUp}
              className="mt-6 text-lg font-medium tracking-tight text-slate-200 sm:text-xl lg:text-2xl"
            >
              Cybersecurity Enthusiast & Cloud Architect
            </MotionP>

            <MotionP
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
            >
              I build secure, scalable, and resilient cloud solutions that drive innovation
              and protect digital assets.
            </MotionP>

            <MotionDiv
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#FF8C42]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8C42]/30 hover:brightness-110"
              >
                View My Work
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/Winston Mascarenhas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-3.5 text-base font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                <Download className="h-5 w-5 shrink-0" />
                Resume
              </Link>
            </MotionDiv>

            {/* Trust strip */}
            <MotionDiv
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8 lg:justify-start"
            >
              {[
                { value: '20+', label: 'Projects' },
                { value: '15+', label: 'Security Tools' },
                { value: '6', label: 'Certifications' },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold tracking-tight text-white">{item.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </div>

          {/* Portrait — right, masked blend */}
          <MotionDiv
            variants={fadeInUp}
            className="order-1 relative mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-[min(78vh,720px)]">
              <div className="hero-portrait-mask relative h-full w-full">
                <Image
                  src="/winston.png"
                  alt="Winston Mascarenhas"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                />
              </div>
              {/* Soft accent ring */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.06] lg:rounded-none lg:ring-0"
                aria-hidden
              />
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll anchor */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <Link
          href="#highlights"
          className="group flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
          aria-label="Explore projects and case studies"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em]">
            Explore Projects & Case Studies
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce transition-transform group-hover:translate-y-0.5" />
        </Link>
      </div>
    </MotionSection>
  )
}
