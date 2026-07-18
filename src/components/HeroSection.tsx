'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/win-mascarenhas/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/WinstonMascarenhas1006',
    icon: Github,
  },
]

function SocialCircle({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: typeof Linkedin
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-200 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#FF8C42]/45 hover:bg-[#FF8C42]/10 hover:text-[#FF8C42] xl:h-16 xl:w-16"
    >
      <Icon
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 xl:h-8 xl:w-8"
        strokeWidth={1.75}
      />
    </Link>
  )
}

export default function HeroSection() {
  return (
    <MotionSection
      className="hero-premium relative min-h-[calc(100vh-3.5rem)] overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#FF8C42]/[0.08] blur-[120px]"
        aria-hidden
      />

      <div className="page-container relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center pb-24 pt-8 lg:py-12">
        {/* Mobile portrait */}
        <div className="relative z-[1] mx-auto mb-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:max-w-xs lg:hidden">
          <Image
            src="/winston-hero-mobile.png"
            alt="Winston Mascarenhas"
            fill
            priority
            className="object-cover object-center"
            sizes="320px"
            quality={100}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </div>

        {/* Desktop: copy | socials (gap) | portrait — never overlap the face */}
        <div className="grid items-center lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(300px,0.9fr)] lg:gap-6 xl:gap-10">
          <div className="text-center lg:max-w-xl lg:text-left xl:max-w-2xl">
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
            </MotionDiv>

            <MotionDiv
              variants={fadeInUp}
              className="mt-8 flex items-center justify-center gap-5 lg:hidden"
            >
              {socialLinks.map(({ name, href, icon }) => (
                <SocialCircle key={name} href={href} label={name} icon={icon} />
              ))}
            </MotionDiv>

            <MotionDiv
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/[0.06] pt-8 lg:justify-start"
            >
              {[
                { value: '20+', label: 'Projects', href: '/projects' },
                { value: '15+', label: 'Security Tools', href: '/projects' },
                { value: '6', label: 'Certifications', href: '/certifications' },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="group transition-colors">
                  <div className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#FF8C42] sm:text-2xl">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500 group-hover:text-slate-400">
                    {item.label}
                  </div>
                </Link>
              ))}
            </MotionDiv>
          </div>

          {/* Gap column — LinkedIn / GitHub sit here, clear of the face */}
          <MotionDiv
            variants={fadeInUp}
            className="relative z-20 hidden flex-col items-center justify-center gap-6 self-center lg:flex"
          >
            {socialLinks.map(({ name, href, icon }) => (
              <SocialCircle key={name} href={href} label={name} icon={icon} />
            ))}
          </MotionDiv>

          {/* Portrait in layout flow — sharp, no stretch under icons */}
          <MotionDiv
            variants={fadeInUp}
            className="relative z-[1] mx-auto hidden w-full max-w-[480px] lg:block xl:max-w-[520px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/winston-hero.png"
                alt="Winston Mascarenhas"
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 420px, 100vw"
                quality={100}
              />
              {/* Light blend only at edges — keep face sharp */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-zinc-950/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-zinc-950/80 to-transparent" />
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
