'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 py-4 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
        <ul className="flex gap-6 md:gap-8 list-none">
          {[
            ['Home', '#home'],
            ['Surat', '#letter'],
            ['Galeri', '#gallery'],
            ['Alasan', '#reasons'],
            ['Perjalanan', '#journey'],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-purple-300 hover:text-white text-xs md:text-sm font-normal tracking-widest uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-lavender after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
