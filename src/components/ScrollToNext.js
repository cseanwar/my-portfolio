'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMouse, FaChevronDown } from 'react-icons/fa';

const ScrollToNext = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Define sections in order
  const sections = ['home', 'about', 'qualifications', 'skills', 'services', 'projects', 'contact'];

  const scrollToNext = () => {
    const currentScroll = window.pageYOffset;
    
    // Find the next section that is below the current viewport
    const nextSection = sections.find(id => {
      const element = document.getElementById(id);
      if (element) {
        // We use a small offset (100px) to ensure we don't just stay on the same section
        return element.offsetTop > currentScroll + 100;
      }
      return false;
    });

    if (nextSection) {
      const element = document.getElementById(nextSection);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no next section, we might be at the bottom, or just scroll to the very top (optional)
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator if we're at the very bottom
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
      setIsVisible(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group bg-[#0b0e14]/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/5"
          onClick={scrollToNext}
        >
          <div className="flex items-center gap-3">
            <FaMouse className="text-xl animate-bounce" />
            <span className="text-sm font-medium tracking-widest uppercase">Scroll Down</span>
            <FaChevronDown className="text-xs animate-bounce" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToNext;
