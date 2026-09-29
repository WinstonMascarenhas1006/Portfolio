'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, GraduationCap } from 'lucide-react'
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'
import PageContainer from '@/components/PageContainer'
import { Badge } from '@/components/ui/badge'
import { educationEntries } from '@/data/education'

function EducationCard({ entry, index }: { entry: (typeof educationEntries)[0]; index: number }) {
  return (
    <MotionDiv
      variants={fadeInUp}
      transition={{ delay: index * 0.12 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FF8C42]/35 hover:shadow-xl hover:shadow-[#FF8C42]/10"
    >
      {/* Logo header */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-[#FF8C42]/10 via-transparent to-[#FF5E78]/10 px-6 py-8">
        <span
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-base"
          aria-hidden
        >
          {entry.flag}
        </span>

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white p-2.5 shadow-md">
          <Image
            src={entry.logo}
            alt={`${entry.institution} logo`}
            width={72}
            height={72}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Content — dark theme, sans-serif, left-aligned */}
      <div className="flex flex-1 flex-col px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF8C42]">
          {entry.status}
        </p>

        <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
          {entry.degree}
        </h3>

        <p className="mt-2 text-base font-medium text-[#A5E9FF]">
          {entry.institution}
        </p>

        <p className="mt-1 text-sm text-[#E0E0E0]/80">
          {entry.field}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-[#FF8C42]/40 bg-[#FF8C42]/10 text-[#FF8C42] text-xs font-medium"
          >
            {entry.period}
          </Badge>
          <span className="text-sm text-[#E0E0E0]/70">{entry.location}</span>
        </div>

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
          {entry.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-left text-sm leading-relaxed text-[#E0E0E0]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Link
          href={entry.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF8C42] transition-colors hover:text-[#FF5E78]"
        >
          Visit institution
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* Campus photo */}
      <div className="relative h-40 overflow-hidden border-t border-white/10">
        <Image
          src={entry.campus}
          alt={`${entry.institution} campus`}
          fill
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
      </div>
    </MotionDiv>
  )
}

export default function EducationSection() {
  return (
    <MotionSection
      className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <PageContainer>
        <MotionDiv variants={fadeInUp} className="mb-12 text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#FF8C42]/30 bg-[#FF8C42]/10 px-4 py-1.5">
            <GraduationCap className="h-4 w-4 text-[#FF8C42]" />
            <span className="text-sm font-medium text-[#FF8C42]">Academic Background</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Education
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#E0E0E0] sm:text-lg">
            Graduate research in computer and systems engineering, built on a strong
            foundation in computer applications and software development.
          </p>
        </MotionDiv>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {educationEntries.map((entry, index) => (
            <EducationCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </PageContainer>
    </MotionSection>
  )
}
