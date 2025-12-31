"use client"
import { useState } from "react";
import { IoLocationOutline, IoSettingsOutline, IoStopwatch } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

import './HeaderStyle.css';

const HeaderPages = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const closeMenu = () => {
    setToggle(false);
  }

  return (
    <header className="header-pages bg-white shadow-md">
      {/* Top Section */}
      <div className="header-top-section bg-[#4A90E2] text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Business Hours & Location - Combined in Center */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Business Hours */}
              <div className="flex items-center gap-2">
                <IoStopwatch size={20} className="text-white" />
                <span className="text-sm font-medium">MONDAY TO FRIDAY: 8AM - 6PM</span>
              </div>

              {/* Divider for Desktop */}
              <div className="hidden md:block w-px h-6 bg-white/30"></div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <IoLocationOutline size={20} className="text-white" />
                <span className="text-sm font-medium">KARACHI, PAKISTAN</span>
              </div>

              {/* Divider for Desktop */}
              <div className="hidden md:block w-px h-6 bg-white/30"></div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <FaYoutube size={18} />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <FaInstagram size={18} />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <FaFacebookF size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 hr"></div>

      {/* Main Header */}
      <div className="main-header py-4 px-4 bg-[#4A90E2]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-[#4A90E2] p-2 rounded-full">
                <IoSettingsOutline size={24} className="text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">CAR REPAIR</p>
                <p className="text-xs text-white">Professional Auto Services</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`header-link ${toggle ? "active" : ""}`}>
              <ul className="flex items-center gap-6">
                <li><Link href="/" className="nav-link" onClick={closeMenu}>HOME</Link></li>
                <li><Link href="/about" className="nav-link" onClick={closeMenu}>ABOUT US</Link></li>
                <li><Link href="/services" className="nav-link" onClick={closeMenu}>SERVICES</Link></li>
                <li><Link href="/booking" className="nav-link" onClick={closeMenu}>Booking</Link></li>
                <li><Link href="/contactus" className="nav-link" onClick={closeMenu}>CONTACT US</Link></li>
              </ul>
            </nav>

            {/* Search Bar */}
            <div className="relative hidden md:block w-48 flex-shrink-0">
              <div className="flex items-center gap-2 border border-white rounded-full px-3 py-2 transition-all duration-300 focus-within:border-[#FFD700] focus-within:shadow-lg focus-within:bg-white/10">
                <IoMdSearch size={18} className="text-white" />
                <input type="text" placeholder="Search..." className="outline-none w-full bg-transparent text-white placeholder-gray-300 text-sm" />
              </div>
            </div>

            {/* Hamburger Button */}
            <button className="icons-bar md:hidden" onClick={handleToggle} aria-label="Toggle menu">
              <FaBarsStaggered size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 z-[98] lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default HeaderPages;