'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Executive",
    content: "The hypnosis sessions have completely transformed my anxiety levels. I feel more confident and at peace than ever before.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    content: "Wing Chun training here has improved not just my physical fitness, but my mental discipline and focus at work.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Teacher",
    content: "The NLP techniques I learned have revolutionized how I communicate with my students and handle classroom challenges.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    content: "Meditation sessions have given me clarity in business decisions and helped me maintain work-life balance.",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
