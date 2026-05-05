'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMouse, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex items-center bg-[#0b0e14]">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-30 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-blue-400">Hey, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Anwar Hossain<span className="inline-block animate-bounce ml-2">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-2">
            I am a
            <div className="h-10 overflow-hidden relative inline-block min-w-[250px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent absolute left-0"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            I build high-performance, beautiful, and user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
          </p>

          <div className="flex items-center flex-wrap gap-6 pt-8">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2 group">
              Say Hello
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                <FaGithub size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Visual/Image */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] aspect-square">
            {/* Orbiting Ring (Spinning Clockwise) */}
            <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>

            {/* Tech Icons Orbiting (Container Spins Clockwise) */}
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
                    style={{
                      left: `${50 + x}%`,
                      top: `${50 + y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Counter-rotate the inner div anti-clockwise to keep icon upright */}
                    <div className="w-12 h-12 md:w-16 md:h-16 p-3 bg-[#1e293b]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-center z-20 animate-[spin-reverse_30s_linear_infinite]">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl z-10 bg-[#0b0e14]">
              <div className="relative w-full h-full">
                <img
                  src="/anwar.png"
                  alt="Anwar Hossain"
                  className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.1]"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                  }}
                />
                {/* Moderate Dark Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_40%,_#0b0e14_85%)] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
