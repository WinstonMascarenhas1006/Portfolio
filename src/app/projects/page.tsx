'use client'

import { useState, useMemo } from 'react'
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionP,
  MotionSection,
  MotionCard,
  fadeInUp,
  staggerContainer,
  hoverScale,
  hoverLift,
  smoothTransition
} from '@/lib/animation'
import {
  Code,
  Globe,
  Shield,
  Cloud,
  GitBranch,
  ExternalLink,
  Github,
  Eye,
  Filter,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'Elastic ML Inference Serving',
    description:
      'Autoscaling image-classification inference on Kubernetes using ResNet-18 with sub-0.5s p99 latency under variable load; focused on elasticity, orchestration, and SLOs.',
    image: '/api/placeholder/600/400',
    category: 'cloud',
    organization: 'Technische Universität Ilmenau (RCSE)',
    technologies: [
      'Kubernetes',
      'Docker',
      'Python',
      'FastAPI',
      'PyTorch (ResNet-18)',
      'Prometheus',
      'Grafana',
      'Matplotlib',
      'REST APIs'
    ],
    features: [
      'Microservices on Kubernetes (API gateway, inference pods, monitoring)',
      'Custom autoscaler on latency and queue length (beats HPA at 70%/90% CPU)',
      'Latency SLO 0.5s p99 with end-to-end instrumentation',
      'Benchmarking vs HPA, time-series analysis, reusable autoscaler module'
    ],
    outcomes: [
      '30% reduction in p99 latency vs Kubernetes HPA at 90% CPU target',
      'Reduced over-/under-provisioning by ~25%, improving resource efficiency',
      'Delivered modular autoscaler reusable across ML inference services'
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'May 2025 – Jul 2025',
    teamSize: 3
  },
  {
    id: 2,
    title: 'HISSEC – ABAC-Based Access Control for Hospital Information System',
    description:
      'Formal ABACα policy model with modular mappings, role-driven permissions, and automata-based state transitions ensuring EHR isolation and maintainable policies.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: 'Technische Universität Ilmenau',
    technologies: [
      'ABACα',
      'Set Theory',
      'Automata Theory',
      'Formal Spec',
      'LaTeX'
    ],
    features: [
      'Modular mapping functions and dynamic vs static attribute separation',
      'Role-based fetch permissions; set-intersection to reduce rule complexity ~40%',
      'Deterministic automaton for user/admin operations'
    ],
    outcomes: [
      'Prevented unauthorized EHR reads with precise, role-driven controls',
      'Reduced rule complexity by ~40% and simplified policy maintenance',
      'Clear separation of dynamic and static policy components'
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Jun 2025 – Jul 2025',
    teamSize: 1
  },
  {
    id: 3,
    title: 'AES Implementation',
    description:
      'Python implementation of AES with 128/192/256-bit keys, ECB/CBC modes, PKCS#7 padding, validated against NIST test vectors with perf benchmarks.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: 'Technische Universität Ilmenau',
    technologies: ['Python', 'AES-128/192/256', 'NIST Vectors', 'ECB', 'CBC', 'PKCS#7'],
    features: [
      'SubBytes, ShiftRows, MixColumns, AddRoundKey, Key Expansion',
      'Encryption/decryption modules and correctness verification',
      'Runtime and memory benchmarking'
    ],
    outcomes: [
      'Verified correctness against official NIST test vectors',
      'Benchmarked runtime and memory usage across key sizes/modes'
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Nov 2024 – Dec 2024',
    teamSize: 1
  },
  {
    id: 4,
    title: 'Pharmacy Management System',
    description:
      'PMS unifying inventory, e‑prescriptions, billing, POS/insurance, with dashboards and security controls for reliable operations.',
    image: '/api/placeholder/600/400',
    category: 'full-stack',
    organization: "St. Joseph's University",
    technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS', 'MySQL', 'RBAC'],
    features: [
      'Real-time stock/expiry tracking, alerts, barcoded dispensing, auto restock',
      'E‑prescriptions and billing, POS and insurance integrations',
      'Dashboards for sales/inventory; RBAC, encryption, access logs'
    ],
    outcomes: [
      'Faster, error-resistant dispensing workflows with automated restocking',
      'Improved visibility via KPI dashboards; stronger security with RBAC and logs'
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Mar 2023 – Aug 2023',
    teamSize: 3
  },
  {
    id: 5,
    title: 'Weaponization of IoT – The Rise of Microbots',
    description:
      'Research on autonomous microbots: attack surfaces, swarm tactics, C2 patterns; threat model, kill-chain, and mitigations across consumer/industrial IoT.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: "St. Joseph's University",
    technologies: ['IoT Security', 'Threat Modeling', 'Anomaly Detection', 'Network Segmentation', 'Signed Firmware'],
    features: [
      'Comprehensive literature review across academic/industry/policy sources',
      'Identity-first access, segmentation, signed firmware, supply-chain controls',
      'Proposed anomaly-based detection and response strategies'
    ],
    outcomes: [
      'Produced conceptual threat model and microbot kill chain',
      'Outlined practical mitigations spanning identity, network, and firmware'
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'May 2020 – Oct 2020',
    teamSize: 1
  }
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Code, count: projects.length },
  { id: 'full-stack', label: 'Full-Stack', icon: Globe, count: projects.filter(p => p.category === 'full-stack').length },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: projects.filter(p => p.category === 'cybersecurity').length },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, count: projects.filter(p => p.category === 'cloud' || p.category === 'devops').length }
]

const statusColors = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  planning: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    if (selectedCategory === 'cloud') {
      return projects.filter(p => p.category === 'cloud' || p.category === 'devops')
    }
    return projects.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      {/* Hero Section */}
      <MotionSection
        className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B] text-white py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <MotionDiv variants={fadeInUp} className="text-center">
              <MotionH1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Projects</span>
              </MotionH1>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
                A collection of projects showcasing my expertise in cybersecurity, cloud architecture, and full-stack development.
              </MotionP>
            </MotionDiv>
          </div>
        </div>

        {/* Animated background elements */}
        <MotionDiv
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-10 w-32 h-32 bg-soft-peach/10 rounded-full blur-xl"
        />
        <MotionDiv
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-16 right-10 w-40 h-40 bg-powder-blue/10 rounded-full blur-xl"
        />
      </MotionSection>

      {/* Category Filter */}
      <MotionSection
        className="py-16 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MotionDiv variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Filter by Category</h2>
              <p className="text-[#E0E0E0] text-center">Explore projects based on your interests and expertise areas</p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <MotionDiv key={category.id} {...hoverScale}>
                  <Button
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90'
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

      {/* Projects Grid */}
      <MotionSection
        className="py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <MotionDiv
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF8C42]/30 transition-all duration-300 overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-[#FF8C42] to-[#FF5E78] flex items-center justify-center">
                      {project.category === 'cybersecurity' ? <Shield className="w-16 h-16 text-white/50" /> : project.category === 'cloud' ? <Cloud className="w-16 h-16 text-white/50" /> : <Code className="w-16 h-16 text-white/50" />}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                                                                           <div className="p-6 flex flex-col min-h-[300px]">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-powder-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                       <div>
                         <h4 className="text-[#FF8C42] font-medium text-sm mb-2">Technologies</h4>
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
                       </div>

                       <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
                         <span>Duration: {project.duration}</span>
                         <span>Team: {project.teamSize} people</span>
                       </div>

                       <div className="flex gap-2">
                        <MotionDiv {...hoverScale}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-[#FF8C42]/30 text-[#FF8C42] hover:bg-[#FF8C42] hover:text-deep-navy"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProject(project)
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </MotionDiv>
                        {project.github && (
                          <MotionDiv {...hoverScale}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white/70 hover:bg-white/10"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          </MotionDiv>
                        )}
                        {project.live && (
                          <MotionDiv {...hoverScale}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white/70 hover:bg-white/10"
                              asChild
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </MotionDiv>
                        )}
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Project Detail Modal */}
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
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#1E1B4B]/95 border border-white/15 shadow-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-[#E0E0E0] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[#FF8C42] font-medium mb-3">Description</h3>
                  <p className="text-[#E0E0E0] leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Technologies Used</h3>
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
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-[#E0E0E0] text-sm flex items-center">
                          <div className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-powder-blue">{selectedProject.duration}</div>
                    <div className="text-[#E0E0E0] text-sm">Duration</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-soft-peach">{selectedProject.teamSize}</div>
                    <div className="text-[#E0E0E0] text-sm">Team Size</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <Badge className={statusColors[selectedProject.status as keyof typeof statusColors]}>
                      {selectedProject.status}
                    </Badge>
                    <div className="text-[#E0E0E0] text-sm mt-2">Status</div>
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
                  {selectedProject.live && (
                    <Button asChild className="flex-1 bg-soft-peach hover:bg-soft-peach/90 text-deep-navy">
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </MotionCard>
        </MotionDiv>
      )}
    </div>
  )
}
