"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-tighter" href="#">ANWAR HOSSAIN</a>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a className="hover:text-white transition" href="#">Home</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#services">Services</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>
        <div className="flex gap-4">
          <SocialLink href="https://www.linkedin.com/in/anwar-hossain-a3095147" icon={<FaLinkedinIn />} color="bg-blue-800" />
          <SocialLink href="https://x.com/cseanwar" icon={<FaTwitter />} color="bg-sky-500" />
          <SocialLink href="https://www.facebook.com/anwar.hossain.969/" icon={<FaFacebookF />} color="bg-blue-600" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-500 order-2 md:order-1">
          Copyright © 2025 Anwar Hossain | All Rights Reserved
        </div>

        {/* Scroll Up Button */}
        <div className="order-1 md:order-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-blue-500 transition-colors uppercase tracking-widest group"
          >
            Scroll to Top
            <div className="p-2 bg-white/5 border border-white/10 rounded-full group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              <svg className="w-4 h-4 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, color }) => (
  <a
    className={`p-2.5 ${color} rounded-lg text-white hover:scale-110 hover:shadow-lg transition flex items-center justify-center`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="text-lg">
      {icon}
    </div>
  </a>
);

export default Footer;
