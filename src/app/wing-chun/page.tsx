'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import BackgroundPattern from '@/components/BackgroundPattern'

export default function WingChun() {
  const principles = [
    {
      title: "Centerline Theory",
      description: "Control the center of your opponent while protecting your own",
      icon: "🎯",
      detail: "The most direct path between two points is a straight line"
    },
    {
      title: "Simultaneous Attack & Defense",
      description: "Block and strike at the same time for maximum efficiency",
      icon: "⚡",
      detail: "Economy of motion through coordinated movements"
    },
    {
      title: "Chi Sao (Sticky Hands)",
      description: "Develop sensitivity and reflexes through contact training",
      icon: "🤝",
      detail: "Feel your opponent's intentions through touch"
    },
    {
      title: "Forward Pressure",
      description: "Maintain constant forward energy and intent",
      icon: "➡️",
      detail: "Apply pressure while staying relaxed and fluid"
    }
  ]

  const forms = [
    {
      name: "Siu Nim Tau",
      translation: "Little Idea Form",
      description: "Foundation form focusing on structure, balance, and basic hand techniques",
      level: "Beginner"
    },
    {
      name: "Chum Kiu",
      translation: "Seeking the Bridge",
      description: "Intermediate form teaching footwork, kicking, and bridging techniques",
      level: "Intermediate"
    },
    {
      name: "Biu Tze",
      translation: "Thrusting Fingers",
      description: "Advanced form for recovery and emergency techniques",
      level: "Advanced"
    }
  ]

  const benefits = [
    "Enhanced focus and mental clarity",
    "Improved reflexes and reaction time",
    "Better posture and body alignment",
    "Increased confidence and self-discipline",
    "Stress relief through physical activity",
    "Practical self-defense skills"
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <BackgroundPattern />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-6xl md:text-8xl">🥋</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Wing Chun Kung Fu
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Master the art of close-range combat through efficiency, directness, and simplicity
            </motion.p>

            <motion.p 
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              "Wing Chun is a Chinese martial art known for its close-range combat, complementing yoga's focus on physical and mental well-being"
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Begin Training
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Wing Chun Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                The Art of Wing Chun
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Wing Chun is a concept-based Chinese martial art that emphasizes close-range combat, 
              efficiency of movement, and the use of simultaneous attack and defense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-2xl font-bold text-red-700 mb-4">🏛️ Ancient Origins</h3>
                <p className="text-gray-600">
                  Developed over 300 years ago, Wing Chun was created by the Buddhist nun Ng Mui 
                  at the Shaolin Temple. Legend tells of its refinement by a young woman named Yim Wing Chun.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">⚡ Efficiency First</h3>
                <p className="text-gray-600">
                  Wing Chun focuses on the most direct and efficient methods of combat, 
                  using minimal force to achieve maximum results through proper technique and timing.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-2xl font-bold text-yellow-700 mb-4">🧘 Mind-Body Unity</h3>
                <p className="text-gray-600">
                  Like yoga, Wing Chun emphasizes the connection between mental focus and physical execution, 
                  developing both inner calm and external power.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Wing Chun + Yoga Synergy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🎯</span>
                    <span>Enhanced body awareness and proprioception</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🌊</span>
                    <span>Fluid movement patterns and breath control</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">⚖️</span>
                    <span>Balance between strength and flexibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🧠</span>
                    <span>Mental discipline and focused attention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-300 text-xl">🔥</span>
                    <span>Internal energy cultivation and flow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Principles Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Core Principles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wing Chun is built on fundamental principles that guide every movement and technique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h3>
                <p className="text-gray-600 mb-3">{principle.description}</p>
                <p className="text-sm text-orange-600 italic">{principle.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Forms Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                The Three Empty Hand Forms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wing Chun consists of three traditional forms, each building upon the previous one's concepts.
            </p>
          </div>

          <div className="space-y-8">
            {forms.map((form, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{form.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        form.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        form.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {form.level}
                      </span>
                    </div>
                    <p className="text-orange-600 italic mb-3">"{form.translation}"</p>
                    <p className="text-gray-600">{form.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="text-4xl">{index === 0 ? '🌱' : index === 1 ? '🌿' : '🌳'}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Benefits of Wing Chun
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wing Chun training develops both physical capabilities and mental strength.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-orange-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div 
                className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Training Programs</h3>
                <p className="mb-6 text-red-100">
                  Our Wing Chun programs are designed to complement your yoga practice, 
                  creating a holistic approach to physical and mental development.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Beginner-friendly classes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Traditional forms training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Chi Sao (sticky hands) practice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Philosophy and meditation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Integration with yoga principles</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Training
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Begin Your Martial Arts Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Combine the flowing movements of yoga with the precise techniques of Wing Chun 
            for complete mind-body development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book a Trial Class
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Watch Demonstrations
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
