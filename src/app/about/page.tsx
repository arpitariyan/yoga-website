'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Award, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'We address mind, body, and spirit for complete wellness transformation.'
    },
    {
      icon: Star,
      title: '10+ Years Experience',
      description: 'Decades of experience in various wellness and martial arts disciplines.'
    },
    {
      icon: Award,
      title: 'Certified Practitioner',
      description: 'Licensed in hypnosis, NLP, Wing Chun, and meditation practices.'
    },
    {
      icon: Users,
      title: '500+ Lives Changed',
      description: 'Hundreds of individuals have transformed their lives through our programs.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Our Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover the story behind our holistic approach to wellness and transformation.
          </motion.p>
        </div>
      </section>

      {/* Coach Profile Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center text-6xl">
                    👤
                  </div>
                  <p>Professional Photo</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Guide</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to Serenity, where ancient wisdom meets modern wellness practices. 
                  I am a certified life coach with over a decade of experience in holistic healing 
                  and personal transformation.
                </p>
                <p>
                  My journey began with my own search for inner peace and mental clarity. 
                  Through years of study and practice in various disciplines including yoga, 
                  meditation, hypnosis, NLP, and Wing Chun, I discovered the power of 
                  integrating mind, body, and spirit.
                </p>
                <p>
                  Today, I am passionate about sharing these transformative practices with 
                  others who are ready to embark on their own journey of self-discovery 
                  and empowerment.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Certified Hypnotherapist (CHT)</li>
                  <li>• NLP Master Practitioner</li>
                  <li>• Wing Chun Instructor (Level 3)</li>
                  <li>• Meditation & Mindfulness Coach</li>
                  <li>• Yoga Alliance Certified (RYT-500)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Serenity?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines multiple disciplines for comprehensive transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                "True transformation happens when we align our mind, body, and spirit. 
                Every individual has the inner wisdom and strength to create positive change. 
                My role is simply to guide you in discovering and unleashing your own potential."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
