"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  MapPin,
  CreditCard,
  Building2,
  Phone,
  MessageCircle,
  Mail,
  PhoneCall,
  FileQuestion,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showProducts, setShowProducts] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setShowProducts(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138377/6_gzdjgr.png", title: "Heavy Commercial Vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138378/7_mdcfel.png", title: "Medium Commercial Vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138376/5_k1azgd.png", title: "Intermediate Commercial Vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138396/2_erbq0p.png", title: "Light Commercial Vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138398/3_eft2x3.png", title: "Small Commercial Vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138399/4_wglm7y.png", title: "Bus Passengers vehicle" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138380/8_rutjz3.png", title: "MSME Loans" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138381/9_frq9hv.png", title: "Two Wheeler" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750139121/0079b2_24_xwbarz.png", title: "Used Car Loans" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138383/11_xezrly.png", title: "Construction Equipments" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138395/1_z7rg24.png", title: "Digital Pre-Owned Market for Vehicles" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138390/15_ykcqhh.png", title: "Tractor" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138392/16_xdvcuf.png", title: "Affordable Housing Finance" },
    { img: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750138393/17_nooce6.png", title: "Digital End-to-End Transportation and Logistics Solution" },
  ];

  const visibleProducts = showAllProducts ? products : products.slice(0, 7);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full flex justify-center py-2 px-4 pt-6 pb-4">
        <div className="w-full max-w-screen-xl px-4 text-xs font-semibold flex flex-wrap items-center justify-center gap-4 md:justify-end md:gap-8 text-center md:text-left">
          <TopBarLink icon={<MapPin className="h-4 w-4" />} text="Locate us" />
          <TopBarLink icon={<PhoneCall className="h-4 w-4" />} text="Contact us" />
          <TopBarLink icon={<FileQuestion className="h-4 w-4" />} text="FAQ" />
          <TopBarLink text="SUPPORT" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full flex justify-center mt-2">
        <div className="relative w-full max-w-screen-xl" ref={productRef}>
          <div className="bg-gray-100 text-black px-4 sm:px-6 md:px-12 py-5 rounded-2xl flex items-center justify-between shadow-md flex-wrap md:flex-nowrap">
            {/* Logo */}
            <div className="flex items-center gap-4 md:gap-12 w-full md:w-auto">
              <Link href="/" className="relative">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1749799426/logo_sbvowc.png"
                  alt="TATA CAPITAL"
                  width={160}
                  height={40}
                />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden ml-auto">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] text-gray-700">
              <button
                onClick={() => setShowProducts((prev) => !prev)}
                className="relative cursor-pointer hover:text-[#002f6c] flex items-center gap-1"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link href="#" className="hover:text-[#002f6c]">We Finance</Link>
              <Link href="#" className="hover:text-[#002f6c]">About us</Link>
              <Link href="#" className="hover:text-[#002f6c]">Investor Zone</Link>
              <Link href="#" className="hover:text-[#002f6c]">Customer Care</Link>
            </nav>

            {/* Right Icons */}
           <div className="hidden md:flex items-center gap-2 text-gray-700">
  <Link
    href="#"
    className="bg-[#06a6dd] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
  >
    Pay Now
  </Link>
  <Link
    href="#"
    className="bg-[#06a6dd] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
  >
    Customer Login
  </Link>
</div>
          </div>

          {/* Mobile Nav Dropdown */}
          {menuOpen && (
            <div className="md:hidden mt-2 px-4 space-y-2 bg-white rounded-lg py-4 shadow text-gray-700">
              <button
                onClick={() => setShowProducts((prev) => !prev)}
                className="w-full text-left text-sm py-1 hover:text-[#002f6c]"
              >
                Products
              </button>
              <Link href="#" className="block text-sm py-1 hover:text-[#002f6c]">We Finance</Link>
              <Link href="#" className="block text-sm py-1 hover:text-[#002f6c]">About us</Link>
              <Link href="#" className="block text-sm py-1 hover:text-[#002f6c]">Investor Zone</Link>
              <Link href="#" className="block text-sm py-1 hover:text-[#002f6c]">Customer Care</Link>
              <div className="flex gap-4 items-center mt-2">
                <Phone className="w-5 h-5 hover:text-[#002f6c]" />
                <MessageCircle className="w-5 h-5 hover:text-[#002f6c]" />
                <Mail className="w-5 h-5 hover:text-[#002f6c]" />
              </div>
              <Link
                href="#"
                className="mt-2 block bg-[#06a6dd] text-white text-center px-6 py-2 rounded-md font-semibold hover:bg-yellow-300"
              >
                Pay Now
              </Link>
            </div>
          )}

          {/* Product Dropdown */}
          <AnimatePresence>
            {showProducts && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 right-0 z-40 bg-transparent"
              >
                <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl py-6 px-8 w-full max-w-screen-xl mx-auto flex flex-col gap-6 transition-all">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-6 justify-items-center w-full">
                    {visibleProducts.map((product, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <Image
                          src={product.img}
                          width={75}
                          height={75}
                          className="mb-2"
                          alt={product.title}
                        />
                        <p className="text-sm font-medium text-gray-700">{product.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <button
                      className="text-sm text-[#002f6c] font-semibold hover:underline"
                      onClick={() => setShowAllProducts(!showAllProducts)}
                    >
                      {showAllProducts ? "View Less" : "View More"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function TopBarLink({ icon, text }) {
  return (
    <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-[#002f6c]">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
