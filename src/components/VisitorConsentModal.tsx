'use client'

import { useState, useEffect } from 'react'
import { MotionDiv } from '@/lib/animation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Shield, User, Building2, Mail, CheckCircle, AlertCircle, Sparkles, Eye, Lock } from 'lucide-react'

interface VisitorData {
  name: string
  company: string
  email: string
}

interface VisitorConsentModalProps {
  onConsent: (data: VisitorData) => void
}

export default function VisitorConsentModal({ onConsent }: VisitorConsentModalProps) {
  const [formData, setFormData] = useState<VisitorData>({
    name: '',
    company: '',
    email: ''
  })
  const [errors, setErrors] = useState<Partial<VisitorData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<VisitorData> = {}

    // Name validation - no numbers allowed
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    } else if (/\d/.test(formData.name.trim())) {
      newErrors.name = 'Name cannot contain numbers'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces'
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization is required'
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company must be at least 2 characters'
    } else if (formData.company.trim().length > 100) {
      newErrors.company = 'Company must be less than 100 characters'
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Store visitor data in localStorage
      const visitorData = {
        ...formData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        consent: true
      }
      
      localStorage.setItem('visitorConsent', JSON.stringify(visitorData))
      
      // Send visitor data to your backend (optional)
      await fetch('/api/visitor-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData),
      })

      // Show success animation
      setShowSuccess(true)
      
      // Wait for success animation then call callback
      setTimeout(() => {
        onConsent(formData)
      }, 1500)
      
    } catch (error) {
      console.error('Error saving visitor consent:', error)
      // Still allow access even if backend fails
      setShowSuccess(true)
      setTimeout(() => {
        onConsent(formData)
      }, 1500)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof VisitorData, value: string) => {
    // For name field, prevent numbers and special characters
    if (field === 'name') {
      // Remove numbers and special characters, keep only letters and spaces
      value = value.replace(/[^a-zA-Z\s]/g, '')
    }
    
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isVisible) return null

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Privacy Policy Content */}
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
            
            {/* Privacy Policy Header */}
            <div className="p-8 border-b border-white/10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Privacy Policy</h2>
                <p className="text-[#E0E0E0]">How we collect, use, and protect your information</p>
              </div>
            </div>
            
            {/* Privacy Policy Content */}
            <div className="p-8 space-y-6">
              {/* Information We Collect */}
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#FF8C42]" />
                  Information We Collect
                </h3>
                <div className="text-[#E0E0E0] space-y-2">
                  <p>When you visit our website, we collect the following information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Name:</strong> Your full name for personalization</li>
                    <li><strong>Company/Organization:</strong> Your workplace or organization</li>
                    <li><strong>Email Address:</strong> For communication and analytics</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, interactions</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#FF8C42]" />
                  How We Use Your Information
                </h3>
                <div className="text-[#E0E0E0] space-y-2">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Personalization:</strong> Customize content based on your interests</li>
                    <li><strong>Analytics:</strong> Understand website usage and improve user experience</li>
                    <li><strong>Communication:</strong> Respond to your inquiries and provide support</li>
                    <li><strong>Security:</strong> Protect against fraud and ensure website security</li>
                    <li><strong>Legal Compliance:</strong> Meet legal obligations and regulations</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#FF8C42]" />
                  Data Protection
                </h3>
                <div className="text-[#E0E0E0] space-y-2">
                  <p>We implement the following security measures to protect your data:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                    <li><strong>Access Control:</strong> Limited access to personal information</li>
                    <li><strong>Regular Audits:</strong> Security assessments and updates</li>
                    <li><strong>Secure Storage:</strong> Industry-standard security practices</li>
                    <li><strong>No Third-Party Sharing:</strong> We never sell or share your data</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#FF8C42]" />
                  Contact Us
                </h3>
                <div className="text-[#E0E0E0] space-y-2">
                  <p>If you have any questions about this privacy policy:</p>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF8C42]" />
                      <span className="font-semibold">Email:</span>
                      <a href="mailto:winstonmascarenhas@gmail.com" className="text-[#FF8C42] hover:underline">
                        winstonmascarenhas@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-[#E0E0E0] text-sm">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-1">This privacy policy is compliant with GDPR and other applicable data protection regulations.</p>
              </div>
            </div>
            
            {/* Close Button */}
            <div className="p-8 border-t border-white/10 text-center">
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Close Privacy Policy
              </button>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E]">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <MotionDiv
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full blur-sm"
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#FF8C42]/20 to-[#FF5E78]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Main Modal */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <MotionDiv
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 300,
            duration: 0.8
          }}
          className="relative w-full max-w-md"
        >
          {/* Glassmorphism Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42]/20 via-[#FF5E78]/20 to-[#4F46E5]/20 rounded-3xl blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/10 via-transparent to-[#4F46E5]/10 rounded-3xl" />
            
            {/* Content */}
            <div className="relative p-8">
              {/* Brand Logo */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-20 h-20 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Shield className="w-10 h-10 text-white" />
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Welcome!
                  </h2>
                  <p className="text-[#E0E0E0] text-lg font-medium">
                    Before entering, please check in.
                  </p>
                </MotionDiv>
              </div>

              {/* Success State */}
              {showSuccess ? (
                <MotionDiv
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Access Granted!</h3>
                  <p className="text-[#E0E0E0]">Welcome to the portfolio</p>
                </MotionDiv>
              ) : (
                <>
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <MotionDiv
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative">
                                                 <label className="block text-white text-sm font-medium mb-3 flex items-center gap-2">
                           <User className="w-4 h-4 text-[#FF8C42]" />
                           Full Name *
                         </label>
                                     <Input
               type="text"
               value={formData.name}
               onChange={(e) => handleInputChange('name', e.target.value)}
               placeholder="Enter your full name"
               required
               className={`bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-[#FF8C42] focus:ring-[#FF8C42]/20 transition-all duration-300 ${
                 errors.name ? 'border-red-500 shake' : ''
               }`}
             />
                        {errors.name && (
                          <MotionDiv
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </MotionDiv>
                        )}
                      </div>
                    </MotionDiv>

                    {/* Company Field */}
                    <MotionDiv
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="relative">
                                                 <label className="block text-white text-sm font-medium mb-3 flex items-center gap-2">
                           <Building2 className="w-4 h-4 text-[#FF8C42]" />
                           Company / Organization *
                         </label>
                                     <Input
               type="text"
               value={formData.company}
               onChange={(e) => handleInputChange('company', e.target.value)}
               placeholder="Enter your company or organization"
               required
               className={`bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-[#FF8C42] focus:ring-[#FF8C42]/20 transition-all duration-300 ${
                 errors.company ? 'border-red-500 shake' : ''
               }`}
             />
                        {errors.company && (
                          <MotionDiv
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.company}
                          </MotionDiv>
                        )}
                      </div>
                    </MotionDiv>

                    {/* Email Field */}
                    <MotionDiv
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="relative">
                                                 <label className="block text-white text-sm font-medium mb-3 flex items-center gap-2">
                           <Mail className="w-4 h-4 text-[#FF8C42]" />
                           Email Address *
                         </label>
                                     <Input
               type="email"
               value={formData.email}
               onChange={(e) => handleInputChange('email', e.target.value)}
               placeholder="Enter your email address"
               required
               className={`bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-[#FF8C42] focus:ring-[#FF8C42]/20 transition-all duration-300 ${
                 errors.email ? 'border-red-500 shake' : ''
               }`}
             />
                        {errors.email && (
                          <MotionDiv
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </MotionDiv>
                        )}
                      </div>
                    </MotionDiv>

                    {/* Submit Button */}
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#FF8C42] via-[#FF5E78] to-[#4F46E5] text-white font-semibold py-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-[#FF8C42]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5" />
                            Enter Portfolio
                          </div>
                        )}
                      </Button>
                    </MotionDiv>
                  </form>

                  {/* Tagline */}
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-[#E0E0E0]/70 text-sm italic">
                      &quot;Let&apos;s connect before we explore.&quot;
                    </p>
                  </MotionDiv>

                  {/* Privacy Notice */}
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-[#E0E0E0]/60 text-xs">
                      By entering, you agree to our{' '}
                      <button 
                        onClick={() => setShowPrivacyPolicy(true)}
                        className="text-[#FF8C42] hover:underline transition-colors"
                      >
                        Privacy Policy
                      </button>
                    </p>
                  </MotionDiv>


                </>
              )}
            </div>
          </div>
        </MotionDiv>
      </div>

      {/* Custom CSS for shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </MotionDiv>
  )
}
