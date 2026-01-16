"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import recipes from "@/app/(data)/recipes/page";
import { 
  Sparkles, 
  Star, 
  Clock, 
  Flame, 
  ChevronRight,
  Bike,
  Leaf,
  ChefHat,
  Heart,
  ShoppingCart
} from "lucide-react";

export default function Menu() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      {/* Animated Background - KEEP SAME */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80  rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96  rounded-full blur-3xl animate-ping" style={{animationDelay: '2s'}} />
      </div>

      {/* Header with Glassmorphism - KEEP SAME */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-20 backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-2xl"
      >
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl">
            <Sparkles className="w-8 h-8 text-white drop-shadow-md animate-spin-slow" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left flex-1">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/90 to-green-500/90 text-white px-6 py-2.5 rounded-2xl text-sm font-bold mb-6 backdrop-blur-sm shadow-lg border border-white/30"
            >
              <ChefHat className="w-5 h-5" />
              <span>🍋 Chef's Curated Selection</span>
            </motion.div>
            
            <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-[#495e57] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
              Weekly
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Specials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600/90 max-w-2xl mx-auto lg:mx-0 backdrop-blur-sm bg-white/50 p-4 rounded-xl border border-white/30">
              Discover chef-curated Mediterranean masterpieces crafted with seasonal ingredients and timeless tradition
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-gradient-to-r from-[#495e57] to-[#3b4f49] text-white px-10 py-6 rounded-3xl font-bold text-xl shadow-2xl shadow-[#495e57]/40 backdrop-blur-md border border-white/20 overflow-hidden hover:from-[#3b4f49] hover:to-[#2d3b2d] hover:shadow-3xl hover:shadow-yellow-400/50 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Full Menu
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-transparent to-yellow-400/50 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </div>
      </motion.div>

      {/* ORIGINAL Cards Grid - REVERTED TO YOUR DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Recipe badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {recipe.isVegetarian && (
                <div className="flex items-center gap-1.5 bg-emerald-500/90 text-white 
                                px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                  <Leaf className="w-3 h-3" />
                  <span>Vegetarian</span>
                </div>
              )}
              {recipe.isSpicy && (
                <div className="flex items-center gap-1.5 bg-red-500/90 text-white 
                                px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                  <Flame className="w-3 h-3" />
                  <span>Spicy</span>
                </div>
              )}
            </div>

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover transition-transform duration-700 
                          group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Quick info overlay */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm 
                              text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{recipe.prepTime || "25"} min</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Header with title and price */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(recipe.rating || 4)
                              ? "fill-[#f4ce14] text-[#f4ce14]"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {recipe.rating || 4.5}
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#495e57]">
                    ${recipe.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500">per serving</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 line-clamp-2">
                {recipe.description}
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  <span>{recipe.calories || "450"} cal</span>
                </div>
                <div className="flex items-center gap-1">
                  <Leaf className="w-4 h-4" />
                  <span>{recipe.category || "Main Course"}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between">
                <button className="group/delivery flex items-center gap-2 text-[#495e57] 
                                      font-medium hover:text-[#f4ce14] transition-colors">
                  <div className="relative p-2 rounded-full bg-[#f4ce14]/10 
                                 group-hover/delivery:bg-[#f4ce14]/20 transition-colors">
                    <Bike className="w-5 h-5" />
                  </div>
                  <span>Order Delivery</span>
                  <ChevronRight className="w-4 h-4 opacity-0 
                                          group-hover/delivery:opacity-100 
                                          group-hover/delivery:translate-x-1 
                                          transition-all" />
                </button>

                <button className="px-5 py-2.5 bg-[#495e57] text-white rounded-full 
                                      font-medium text-sm hover:bg-[#3a4a42] 
                                      transition-colors shadow-md hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 border-2 border-transparent 
                            group-hover:border-[#f4ce14]/30 rounded-2xl 
                            transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Premium CTA Section - KEEP SAME */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 pt-16 border-t border-white/20 bg-gradient-to-r from-white/50 to-gray-50/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/90 to-green-500/90 text-white px-8 py-4 rounded-3xl text-lg font-bold mb-8 backdrop-blur-xl shadow-2xl border border-white/40"
          >
            <Leaf className="w-6 h-6" />
            <span>Fresh ingredients delivered daily</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-[#495e57] to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
            Authentic Mediterranean
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h3>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/70 p-8 rounded-3xl shadow-xl border border-white/50">
            All specials prepared fresh daily with locally sourced ingredients. Available for dine-in, takeout, and lightning-fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    onClick={scrollToTop}
    className="px-12 py-6 bg-gradient-to-r from-[#495e57] to-[#3b4f49] text-white rounded-3xl font-black text-xl shadow-2xl shadow-[#495e57]/50 hover:shadow-3xl hover:shadow-yellow-400/60 transition-all duration-500 backdrop-blur-md border border-white/30"
  >
    Book a Table
  </motion.button>

  <motion.button 
    whileHover={{ scale: 1.05 }}
    onClick={scrollToTop}
    className="px-12 py-6 bg-white/90 text-[#495e57] rounded-3xl font-black text-xl shadow-2xl border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-500 hover:bg-yellow-50/50 backdrop-blur-xl transition-all duration-500"
  >
    🍷 Wine Pairings
  </motion.button>
</div>

        </div>
      </motion.div>
    </section>
  );
}
