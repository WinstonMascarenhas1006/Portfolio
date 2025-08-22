'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👤' },
  { name: 'Experience', href: '/experience', icon: '💼' },
  { name: 'Skills', href: '/skills', icon: '⚡' },
  { name: 'Projects', href: '/projects', icon: '💻' },
  { name: 'Certifications', href: '/certifications', icon: '🏆' },
  { name: 'Testimonials', href: '/testimonials', icon: '💬' },
  { name: 'Contact', href: '/contact', icon: '📧' },
]

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    if (href === '/') {
      scrollToTop()
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar - Individual floating circles */}
      {navigation.map((item, index) => {
        const isActive = pathname === item.href
        const topPosition = 8 + (index * (77 / (navigation.length - 1))) // Distribute evenly from 8% to 85%
        
        return (
          <motion.div
            key={item.name}
            className="fixed left-6 z-50 hidden lg:block"
            style={{ top: `${topPosition}%` }}
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] shadow-[#FF8C42]/30 hover:shadow-[#FF8C42]/50'
                  : 'bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] shadow-[#ff7e5f]/30 hover:shadow-[#ff7e5f]/50'
              }`}
            >
              <span className="text-lg text-white">
                {item.icon}
              </span>

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.name}
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-black/80 border-t-4 border-t-transparent" />
              </div>
            </Link>
          </motion.div>
        )
      })}

      {/* Mobile Floating Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50 lg:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full flex items-center justify-center shadow-lg shadow-[#ff7e5f]/30 hover:shadow-xl hover:shadow-[#ff7e5f]/50 transition-all duration-300 hover:scale-110"
        >
          <span className="text-xl text-white">☰</span>
        </button>
      </motion.div>

      {/* Mobile Menu - Floating circles only */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-40 lg:hidden"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] shadow-[#FF8C42]/30 hover:shadow-[#FF8C42]/50'
                          : 'bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] shadow-[#ff7e5f]/30 hover:shadow-[#ff7e5f]/50'
                      }`}
                    >
                      <span className="text-lg text-white">
                        {item.icon}
                      </span>

                      {/* Tooltip */}
                      <div className="absolute left-full ml-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {item.name}
                        <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-black/80 border-t-4 border-t-transparent" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
