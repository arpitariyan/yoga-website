import React from 'react'
import AnimatedCounter from '@/components/AnimatedCounter'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import BackgroundPattern from '@/components/BackgroundPattern'

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden py-32">
        <BackgroundPattern />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transform Your Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover inner peace, mental clarity, and physical wellness through our comprehensive approach to 
            yoga, meditation, hypnosis, NLP, and martial arts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Explore our comprehensive wellness offerings designed to nurture your mind, body, and spirit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <a href="/about">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    About Us
                  </h3>
                  <p className="text-gray-600">Learn about our experienced life coach and holistic wellness philosophy.</p>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/hypnosis">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    Hypnosis
                  </h3>
                  <p className="text-gray-600">Unlock your subconscious potential through guided hypnosis sessions.</p>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/nlp">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    NLP
                  </h3>
                  <p className="text-gray-600">Master Neuro-Linguistic Programming for personal transformation.</p>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/wing-chun">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    Wing Chun
                  </h3>
                  <p className="text-gray-600">Learn the ancient Chinese martial art of self-defense and discipline.</p>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/meditation">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    Meditation
                  </h3>
                  <p className="text-gray-600">Find inner peace and mental clarity through meditation practices.</p>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/gallery">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    Gallery
                  </h3>
                  <p className="text-gray-600">Explore our visual journey through wellness and transformations.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative results our clients have achieved through our holistic wellness programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={500} duration={2} label="Lives Transformed" suffix="+" />
            <AnimatedCounter end={10} duration={2} label="Years of Experience" suffix="+" />
            <AnimatedCounter end={98} duration={2} label="Client Satisfaction" suffix="%" />
            <AnimatedCounter end={1000} duration={2} label="Sessions Completed" suffix="+" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have experienced transformation through our programs.
            </p>
          </div>
          
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Begin?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a more balanced, peaceful, and empowered life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
