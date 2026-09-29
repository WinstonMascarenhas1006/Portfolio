'use client'

import Link from 'next/link'
import {
  MotionFooter,
  MotionDiv,
  fadeInUp,
  staggerContainer,
} from '@/lib/animation'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageContainer from '@/components/PageContainer'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/WinstonMascarenhas1006', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/win-mascarenhas', icon: Linkedin },
  { name: 'Email', href: 'mailto:winstonmascarenhas@gmail.com', icon: Mail },
]

const quickLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const exploreLinks = [
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Testimonials', href: '/testimonials' },
]

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-[#FF8C42]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    try {
      if (typeof window !== 'undefined') {
        const scrollingElement = document.scrollingElement as HTMLElement | null
        const topEl = document.getElementById('top')
        if (topEl) {
          topEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
        scrollingElement?.scrollTo?.({ top: 0, behavior: 'smooth' } as ScrollToOptions)
      }
    } catch {
      document.documentElement.scrollTop = 0
      ;(document.body as HTMLElement).scrollTop = 0
    }
  }

  return (
    <MotionFooter
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="border-t border-white/10 bg-zinc-950/50"
    >
      <PageContainer className="py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <MotionDiv variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]">
                <span className="text-sm font-bold text-white">WM</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Winston Mascarenhas</h3>
                <p className="text-sm text-slate-400">Cybersecurity & Cloud</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Building secure, scalable cloud solutions. Based in Stuttgart, Germany.
            </p>
          </MotionDiv>

          {/* Quick Links — primary nav */}
          <MotionDiv variants={fadeInUp}>
            <FooterLinkList title="Quick Links" links={quickLinks} />
          </MotionDiv>

          {/* Explore — same size & position as Quick Links */}
          <MotionDiv variants={fadeInUp}>
            <FooterLinkList title="Explore" links={exploreLinks} />
          </MotionDiv>

          {/* Connect */}
          <MotionDiv variants={fadeInUp}>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <p className="mb-4 text-sm text-slate-400">
              Open to opportunities and collaborations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FF8C42]/25 bg-[#FF8C42]/10 text-[#FF8C42] transition-all hover:bg-[#FF8C42] hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row"
        >
          <p className="text-sm text-slate-500">© 2024 Winston Mascarenhas</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-400 transition-colors hover:text-[#FF8C42]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-400 transition-colors hover:text-[#FF8C42]"
            >
              Terms
            </Link>
          </div>
        </MotionDiv>
      </PageContainer>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={scrollToTop}
          type="button"
          size="sm"
          className="h-12 w-12 rounded-full border-0 bg-[#FF8C42] p-0 text-white shadow-lg hover:bg-[#FF5E78]"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </MotionDiv>
    </MotionFooter>
  )
}
