'use client'

import { 
  MotionDiv, 
  MotionSection,
  fadeInUp, 
  fadeInLeft,
  fadeInRight,
  staggerContainer, 
} from '@/lib/animation'
import { 
  Shield, 
  Cloud, 
  Zap, 
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Target as TargetIcon,
  Mail,
  User,
  Smartphone
} from 'lucide-react'
import EducationSection from '@/components/EducationSection'
import PageContainer from '@/components/PageContainer'

const personalInfo = [
  { label: 'Location', value: 'Stuttgart, Germany', icon: TargetIcon },
  { label: 'Email', value: 'winstonmascarenhas@gmail.com', icon: Mail },
  { label: 'Phone', value: '+49 152 565 468 75', icon: Smartphone },
]

const values = [
  {
    title: 'Innovation',
    description: 'Constantly exploring new technologies and approaches to solve complex problems.',
    icon: Lightbulb
  },
  {
    title: 'Security First',
    description: 'Building secure, robust solutions that protect users and data.',
    icon: Shield
  },
  {
    title: 'Collaboration',
    description: 'Working effectively in teams to achieve shared goals and deliver exceptional results.',
    icon: Users
  },
  {
    title: 'Continuous Learning',
    description: 'Always expanding my knowledge and staying current with industry trends.',
    icon: GraduationCap
  }
]



const facts = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '25+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Certifications', value: '5+' }
]

const languages = [
  { name: 'German', level: 'A2', proficiency: 'Basic', percentage: '25%' },
  { name: 'English', level: 'C1', proficiency: 'Advanced', percentage: '85%' },
  { name: 'Kannada', level: 'Native', proficiency: 'Native', percentage: '100%' },
  { name: 'Konkani', level: 'Native', proficiency: 'Native', percentage: '100%' },
  { name: 'Hindi', level: 'Fluent', proficiency: 'Fluent', percentage: '90%' },
  { name: 'Telugu', level: 'Fluent', proficiency: 'Fluent', percentage: '85%' },
  { name: 'Tamil', level: 'Intermediate', proficiency: 'Intermediate', percentage: '60%' }
]

export default function AboutPage() {
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
        <div className="relative py-24 flex justify-center">
          <div className="w-full max-w-4xl px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
            <MotionDiv
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <User className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              About <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              Cybersecurity enthusiast and cloud architect passionate about building secure, scalable solutions
            </p>
          </MotionDiv>
        </div>
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

      {/* Personal Info Section */}
      <MotionSection
        className="py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <MotionDiv variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Personal Information</h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
                Get in touch and learn more about my background and expertise.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalInfo.map((info, index) => (
                <MotionDiv
                  key={info.label}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                  <p className="text-[#E0E0E0]">{info.value}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Education Section */}
      <EducationSection />

      {/* Story & Values Section */}
      <MotionSection
        className="py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <PageContainer className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Left Column - Story */}
              <MotionDiv variants={fadeInLeft} className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">My Story</h2>
                  <div className="space-y-6 text-[#E0E0E0] leading-relaxed">
                    <p>
                      I&apos;m a cybersecurity enthusiast and cloud architect with a passion for building secure, scalable solutions. My journey in technology began with a curiosity about how systems work and evolved into a deep understanding of security principles and cloud infrastructure.
                    </p>
                    <p>
                      Currently based in Stuttgart, Germany, I&apos;m pursuing opportunities that allow me to apply my expertise in cybersecurity, cloud computing, and full-stack development to solve real-world challenges.
                    </p>
                    <p>
                      I believe in the power of technology to create positive change, and I&apos;m committed to building solutions that not only meet technical requirements but also prioritize security and user experience.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">What Drives Me</h2>
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <MotionDiv
                        key={value.title}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-xl flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                          <p className="text-[#E0E0E0] leading-relaxed">{value.description}</p>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </MotionDiv>

              {/* Right Column - Languages & Quick Facts */}
              <MotionDiv variants={fadeInRight} className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Languages</h2>
                  <div className="space-y-4">
                    {languages.map((language, index) => (
                      <MotionDiv
                        key={language.name}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white">{language.name}</h3>
                          <span className="text-[#A5E9FF] font-medium">{language.level}</span>
                        </div>
                        <div className="w-full bg-gray-200/20 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] h-2 rounded-full transition-all duration-1000"
                            style={{ width: language.percentage }}
                          ></div>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Quick Facts</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {facts.map((fact, index) => (
                      <MotionDiv
                        key={fact.label}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
                      >
                        <div className="text-3xl font-bold text-[#FF8C42] mb-2">{fact.value}</div>
                        <div className="text-[#E0E0E0] text-sm">{fact.label}</div>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </div>
        </PageContainer>
      </MotionSection>
    </div>
  )
}
