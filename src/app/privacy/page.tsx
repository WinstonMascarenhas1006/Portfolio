import { Metadata } from 'next'
import { MotionDiv } from '@/lib/animation'
import { Shield, Eye, Lock, Trash2, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Winston Mascarenhas',
  description: 'Privacy policy for Winston Mascarenhas portfolio website',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#E0E0E0] text-lg">
            How we collect, use, and protect your information
          </p>
          
          {/* Back to Portfolio Button */}
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF8C42]/25"
            >
              ← Back to Portfolio
            </a>
          </div>
        </MotionDiv>

        <div className="space-y-8">
          {/* Information We Collect */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#FF8C42]" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-[#E0E0E0]">
              <p>When you visit our website, we collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Name:</strong> Your full name for personalization</li>
                <li><strong>Company/Organization:</strong> Your workplace or organization</li>
                <li><strong>Email Address:</strong> For communication and analytics</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, interactions</li>
              </ul>
            </div>
          </MotionDiv>

          {/* How We Use Your Information */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#FF8C42]" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-[#E0E0E0]">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personalization:</strong> Customize content based on your interests</li>
                <li><strong>Analytics:</strong> Understand website usage and improve user experience</li>
                <li><strong>Communication:</strong> Respond to your inquiries and provide support</li>
                <li><strong>Security:</strong> Protect against fraud and ensure website security</li>
                <li><strong>Legal Compliance:</strong> Meet legal obligations and regulations</li>
              </ul>
            </div>
          </MotionDiv>

          {/* Data Protection */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#FF8C42]" />
              <h2 className="text-2xl font-bold text-white">Data Protection</h2>
            </div>
            <div className="space-y-4 text-[#E0E0E0]">
              <p>We implement the following security measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>Access Control:</strong> Limited access to personal information</li>
                <li><strong>Regular Audits:</strong> Security assessments and updates</li>
                <li><strong>Secure Storage:</strong> Industry-standard security practices</li>
                <li><strong>No Third-Party Sharing:</strong> We never sell or share your data</li>
              </ul>
            </div>
          </MotionDiv>

          {/* Your Rights */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-[#FF8C42]" />
              <h2 className="text-2xl font-bold text-white">Your Rights</h2>
            </div>
            <div className="space-y-4 text-[#E0E0E0]">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
            </div>
          </MotionDiv>

          {/* Contact Information */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#FF8C42]" />
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="space-y-4 text-[#E0E0E0]">
              <p>If you have any questions about this privacy policy or your data:</p>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-[#FF8C42]" />
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:winstonmascarenhas@gmail.com" className="text-[#FF8C42] hover:underline">
                    winstonmascarenhas@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF8C42]" />
                  <span className="font-semibold">Contact Form:</span>
                  <a href="/contact" className="text-[#FF8C42] hover:underline">
                    Visit Contact Page
                  </a>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Last Updated */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center text-[#E0E0E0] text-sm"
          >
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-2">
              This privacy policy is compliant with GDPR and other applicable data protection regulations.
            </p>
          </MotionDiv>
        </div>
        </div>
      </div>
    </div>
  )
}
