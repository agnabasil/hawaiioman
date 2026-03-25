import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background-light py-12 border-t border-muted/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center">
          <div className="h-8 w-auto flex items-center shrink-0">
            <img src="/images/hawaii-logo.png" alt="Hawaii Fresh Juice Logo" className="h-full w-auto object-contain" />
          </div>
          <p className="font-display font-bold text-text-main text-lg tracking-tight -ml-2">Hawaii Fresh Juice</p>
        </div>
        <div className="text-muted text-sm font-body">
          © {new Date().getFullYear()} Hawaii Fresh Juice. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-text-main hover:text-primary transition-colors" title="Home"><span className="material-symbols-outlined">public</span></Link>
          <Link to="/contact" className="text-text-main hover:text-primary transition-colors" title="Contact Us"><span className="material-symbols-outlined">mail</span></Link>
        </div>
      </div>
    </footer>
  );
};
