'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { X } from 'lucide-react'

interface GalleryImage {
  id: string
  url: string
  title: string
  category?: string
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [loading, setLoading] = useState(true)

  // Sample images for demo purposes (replace with Firebase data)
  const sampleImages: GalleryImage[] = [
    {
      id: '1',
      url: '/api/placeholder/400/300',
      title: 'Yoga Session 1',
      category: 'yoga'
    },
    {
      id: '2',
      url: '/api/placeholder/400/300',
      title: 'Meditation Practice',
      category: 'meditation'
    },
    {
      id: '3',
      url: '/api/placeholder/400/300',
      title: 'Wing Chun Training',
      category: 'martial-arts'
    },
    {
      id: '4',
      url: '/api/placeholder/400/300',
      title: 'Peaceful Moment',
      category: 'wellness'
    },
    {
      id: '5',
      url: '/api/placeholder/400/300',
      title: 'Group Session',
      category: 'yoga'
    },
    {
      id: '6',
      url: '/api/placeholder/400/300',
      title: 'Mindfulness',
      category: 'meditation'
    }
  ]

  useEffect(() => {
    // For now, use sample images. In production, fetch from Firebase
    setImages(sampleImages)
    setLoading(false)

    // Uncomment when Firebase is configured
    /*
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'gallery'))
        const imageData: GalleryImage[] = []
        querySnapshot.forEach((doc) => {
          imageData.push({ id: doc.id, ...doc.data() } as GalleryImage)
        })
        setImages(imageData)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
    */
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our visual journey through wellness, training sessions, and transformations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                {/* Placeholder image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                      📸
                    </div>
                    <p className="text-sm">Image Placeholder</p>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  {image.category && (
                    <p className="text-white/80 text-sm capitalize">{image.category}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                      📸
                    </div>
                    <p>Image Placeholder</p>
                    <p className="text-sm mt-2">{selectedImage.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  {selectedImage.category && (
                    <p className="text-purple-600 capitalize">{selectedImage.category}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Gallery
