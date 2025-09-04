import type { LucideIcon } from 'lucide-react'
import { Leaf } from 'lucide-react'

export type LeadershipEntry = {
  id: number
  title: string
  organization: string
  institution?: string
  duration: string
  category: string
  logo?: string
  icon?: LucideIcon
  highlights: string[]
}

export const leadershipEntries: LeadershipEntry[] = [
  {
    id: 1,
    title: 'President',
    organization: 'National Service Scheme (NSS)',
    institution: "St. Joseph's College",
    duration: 'May 2021 – Aug 2022',
    category: 'Leadership & Social Impact',
    logo: '/NSS_logo.png',
    highlights: [
      'Led 150+ volunteers in planning and executing NSS initiatives at institutional level',
      'Promoted social responsibility and national integration through service activities',
      'Spearheaded community projects on literacy, health awareness, and sustainability',
      'Represented NSS at inter-college events, raising program visibility and networks',
    ],
  },
  {
    id: 2,
    title: 'Dance Crew Member',
    organization: 'Mrityunjaya',
    duration: 'Apr 2019 – Sep 2021',
    category: 'Arts & Culture',
    logo: '/MRITYUNJAYA_logo.jpg',
    highlights: [
      'Performed at inter-college and cultural events, representing the institution',
      'Collaborated with diverse team members, strengthening teamwork and creativity',
      'Balanced academics with cultural contributions, showcasing time management',
    ],
  },
  {
    id: 3,
    title: 'President',
    organization: 'Eco Club',
    duration: 'May 2018 – Feb 2019',
    category: 'Environment & Sustainability',
    icon: Leaf,
    highlights: [
      'Led green initiatives promoting environmental awareness among students',
      'Organized eco-drives and awareness campaigns on sustainability',
      'Encouraged student participation in environmental projects and clean-up drives',
    ],
  },
]
