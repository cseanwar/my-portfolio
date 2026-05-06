'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Run on client only
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'skills', 'qualifications', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!theme) return null;

  const menuItems = [
    {
      label: "Home", id: "home", href: "#home", icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      label: "Tech Stack", id: "skills", href: "#skills", icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      label: "Qualifications", id: "qualifications", href: "#qualifications", icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      label: "Projects", id: "projects", href: "#projects", icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      label: "Contact Me", id: "contact", href: "#contact", icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
  ];

  return (
    <div className="fixed top-1 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6">
      <nav className="bg-[var(--nav-bg)] backdrop-blur-xl flex items-center justify-between py-2">
        {/* Logo Section (Left) */}
        <div className="flex items-center min-w-[100px] justify-center">
          <img
            alt="Anwar Hossain"
            className={`h-16 w-auto object-contain transition-all ${theme === 'light' ? 'invert' : ''}`}
            src="/logo.png"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        </div>

        {/* Menu Items Group (Center Pill) */}
        <div className="flex items-center gap-1 px-1 border border-[var(--border-color)] rounded-full py-1 shadow-xl bg-white/5 mx-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeSection === item.id
                  ? 'bg-white/10 text-[var(--foreground)] shadow-inner'
                  : 'text-gray-400 hover:text-[var(--foreground)] hover:bg-white/5'}`}
            >
              <span className={activeSection === item.id ? 'text-blue-400' : 'text-gray-500'}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-[var(--foreground)] hover:bg-white/5 transition-all">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              More
              <svg className="w-3 h-3 text-gray-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-3 w-56 bg-[var(--background)] backdrop-blur-2xl border border-[var(--border-color)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl overflow-hidden z-[60]">
              <div className="space-y-1">
                <a
                  href="#about"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-[var(--foreground)] hover:bg-white/10 transition group/item"
                >
                  <div className="rounded-lg bg-purple-500/10 text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition p-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  About Me
                </a>
                <a
                  href="#services"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-[var(--foreground)] hover:bg-white/10 transition group/item"
                >
                  <div className="rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition p-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle (Right) */}
        <div className="flex items-center min-w-[100px] justify-center relative z-[70]">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/5 border border-[var(--border-color)] text-gray-400 hover:text-[var(--foreground)] hover:bg-white/10 transition-all shadow-inner cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.243l.707.707M7.757 6.343l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
