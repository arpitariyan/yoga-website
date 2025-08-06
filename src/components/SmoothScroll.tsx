'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add custom easing for better UX
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      document.head.removeChild(style)
    }
  }, [])

  return null
}
