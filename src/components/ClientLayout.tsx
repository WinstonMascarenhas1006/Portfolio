'use client'

import RecruiterInterestCTA from '@/components/RecruiterInterestCTA'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      {children}
      <RecruiterInterestCTA />
    </>
  )
}
