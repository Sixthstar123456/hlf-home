"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  { id: 1, name: "Heavy Commercial Vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138377/6_gzdjgr.png" },
  { id: 2, name: "Medium Commercial Vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138378/7_mdcfel.png" },
  { id: 3, name: "Intermediate Commercial Vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138376/5_k1azgd.png" },
  { id: 4, name: "Light Commercial Vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138396/2_erbq0p.png" },
  { id: 5, name: "Small Commercial Vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138398/3_eft2x3.png" },
  { id: 6, name: "Bus Passengers vehicle", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138399/4_wglm7y.png" },
  { id: 7, name: "MSME Loans", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138380/8_rutjz3.png" },
  { id: 8, name: "Two Wheeler", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138381/9_frq9hv.png" },
    { id: 9, name: "Used Car Loans", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750139121/0079b2_24_xwbarz.png" },

  { id: 10, name: "Construction Equipments", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138383/11_xezrly.png" },
  { id: 11, name: "Digital Pre-Owned Market for Vehicles", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138395/1_z7rg24.png" },
  { id: 12, name: "Tractor", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138390/15_ykcqhh.png" },
  { id: 13, name: "Affordable Housing Finance", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138392/16_xdvcuf.png" },
  { id: 14, name: "Digital End-to-End Transportation and Logistics Solution", image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138393/17_nooce6.png" },
]











function useResponsiveItemsPerView() {
  const [items, setItems] = useState(6)

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth
      if (width < 640) setItems(1) // mobile: 1 product
      else if (width < 1024) setItems(4) // tablet: 4 products
      else setItems(6) // desktop: 6 products
    }

    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  return items
}

export default function ProductsCarousel() {
  const itemsPerView = useResponsiveItemsPerView()
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, products.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="text-gray-600 mt-2">Wide Range of Solutions for Every Series</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="h-10 w-10 rounded-full bg-white shadow-sm hover:bg-gray-50 disabled:opacity-30 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Products Container */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                width: `${(100 / itemsPerView) * products.length}%`,
                transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer min-h-40 flex flex-col justify-center items-center">
                    <div className="mb-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                   {product.name && (
  <h3 className="text-sm font-medium text-gray-900 leading-tight">
    {product.name}
  </h3>
)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 rounded-full bg-white shadow-sm hover:bg-gray-50 disabled:opacity-30 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
