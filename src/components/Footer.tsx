'use client'

import Link from 'next/link'
import { 
  MotionFooter, 
  MotionDiv, 
  MotionP,
  fadeInUp, 
  staggerContainer,
  hoverScale 
} from '@/lib/animation'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/win-mascarenhas', icon: Linkedin },
  { name: 'Email', href: 'mailto:winstonmascarenhas@gmail.com', icon: Mail },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    try {
      if (typeof window !== 'undefined') {
        const scrollingElement = document.scrollingElement as HTMLElement | null
        const supportsSmooth = typeof (document?.documentElement as any)?.style?.scrollBehavior !== 'undefined'
        if (supportsSmooth) {
          const topEl = document.getElementById('top')
          if (topEl) {
            topEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          window.scrollTo({ top: 0, behavior: 'smooth' })
          scrollingElement?.scrollTo?.({ top: 0, behavior: 'smooth' } as any)
        } else {
          document.documentElement.scrollTop = 0
          ;(document.body as HTMLElement).scrollTop = 0
          if (scrollingElement) scrollingElement.scrollTop = 0
        }
      }
    } catch (error) {
      document.documentElement.scrollTop = 0
      ;(document.body as HTMLElement).scrollTop = 0
      const scrollingElement = document.scrollingElement as HTMLElement | null
      if (scrollingElement) scrollingElement.scrollTop = 0
    }
  }

  return (
    <MotionFooter
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-transparent border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Footer Content - 3 Columns */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          
          {/* Column 1: Branding */}
          <MotionDiv variants={fadeInUp} className="text-center md:text-left">
                         <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WM</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Winston Mascarenhas</h3>
                <p className="text-[#E0E0E0] text-sm">Cybersecurity & Cloud Expert</p>
              </div>
            </div>
          </MotionDiv>

          {/* Column 2: Quick Links */}
          <MotionDiv variants={fadeInUp} className="text-center md:text-left">
                         <h4 className="text-white font-semibold text-base mb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <MotionDiv
                  key={link.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FF6600] transition-colors duration-300 text-sm font-medium block py-1"
                  >
                    {link.name}
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Column 3: Social Icons */}
          <MotionDiv variants={fadeInUp} className="text-center md:text-left">
                         <h4 className="text-white font-semibold text-base mb-2">Connect</h4>
             <p className="text-[#E0E0E0] text-sm mb-2">Open to opportunities & collaborations.</p>
            
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((social, index) => (
                <MotionDiv
                  key={social.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FF6600]/10 border border-[#FF6600]/20 rounded-lg flex items-center justify-center text-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

        </div>

                 {/* Minimal Bottom Row */}
         <MotionDiv
           variants={fadeInUp}
           className="flex flex-col sm:flex-row justify-between items-center pt-2 pb-4 border-t border-white/5"
         >
           <div className="text-[#E0E0E0] text-sm text-center sm:text-left mb-4 sm:mb-0">
             © 2024 Winston Mascarenhas
           </div>
           
           <div className="flex items-center space-x-6 pr-16">
             <Link
               href="/privacy"
               className="text-[#E0E0E0] hover:text-[#FF6600] text-sm font-medium transition-colors duration-300"
             >
               Privacy Policy
             </Link>
             <Link
               href="/terms"
               className="text-[#E0E0E0] hover:text-[#FF6600] text-sm font-medium transition-colors duration-300"
             >
               Terms
             </Link>
           </div>
         </MotionDiv>
      </div>

             {/* Scroll to Top Button */}
       <MotionDiv
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 1 }}
         className="fixed bottom-8 right-8 z-50 pointer-events-auto"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
       >
        <Button
          onClick={scrollToTop}
          onMouseDown={(e) => { e.preventDefault(); scrollToTop() }}
          type="button"
          size="sm"
          className="bg-[#FF6600] hover:bg-[#E55A00] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-12 h-12 p-0"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </MotionDiv>
    </MotionFooter>
  )
}
