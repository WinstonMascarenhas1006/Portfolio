export type EducationEntry = {
  id: string
  institution: string
  field: string
  degree: string
  status: string
  period: string
  location: string
  flag: string
  logo: string
  campus: string
  website: string
  highlights: string[]
}

export const educationEntries: EducationEntry[] = [
  {
    id: 'tu-ilmenau',
    institution: 'Technische Universität Ilmenau',
    field: 'Computer and Systems Engineering',
    degree: 'M.Sc. Computer and Systems Engineering',
    status: "Master's Student",
    period: 'Oct 2024 – Present',
    location: 'Ilmenau, Germany',
    flag: '🇩🇪',
    logo: '/tuilmenau_logo.jpg',
    campus: '/tuilmenau.jpg',
    website: 'https://www.tu-ilmenau.de',
    highlights: [
      'Graduate research in systems engineering, embedded security, and cloud-native architectures',
      'Advanced coursework in security engineering, software systems, and distributed computing',
      'Applying academic foundations to hands-on cybersecurity and infrastructure projects',
    ],
  },
  {
    id: 'st-josephs',
    institution: "St. Joseph's College (Autonomous)",
    field: 'Computer Applications',
    degree: 'Bachelor of Computer Applications',
    status: 'Graduate',
    period: 'Completed Oct 2022',
    location: 'Bengaluru, India',
    flag: '🇮🇳',
    logo: '/sju_logo.png',
    campus: '/sjc.jpg',
    website: 'https://www.sju.edu.in',
    highlights: [
      'Strong foundation in programming, databases, networking, and software engineering',
      'Leadership roles in NSS including cultural coordination and community initiatives',
      'Project-driven learning across web technologies, mobile apps, and system design',
    ],
  },
]
