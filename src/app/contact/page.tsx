'use client'

import { useState, useRef } from 'react'
import {
  MotionDiv,
  MotionSection,
  MotionCard,
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  hoverScale,
  hoverLift,
  smoothTransition
} from '@/lib/animation'
import {
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Linkedin,
  AlertCircle,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useInView } from 'react-intersection-observer'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'winstonmascarenhas@gmail.com',
    description: 'Best way to reach me for opportunities',
    action: 'mailto:winstonmascarenhas@gmail.com',
    color: 'from-[#FF8C42] to-[#FF5E78]',
    priority: 'primary'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'win-mascarenhas',
    description: 'Let\'s connect professionally',
    action: 'https://www.linkedin.com/in/win-mascarenhas/',
    color: 'from-blue-500 to-cyan-500',
    priority: 'primary'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Ilmenau, Germany',
    description: 'Open to roles across Germany & EU',
    action: 'https://maps.google.com/?q=Ilmenau,Germany',
    color: 'from-purple-500 to-pink-500',
    priority: 'secondary'
  },
]

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: '',
    attachment: null as File | null
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    validateField(name, value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          newErrors.name = 'Name can only contain letters and spaces'
        } else {
          delete newErrors.name
        }
        break
      
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
        
      case 'company':
        if (!value.trim()) {
          newErrors.company = 'Company is required'
        } else if (value.trim().length < 2) {
          newErrors.company = 'Company must be at least 2 characters'
        } else {
          delete newErrors.company
        }
        break
      
      case 'subject':
        if (!value.trim()) {
          newErrors.subject = 'Subject is required'
        } else if (value.trim().length < 3) {
          newErrors.subject = 'Subject must be at least 3 characters'
        } else {
          delete newErrors.subject
        }
        break
        
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required'
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters long'
        } else if (value.length > 5000) {
          newErrors.message = 'Message must be less than 5000 characters'
        } else {
          delete newErrors.message
        }
        break
        
      case 'phone':
        if (value.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          newErrors.phone = 'Please enter a valid phone number'
        } else {
          delete newErrors.phone
        }
        break
        
      default:
        break
    }
    
    setErrors(newErrors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided'
        })
      })

      const data = await response.json()

      if (response.ok && data?.success) {
        setSubmitted(true)
        if (data.previewUrl) {
          console.log('Preview email URL (dev only):', data.previewUrl)
        } else {
          console.log('Message sent successfully! I\'ll get back to you soon.')
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          phone: '',
          attachment: null
        })
        setErrors({})

        // Reset success state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error(data?.message || 'Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setErrors({ submit: 'Failed to send message. Please try again or contact me directly via email.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactAction = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Winston Mascarenhas_Resume.pdf'
    link.download = 'Winston_Mascarenhas_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
              <Mail className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Let&apos;s <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              Whether you&apos;re hiring, collaborating, or just exchanging ideas, I&apos;d love to hear from you. Let&apos;s build something meaningful together.
            </p>
            
            {/* Quick Action Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => handleContactAction('mailto:winstonmascarenhas@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </MotionDiv>
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

      {/* Contact Methods Section */}
      <MotionSection
        className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <MotionDiv variants={fadeInUp} className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Let&apos;s Connect</h2>
              <p className="text-lg lg:text-xl text-[#E0E0E0] max-w-3xl">I&apos;m open to internships, full-time roles, and collaborations. Feel free to reach out through any of the options below.</p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <MotionCard
                  key={method.title}
                  variants={fadeInUp}
                  className="group relative bg-white/5 backdrop-blur-md rounded-[18px] p-8 lg:p-10 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:bg-white/8"
                  onClick={() => handleContactAction(method.action)}
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(255, 140, 66, 0.1)',
                  }}
                  whileHover={{
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(255, 140, 66, 0.2)',
                    scale: 1.02,
                  }}
                >
                  <div className="text-center h-full flex flex-col justify-between">
                    <div>
                      {/* Large gradient icon */}
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <method.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      
                      {/* Bold heading */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{method.title}</h3>
                      
                      {/* Subtext with lighter weight */}
                      <p className="text-[#A5E9FF] font-normal mb-3 text-sm lg:text-base leading-tight">{method.value}</p>
                      <p className="text-[#E0E0E0] text-sm lg:text-base leading-relaxed font-light">{method.description}</p>
                    </div>
                    
                    {/* Gradient pill-shaped button for primary contacts */}
                    {method.priority === 'primary' && (
                      <div className="mt-6">
                        <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                          Primary Contact
                        </div>
                      </div>
                    )}
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Main Contact Form & Info */}
      <MotionSection
        className="py-16 lg:py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <MotionDiv variants={fadeInLeft}>
                <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
                
                {submitted ? (
                  <MotionCard
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-500/20 border border-green-500/30 p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-green-300 mb-4">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <MotionDiv {...hoverScale}>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Send Another Message
                      </Button>
                    </MotionDiv>
                  </MotionCard>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MotionDiv variants={fadeInUp}>
                        <label className="block text-[#A5E9FF] font-medium mb-2">
                          Name * {errors.name && <span className="text-red-400 text-sm">({errors.name})</span>}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 transition-colors duration-200 ${
                            errors.name ? 'border-red-400 focus:border-red-400' : ''
                          }`}
                          placeholder="Your full name"
                        />
                      </MotionDiv>
                      <MotionDiv variants={fadeInUp}>
                        <label className="block text-[#A5E9FF] font-medium mb-2">
                          Email * {errors.email && <span className="text-red-400 text-sm">({errors.email})</span>}
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 transition-colors duration-200 ${
                            errors.email ? 'border-red-400 focus:border-red-400' : ''
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </MotionDiv>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MotionDiv variants={fadeInUp}>
                        <label className="block text-[#A5E9FF] font-medium mb-2">
                          Company * {errors.company && <span className="text-red-400 text-sm">({errors.company})</span>}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 transition-colors duration-200 ${
                            errors.company ? 'border-red-400 focus:border-red-400' : ''
                          }`}
                          placeholder="Your company name"
                        />
                      </MotionDiv>
                      <MotionDiv variants={fadeInUp}>
                        <label className="block text-[#A5E9FF] font-medium mb-2">
                          Phone {errors.phone && <span className="text-red-400 text-sm">({errors.phone})</span>}
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 transition-colors duration-200 ${
                            errors.phone ? 'border-red-400 focus:border-red-400' : ''
                          }`}
                          placeholder="Your phone (optional)"
                        />
                      </MotionDiv>
                    </div>

                    <MotionDiv variants={fadeInUp}>
                      <label className="block text-[#A5E9FF] font-medium mb-2">
                        Subject * {errors.subject && <span className="text-red-400 text-sm">({errors.subject})</span>}
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 transition-colors duration-200 ${
                          errors.subject ? 'border-red-400 focus:border-red-400' : ''
                        }`}
                        placeholder="What's this about?"
                      />
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp}>
                      <label className="block text-[#A5E9FF] font-medium mb-2">Attachment (Optional)</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            setFormData(prev => ({ ...prev, attachment: file }));
                          }}
                          className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-[#FF8C42]/50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#FF8C42] file:to-[#FF5E78] file:text-white hover:file:from-[#FF8C42]/90 hover:file:to-[#FF5E78]/90"
                        />
                        <p className="text-[#E0E0E0] text-sm mt-1">
                          Upload job description, project details, or any relevant documents (Max 5MB)
                        </p>
                      </div>
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp}>
                      <label className="block text-[#A5E9FF] font-medium mb-2">
                        Message * {errors.message && <span className="text-red-400 text-sm">({errors.message})</span>}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        rows={6}
                        className={`bg-white/10 border-white/20 text-white placeholder-[#E0E0E0] focus:border-[#FF8C42]/50 resize-none transition-colors duration-200 ${
                          errors.message ? 'border-red-400 focus:border-red-400' : ''
                        }`}
                        placeholder="Tell me about your project, requirements, or just say hello..."
                      />
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[#E0E0E0] text-sm">
                          {formData.message.length}/5000 characters
                        </p>
                        {formData.message.length > 4500 && (
                          <p className="text-yellow-400 text-sm">
                            <AlertCircle className="w-3 h-3 inline mr-1" />
                            Approaching limit
                          </p>
                        )}
                      </div>
                    </MotionDiv>

                    {errors.submit && (
                      <MotionDiv variants={fadeInUp} className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">{errors.submit}</p>
                      </MotionDiv>
                    )}
                    
                    <MotionDiv variants={fadeInUp} {...hoverScale}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90 text-white py-3 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </MotionDiv>
                  </form>
                )}
              </MotionDiv>

              {/* Contact Information */}
              <MotionDiv variants={fadeInRight} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Location</h3>
                        <p className="text-[#E0E0E0]">
                          <span className="text-[#A5E9FF] font-medium">Ilmenau, Germany</span> - Open to opportunities in Germany and remote positions worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Open To</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white border-0">Internships</Badge>
                          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">Full-time</Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Collaborations</Badge>
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Research Projects</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Response Time</h3>
                        <p className="text-[#E0E0E0]">
                          I typically reply within <span className="text-[#A5E9FF] font-medium">24 hours</span>.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Let&apos;s Connect</h3>
                        <p className="text-[#E0E0E0]">
                          Happy to discuss opportunities, collaborations, or research projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
