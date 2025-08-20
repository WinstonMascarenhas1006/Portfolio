'use client'

import { useEffect, useRef } from 'react'

interface ParametricWaveBackgroundProps {
  className?: string
}

export default function ParametricWaveBackground({ className = '' }: ParametricWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Draw subtle overlay that complements the global gradient
    const drawBackground = () => {
      // Create a very subtle radial gradient overlay for depth
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.7, canvas.height * 0.8
      )
      gradient.addColorStop(0, 'rgba(46, 67, 116, 0.1)') // Steel-indigo teal with low opacity
      gradient.addColorStop(0.5, 'rgba(44, 26, 99, 0.05)') // Indigo with very low opacity
      gradient.addColorStop(1, 'rgba(30, 12, 63, 0.02)') // Deep royal purple with minimal opacity
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawBackground()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}
