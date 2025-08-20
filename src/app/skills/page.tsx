'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  MotionDiv, 
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
  TrendingUp,
  Globe
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

// Comprehensive skills data
const skillsData = {
  cybersecurity: {
    title: 'Cybersecurity & Identity Management',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    skills: [
      { name: 'IAM/PAM', level: 95, description: 'Identity and Access Management, Privileged Access Management' },
      { name: 'ABAC', level: 90, description: 'Attribute-Based Access Control' },
      { name: 'Zero Trust', level: 88, description: 'Zero Trust Security Architecture' },
      { name: 'Threat Detection', level: 92, description: 'Advanced Threat Detection & Response' },
      { name: 'Penetration Testing', level: 85, description: 'Ethical Hacking & Security Assessment' },
      { name: 'Security Compliance', level: 90, description: 'SOC 2, ISO 27001, GDPR' }
    ]
  },
  cloud: {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'AWS', level: 95, description: 'Amazon Web Services - EC2, S3, Lambda, CloudFormation' },
      { name: 'Azure', level: 92, description: 'Microsoft Azure - VMs, App Services, Functions' },
      { name: 'Google Cloud', level: 88, description: 'GCP - Compute Engine, Cloud Storage, Functions' },
      { name: 'Kubernetes', level: 85, description: 'Container Orchestration & Management' },
      { name: 'Docker', level: 90, description: 'Containerization & Microservices' },
      { name: 'Terraform', level: 87, description: 'Infrastructure as Code' }
    ]
  },
  development: {
    title: 'Development & Tools',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: [
      { name: 'Python', level: 95, description: 'Backend Development, Data Science, Automation' },
      { name: 'JavaScript', level: 90, description: 'Frontend & Full-Stack Development' },
      { name: 'React/Next.js', level: 88, description: 'Modern Web Development' },
      { name: 'Node.js', level: 85, description: 'Server-Side JavaScript' },
      { name: 'Java', level: 82, description: 'Enterprise Applications' },
      { name: 'Rust', level: 80, description: 'Systems Programming, Performance' }
    ]
  },
  research: {
    title: 'Research & Academic Expertise',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: [
      { name: 'BFT Consensus', level: 95, description: 'Byzantine Fault Tolerant Consensus Protocols' },
      { name: 'Distributed Systems', level: 92, description: 'Distributed Computing & Algorithms' },
      { name: 'Blockchain', level: 88, description: 'Blockchain Technology & Smart Contracts' },
      { name: 'Cryptography', level: 85, description: 'Cryptographic Protocols & Security' },
      { name: 'Machine Learning', level: 80, description: 'ML Algorithms & Data Analysis' },
      { name: 'Research Methods', level: 90, description: 'Academic Research & Publication' }
    ]
  },
  professional: {
    title: 'Professional Skills',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    skills: [
      { name: 'Team Leadership', level: 90, description: 'Project Management & Team Coordination' },
      { name: 'Problem Solving', level: 95, description: 'Analytical Thinking & Solution Design' },
      { name: 'Communication', level: 88, description: 'Technical & Non-Technical Communication' },
      { name: 'Agile/Scrum', level: 85, description: 'Agile Development Methodologies' },
      { name: 'Mentoring', level: 82, description: 'Technical Mentoring & Knowledge Sharing' },
      { name: 'Strategic Planning', level: 80, description: 'Long-term Planning & Architecture' }
    ]
  }
}

const categories = Object.keys(skillsData)

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <MotionDiv
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ ...smoothTransition, delay: index * 0.1 }}
      className="group"
    >
                           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/15 relative z-10 h-48 flex flex-col">
                  <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
         <p className="text-[#E0E0E0] text-sm leading-relaxed mt-2 flex-1">{skill.description}</p>
       </div>
    </MotionDiv>
  )
}

function CategorySection({ category, data, index }: { category: string; data: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <MotionSection
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className="py-16"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionDiv variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF8C42] to-[#FF5E78] rounded-2xl mb-6 shadow-lg">
              <data.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
              Comprehensive expertise in {data.title.toLowerCase()} with hands-on experience in enterprise environments
            </p>
          </MotionDiv>

          <MotionDiv
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.skills.map((skill: any, skillIndex: number) => (
              <SkillCard key={skill.name} skill={skill} index={skillIndex} />
            ))}
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : [selectedCategory]

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
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
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
              <Code className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Technical <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              A comprehensive overview of my technical expertise across cybersecurity, cloud computing, development, and DevOps.
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

      {/* Skills Categories */}
      <MotionSection
        className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {filteredCategories.map((category, index) => (
                <CategorySection
                  key={category}
                  category={category}
                  data={skillsData[category as keyof typeof skillsData]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection 
        className="py-20 bg-white/5 backdrop-blur-sm text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <MotionDiv variants={fadeInUp} className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Leverage These Skills?
              </h2>
              <p className="text-xl text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
                I'm always expanding my skill set and staying current with emerging technologies. 
                Let's discuss how we can collaborate on your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90">
                  <Link href="/projects">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
                  <Link href="/contact">
                    <Globe className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </MotionDiv>
          </div>
        </div>
        </div>
      </MotionSection>
    </div>
  )
}
