"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a className="text-xl font-bold text-blue-500" href="#">MERN Stack <span className="text-white">Developer</span></a>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a className="hover:text-white transition" href="#">Home</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#services">Services</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>
        <div className="flex gap-4">
          <SocialLink href="#" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDrMC9tthqaXUxg-JsVqIHmKQA-WvcqlPSjQLwCnrC8r7Wt6Qaum9ek59gylE4QKiDXBIN79lZi1Xsrmd0Pb1WaHD_7nYx3nN5C1z6SAJojQJH7J-pfY0XgAsOOK6j9fYfcCgUbcyOP-B14-krtMinNT1UilhdJ0u_Rl3kLFKnED9YyS2PMdbG-xcPeP9rkyzoQXUcPnlfUQgBnwxdKL-zeTxvg91EpNyCGSqzuuHsF1ZypHG5LBf1wBbEt2rXrdW1EFhbdWc0khnk7" alt="FB" color="bg-blue-600" />
          <SocialLink href="#" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuCZLiMRTbGvTB-Hkn40v-iD_qtjcbgqyTYIq9hQGDl44gb8aTpmwcqFzXqMrG3l5U_3BKisaD_j-7Hx2jL3qdnyyifRqm84ty4d3N-IZJnXpJIKLxzMedra_HyXVZ24m-6VbGWr6jNy4tQ9jLhDpi8xEP91zPfr6Nvms4vpZla1fjnT2H1-7yzVRkOnmVLXNUGu8fqKj8kRnKwFKp-x_Mzjs6glLumyDAVQ0mQC0WNR47cyzn3dS65xlOhlrSbO_5yKvpdQQmVLiv29" alt="TW" color="bg-blue-400" />
          <SocialLink href="#" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDlkIL47AJYTDaWj5jH6VRol1X_eI3hpbWDxa7sidxMwekfexCxKnAM-Dt_sDLBfGwGnAuo7ERvHkC029ASW-KocimWKkfJdaikRLO8XU_QfoDKHR0s-FCPKxGiJYyMQz-6gufX_s7cX-Nt0kRyIrQoqeh6OJrDm2KYjcRq93m-YB1EP_9LYpPaXb2meZ7iNbV1D_EeDnkU6Z02FJgusbBfB_jwIwSOBLzP20ji3uXy8C5Hc2YJyIhog6VJja4n-DwhbTGOSTLNpBNc" alt="IG" color="bg-pink-600" />
          <SocialLink href="#" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuBzxzC-jG0yzZprlkhM1l31K9jCZMbDslMGYwJ74gNMW3NM1iIJxc-NrDCF9m1UsYgnKrwIYFLRDMoh8G43MZbvVqrVD6CosDuoXBsTlMN2-YTwwVcElJMNP54Lj5cJjFbpR5O3S7cTNxW36MnYjLAJkKWwn4ghdmOc9TZ_UeDL_MANCbt-i5G_Wk30ihQ7Z3Qy9m5VPlZ-P5L5ugHi3JYdPSQ53rr9-XtXJeMzzv12TzP16Mnr_ZXmvNlyCGNpgJDXkaAAHrBdfuMl" alt="LI" color="bg-blue-800" />
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

const SocialLink = ({ href, icon, alt, color }) => (
  <a className={`p-2 ${color} rounded-lg text-white hover:scale-110 transition`} href={href}>
    <img alt={alt} className="w-5 h-5" src={icon} />
  </a>
);

export default Footer;
