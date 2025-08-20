import { Metadata } from 'next'
import { MotionDiv } from '@/lib/animation'

export const metadata: Metadata = {
  title: 'Terms of Service - Winston Mascarenhas',
  description: 'Terms of Service for Winston Mascarenhas Portfolio Website',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4 py-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Winston Mascarenhas&apos;s portfolio website. These Terms of Service govern your use of this website 
                and any services provided through it. By accessing or using this website, you agree to be bound by these terms.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">3. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Winston Mascarenhas&apos;s 
                portfolio website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">4. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on Winston Mascarenhas&apos;s portfolio website are provided on an &apos;as is&apos; basis. Winston Mascarenhas makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">5. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Winston Mascarenhas or his suppliers be liable for any damages (including, without limitation, damages 
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                on the portfolio website, even if Winston Mascarenhas or a Winston Mascarenhas authorized representative has been notified 
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">6. Accuracy of Materials</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on Winston Mascarenhas&apos;s portfolio website could include technical, typographical, or photographic 
                errors. Winston Mascarenhas does not warrant that any of the materials on the website are accurate, complete, or current. 
                Winston Mascarenhas may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">7. Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Winston Mascarenhas has not reviewed all of the sites linked to the portfolio website and is not responsible for the 
                contents of any such linked site. The inclusion of any link does not imply endorsement by Winston Mascarenhas of the site. 
                Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">8. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Winston Mascarenhas may revise these terms of service for the portfolio website at any time without notice. By using 
                this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">9. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to 
                the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact Winston Mascarenhas at{' '}
                <a href="mailto:winstonmascarenhas@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  winstonmascarenhas@gmail.com
                </a>
              </p>
            </section>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Portfolio
          </a>
        </MotionDiv>
        </div>
      </div>
    </div>
  )
}
