'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1749812757/home-01_nij8jd.jpg',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1749812760/home-05_kh6wox.jpg',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1749812819/home-04_ypfgak.jpg',
  },
]

export default function FinancingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'absolute',
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute',
    }),
  }

  return (
    <div className="relative w-full aspect-[22/9] sm:aspect-[21/9] lg:aspect-[24/9] overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-2 w-2 sm:h-8 sm:w-8 lg:h-8 lg:w-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-2 w-2 sm:h-8 sm:w-8 lg:h-8 lg:w-8 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
