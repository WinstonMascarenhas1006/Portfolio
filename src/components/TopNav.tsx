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

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header className="site-nav sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl backdrop-saturate-150">
      <div className="page-container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white transition-colors hover:text-slate-200"
          onClick={() => setOpen(false)}
        >
          Winston Mascarenhas
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium tracking-tight transition-all duration-200 ${
                  active
                    ? 'border border-white/10 bg-white/[0.06] text-white shadow-sm backdrop-blur-md'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/[0.06] hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/[0.06] bg-zinc-950/95 px-4 py-3 backdrop-blur-xl md:hidden">
          {mainNav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active
                    ? 'border border-white/10 bg-white/[0.06] text-white'
                    : 'text-slate-400 hover:text-slate-200'
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
