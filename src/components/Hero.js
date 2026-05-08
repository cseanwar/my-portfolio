'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const roles = ["Web Developer", "Web Designer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const techIcons = [
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden flex items-center bg-[#0b0e14]"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* ── MOBILE & TABLET layout: stacked, portrait on top ── */}
        <div className="flex flex-col items-center gap-10 md:hidden">

          {/* Portrait — top on mobile/tablet */}
          <div className="relative flex justify-center w-full">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 aspect-square">
              {/* Orbiting Ring */}
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]" />

              {/* Tech Icons */}
              <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                {techIcons.map((item, index) => {
                  const angle = index * (360 / techIcons.length);
                  const angleRad = (angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * 50;
                  const y = Math.sin(angleRad) * 50;
                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2 bg-[#1e293b]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl flex items-center justify-center animate-[spin-reverse_30s_linear_infinite]">
                        <Image src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Portrait image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl z-10 bg-[#0b0e14]">
                <div className="relative w-full h-full">
                  <Image
                    src="/anwar.png"
                    alt="Anwar Hossain"
                    className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.1]"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#0b0e14_85%)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Text content — below portrait */}
          <div className="space-y-4 sm:space-y-5 text-center w-full max-w-lg mx-auto px-2">
            <p className="text-base sm:text-lg font-medium text-blue-400">Hey, I'm</p>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Anwar Hossain
              <span className="inline-block animate-bounce ml-2">👋</span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              I am a
              <div className="h-8 sm:h-10 overflow-hidden relative inline-block min-w-45 sm:min-w-55">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent absolute left-0 right-0 text-center"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              I build high-performance, beautiful, and user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6">
              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2 group text-sm sm:text-base"
              >
                Say Hello
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex gap-3 sm:gap-4 text-gray-400">
                <a href="https://github.com/cseanwar" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/anwar-hossain-a3095147" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://x.com/cseanwar" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout: side by side (md+) ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="space-y-5 lg:space-y-6">
            <p className="text-lg font-medium text-blue-400">Hey, I'm</p>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Anwar Hossain
              <span className="inline-block animate-bounce ml-2">👋</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-400 flex items-center gap-2">
              I am a
              <div className="h-10 overflow-hidden relative inline-block min-w-55 lg:min-w-62.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent absolute left-0"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>

            <p className="text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed">
              I build high-performance, beautiful, and user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
            </p>

            <div className="flex items-center flex-wrap gap-5 lg:gap-6 pt-6 lg:pt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2 group"
              >
                Say Hello
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex gap-4 text-gray-400">
                <a href="https://github.com/cseanwar" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/anwar-hossain-a3095147" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://x.com/cseanwar" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Portrait with orbit */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 lg:w-105 lg:h-105 xl:w-112.5 xl:h-112.5 aspect-square">
              {/* Orbiting Ring */}
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]" />

              {/* Tech Icons */}
              <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                {techIcons.map((item, index) => {
                  const angle = index * (360 / techIcons.length);
                  const angleRad = (angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * 50;
                  const y = Math.sin(angleRad) * 50;
                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 p-2.5 lg:p-3 bg-[#1e293b]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-center z-20 animate-[spin-reverse_30s_linear_infinite]">
                        <Image src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Portrait image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl z-10 bg-[#0b0e14]">
                <div className="relative w-full h-full">
                  <Image
                    src="/anwar.png"
                    alt="Anwar Hossain"
                    className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.1]"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#0b0e14_85%)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;