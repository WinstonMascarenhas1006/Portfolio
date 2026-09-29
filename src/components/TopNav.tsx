'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function TopNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold text-white hover:text-[#FF8C42] transition-colors"
          onClick={() => setOpen(false)}
        >
          Winston Mascarenhas
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-gradient-to-r from-[#FF8C42]/20 to-[#FF5E78]/20 text-[#FF8C42]'
                    : 'text-[#E0E0E0] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-[#0F172A]/95 px-4 py-3">
          {mainNav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active ? 'text-[#FF8C42] bg-white/5' : 'text-[#E0E0E0]'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
