'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import VisitorConsentModal from '@/components/VisitorConsentModal'
import ImageProtection from '@/components/ImageProtection'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Check if user has already given consent
    const consentData = localStorage.getItem('visitorConsent')
    if (consentData) {
      try {
        const parsed = JSON.parse(consentData)
        if (parsed.consent) {
          setHasConsent(true)
        }
      } catch (error) {
        console.error('Error parsing consent data:', error)
      }
    }
    setIsLoading(false)
  }, [])

  const handleConsent = (visitorData: any) => {
    setHasConsent(true)
    // You can add additional logic here if needed
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-[#FF8C42] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // Show consent modal if user hasn't given consent
  const shouldShowConsentModal = !hasConsent

  return (
    <>
      <ImageProtection />
      {shouldShowConsentModal ? (
        <VisitorConsentModal onConsent={handleConsent} />
      ) : (
        children
      )}
    </>
  )
}
