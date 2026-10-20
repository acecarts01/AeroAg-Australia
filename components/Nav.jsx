'use client';

import React from 'react';
import Link from 'next/link';
import { SITE, CONTACT, PRODUCTS } from '@/config/site';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Guide', href: '/guide-agricultural-drones/' },
    { name: 'T50', href: '/dji-agras-t50/' },
    { name: 'T25', href: '/dji-agras-t25/' },
    { name: 'T40', href: '/dji-agras-t40/' },
    { name: 'Mavic 3M', href: '/dji-mavic-3-multispectral/' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-brand font-bold text-xl tracking-tight uppercase">AeroAg Australia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-gray-700 hover:text-brand font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="#quote" 
            className="btn btn-primary text-sm md:text-base whitespace-nowrap"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-brand font-medium py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={16} /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail size={16} /> {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
