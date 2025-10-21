'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MotionDiv, 
  MotionH1, 
  MotionP, 
  MotionSection,
  fadeInUp, 
  fadeInLeft,
  fadeInFromLeft,
  staggerContainer, 
  hoverScale, 
  hoverLift,
  smoothTransition 
} from '@/lib/animation'
import { 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Zap, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Star,
  Award,
  Users,
  Globe,
  GraduationCap,
  Music,
  Leaf
} from 'lucide-react'
import SkillsSection from '@/components/SkillsSection'
import HeroSection from '@/components/HeroSection'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'


const skills = [
  { name: 'Cybersecurity', icon: Shield, description: 'Proactive threat prevention & secure architectures', level: 95, gradient: 'from-red-500 to-orange-500', borderGradient: 'from-red-400/50 to-orange-400/50' },
  { name: 'Cloud Computing', icon: Cloud, description: 'Scalable infrastructure, reliable delivery', level: 90, gradient: 'from-blue-500 to-cyan-500', borderGradient: 'from-blue-400/50 to-cyan-400/50' },
  { name: 'Full-Stack Development', icon: Code, description: 'Modern apps with seamless UX & performance', level: 92, gradient: 'from-green-500 to-teal-500', borderGradient: 'from-green-400/50 to-teal-400/50' },
  { name: 'DevOps', icon: Zap, description: 'Automation & CI/CD pipelines', level: 85, gradient: 'from-orange-500 to-yellow-500', borderGradient: 'from-orange-400/50 to-yellow-400/50' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/WinstonMascarenhas1006', icon: Github, followers: '10 repos' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/win-mascarenhas', icon: Linkedin, connections: '500+' },
  { name: 'Email', href: 'mailto:winston@example.com', icon: Mail, response: '< 24h' },
]

const stats = [
  { label: 'Academic & Industry Projects', value: '20+', icon: Code },
  { label: 'Years Industry Experience', value: '2', icon: Award },
  { label: 'Licenses & Certifications', value: '6', icon: Users },
  { label: 'Technologies & Tools Mastered', value: '15+', icon: Globe },
]

// leadership section moved to Experience page; definitions removed here

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
      className="group w-full h-full"
    >
      <MotionDiv 
        className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border-0 transition-all duration-500 h-full flex flex-col overflow-hidden
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r ${skill.borderGradient} before:opacity-0 before:transition-opacity before:duration-500
          hover:before:opacity-100 hover:scale-105 hover:shadow-2xl group-hover:shadow-powder-blue/30`}
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(255, 140, 66, 0.1)',
        }}
        whileHover={{
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(255, 140, 66, 0.2)',
          scale: 1.05,
        }}
      >
        {/* Icon Section - Larger for rectangle */}
        <div className="flex-shrink-0 flex items-center justify-center mb-4 pt-2">
          <div className={`w-14 h-14 bg-gradient-to-r ${skill.gradient} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-lg relative
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r ${skill.gradient} before:opacity-20 before:blur-xl before:scale-150 before:transition-all before:duration-300
            group-hover:before:scale-175 group-hover:before:opacity-40`}>
            <skill.icon className="w-7 h-7 text-white group-hover:rotate-12 transition-all duration-300" />
          </div>
        </div>

        {/* Title - Larger for rectangle */}
        <div className="flex-shrink-0 flex items-center justify-center mb-3 px-2">
          <h3 className="text-lg lg:text-xl font-bold text-white leading-tight drop-shadow-lg text-center break-words hyphens-auto">
            {skill.name}
          </h3>
        </div>

        {/* Description - More space for full text */}
        <div className="flex-1 flex items-center justify-center mb-4 px-2">
          <p className="text-sm text-[#E0E0E0] leading-relaxed font-light drop-shadow-md text-center line-clamp-3 min-h-[3.5rem]">
            {skill.description}
          </p>
        </div>
        
        {/* Progress Bar - Compact at bottom with visible percentage */}
        <div className="flex-shrink-0 mt-auto pb-2">
          <div className="relative w-full bg-gray-200/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className={`bg-gradient-to-r ${skill.gradient} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative`}
              style={{ width: inView ? `${skill.level}%` : '0%' }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

function StatsCard({ stat, index }: { stat: any; index: number }) {
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
      className="h-full"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#FF8C42]/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-xl flex items-center justify-center mb-6">
          <stat.icon className="w-8 h-8 text-deep-navy" />
        </div>
                 <div className="text-4xl font-bold text-white mb-3">
           {stat.value}
         </div>
         <div className="text-[#E0E0E0] text-sm leading-tight">
           {stat.label}
         </div>
      </div>
    </MotionDiv>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <MotionSection
        id="highlights"
        className="bg-surface-zinc py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatsCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

		{/* Leadership Experiences Section removed from Home (now in Experience page) */}

      {/* Skills & Expertise Section */}
      <SkillsSection />

             {/* What I Do Section */}
       <MotionSection 
         className="py-32 relative overflow-hidden"
         initial="initial"
         whileInView="animate"
         viewport={{ once: true }}
         variants={staggerContainer}
       >
         {/* Subtle gradient divider */}
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF8C42] to-transparent opacity-30"></div>
         
         <div className="flex justify-center relative z-10">
           <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
             <MotionDiv
               variants={fadeInUp}
               className="text-center mb-20"
             >
               <div className="flex flex-col items-center">
                                 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl text-center">
                    What I Do
                  </h2>
                  <MotionP 
                    variants={fadeInFromLeft}
                    transition={{ ...smoothTransition, delay: 0.2 }}
                    className="text-xl text-[#A5E9FF] max-w-2xl leading-relaxed drop-shadow-lg font-medium text-center"
                  >
                    Specializing in cutting-edge technologies and security-first development approaches.
                  </MotionP>
               </div>
             </MotionDiv>

                           <div className="flex justify-center">
                <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                     {skills.map((skill, index) => (
                       <div key={skill.name} className="w-full h-80">
                         <SkillCard skill={skill} index={index} />
                       </div>
                     ))}
                   </div>
                </div>
              </div>
           </div>
         </div>
         
         {/* Bottom gradient fade for seamless blending */}
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950/60 to-transparent backdrop-blur-sm pointer-events-none"></div>
       </MotionSection>


    </div>
  )
}
