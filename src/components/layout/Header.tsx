import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full z-50 bg-background-light/80 backdrop-blur-md sticky top-0 border-b border-muted/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-auto flex items-center shrink-0">
            <img src="/images/hawaii-logo.png" alt="Hawaii Fresh Juice Logo" className="h-full w-auto object-contain" />
          </div>
          <span className="text-text-main text-2xl font-display font-bold leading-tight select-none -ml-3">Hawaii Fresh Juice</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-text-main hover:text-primary'}`}>Home</Link>
          <Link to="/products" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive('/products') ? 'text-primary border-b-2 border-primary' : 'text-text-main hover:text-primary'}`}>Products</Link>
          <Link to="/story" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive('/story') ? 'text-primary border-b-2 border-primary' : 'text-text-main hover:text-primary'}`}>Our Story</Link>
          <Link to="/contact" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-text-main hover:text-primary'}`}>Contact</Link>
        </nav>
        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-main hover:text-primary transition-colors p-2 -mr-2"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-surface shadow-lg border-t border-muted/10 animate-fade-in origin-top">
          <nav className="flex flex-col py-6 px-10 gap-6">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold tracking-widest transition-colors ${isActive('/') ? 'text-primary' : 'text-text-main hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold tracking-widest transition-colors ${isActive('/products') ? 'text-primary' : 'text-text-main hover:text-primary'}`}
            >
              Products
            </Link>
            <Link 
              to="/story" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold tracking-widest transition-colors ${isActive('/story') ? 'text-primary' : 'text-text-main hover:text-primary'}`}
            >
              Our Story
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold tracking-widest transition-colors ${isActive('/contact') ? 'text-primary' : 'text-text-main hover:text-primary'}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
