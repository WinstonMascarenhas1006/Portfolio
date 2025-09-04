'use client'

import Image from 'next/image'
import { Calendar, MapPin, Users } from 'lucide-react'
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'
import PageContainer from '@/components/PageContainer'
import { Badge } from '@/components/ui/badge'
import { leadershipEntries } from '@/data/leadership'

function LeadershipCard({
  entry,
  index,
  isLast,
}: {
  entry: (typeof leadershipEntries)[0]
  index: number
  isLast: boolean
}) {
  const Icon = entry.icon

  return (
    <MotionDiv variants={fadeInUp} transition={{ delay: index * 0.1 }} className="relative pl-8 sm:pl-10">
      {!isLast && (
        <span
          className="absolute left-[11px] top-14 bottom-0 w-px bg-gradient-to-b from-[#FF8C42]/50 via-[#FF8C42]/20 to-transparent sm:left-[15px]"
          aria-hidden
        />
      )}

      <span
        className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-[#FF8C42]/40 bg-zinc-900 shadow-[0_0_12px_rgba(255,140,66,0.25)] sm:h-7 sm:w-7"
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
      </span>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FF8C42]/30 hover:shadow-xl hover:shadow-[#FF8C42]/5">
        <div className="border-b border-white/10 bg-gradient-to-r from-[#FF8C42]/8 via-transparent to-[#A5E9FF]/5 px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-md sm:h-[4.5rem] sm:w-[4.5rem]">
              {entry.logo ? (
                <Image
                  src={entry.logo}
                  alt={`${entry.organization} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : Icon ? (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#FF8C42]/10">
                  <Icon className="h-8 w-8 text-[#FF8C42]" strokeWidth={1.75} />
                </div>
              ) : null}
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-[#FF8C42]/35 bg-[#FF8C42]/10 text-[#FF8C42] text-xs font-medium"
                >
                  {entry.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#A5E9FF]/30 text-[#A5E9FF] text-xs"
                >
                  <Calendar className="mr-1 h-3 w-3" />
                  {entry.duration}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">{entry.title}</h3>
              <p className="mt-1 text-base font-medium text-[#A5E9FF]">{entry.organization}</p>
              {entry.institution && (
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FF8C42]/80" />
                  {entry.institution}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Key contributions
          </h4>
          <ul className="space-y-3">
            {entry.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </MotionDiv>
  )
}

export default function LeadershipSection() {
  return (
    <MotionSection
      className="border-t border-white/5 bg-zinc-950/50 py-16 lg:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <PageContainer>
        <MotionDiv variants={fadeInUp} className="mb-12 text-center lg:mb-14">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#FF8C42]/30 bg-[#FF8C42]/10 px-4 py-1.5">
            <Users className="h-4 w-4 text-[#FF8C42]" />
            <span className="text-sm font-medium text-[#FF8C42]">Leadership & Community</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Leadership <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Roles where I led teams, drove community initiatives, and balanced service with
            creative and environmental impact during my undergraduate years.
          </p>
        </MotionDiv>

        <div className="mx-auto max-w-3xl space-y-8">
          {leadershipEntries.map((entry, index) => (
            <LeadershipCard
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === leadershipEntries.length - 1}
            />
          ))}
        </div>
      </PageContainer>
    </MotionSection>
  )
}
