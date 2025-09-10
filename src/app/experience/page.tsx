'use client'

import { useState } from 'react'
import { 
  MotionDiv, 
  MotionSection,
  MotionP,
  fadeInUp, 
  fadeInFromLeft,
  staggerContainer, 
  smoothTransition,
  hoverScale
} from '@/lib/animation'
import { 
  Shield, 
  Cloud, 
  Building2,
  Calendar,
  MapPin,
  ChevronRight,
  X,
  Briefcase,
  GraduationCap,
  Music,
  Leaf
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    id: 1,
    title: 'Senior Digital Infrastructure Engineer',
    company: 'Brillio',
    location: 'Bengaluru, India',
    period: 'Oct 2022 - Oct 2024',
    duration: '2 years',
    type: 'Full-time',
    description: 'Worked on enterprise IT infrastructure, cloud platforms, and service management systems, ensuring high availability, security, and operational efficiency.',
    achievements: [
      'Resolved 95%+ escalation cases, reducing average MTTR by ~50%',
      'Achieved 100% SLA compliance through optimized workflows and automation',
      'Designed and implemented an Attribute-Based Access Control (ABAC) model for healthcare clients, ensuring audit-ready compliance and secure data isolation',
      'Automated user management and IAM tasks using PowerShell scripting, cutting manual workload significantly',
      'Maintained 99.9% system uptime across ServiceNow, Freshworks, and SharePoint environments'
    ],
    technologies: ['ServiceNow', 'SharePoint', 'Freshworks', 'Freshservice', 'PowerShell', 'Azure'],
    skills: ['Incident Management', 'IAM/PAM', 'Cloud Security Operations', 'Process Automation', 'Stakeholder Communication'],
    category: 'infrastructure',
    featured: true
  }
]

const categories = [
  { id: 'all', label: 'All Experience', icon: Shield, count: experiences.length },
  { id: 'infrastructure', label: 'Infrastructure', icon: Cloud, count: experiences.filter(e => e.category === 'infrastructure').length }
]

const skills = [
  { name: 'Incident & Escalation Management', level: 95, category: 'operations' },
  { name: 'Cloud & Security Operations', level: 90, category: 'security' },
  { name: 'IAM/PAM', level: 88, category: 'security' },
  { name: 'Process Automation & Scripting', level: 85, category: 'automation' },
  { name: 'Stakeholder Communication', level: 80, category: 'soft-skills' },
  { name: 'Service Management', level: 92, category: 'operations' },
  { name: 'Infrastructure Management', level: 87, category: 'infrastructure' },
  { name: 'Azure Cloud Platform', level: 90, category: 'cloud' }
]

const leadershipExperiences = [
  {
    id: 1,
    title: 'President',
    organization: 'National Service Scheme (NSS)',
    institution: 'St. Joseph\'s College',
    duration: 'May 2021 – Aug 2022',
    category: 'Leadership & Social Impact',
    categoryColor: 'from-purple-500 to-pink-500',
    icon: GraduationCap,
    highlights: [
      'Led 150+ volunteers in planning and executing NSS initiatives at institutional level',
      'Promoted social responsibility and national integration through service activities',
      'Spearheaded community projects on literacy, health awareness, and sustainability',
      'Represented NSS at inter-college events, raising program visibility and networks'
    ]
  },
  {
    id: 2,
    title: 'Dance Crew Member',
    organization: 'Mrityunjaya',
    institution: '',
    duration: 'Apr 2019 – Sep 2021',
    category: 'Arts & Culture',
    categoryColor: 'from-blue-500 to-cyan-500',
    icon: Music,
    highlights: [
      'Performed at inter-college and cultural events, representing the institution',
      'Collaborated with diverse team members, strengthening teamwork and creativity',
      'Balanced academics with cultural contributions, showcasing time management'
    ]
  },
  {
    id: 3,
    title: 'President',
    organization: 'Eco Club',
    institution: '',
    duration: 'May 2018 – Feb 2019',
    category: 'Environment & Sustainability',
    categoryColor: 'from-green-500 to-emerald-500',
    icon: Leaf,
    highlights: [
      'Led green initiatives promoting environmental awareness among students',
      'Organized eco-drives and awareness campaigns on sustainability',
      'Encouraged student participation in environmental projects and clean-up drives'
    ]
  }
]

