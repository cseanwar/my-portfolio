import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-[#090c10]" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition"></div>
            <img 
              alt="About Portrait" 
              className="w-full aspect-square object-cover rounded-3xl relative z-10 filter grayscale hover:grayscale-0 transition duration-500" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uiYw-kYILID2ltUvY1FF5tOrjmT8Zheetws3s2zdQzYG7exTDzt1aIUbtM0O6OlZQ4lTrKkUgumCj9vGnMA36DfU0I2vvUxtljCZzHrpcgRduBdFyDCtqSDBspo_H7pNGxy8d2y_FY2Nyk14nOT1MiBbr3EDCkf8c7Vrxcq3D_WusJ5CMe8otfVZnraT6nhxqKXG3UutyheynS_veHEKBQyIu72M9y2YSwQuplZoYem-zYiWd5F4ofBv--Grf6Dqw1pHncFS3azxQ" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a MERN Stack Web Developer focusing on building production-ready applications! I enjoy designing APIs, creating interactive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UI/UX flows, and building applications that feel fast, secure, and intuitive. I actively explore new tools in the MERN ecosystem to stay updated and keep improving my development workflow.
          </p>
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition flex items-center gap-2">
              Download Resume
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
