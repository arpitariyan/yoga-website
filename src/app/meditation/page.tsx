'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import BackgroundPattern from '@/components/BackgroundPattern'

export default function Meditation() {
  const meditationTypes = [
    {
      name: "Mindfulness Meditation",
      description: "Present-moment awareness through breath and body observation",
      icon: "🧘‍♀️",
      benefits: "Reduces anxiety, improves focus"
    },
    {
      name: "Loving-Kindness Meditation",
      description: "Cultivating compassion and love for self and others",
      icon: "💖",
      benefits: "Increases empathy, reduces stress"
    },
    {
      name: "Body Scan Meditation",
      description: "Progressive awareness of physical sensations",
      icon: "🌊",
      benefits: "Releases tension, improves sleep"
    },
    {
      name: "Transcendental Meditation",
      description: "Using mantras to transcend ordinary thinking",
      icon: "🕉️",
      benefits: "Deep rest, enhanced creativity"
    }
  ]

  const becomingMeditative = [
    {
      step: "Start with Breath",
      description: "Begin by simply observing your natural breathing pattern without trying to change it",
      icon: "💨"
    },
    {
      step: "Create Sacred Space",
      description: "Find a quiet, comfortable place where you can sit undisturbed",
      icon: "🏛️"
    },
    {
      step: "Observe Without Judgment",
      description: "Notice thoughts and feelings as they arise, then gently return to your breath",
      icon: "👁️"
    },
    {
      step: "Practice Consistently",
      description: "Even 5-10 minutes daily is more beneficial than long irregular sessions",
      icon: "⏰"
    },
    {
      step: "Cultivate Patience",
      description: "The meditative state develops naturally with practice and acceptance",
      icon: "🌱"
    }
  ]

  const benefits = [
    {
      category: "Mental Benefits",
      items: [
        "Reduced stress and anxiety",
        "Enhanced focus and concentration",
        "Improved emotional regulation",
        "Greater self-awareness",
        "Increased mental clarity"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: "Physical Benefits",
      items: [
        "Lower blood pressure",
        "Improved immune function",
        "Better sleep quality",
        "Reduced chronic pain",
        "Slower aging process"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      category: "Spiritual Benefits",
      items: [
        "Deeper sense of connection",
        "Enhanced intuition",
        "Greater inner peace",
        "Expanded consciousness",
        "Profound self-realization"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ]

  const yogaConnection = [
    {
      aspect: "Union of Mind & Body",
      description: "Yoga literally means 'union' - the integration of physical, mental, and spiritual aspects of being",
      icon: "🔗"
    },
    {
      aspect: "Eight Limbs of Yoga",
      description: "Meditation (Dhyana) is the 7th limb, leading to Samadhi (enlightenment)",
      icon: "🪜"
    },
    {
      aspect: "Preparation for Stillness",
      description: "Physical yoga postures prepare the body to sit comfortably in meditation",
      icon: "⚖️"
    },
    {
      aspect: "Breath as Bridge",
      description: "Pranayama (breath control) connects physical practice with meditative awareness",
      icon: "🌬️"
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50">
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
              <span className="text-6xl md:text-8xl">🧘</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Meditation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover the profound peace that lies within through the ancient practice of meditation
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Begin Your Practice
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-violet-600 text-violet-600 font-semibold rounded-full hover:bg-violet-600 hover:text-white transition-all duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Meditation Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                What is Meditation?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Meditation is not just a practice—it's a way of being that transforms how we experience life itself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-100">
                <h3 className="text-2xl font-bold text-violet-700 mb-4">🌟 A State of Being</h3>
                <p className="text-gray-600">
                  Meditation is fundamentally a state of meditative being—a natural condition of 
                  awareness, presence, and inner stillness that exists beyond thoughts and emotions.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">🧠 Beyond Thinking</h3>
                <p className="text-gray-600">
                  True meditation transcends the constant chatter of the mind, revealing the 
                  spacious awareness that is your essential nature—peaceful, luminous, and whole.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">🌊 Natural Flow</h3>
                <p className="text-gray-600">
                  Like a river flowing effortlessly to the ocean, meditation is the natural movement 
                  of consciousness returning to its source—pure, undisturbed awareness.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div 
                className="bg-gradient-to-br from-violet-500 to-blue-600 rounded-3xl p-8 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">The Meditative State</h3>
                <p className="mb-6 text-violet-100">
                  "Meditation is a state of meditative being—not something you do, but something you ARE. 
                  It's the recognition of your true nature beyond the fluctuations of mind and emotion."
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Present moment awareness</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Inner stillness and peace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Unity of being and doing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Effortless, natural state</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How to Become Meditative Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                How Do You Become Meditative?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The path to meditative being is simple yet profound—it requires patience, practice, and gentle surrender.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {becomingMeditative.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Types of Meditation */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Meditation Practices
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different pathways to the meditative state, each offering unique approaches to inner stillness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {meditationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                <p className="text-violet-600 text-sm font-medium italic">{type.benefits}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What Are the Benefits of Meditation?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meditation transforms every aspect of your being—mind, body, and spirit—leading to profound healing and awakening.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`bg-gradient-to-r ${category.color} rounded-xl p-6 mb-6`}>
                  <h3 className="text-2xl font-bold text-white text-center">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What is Yoga Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                What Exactly is Yoga?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Yoga is far more than physical postures—it's a complete system for awakening to your true nature.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The True Meaning of Yoga</h3>
              <p className="text-xl text-violet-100">
                "Yoga" comes from the Sanskrit root "yuj" meaning "to unite" or "to join"—
                the union of individual consciousness with universal consciousness.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-300">🕉️ Ancient Wisdom</h4>
                <p className="text-violet-100 mb-4">
                  Yoga is a 5,000-year-old science of self-realization that encompasses physical, 
                  mental, emotional, and spiritual dimensions of human existence.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-300">🌟 Complete System</h4>
                <p className="text-violet-100 mb-4">
                  More than poses, yoga includes ethics, breath work, concentration, 
                  meditation, and the ultimate goal of enlightenment or self-realization.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaConnection.map((aspect, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4 text-center">{aspect.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{aspect.aspect}</h3>
                <p className="text-gray-600 text-sm">{aspect.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-100">
            <h3 className="text-2xl font-bold text-center mb-6 text-violet-700">
              Meditation & Yoga: Inseparable Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  In the traditional understanding, yoga and meditation are not separate practices 
                  but different aspects of the same journey toward self-realization.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Yoga prepares the body for meditation</li>
                  <li>• Meditation is the culmination of yoga practice</li>
                  <li>• Both lead to the same goal: unity of being</li>
                  <li>• Physical practice calms the mind for stillness</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <p className="text-violet-600 font-semibold italic">
                  "Yoga is the journey of the self, through the self, to the self." 
                  <br />— The Bhagavad Gita
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Begin Your Inner Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Step into the timeless practice of meditation and discover the peace, 
            clarity, and joy that are your birthright.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Meditating Today
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-violet-600 transition-all duration-200"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
