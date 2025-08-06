'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverScale?: number
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.05
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false
  })

  return (
    <motion.div
      ref={ref}
      style={{
        transform: inView ? `translateY(${window.scrollY * speed}px)` : 'translateY(0)'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedSection, AnimatedCard, ParallaxSection }
