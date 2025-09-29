import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import { TransitionProvider } from '@/components/TransitionProvider'
import ClientLayout from '@/components/ClientLayout'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ImageProtection from '@/components/ImageProtection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Winston Mascarenhas - Cyber Security Enthusiast & Cybersecurity Expert',
  description: 'Professional portfolio of Winston Mascarenhas, a cyber security enthusiast, cybersecurity researcher, and cloud architect specializing in secure, scalable solutions.',
  keywords: ['Cyber Security Enthusiast', 'Cybersecurity', 'Cloud Architecture', 'Web Development', 'DevOps', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Winston Mascarenhas' }],
  creator: 'Winston Mascarenhas',
  publisher: 'Winston Mascarenhas',
  robots: 'index, follow',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Winston Mascarenhas - Cyber Security Enthusiast & Cybersecurity Expert',
    description: 'Professional portfolio showcasing cyber security expertise, cybersecurity research, and cloud architecture solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Winston Mascarenhas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winston Mascarenhas - Cyber Security Enthusiast & Cybersecurity Expert',
    description: 'Professional portfolio showcasing cyber security expertise, cybersecurity research, and cloud architecture solutions.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const themeColor = '#1E0C3F'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-[#E0E0E0] antialiased min-h-screen bg-gradient-to-b from-[#1E0C3F] via-[#2C1A63] to-[#2E4374]`}>
        <ImageProtection />
        <TransitionProvider>
          <ClientLayout>
            <Sidebar />
            <main id="top" className="min-h-screen bg-transparent">
              {children}
            </main>
            <Footer />
          </ClientLayout>
        </TransitionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
