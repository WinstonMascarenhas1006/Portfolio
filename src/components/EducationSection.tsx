'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'
import PageContainer from '@/components/PageContainer'
import { educationEntries } from '@/data/education'

function EducationCard({ entry, index }: { entry: (typeof educationEntries)[0]; index: number }) {
  return (
    <MotionDiv
      variants={fadeInUp}
      transition={{ delay: index * 0.12 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#EEF1F5] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF8C42]/15"
    >
      {/* Header band with logo */}
      <div className="relative bg-[#1B2A4A] px-6 pb-10 pt-8">
        <span
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg backdrop-blur-sm"
          aria-hidden
        >
          {entry.flag}
        </span>

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white p-3 shadow-lg ring-4 ring-white/20">
          <Image
            src={entry.logo}
            alt={`${entry.institution} logo`}
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Body */}
      <div className="relative -mt-6 flex flex-1 flex-col rounded-t-3xl bg-[#EEF1F5] px-6 pb-6 pt-8">
        <h3 className="text-center font-serif text-xl font-bold leading-snug text-[#1B2A4A] sm:text-2xl">
          {entry.institution}
        </h3>
        <p className="mt-2 text-center text-sm font-medium text-[#4A5568] sm:text-base">
          {entry.field}
        </p>
        <p className="mt-3 text-center text-base font-semibold text-[#2D3748]">
          {entry.degree}
        </p>
        <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-[#1B2A4A]/80">
          {entry.status}
        </p>
        <p className="mt-3 text-center text-sm font-medium text-[#FF6B35]">
          {entry.period}
        </p>
        <p className="mt-1 text-center text-sm text-[#718096]">
          {entry.location}
        </p>

        <ul className="mt-6 space-y-2.5 border-t border-[#CBD5E0]/60 pt-5">
          {entry.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-[#4A5568]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8C42]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Link
          href={entry.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[#1B2A4A] transition-colors hover:text-[#FF6B35]"
        >
          Visit institution
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Campus photo */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={entry.campus}
          alt={`${entry.institution} campus`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/40 to-transparent" />
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
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Education
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#E0E0E0]">
            Academic background in computer systems and applications, from foundational
            software engineering to graduate research in security and cloud technologies.
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
