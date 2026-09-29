import { Suspense } from 'react'
import ProjectsPage from './ProjectsPageClient'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#E0E0E0]">Loading...</div>}>
      <ProjectsPage />
    </Suspense>
  )
}
