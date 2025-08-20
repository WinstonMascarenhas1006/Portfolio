'use client'

import { useState } from 'react'
import { 
  MotionDiv, 
  MotionSection,
  fadeInUp, 
  fadeInLeft,
  fadeInRight,
  staggerContainer, 
  smoothTransition 
} from '@/lib/animation'
import { 
  Shield, 
  Cloud, 
  Zap, 
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Building2,
  Heart,
  Eye,
  Brain,
  Target as TargetIcon,
  Mail,
  ChevronRight,
  X,
  ExternalLink,
  User,
  Smartphone
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

const personalInfo = [
  { label: 'Location', value: 'Ilmenau, Germany', icon: TargetIcon },
  { label: 'Email', value: 'winstonmascarenhas@gmail.com', icon: Mail },
  { label: 'Phone', value: '+49 152 565 468 75', icon: Smartphone },
]

const education = [
  {
    year: 'Oct 2024 – Present',
    degree: 'M.Sc. – Research in Computer and Systems Engineering, Computer Engineering',
    institution: 'Technische Universität Ilmenau',
    type: 'master',
    website: 'https://www.tu-ilmenau.de',
    coursework: ['Advanced Database Systems', 'Control Engineering', 'Software & Systems Engineering', 'Security in Embedded Systems', 'Systems Security', 'Cloud Computing', 'Security Engineering', 'Software Safety', 'Advanced Mobile Communication', 'Algorithms']
  },
  {
    year: '2019 – 2022',
    degree: 'BCA – Computer Science',
    institution: 'St Joseph\'s University',
    type: 'bachelor',
    website: 'https://www.sju.edu.in',
    roles: ['President, Cultural Head, Documentation Head – National Service Scheme'],
    activities: ['Inter-cultural collegiate events', 'Blood Donation Drives', 'National Service Scheme programs'],
    coursework: ['Programming in C', 'Data Structures', 'Operating Systems', 'Numerical Methods', 'OOPs in Python', '.NET', 'Software Engineering', 'Database Management Systems', 'Java', 'Unix Programming', 'Data Communication & Networks', 'System Software', 'Web Technologies', 'Computer Organization', 'Mobile Applications'],
    skills: ['Public Speaking', 'Team Leadership', 'Event Organization', 'Technical Writing']
  },
  {
    year: '2017 – 2019',
    degree: 'Physics, Chemistry, Mathematics, Computer Science',
            institution: 'St. Joseph's Pre-University College',
    type: 'pre-university',
    website: 'https://sjpuc.in',
    activities: ['Eco Club', 'Dance Club', 'Performing Arts', 'Literary Club'],
    skills: ['Presentation', 'Strategy', 'Problem Solving', 'Teamwork']
  },
  {
    year: '2007 – 2017',
    degree: 'Senior Secondary',
    institution: 'Lake Montfort School – India',
    type: 'school',
    website: 'https://lakemontfortschool.ac.in/',
    activities: ['Athletics', 'Debate', 'Cultural Events'],
    skills: ['Public Speaking', 'Leadership', 'Critical Thinking']
  }
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

// Timeline Education Card Component
function TimelineEducationCard({ item, index, onOpenModal }: { item: any; index: number; onOpenModal: (item: any) => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getIcon = (type: string) => {
    switch (type) {
      case 'master': return '🎓'
      case 'bachelor': return '💻'
      case 'pre-university': return '📚'
      case 'school': return '🏫'
      default: return '📖'
    }
  }

  return (
    <MotionDiv
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-6 relative group cursor-pointer"
      onClick={() => onOpenModal(item)}
    >
      {/* Timeline Connector */}
      <div className="flex-shrink-0 relative">
        <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full border-4 border-white/20 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
          {getIcon(item.type)}
        </div>
        {index < education.length - 1 && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#FF8C42] to-transparent" />
        )}
      </div>
      
      {/* Content Card */}
      <MotionDiv
        className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/15 hover:shadow-xl hover:shadow-[#FF8C42]/10 transition-all duration-300"
        whileHover={{ scale: 1.02, y: -2 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-[#FF8C42] font-semibold text-sm mb-2">{item.year}</div>
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#FF8C42] transition-colors duration-300">
              {item.institution}
            </h3>
            <div className="text-[#A5E9FF] font-medium italic">{item.degree}</div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#FF8C42] group-hover:scale-110 transition-transform duration-300" />
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

// Education Modal Component
function EducationModal({ item, isOpen, onClose }: { item: any; isOpen: boolean; onClose: () => void }) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'master': return '🎓'
      case 'bachelor': return '💻'
      case 'pre-university': return '📚'
      case 'school': return '🏫'
      default: return '📖'
    }
  }

  if (!isOpen) return null

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <MotionDiv
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          duration: 0.4
        }}
        className="bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#1E1B4B]/95 border border-white/15 shadow-2xl rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Background Image */}
        <div className="sticky top-0 relative overflow-hidden rounded-t-3xl h-64">
          {/* Background Image */}
          <div className="absolute inset-0">
            {item.institution === 'Technische Universität Ilmenau' && (
              <img 
                src="/tuilmenau.jpg" 
                alt="Technische Universität Ilmenau Campus" 
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0.4) contrast(1.1)'
                }}
              />
            )}
            {item.institution === 'St Joseph\'s University' && (
              <img 
                src="/sjc.jpg" 
                                        alt="St. Joseph's University Campus" 
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0.4) contrast(1.1)'
                }}
              />
            )}
                            {item.institution === 'St. Joseph's Pre-University College' && (
              <img 
                src="/SJpuc.jpg" 
                                        alt="St. Joseph's Pre-University College Campus" 
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0.4) contrast(1.1)'
                }}
              />
            )}
            {item.institution === 'Lake Montfort School – India' && (
              <img 
                src="/Lake Montfort school.jpg" 
                alt="Lake Montfort School Campus" 
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0.4) contrast(1.1)'
                }}
              />
            )}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  className="text-[#E0E0E0] hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  <span className="ml-2">Back to Timeline</span>
                </Button>
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                {item.institution === 'Technische Universität Ilmenau' && (
                  <img 
                    src="/tuilmenau_logo.jpg" 
                    alt="Technische Universität Ilmenau Logo" 
                    className="w-16 h-16 object-cover rounded-2xl"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                  />
                )}
                {item.institution === 'St Joseph\'s University' && (
                  <img 
                    src="/sju_logo.png" 
                                            alt="St. Joseph's University Logo" 
                    className="w-16 h-16 object-cover rounded-2xl"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                  />
                )}
                {item.institution === 'St. Joseph's Pre-University College' && (
                  <img 
                    src="/sjpuc_logo.jpg" 
                                            alt="St. Joseph's Pre-University College Logo" 
                    className="w-16 h-16 object-cover rounded-2xl"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                  />
                )}
                {item.institution === 'Lake Montfort School – India' && (
                  <img 
                    src="/lakemontfort_logo.jpg" 
                    alt="Lake Montfort School Logo" 
                    className="w-16 h-16 object-cover rounded-2xl"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                  />
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-300 group inline-flex items-center gap-2"
                  title="Opens in new tab"
                >
                  {item.institution}
                  <ExternalLink className="w-5 h-5 text-[#FF8C42] group-hover:scale-110 transition-transform duration-300" />
                </a>
              </h2>
              <div className="text-[#A5E9FF] font-medium text-xl italic mb-2 drop-shadow-lg">{item.degree}</div>
              <div className="text-[#E0E0E0] text-lg drop-shadow-lg">{item.year}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Coursework Section */}
          {item.coursework && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42] px-3 py-1">
                  🎓 Academics
                </Badge>
                <h3 className="text-2xl font-bold text-white">Key Coursework</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.coursework.map((course: string, idx: number) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-white/20 text-white/90 bg-white/5 hover:bg-white/10 transition-all duration-300 px-4 py-2 text-sm"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Roles Section */}
          {item.roles && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42] px-3 py-1">
                  🤝 Leadership
                </Badge>
                <h3 className="text-2xl font-bold text-white">Leadership Roles</h3>
              </div>
              <ul className="space-y-3">
                {item.roles.map((role: string, idx: number) => (
                  <li key={idx} className="text-[#E0E0E0] text-lg flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full mr-4" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Activities Section */}
          {item.activities && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42] px-3 py-1">
                  ⚡ Activities
                </Badge>
                <h3 className="text-2xl font-bold text-white">Activities & Involvement</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.activities.map((activity: string, idx: number) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-white/20 text-white/90 bg-white/5 hover:bg-white/10 transition-all duration-300 px-4 py-2 text-sm"
                  >
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {item.skills && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-[#FF8C42]/30 text-[#FF8C42] px-3 py-1">
                  💡 Skills
                </Badge>
                <h3 className="text-2xl font-bold text-white">Skills Developed</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill: string, idx: number) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-[#FF8C42]/30 text-[#FF8C42] bg-[#FF8C42]/5 hover:bg-[#FF8C42]/10 transition-all duration-300 px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

export default function AboutPage() {
  const [selectedEducation, setSelectedEducation] = useState<any>(null)

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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
      <MotionSection
        className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <MotionDiv variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Education & Academic Background</h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
                My academic journey and educational background in cybersecurity and technology.
              </p>
            </MotionDiv>

            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineEducationCard 
                  key={index} 
                  item={item} 
                  index={index} 
                  onOpenModal={setSelectedEducation}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Story & Values Section */}
      <MotionSection
        className="py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Left Column - Story */}
              <MotionDiv variants={fadeInLeft} className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">My Story</h2>
                  <div className="space-y-6 text-[#E0E0E0] leading-relaxed">
                    <p>
                      I'm a cybersecurity enthusiast and cloud architect with a passion for building secure, scalable solutions. My journey in technology began with a curiosity about how systems work and evolved into a deep understanding of security principles and cloud infrastructure.
                    </p>
                    <p>
                      Currently based in Ilmenau, Germany, I'm pursuing opportunities that allow me to apply my expertise in cybersecurity, cloud computing, and full-stack development to solve real-world challenges.
                    </p>
                    <p>
                      I believe in the power of technology to create positive change, and I'm committed to building solutions that not only meet technical requirements but also prioritize security and user experience.
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
          </div>
        </div>
      </MotionSection>

      {/* Education Modal */}
      {selectedEducation && (
        <EducationModal
          item={selectedEducation}
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
        />
      )}
    </div>
  )
}
