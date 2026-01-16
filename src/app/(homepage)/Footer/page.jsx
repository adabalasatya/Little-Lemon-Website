"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronUp,
  Clock,
  Shield,
  Award
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#495e57] to-[#2c3d36] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f4ce14] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/logo-white.png"
                  alt="Little Lemon"
                  width={120}
                  height={60}
                  className="w-[120px] h-auto"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#f4ce14] rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-[#495e57]" />
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Award-winning Mediterranean restaurant serving authentic flavors with a modern twist since 2009.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-[#f4ce14]" />
                <span>Certified Organic</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-[#f4ce14] rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Seasonal Menu" },
                { href: "/reservations", label: "Reservations" },
                { href: "/order-online", label: "Order Online" },
                // { href: "/about", label: "Our Story" },
                // { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={scrollToTop}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f4ce14] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-[#f4ce14] rounded-full"></div>
              Visit Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f4ce14] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">123 Mediterranean Way</p>
                  <p className="text-gray-300 text-sm">Chicago, IL 60601</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f4ce14]" />
                <span className="font-medium">(312) 555-LEMON</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f4ce14]" />
                <span className="font-medium">hello@littlelemon.com</span>
              </li>
            </ul>
            
            {/* Hours */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#f4ce14]" />
                <h4 className="text-sm font-semibold">Hours</h4>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Thu: 5PM - 11PM</p>
                <p>Fri - Sun: 4PM - 12AM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-[#f4ce14] rounded-full"></div>
              Stay Updated
            </h3>
            
            {isSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-green-400 font-medium">Thank you for subscribing!</p>
                <p className="text-green-400/70 text-sm mt-1">Check your email for our welcome gift.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-300 text-sm mb-6">
                  Subscribe to our newsletter for exclusive offers and seasonal updates.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f4ce14] focus:ring-1 focus:ring-[#f4ce14] transition"
                      required
                    />
                    <Mail className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f4ce14] to-[#ffd93d] text-[#495e57] font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-[#f4ce14]/20 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-gray-400 text-xs mt-4">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Links */}
          <div className="flex  items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:scale-105 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-[#f4ce14] transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/5 hover:scale-105 rounded-full hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-[#f4ce14] transition-colors" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/5 hover:scale-105 rounded-full hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-[#f4ce14] transition-colors" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Little Lemon. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-gray-500 text-xs">
              <Link href="/privacy" className="hover:text-[#f4ce14]  transition">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#f4ce14] transition">Terms of Service</Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-[#f4ce14] transition">Cookie Policy</Link>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full transition-all"
          >
            <span className="text-sm">Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 px-4 py-2 rounded-full text-xs font-medium">
            🍋 Family Owned Since 2009
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-full text-xs font-medium">
            🌱 100% Organic Ingredients
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-full text-xs font-medium">
            ⭐ Michelin Rated
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full">
          <div className="grid grid-cols-12 gap-8 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}