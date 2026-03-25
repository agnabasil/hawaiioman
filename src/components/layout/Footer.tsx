import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light py-12 border-t border-muted/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center">
            <div className="h-8 w-auto flex items-center shrink-0">
              <img src="/images/hawaii-logo.png" alt="Hawaii Fresh Juice Logo" className="h-full w-auto object-contain" width={32} height={32} />
            </div>
            <p className="font-display font-bold text-text-main text-lg tracking-tight -ml-2">Hawaii Fresh Juice</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link to="/" className="text-text-main hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-text-main hover:text-primary transition-colors">Products</Link>
            <Link to="/story" className="text-text-main hover:text-primary transition-colors">Our Story</Link>
            <Link to="/contact" className="text-text-main hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="border-t border-muted/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted text-sm font-body">
            © {new Date().getFullYear()} Hawaii Fresh Juice. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:jannajuices@gmail.com" className="text-text-main hover:text-primary transition-colors" title="Email Us" aria-label="Email Us">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a href="tel:+96879727401" className="text-text-main hover:text-primary transition-colors" title="Call Us" aria-label="Call Us">
              <span className="material-symbols-outlined">call</span>
            </a>
            <Link to="/contact" className="text-text-main hover:text-primary transition-colors" title="Visit Us" aria-label="Visit Us">
              <span className="material-symbols-outlined">location_on</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
