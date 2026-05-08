/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#090c10]" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-12 md:gap-16">

        {/* Image — top on mobile/tablet, left on desktop */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group w-56 sm:w-72 md:w-full max-w-sm md:max-w-md">
            <Image
              alt="About Portrait"
              className="w-full h-auto relative z-10 transition duration-500 transform group-hover:scale-[1.02] shadow-2xl rounded-2xl"
              src="/my-cartoon-style-pic.png"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            I am a MERN Stack Web Developer focusing on building production-ready applications! I enjoy designing APIs, creating interactive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UI/UX flows, and building applications that feel fast, secure, and intuitive. I actively explore new tools in the MERN ecosystem to stay updated and keep improving my development workflow.
          </p>

          <div className="pt-2 sm:pt-4 flex justify-center md:justify-start">
            <a
              href="/anwar_cv.pdf"
              download="Anwar_Hossain_CV.pdf"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium transition flex items-center gap-2 w-fit text-sm sm:text-base"
            >
              Download Resume
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;