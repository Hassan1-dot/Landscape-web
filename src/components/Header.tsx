import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
            V
          </div>
          <span className={`font-display font-semibold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Verdant
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-secondary' : 'text-white/90'}`}>Services</a>
          <a href="#gallery" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-secondary' : 'text-white/90'}`}>Gallery</a>
          <a href="#reviews" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-secondary' : 'text-white/90'}`}>Reviews</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+18005550199" className={`flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
            <Phone className="w-4 h-4" />
            <span>(800) 555-0199</span>
          </a>
          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-6">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-primary">Services</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-primary">Gallery</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-primary">Reviews</a>
          <div className="h-px bg-gray-100 w-full" />
          <a href="tel:+18005550199" className="flex items-center gap-2 text-lg font-medium text-primary">
            <Phone className="w-5 h-5 text-accent" />
            <span>(800) 555-0199</span>
          </a>
          <button className="bg-accent text-white px-6 py-4 rounded-full text-lg font-medium w-full mt-2">
            Get a Free Quote
          </button>
        </div>
      )}
    </header>
  );
}
