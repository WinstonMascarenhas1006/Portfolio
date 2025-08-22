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
    checkConsentStatus()
  }, [])

  const checkConsentStatus = async () => {
    try {
      // First check localStorage for immediate response
      const localConsentData = localStorage.getItem('visitorConsent')
      
      // Always verify with server for cross-browser/device tracking
      const response = await fetch('/api/check-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          // Include any existing local data
          localConsent: localConsentData ? JSON.parse(localConsentData) : null
        }),
      })

      const data = await response.json()
      
      if (data.hasConsent) {
        setHasConsent(true)
        // Update localStorage if server confirms consent
        if (data.consentData) {
          localStorage.setItem('visitorConsent', JSON.stringify(data.consentData))
        }
      } else {
        // Server says no consent, clear any local data
        localStorage.removeItem('visitorConsent')
        setHasConsent(false)
      }
    } catch (error) {
      console.error('Error checking consent status:', error)
      // Fallback to localStorage check
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
    } finally {
      setIsLoading(false)
    }
  }

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