// Checkpoint Node Component for Leadership Journey
function CheckpointNode({ experience, index, isExpanded, onToggle }: { 
  experience: any; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Checkpoint Node */}
      <MotionDiv
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        onClick={onToggle}
      >
        {/* Glowing Ring */}
        <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${experience.categoryColor} rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
        
        {/* Click Indicator - Always Visible */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            Click to explore
          </div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80 mx-auto"></div>
        </div>
        
        {/* Main Node */}
        <div className={`relative w-12 h-12 bg-gradient-to-r ${experience.categoryColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 group-hover:border-white/40 group-hover:shadow-xl group-hover:shadow-white/20 transition-all duration-300 overflow-hidden p-1 cursor-pointer`}>
            {experience.organization === 'National Service Scheme (NSS)' ? (
              <img 
                src="/NSS_logo.png" 
                alt="NSS Logo" 
                className="w-10 h-10 object-cover rounded-full"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            ) : experience.organization === 'Mrityunjaya' ? (
              <img 
                src="/MRITYUNJAYA_logo.jpg" 
                alt="Mrityunjaya Logo" 
                className="w-10 h-10 object-cover rounded-full"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            ) : (
              <experience.icon className="w-8 h-8 text-white" />
            )}
          </div>
        
        {/* Pulse Animation */}
        <MotionDiv
          className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${experience.categoryColor} rounded-full opacity-30`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
        
        {/* Interactive Cursor */}
        <div className="absolute inset-0 w-12 h-12 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Button Indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/30 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </MotionDiv>

             
    </div>
  )
}



export default function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null)
  const [expandedLeadership, setExpandedLeadership] = useState<number | null>(null)

  const filteredExperiences = experiences.filter(exp => 
    selectedCategory === 'all' || exp.category === selectedCategory
  )

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedExperience(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      {/* Hero Section */}
      <MotionSection
        className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B] text-white"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <MotionDiv
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <Briefcase className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Professional <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              My journey through various roles and projects, building expertise in cybersecurity, cloud architecture, and system engineering.
            </p>
          </MotionDiv>
        </div>
        
        {/* Animated background elements */}
        <MotionDiv
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-soft-peach/10 rounded-full blur-xl"
        />
        <MotionDiv
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-powder-blue/10 rounded-full blur-xl"
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
              <h2 className="text-3xl font-bold text-white mb-4">Filter by Expertise Area</h2>
              <p className="text-[#E0E0E0] text-center">Explore my experience across different technology domains</p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <MotionDiv key={category.id} {...hoverScale}>
                  <Button
                    variant={selectedCategory === category.id ? "default" : "outline"}
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

      {/* Experience Timeline */}
      <MotionSection
        className="py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {filteredExperiences.map((experience, index) => (
                <MotionDiv
                  key={experience.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedExperience(experience)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                                             <div className="flex items-center gap-4 mb-4">
                         {experience.company === 'Brillio' ? (
                           <div className="w-16 h-16 rounded-xl flex items-center justify-center group">
                             <img 
                               src="/brillio.jpg" 
                               alt="Brillio Logo" 
                               className="w-16 h-16 rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-purple-500/30 transition-all duration-300"
                               style={{
                                 filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
                                 imageRendering: 'crisp-edges'
                               }}
                             />
                           </div>
                         ) : (
                           <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-xl flex items-center justify-center">
                             <Building2 className="w-8 h-8 text-white" />
                           </div>
                         )}
                                                 <div className="flex-1">
                           <div className="flex items-center gap-3 mb-2">
                             <h3 className="text-xl md:text-2xl font-bold text-white">{experience.title}</h3>
                           </div>
                          <div className="flex items-center gap-4 text-[#E0E0E0] text-sm">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {experience.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#E0E0E0] leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="outline" className="border-[#FF8C42]/30 text-white/80">
                            {tech}
                          </Badge>
                        ))}
                        {experience.technologies.length > 5 && (
                          <Badge variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42]">
                            +{experience.technologies.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white">
                        {experience.type}
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-[#FF8C42]" />
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Leadership & Community Experience - Immersive Journey */}
      <MotionSection 
        className="py-24 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] opacity-60"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <MotionDiv
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MotionDiv variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Leadership Journey</h2>
              <MotionP 
                variants={fadeInFromLeft}
                transition={{ ...smoothTransition, delay: 0.1 }}
                className="text-lg text-[#A5E9FF] max-w-3xl mx-auto"
              >
                A visual journey through my impact milestones - each checkpoint represents a moment where I led, inspired, and created positive change.
              </MotionP>
            </MotionDiv>

                         {/* Flowing Path Container */}
             <div className="relative min-h-96">
               {/* Curved Path */}
               <svg 
                 className="absolute inset-0 w-full h-32 lg:h-40 pointer-events-none"
                 viewBox="0 0 1200 160"
                 preserveAspectRatio="none"
               >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FF5E78" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <path
                  d="M 50 80 Q 300 40 600 80 T 1150 80"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-draw"
                />
              </svg>

                             {/* Checkpoint Nodes */}
               <div className="relative z-10 flex justify-between items-center px-8 lg:px-16 mt-16">
                 {leadershipExperiences.map((experience, index) => (
                   <CheckpointNode 
                     key={experience.id} 
                     experience={experience} 
                     index={index}
                     isExpanded={expandedLeadership === experience.id}
                     onToggle={() => setExpandedLeadership(expandedLeadership === experience.id ? null : experience.id)}
                   />
                 ))}
               </div>

                               {/* Expanded Content Area */}
                {expandedLeadership && (
                  <MotionDiv
                    className="mt-8 w-full max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {(() => {
                      const experience = leadershipExperiences.find(exp => exp.id === expandedLeadership)
                      if (!experience) return null
                      
                      return (
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                                                     {/* Role Header */}
                           <div className="flex items-start gap-6 mb-6">
                                                                                         <div className={`w-16 h-16 bg-gradient-to-r ${experience.categoryColor} rounded-full flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden p-1`}>
                                {experience.organization === 'National Service Scheme (NSS)' ? (
                                  <img 
                                    src="/NSS_logo.png" 
                                    alt="NSS Logo" 
                                    className="w-14 h-14 object-cover rounded-full"
                                    style={{
                                      imageRendering: 'crisp-edges'
                                    }}
                                  />
                                ) : experience.organization === 'Mrityunjaya' ? (
                                  <img 
                                    src="/MRITYUNJAYA_logo.jpg" 
                                    alt="Mrityunjaya Logo" 
                                    className="w-14 h-14 object-cover rounded-full"
                                    style={{
                                      imageRendering: 'crisp-edges'
                                    }}
                                  />
                                ) : (
                                  <experience.icon className="w-10 h-10 text-white" />
                                )}
                              </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                              <h4 className="text-lg text-[#A5E9FF] font-semibold mb-1">{experience.organization}</h4>
                              {experience.institution && <p className="text-[#E0E0E0] text-base mb-1">{experience.institution}</p>}
                              <p className="text-[#E0E0E0] text-base opacity-80">{experience.duration}</p>
                            </div>
                            <button
                              onClick={() => setExpandedLeadership(null)}
                              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 flex-shrink-0"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Category Badge */}
                          <div className="mb-6">
                            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${experience.categoryColor} rounded-full text-white font-medium text-base shadow-md`}>
                              {experience.category}
                            </div>
                          </div>

                          {/* Impact Moments */}
                          <div className="space-y-4">
                            <h5 className="text-white font-semibold text-lg mb-4">Impact Moments</h5>
                            <div className="space-y-3">
                              {experience.highlights.map((highlight: string, i: number) => (
                                <div key={i} className="flex items-start gap-4">
                                  <div className={`w-3 h-3 bg-gradient-to-r ${experience.categoryColor} rounded-full mt-2 flex-shrink-0`}></div>
                                  <p className="text-[#E0E0E0] text-base leading-relaxed">{highlight}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })()}
                  </MotionDiv>
                )}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Skills Overview */}
      <MotionSection
        className="py-24 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MotionDiv variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
              <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
                A comprehensive overview of my technical and professional skills developed through years of experience
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={skill.name}
                  variants={fadeInUp}
                  transition={{ ...smoothTransition, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <span className="text-[#A5E9FF] font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExperience(null)}
        >
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#1E1B4B]/95 border border-white/15 shadow-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="p-6">
                             <div className="flex items-start justify-between mb-6">
                 <div className="flex items-center gap-4">
                   {selectedExperience.company === 'Brillio' && (
                     <div className="flex-shrink-0 group">
                       <img 
                         src="/brillio.jpg" 
                         alt="Brillio Logo" 
                         className="w-12 h-12 md:w-14 md:h-14 rounded-lg shadow-lg group-hover:scale-105 group-hover:shadow-purple-500/30 transition-all duration-300"
                         style={{
                           filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
                           imageRendering: 'crisp-edges'
                         }}
                       />
                     </div>
                   )}
                   <div>
                     <h2 className="text-2xl font-bold text-white mb-2">{selectedExperience.title}</h2>
                     <div className="flex items-center gap-4 text-[#E0E0E0] text-sm">
                       <div className="flex items-center gap-1">
                         <Building2 className="w-4 h-4" />
                         {selectedExperience.company}
                       </div>
                       <div className="flex items-center gap-1">
                         <MapPin className="w-4 h-4" />
                         {selectedExperience.location}
                       </div>
                     </div>
                   </div>
                 </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedExperience(null)}
                  className="text-[#E0E0E0] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[#FF8C42] font-medium mb-2">Role Description</h3>
                  <p className="text-[#E0E0E0] leading-relaxed">
                    Contributed to the design, deployment, and maintenance of IT infrastructure and enterprise applications. Focused on service reliability, cloud security, automation, and identity management while collaborating with cross-functional teams.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#FF8C42] font-medium mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="text-[#E0E0E0] text-sm flex items-start">
                        <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78]" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-[#FF8C42]/30 text-white/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#FF8C42] font-medium mb-3">Skills Developed</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-powder-blue">{selectedExperience.period}</div>
                    <div className="text-[#E0E0E0] text-sm">Duration</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-soft-peach">{selectedExperience.type}</div>
                    <div className="text-[#E0E0E0] text-sm">Employment Type</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-powder-blue">{selectedExperience.location}</div>
                    <div className="text-[#E0E0E0] text-sm">Location</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </div>
  )
}
