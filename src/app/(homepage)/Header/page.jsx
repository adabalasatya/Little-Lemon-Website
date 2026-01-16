"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "@/app/(Components)/reservations/page";

export default function Header() {
  const [showBooking, setShowBooking] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setShowBooking(true);
    router.push("/reservations");
  };

  return (
    <header className="w-full bg-gradient-to-br from-[#1a2a1a] via-[#2d3b2d] to-[#495e57] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-ping delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-spin-slow" />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Enhanced Content Section */}
          {!showBooking && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-left lg:max-w-lg"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-lg font-medium tracking-wider mb-4"
              >
                CHICAGO'S FINEST
              </motion.span>
              
              <h1 className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black leading-[0.85] mb-6 drop-shadow-2xl">
                Little Lemon
              </h1>

              <h2 className="text-white/95 text-[1.75rem] md:text-[2.25rem] font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Chicago
              </h2>

              <p className="text-gray-200/90 text-lg md:text-xl leading-relaxed max-w-xl mb-10 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
                Experience family-owned Mediterranean cuisine where traditional recipes meet modern innovation. Fresh ingredients, bold flavors, unforgettable moments.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleButtonClick}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 text-[#333] font-black px-10 py-5 text-lg rounded-2xl shadow-2xl shadow-yellow-500/50 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 hover:from-yellow-500 hover:via-yellow-400 hover:to-orange-500 hover:shadow-3xl hover:shadow-yellow-400/60"
              >
                <span className="relative z-10">Reserve a Table</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={false}
                />
              </motion.button>
            </motion.div>
          )}

          {/* Enhanced Image Card with Glassmorphism & Advanced Animations */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[380px] h-[420px] lg:w-[480px] lg:h-[500px] group cursor-pointer"
          >
            {/* Multi-layer Glassmorphism Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-400/20 to-yellow-500/30 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl shadow-yellow-500/40 group-hover:shadow-3xl group-hover:shadow-yellow-400/60 transition-all duration-1000"
            />
            
            {/* Floating Particles */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-yellow-400/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="absolute top-20 right-12 w-3 h-3 bg-orange-400/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-16 w-2 h-2 bg-yellow-500/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />

            {/* Main Image Container */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-3xl backdrop-blur-md border-4 border-white/10 bg-gradient-to-br from-white/10 to-transparent"
            >
              <Image
                src="/restauranfood.jpg"
                alt="Premium restaurant dish"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 saturate-0 group-hover:saturate-100 brightness-75 group-hover:brightness-100"
                priority
              />
              
              {/* Hover Overlay */}
              <motion.div 
                initial={false}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500"
              />
              
              {/* Floating Label */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/50 shadow-2xl"
              >
                <h4 className="text-[#333] font-bold text-xl drop-shadow-md">Signature Dish</h4>
                <p className="text-[#666] text-sm font-medium">Fresh & Flavorful</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Booking Overlay */}
        <AnimatePresence mode="wait">
          {showBooking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
              onClick={() => setShowBooking(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 max-w-2xl w-full mx-6 max-h-[90vh] overflow-y-auto shadow-3xl border border-white/30"
                onClick={e => e.stopPropagation()}
              >
                <BookingForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
}
