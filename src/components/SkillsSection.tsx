'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { 
  MotionDiv, 
  MotionH2, 
  MotionP, 
  MotionSection,
  fadeInUp, 
  staggerContainer, 
  smoothTransition 
} from '@/lib/animation'
import { 
  Shield, 
  Cloud, 
  Code, 
  GraduationCap,
  Users,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

// Simplified skill data
const skillsData = [
  { name: 'IAM/PAM', category: 'Cybersecurity & Identity Management' },
  { name: 'ABAC', category: 'Cybersecurity & Identity Management' },
  { name: 'Microsoft Azure', category: 'Cloud & Infrastructure' },
  { name: 'AWS', category: 'Cloud & Infrastructure' },
  { name: 'Python', category: 'Development & Tools' },
  { name: 'Java', category: 'Development & Tools' },
  { name: 'BFT Consensus', category: 'Research & Academic Expertise' },
  { name: 'Team Leadership', category: 'Professional Skills' },
]

const categories = [
  {
    name: 'Cybersecurity & Identity Management',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  },
  {
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    name: 'Development & Tools',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  {
    name: 'Research & Academic Expertise',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    name: 'Professional Skills',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  }
]

function SkillCategory({ category, skills, isExpanded, onToggle }: { 
  category: typeof categories[0], 
  skills: any[], 
  isExpanded: boolean, 
  onToggle: () => void 
}) {
  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={smoothTransition}
      className={`${category.bgColor} ${category.borderColor} border rounded-xl p-6 backdrop-blur-sm relative`}
    >
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          console.log('Button clicked!')
          onToggle()
        }}
        className="w-full flex items-center justify-between text-left mb-4 group cursor-pointer relative z-10 hover:bg-white/5 transition-colors duration-200"
        type="button"
      >
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
            <category.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-powder-blue transition-colors">
            {category.name}
          </h3>
        </div>
        <div className="text-powder-blue transition-transform duration-300 group-hover:scale-110">
          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </div>
      </button>
      
      {isExpanded && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-3 py-2 text-sm font-medium border-2 hover:border-powder-blue/50 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                >
                  {skill.name}
                </Badge>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      )}
    </MotionDiv>
  )
}

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleCategory = (categoryName: string) => {
    console.log('Toggle clicked for category:', categoryName)
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName)
    } else {
      newExpanded.add(categoryName)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <MotionSection
      id="skills"
      ref={ref}
      className="py-24"
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={fadeInUp}
            className="text-center mb-16"
          >
          <MotionH2
            variants={fadeInUp}
            className="text-3xl font-bold text-white mb-4"
          >
            Skills & Expertise
          </MotionH2>
          <MotionP
            variants={fadeInUp}
            className="text-xl text-[#E0E0E0] max-w-3xl"
          >
            A comprehensive overview of my technical and professional skills developed through academic research and industry experience
          </MotionP>
          </MotionDiv>

        <MotionDiv
          variants={staggerContainer}
          className="space-y-6"
        >
          {categories.map((category, index) => {
            const categorySkills = skillsData.filter(skill => skill.category === category.name)
            const isExpanded = expandedCategories.has(category.name)
            
            return (
              <SkillCategory
                key={category.name}
                category={category}
                skills={categorySkills}
                isExpanded={isExpanded}
                onToggle={() => toggleCategory(category.name)}
              />
            )
          })}
        </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
