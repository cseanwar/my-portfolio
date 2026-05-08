'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTabletOrAbove, setIsTabletOrAbove] = useState(false);
  const [tabletMoreOpen, setTabletMoreOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const tabletMoreRef = useRef(null);

  // Track viewport width to show/hide theme toggle
  useEffect(() => {
    const checkWidth = () => setIsTabletOrAbove(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    // setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

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

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMobileMenuOpen(false);
      setTabletMoreOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close tablet more dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tabletMoreRef.current && !tabletMoreRef.current.contains(e.target)) {
        setTabletMoreOpen(false);
      }
    };
    if (tabletMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [tabletMoreOpen]);

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
      label: 'Home', id: 'home', href: '#home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Tech Stack', id: 'skills', href: '#skills',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Qualifications', id: 'qualifications', href: '#qualifications',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Projects', id: 'projects', href: '#projects',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Contact Me', id: 'contact', href: '#contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const extraItems = [
    {
      label: 'About Me', href: '#about',
      color: 'purple',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Services', href: '#services',
      color: 'blue',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const ThemeIcon = theme === 'dark' ? (
    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.243l.707.707M7.757 6.343l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ) : (
    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="fixed top-1 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-3 sm:px-6" ref={mobileMenuRef}>
      <nav className="bg-(--nav-bg) backdrop-blur-xl flex items-center justify-between py-2 px-2 sm:px-3 md:px-4">

        {/* Logo — always visible on all devices */}
        <div className="flex items-center shrink-0 justify-center">
          <Image
            alt="Anwar Hossain"
            className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all ${theme === 'light' ? 'invert' : ''}`}
            src="/logo.png"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* ── DESKTOP menu (lg+) ── */}
        <div className="hidden lg:flex items-center gap-1 px-1 border border-(--border-color) rounded-full py-1 shadow-xl bg-white/5 mx-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeSection === item.id
                  ? 'bg-white/10 text-(--foreground) shadow-inner'
                  : 'text-gray-400 hover:text-(--foreground) hover:bg-white/5'}`}
            >
              <span className={activeSection === item.id ? 'text-blue-400' : 'text-gray-500'}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-(--foreground) hover:bg-white/5 transition-all">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              More
              <svg className="w-3 h-3 text-gray-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-3 w-56 bg-(--background) backdrop-blur-2xl border border-(--border-color) rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl overflow-hidden z-60">
              <div className="p-2 space-y-1">
                {extraItems.map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-(--foreground) hover:bg-white/10 transition group/item">
                    <div className={`rounded-lg bg-${item.color}-500/10 text-${item.color}-400 group-hover/item:bg-${item.color}-500 group-hover/item:text-white transition p-2`}>
                      {item.icon}
                    </div>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TABLET menu (md → lg): icon + short label pill + More dropdown ── */}
        <div className="hidden md:flex lg:hidden items-center gap-0.5 px-1.5 border border-(--border-color) rounded-full py-1 bg-white/5 mx-3 shadow-lg">
          {menuItems.filter(item => item.id !== 'contact').map((item) => {
            const shortLabel = item.label === 'Qualifications' ? 'Quals'
              : item.label === 'Tech Stack' ? 'Stack'
                : item.label;
            return (
              <a
                key={item.id}
                href={item.href}
                title={item.label}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSection === item.id
                    ? 'bg-white/10 text-(--foreground) shadow-inner'
                    : 'text-gray-400 hover:text-(--foreground) hover:bg-white/5'}`}
              >
                <span className={activeSection === item.id ? 'text-blue-400' : 'text-gray-500'}>
                  {item.icon}
                </span>
                {shortLabel}
              </a>
            );
          })}

          {/* More dropdown for tablet — click-based, includes Contact + extra items */}
          <div className="relative" ref={tabletMoreRef}>
            <button
              onClick={() => setTabletMoreOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-(--foreground) hover:bg-white/5 transition-all whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              More
              <svg
                className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${tabletMoreOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {tabletMoreOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 bg-(--background) backdrop-blur-2xl border border-(--border-color) rounded-2xl shadow-2xl overflow-hidden z-60">
                <div className="p-2 space-y-1">
                  {/* Contact Me */}
                  {menuItems.filter(item => item.id === 'contact').map(item => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setTabletMoreOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                        ${activeSection === item.id
                          ? 'bg-white/10 text-(--foreground)'
                          : 'text-gray-400 hover:text-(--foreground) hover:bg-white/10'}`}
                    >
                      <div className="rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition p-2">
                        {item.icon}
                      </div>
                      {item.label}
                    </a>
                  ))}

                  {/* Divider */}
                  <div className="border-t border-(--border-color) my-1" />

                  {/* About Me & Services */}
                  {extraItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setTabletMoreOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-(--foreground) hover:bg-white/10 transition"
                    >
                      <div className={`rounded-lg bg-${item.color}-500/10 text-${item.color}-400 hover:bg-${item.color}-500 hover:text-white transition p-2`}>
                        {item.icon}
                      </div>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2 min-w-15 sm:min-w-25 justify-end relative z-70">
          {/* Theme toggle — only rendered on md+ (768px and above) */}
          {isTabletOrAbove && (
            <button
              onClick={toggleTheme}
              className="flex p-2.5 sm:p-3 rounded-full bg-white/5 border border-(--border-color) text-gray-400 hover:text-(--foreground) hover:bg-white/10 transition-all shadow-inner cursor-pointer"
              aria-label="Toggle Theme"
            >
              {ThemeIcon}
            </button>
          )}

          {/* Hamburger — mobile only (<md) */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden p-2.5 rounded-full bg-white/5 border border-(--border-color) text-gray-400 hover:text-(--foreground) hover:bg-white/10 transition-all"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── MOBILE dropdown panel (<md) ── */}
      <div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-(--nav-bg) backdrop-blur-xl border border-(--border-color) rounded-2xl shadow-2xl p-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${activeSection === item.id
                  ? 'bg-white/10 text-(--foreground)'
                  : 'text-gray-400 hover:text-(--foreground) hover:bg-white/5'}`}
            >
              <span className={activeSection === item.id ? 'text-blue-400' : 'text-gray-500'}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="border-t border-(--border-color) my-2" />

          {/* Extra items */}
          {extraItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-(--foreground) hover:bg-white/5 transition"
            >
              <span className={`text-${item.color}-400`}>{item.icon}</span>
              {item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="border-t border-(--border-color) my-2" />

          {/* Theme toggle row — at the bottom */}
          <button
            onClick={(e) => { toggleTheme(e); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-(--foreground) hover:bg-white/5 transition"
          >
            <span className={theme === 'dark' ? 'text-yellow-400' : 'text-blue-400'}>
              {ThemeIcon}
            </span>
            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;