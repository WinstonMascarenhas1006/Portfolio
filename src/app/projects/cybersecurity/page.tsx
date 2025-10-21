import { redirect } from 'next/navigation'

export default function CybersecurityRedirect() {
  redirect('/projects?tab=security')
}
