'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration: number
  label: string
  suffix?: string
}

export default function AnimatedCounter({ end, duration, label, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-lg">
        {label}
      </div>
    </motion.div>
  )
}
