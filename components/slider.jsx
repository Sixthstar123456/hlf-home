'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { id: 1, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161750/5_rsiwa2.jpg' },
  { id: 2, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161750/6_pb0rpn.jpg' },
  { id: 3, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161750/17_lfpsvy.jpg' },
  { id: 4, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/7_fcpdco.jpg' },
  { id: 5, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/16_l5ue1b.jpg' },
  { id: 6, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/8_jotawl.jpg' },
  { id: 7, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/2_s4v9fc.jpg' },
  { id: 8, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/1_omixm9.jpg' },
  { id: 9, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161752/4_e9wbcv.jpg' },
  { id: 10, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/9_agtakb.jpg' },
  { id: 11, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/12_qj6d4z.jpg' },
  { id: 12, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161752/15_k2ruuo.jpg' },
  { id: 13, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161752/11_dqfuyl.jpg' },
  { id: 14, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161751/10_afkmsh.jpg' },
  { id: 15, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161752/13_tp5nxa.jpg' },
  { id: 16, image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750161752/3_ucgkri.jpg' },
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
    <div className="relative w-full max-w-[1600px] h-[584px] mx-auto overflow-hidden ">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
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
            className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
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
              className="object-contain sm:object-cover"
              priority
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1600px"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
