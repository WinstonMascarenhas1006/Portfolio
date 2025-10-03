'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  MotionCard,
  fadeInUp,
  staggerContainer,
  hoverScale,
} from '@/lib/animation'
import {
  Code,
  Globe,
  Shield,
  Cloud,
  ExternalLink,
  Github,
  Eye,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects, type Project } from '@/data/projects'

const categories = [
  { id: 'all', label: 'All Projects', icon: Code, count: projects.length },
  {
    id: 'full-stack',
    label: 'Full-Stack',
    icon: Globe,
    count: projects.filter((p) => p.category === 'full-stack').length,
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    icon: Shield,
    count: projects.filter((p) => p.category === 'cybersecurity').length,
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    count: projects.filter((p) => p.category === 'cloud' || p.category === 'devops').length,
  },
]

const statusColors = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  planning: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
}

function LiveButton({ project }: { project: Project }) {
  if (!project.live) return null
  const className = 'flex-1 bg-soft-peach hover:bg-soft-peach/90 text-deep-navy'
  if (project.live.startsWith('/')) {
    return (
      <Button asChild className={className}>
        <Link href={project.live}>
          <ExternalLink className="w-4 h-4 mr-2" />
          Explore Tools
        </Link>
      </Button>
    )
  }
  return (
    <Button asChild className={className}>
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-2" />
        Live Demo
      </a>
    </Button>
  )
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    if (selectedCategory === 'cloud') {
      return projects.filter((p) => p.category === 'cloud' || p.category === 'devops')
    }
    return projects.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      <MotionSection
        className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B] text-white py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="flex justify-center">
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <MotionDiv variants={fadeInUp} className="text-center">
              <MotionH1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Featured{' '}
                <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">
                  Projects
                </span>
              </MotionH1>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-[#E0E0E0] max-w-3xl leading-relaxed">
                Cybersecurity tooling, cloud architecture, and full-stack development — including a 15-project
                security portfolio built over 15 months.
              </MotionP>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        className="py-16 bg-white/10 backdrop-blur-xl border-y border-white/20 shadow-inner"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionDiv variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <MotionDiv key={category.id} {...hoverScale}>
                  <Button
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                    <Badge variant="secondary" className="ml-2 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16 lg:py-20" initial="initial" animate="animate" variants={staggerContainer}>
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <MotionDiv
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/10 backdrop-blur-xl border-2 border-white/25 hover:border-[#FF8C42]/60 transition-all duration-300 overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.02]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-[#FF8C42] to-[#FF5E78] flex items-center justify-center">
                      {project.category === 'cybersecurity' ? (
                        <Shield className="w-16 h-16 text-white/50" />
                      ) : project.category === 'cloud' ? (
                        <Cloud className="w-16 h-16 text-white/50" />
                      ) : (
                        <Code className="w-16 h-16 text-white/50" />
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={statusColors[project.status]}>{project.status}</Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col min-h-[300px]">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-powder-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-[#FF8C42]/30 text-white/80">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs border-[#FF8C42]/30 text-white/80">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
                        <span>Duration: {project.duration}</span>
                        <span>Team: {project.teamSize} people</span>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-[#FF8C42]/30 text-[#FF8C42] hover:bg-[#FF8C42] hover:text-deep-navy"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {selectedProject && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <MotionCard
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/15 backdrop-blur-2xl border-2 border-white/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)} className="text-[#E0E0E0]">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <p className="text-[#E0E0E0] leading-relaxed">{selectedProject.description}</p>

                {selectedProject.outcomes.length > 0 && (
                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Outcomes</h3>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome) => (
                        <li key={outcome} className="text-[#E0E0E0] text-sm flex items-start">
                          <div className="w-2 h-2 rounded-full mr-3 mt-1.5 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-[#FF8C42]/30 text-white/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="text-[#E0E0E0] text-sm flex items-start">
                          <div className="w-2 h-2 rounded-full mr-3 mt-1.5 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button asChild className="flex-1 bg-slate-blue hover:bg-slate-blue/90">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  <LiveButton project={selectedProject} />
                </div>
              </div>
            </div>
          </MotionCard>
        </MotionDiv>
      )}
    </div>
  )
}
