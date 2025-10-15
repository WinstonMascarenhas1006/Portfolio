'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Briefcase, X, Mail, Building2, User, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FormState = {
  name: string
  company: string
  email: string
  message: string
}

const DISMISS_KEY = 'recruiterCtaDismissed'

export default function RecruiterInterestCTA() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === '1') {
        setHidden(true)
        return
      }
    } catch {
      // ignore
    }
    const timer = setTimeout(() => setHidden(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setOpen(false)
    setHidden(true)
    try {
      localStorage.setItem(DISMISS_KEY, '1')
    } catch {
      // ignore
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/recruiter-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong')
      }

      setDone(true)
      setTimeout(() => {
        setOpen(false)
        setHidden(true)
        try {
          localStorage.setItem(DISMISS_KEY, '1')
        } catch {
          // ignore
        }
      }, 1800)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Try Contact instead.')
    } finally {
      setSubmitting(false)
    }
  }

  if (hidden) return null

  return (
    <div className="fixed bottom-6 left-4 z-40 sm:left-6 sm:bottom-8">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/90 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md transition hover:border-[#FF8C42]/50 hover:bg-zinc-900"
          aria-label="Hiring? Leave a note"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]">
            <Briefcase className="h-4 w-4 text-white" />
          </span>
          <span className="pr-1">Hiring? Leave a note</span>
        </button>
      ) : (
        <div className="w-[min(100vw-2rem,22rem)] rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">Optional — for recruiters</p>
              <p className="mt-0.5 text-xs text-slate-400">
                Site is open. Leave details only if you want a follow-up.
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {done ? (
            <div className="flex flex-col items-center gap-2 py-6 text-center">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
              <p className="text-sm text-white">Thanks — I&apos;ll be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="block space-y-1">
                <span className="flex items-center gap-1.5 text-xs text-[#FF8C42]">
                  <User className="h-3 w-3" /> Name
                </span>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="border-white/15 bg-white/5 text-white"
                />
              </label>
              <label className="block space-y-1">
                <span className="flex items-center gap-1.5 text-xs text-[#FF8C42]">
                  <Building2 className="h-3 w-3" /> Company
                </span>
                <Input
                  required
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  placeholder="Company or agency"
                  className="border-white/15 bg-white/5 text-white"
                />
              </label>
              <label className="block space-y-1">
                <span className="flex items-center gap-1.5 text-xs text-[#FF8C42]">
                  <Mail className="h-3 w-3" /> Email
                </span>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                  className="border-white/15 bg-white/5 text-white"
                />
              </label>
              <label className="block space-y-1">
                <span className="text-xs text-slate-400">Note (optional)</span>
                <Input
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Role / timeline"
                  className="border-white/15 bg-white/5 text-white"
                />
              </label>

              {error && <p className="text-xs text-red-400">{error}</p>}

              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white"
                >
                  <Send className="mr-1.5 h-3.5 w-3.5" />
                  {submitting ? 'Sending…' : 'Send note'}
                </Button>
                <Button asChild type="button" variant="outline" className="border-white/20 text-slate-200">
                  <Link href="/contact">Full contact form</Link>
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
