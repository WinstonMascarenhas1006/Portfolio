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
      className="hero-premium relative min-h-[calc(100vh-3.5rem)] overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-[15%] h-[480px] w-[480px] rounded-full bg-[#FF8C42]/[0.06] blur-[130px]"
        aria-hidden
      />

      <div className="page-container relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center pb-24 pt-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="order-2 text-center lg:order-1 lg:max-w-xl lg:text-left xl:max-w-2xl">
            <MotionDiv variants={fadeInUp}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Enterprise Cloud & Security
              </p>
            </MotionDiv>

            <MotionH1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-6xl"
            >
              <span className="block">My name is</span>
              <span className="mt-2 block bg-gradient-to-r from-[#FF8C42] to-[#FF6B5A] bg-clip-text text-transparent">
                Winston
              </span>
              <span className="mt-1 block">Mascarenhas</span>
            </MotionH1>

            <MotionP
              variants={fadeInUp}
              className="mt-6 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
            >
              Cybersecurity Enthusiast & Cloud Architect
            </MotionP>

            <MotionP
              variants={fadeInUp}
              className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400 lg:mx-0"
            >
              I build secure, scalable, and resilient cloud solutions that drive innovation
              and protect digital assets.
            </MotionP>

            <MotionDiv
              variants={fadeInUp}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF8C42]/15 transition-all duration-300 hover:brightness-110 sm:px-8 sm:py-3.5 sm:text-base"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/Winston Mascarenhas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Download className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                Resume
              </Link>
            </MotionDiv>

            <MotionDiv
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/[0.06] pt-8 lg:justify-start"
            >
              {[
                { value: '20+', label: 'Projects' },
                { value: '15+', label: 'Security Tools' },
                { value: '6', label: 'Certifications' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-bold tracking-tight text-white sm:text-2xl">{item.value}</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </div>

          {/* Portrait — cropped right, soft gradient blend (no harsh vertical cut) */}
          <MotionDiv
            variants={fadeInUp}
            className="order-1 relative mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-none"
          >
            <div className="hero-portrait-wrap relative mx-auto aspect-[3/4] w-full max-w-[340px] lg:aspect-auto lg:h-[min(72vh,640px)] lg:max-w-none">
              <Image
                src="/winston.png"
                alt="Winston Mascarenhas"
                fill
                priority
                className="scale-[1.08] object-cover object-[72%_12%]"
                sizes="(max-width: 1024px) 340px, 42vw"
              />
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <Link
          href="#highlights"
          className="group flex flex-col items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-300"
          aria-label="Explore projects and case studies"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs">
            Explore Projects & Case Studies
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </MotionSection>
  )
}
