'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Mail, X } from 'lucide-react'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+1234567890',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:info@yogalifestyle.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      href: '/contact',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center space-x-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 group`}
              >
                <option.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {option.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  )
}
