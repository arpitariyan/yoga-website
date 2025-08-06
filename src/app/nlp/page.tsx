'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import BackgroundPattern from '@/components/BackgroundPattern'

export default function NLP() {
  const nlpTechniques = [
    {
      title: "Anchoring",
      description: "Create positive emotional states on command through specific triggers",
      icon: "⚓"
    },
    {
      title: "Reframing",
      description: "Transform limiting beliefs and negative thought patterns",
      icon: "🔄"
    },
    {
      title: "Visualization",
      description: "Use mental imagery to achieve goals and overcome challenges",
      icon: "👁️"
    },
    {
      title: "Timeline Therapy",
      description: "Release emotional baggage and create a compelling future",
      icon: "⏰"
    },
    {
      title: "Meta-Model",
      description: "Improve communication and uncover hidden meanings",
      icon: "💬"
    },
    {
      title: "Submodalities",
      description: "Change how you experience memories and thoughts",
      icon: "🧠"
    }
  ]

  const benefits = [
    "Enhanced self-awareness and emotional intelligence",
    "Improved communication and relationship skills",
    "Breaking through limiting beliefs and patterns",
    "Goal achievement and personal motivation",
    "Stress reduction and anxiety management",
    "Increased confidence and self-esteem"
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <BackgroundPattern />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Neuro-Linguistic Programming
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reprogram your mind for success, happiness, and personal transformation through the science of excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Your Transformation
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is NLP Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What is NLP?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Neuro-Linguistic Programming is the study of excellence and the structure of subjective experience. 
              It's a powerful methodology for understanding and changing human behavior patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">🧠 Neuro</h3>
                <p className="text-gray-600">
                  How we process information through our nervous system and the five senses, 
                  affecting our physiology, emotions, and behavior.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">💬 Linguistic</h3>
                <p className="text-gray-600">
                  How we use language to make sense of the world, capture and communicate experience, 
                  and influence our thinking patterns.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">🎯 Programming</h3>
                <p className="text-gray-600">
                  Our ability to organize our neurological and linguistic systems to achieve 
                  specific outcomes and create lasting positive change.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">NLP + Yoga Integration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">✨</span>
                    <span>Mind-body connection through conscious language patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🧘</span>
                    <span>Enhanced meditation through mental programming techniques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🌟</span>
                    <span>Breakthrough limiting beliefs that block spiritual growth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">💎</span>
                    <span>Create empowering states for deeper practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* NLP Techniques Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Core NLP Techniques
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these powerful techniques to transform your thoughts, emotions, and behaviors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nlpTechniques.map((technique, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{technique.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{technique.title}</h3>
                <p className="text-gray-600">{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transform Your Life
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience profound changes in every area of your life through NLP mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-purple-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Ready to Begin?</h3>
                <p className="mb-6 text-purple-100">
                  Join our comprehensive NLP training program and start your journey to personal mastery. 
                  Combine ancient yogic wisdom with modern psychological techniques.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>One-on-one coaching sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Group workshops and retreats</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Practical exercises and techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Ongoing support and guidance</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Book a Session
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Combine the ancient wisdom of yoga with the modern science of NLP to unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
