"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">GearConnect</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <div className="flex space-x-1">
              <Link href="/" className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                Home
              </Link>
              <Link href="/features" className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                Features
              </Link>
              <Link href="/faq" className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                FAQ
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                Contact
              </Link>
            </div>
            <Link 
              href="/#waitlist" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-200 transform hover:scale-105"
            >
              Join Early Access
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 relative z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
              Home
            </Link>
            <Link href="/features" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
              Features
            </Link>
            <Link href="/faq" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
              FAQ
            </Link>
            <Link href="/contact" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
              Contact
            </Link>
            <Link 
              href="/#waitlist" 
              className="block mx-4 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg text-base font-semibold text-center transition-all duration-200"
            >
              Join Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 