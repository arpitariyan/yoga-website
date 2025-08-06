'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Waves, Heart, Target, Clock, CheckCircle } from 'lucide-react'

export default function Hypnosis() {
  const benefits = [
    'Reduce stress and anxiety',
    'Overcome limiting beliefs',
    'Improve sleep quality',
    'Break bad habits',
    'Boost confidence',
    'Enhance focus and concentration'
  ]

  const sessions = [
    {
      title: 'Stress Relief',
      duration: '60 minutes',
      description: 'Deep relaxation techniques to release tension and stress.'
    },
    {
      title: 'Confidence Building',
      duration: '90 minutes',
      description: 'Rewire your subconscious for unshakeable self-confidence.'
    },
    {
      title: 'Habit Change',
      duration: '75 minutes',
      description: 'Break free from unwanted habits and create positive ones.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hypnosis Therapy
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
              Unlock the power of your subconscious mind and transform your life from within.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Hypnosis Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Hypnosis?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hypnosis is a natural, scientifically-proven state of focused attention and 
                  heightened suggestibility. Contrary to popular misconceptions, you remain 
                  fully aware and in control throughout the entire process.
                </p>
                <p>
                  During hypnosis, your conscious mind relaxes while your subconscious becomes 
                  more receptive to positive suggestions and therapeutic interventions. This 
                  allows us to address deep-seated patterns and beliefs that may be holding you back.
                </p>
                <p>
                  Our approach combines traditional hypnotherapy with modern neuroscience 
                  understanding, creating powerful and lasting transformations in a safe, 
                  comfortable environment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
                <div className="text-center text-purple-600 relative z-10">
                  <Waves className="w-24 h-24 mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold">Deep Relaxation State</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Hypnosis Helps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience profound positive changes in multiple areas of your life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Sessions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customized hypnotherapy sessions tailored to your specific goals and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  {index === 0 && <Heart className="w-8 h-8 text-white" />}
                  {index === 1 && <Target className="w-8 h-8 text-white" />}
                  {index === 2 && <Brain className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{session.title}</h3>
                
                <div className="flex items-center text-purple-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{session.duration}</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{session.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Mind?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards unlocking your full potential through the power of hypnosis.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover:shadow-lg transition-all duration-200"
            >
              Book Your Session
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
