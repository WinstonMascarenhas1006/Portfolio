'use client'

import { useState } from 'react'
import { 
  MotionDiv, 
  MotionSection,
  fadeInUp, 
  staggerContainer, 
  smoothTransition 
} from '@/lib/animation'
import { 
  Award,
  CheckCircle,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

// Real certifications data provided by user
const certificationsData = [
  {
    id: 1,
    title: 'Managing Microsoft SharePoint Server 2016',
    issuer: 'Udemy',
    category: 'Cloud Computing',
    level: 'Course',
    issueDate: '2025-02-01',
    credentialId: 'UC-38138444-a8d4-46b0-b48c-25199f7bca6d',
    description: 'Administration of SharePoint Server 2016 including workflows, integration and permissions.',
    skills: ['Workflow Management', 'Integration', 'Permission Inheritance', 'SharePoint'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://www.udemy.com/certificate/UC-38138444-a8d4-46b0-b48c-25199f7bca6d'
  },
  {
    id: 2,
    title: 'IoT Wireless & Cloud Computing Emerging Technologies',
    issuer: 'Yonsei University',
    category: 'Networking',
    level: 'Course',
    issueDate: '2024-11-01',
    credentialId: 'J2RJ3NWHX8VW',
    description: 'IoT concepts spanning wireless, cloud services, and emerging technology integrations.',
    skills: ['IoT', 'Cloud Computing', 'Wireless Networks'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/J2RJ3NWHX8VW'
  },
  {
    id: 3,
    title: 'System Engineering',
    issuer: 'MathWorks',
    category: 'DevOps',
    level: 'Course',
    issueDate: '2024-11-01',
    credentialId: 'https://coursera.org/verify/KHIIF41QR42A',
    description: 'Model-based systems engineering foundations and practices.',
    skills: ['Systems Engineering', 'Model-based Systems Engineering'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://coursera.org/verify/KHIIF41QR42A'
  },
  {
    id: 4,
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud Computing',
    level: 'Associate',
    issueDate: '2023-09-01',
    credentialId: 'Winston Mascarenhas',
    description: 'Designing resilient, secure, cost-optimized AWS architectures.',
    skills: ['AWS', 'Architecture', 'Analytical Skills'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://www.credly.com/badges/6cd58082-02ee-4ca6-8561-dd102589e0ab/linked_in'
  },
  {
    id: 5,
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    category: 'Cloud Computing',
    level: 'Course',
    issueDate: '2020-06-01',
    credentialId: '235266ERELCE',
    description: 'Python programming fundamentals for everybody.',
    skills: ['Python', 'Programming Fundamentals'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/235266ERELCE'
  },
  {
    id: 6,
    title: 'Android Application Development',
    issuer: 'Udemy',
    category: 'DevOps',
    level: 'Course',
    issueDate: '2020-02-01',
    credentialId: 'UC-30486924-7073-432f-b842-ccbe2a97ac4f',
    description: 'Android development essentials including widgets, intents, and debugging.',
    skills: ['Java', 'Widgets', 'Debugging', 'Intent'],
    verified: true,
    badgeUrl: '/api/placeholder/200/200',
    verifyUrl: 'https://www.udemy.com/certificate/UC-30486924-7073-432f-b842-ccbe2a97ac4f'
  }
]

const CertificationCard = ({ certification, index }: { certification: any; index: number }) => {
  return (
    <MotionDiv
      key={certification.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/15 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{certification.title}</h3>
            <p className="text-sm text-[#A5E9FF]">{certification.issuer}</p>
          </div>
          {certification.verified && (
            <Badge variant="outline" className="text-green-400 border-green-400">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-[#E0E0E0] leading-relaxed">{certification.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.map((skill: string, idx: number) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className="text-xs bg-white/10 text-[#A5E9FF] border-white/20 hover:bg-white/20 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
          <span>{certification.level}</span>
          <span>{new Date(certification.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        </div>
        
        {certification.verifyUrl && (
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-white border-white/20 hover:bg-white/10 text-xs"
              asChild
            >
              <a href={certification.verifyUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Verify Certificate
              </a>
            </Button>
          </div>
        )}
      </div>
    </MotionDiv>
  )
}

export default function CertificationsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
              <Award className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Certifications & <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Achievements</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              Professional certifications and achievements that validate my expertise in cybersecurity, cloud computing, and software development.
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

      {/* Certifications Grid */}
      <MotionSection
        className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificationsData.map((cert, index) => (
                <CertificationCard key={cert.id} certification={cert} index={index} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
