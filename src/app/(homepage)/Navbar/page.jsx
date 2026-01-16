"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10001] bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={300}
                height={200}
                className="w-[280px] h-auto hover:scale-105 transition-transform duration-300 lg:w-[320px] drop-shadow-lg"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 font-semibold text-lg">
            <NavItem href="/" label="Home" />
            <NavItem href="/menu" label="Menu" />
            <NavItem href="/reservations" label="Reservations" />
            <NavItem href="/order-online" label="Booking or Order Information" />
            <NavItem href="/login" label="Login" />
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-[#FF5733]/20 to-[#FFD700]/20 
                     backdrop-blur-sm border border-white/30 hover:shadow-2xl hover:scale-110 
                     transition-all duration-300 text-[#495E57] hover:text-[#FF5733]"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-gradient-to-b 
                   from-white/95 via-white/90 to-white/80 backdrop-blur-3xl shadow-2xl
                   transform transition-all duration-500 ease-out z-[10000]
                   ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        {/* Mobile Menu Overlay Close */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Mobile Menu Content */}
        <div className="relative pt-24 pb-20 px-6 flex flex-col items-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-r from-[#FF5733] to-[#FFD700] rounded-2xl shadow-xl flex items-center justify-center mb-8">
            <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-white" />
          </div>
          
          <ul className="flex flex-col items-center gap-6 w-full max-w-md">
            <MobileNavItem 
              href="/" 
              label="Home" 
              onClick={() => setMenuOpen(false)} 
            />
            <MobileNavItem 
              href="/menu" 
              label="Menu" 
              onClick={() => setMenuOpen(false)} 
            />
            <MobileNavItem 
              href="/reservations" 
              label="Reservations" 
              onClick={() => setMenuOpen(false)} 
            />
            <MobileNavItem 
              href="/order-online" 
              label="Booking or Order Information" 
              onClick={() => setMenuOpen(false)} 
            />
            <MobileNavItem 
              href="/login" 
              label="Login" 
              onClick={() => setMenuOpen(false)} 
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="relative px-4 py-3 text-[#495E57] font-semibold hover:text-[#FF5733] 
                 transition-all duration-300 group after:absolute after:bottom-0 
                 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 
                 after:rounded-full after:bg-gradient-to-r after:from-[#FF5733] 
                 after:to-[#FFD700] after:transition-all after:duration-300
                 hover:after:w-[80%] after:group-hover:w-[80%]"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileNavItem({ href, label, onClick }) {
  return (
    <li className="w-full">
      <Link
        href={href}
        onClick={onClick}
        className="group block w-full px-8 py-6 bg-white/50 backdrop-blur-xl 
                 rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl 
                 hover:bg-gradient-to-r hover:from-[#FF5733]/10 hover:to-[#FFD700]/10 
                 text-xl font-bold text-[#495E57] hover:text-[#FF5733] 
                 transform hover:scale-[1.02] transition-all duration-300"
      >
        <span className="relative z-10">{label}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5733]/20 to-[#FFD700]/20 
                       rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity 
                       duration-300" />
      </Link>
    </li>
  );
}
