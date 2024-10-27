"use client"
import React, { useState, useEffect } from 'react';
import { navItems } from '../../mockData';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <nav className="relative bg-black border border-gray-600">
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile Header with Menu Button */}
        <div className="flex items-center justify-between px-4 md:hidden">
          <div className="py-4 text-white font-semibold">LOGO</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              "x"
            ) : (
              "opne"
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:justify-around gap-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-3 font-playfair  font-medium lg:px-6 py-4 text-gray-300 hover:text-white text-xs lg:text-sm font-medium tracking-wider transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && (
          <div
            className={`absolute top-full left-0 right-0 bg-black border-t border-gray-800 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 text-sm font-medium tracking-wider border-b border-gray-800 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;