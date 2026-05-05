import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Frontend Development",
      description: "Fast, responsive, and user-friendly interfaces built with React and Tailwind CSS.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Backend & API Development",
      description: "Secure and efficient REST APIs using Node.js and Express, optimized for scalability.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Database Management",
      description: "Structured MongoDB databases with optimized queries for speed and reliability.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M12 7v10 M7 12h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      color: "cyan"
    }
  ];

  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Services I Provide</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">I offer design and development services focused on building fast, modern, and user-friendly digital experiences.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, color }) => {
  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500",
    purple: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500",
    indigo: "bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500",
    cyan: "bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500",
  };

  return (
    <div className="glass-card p-8 rounded-2xl group text-center">
      <div className={`mb-6 inline-flex p-4 rounded-xl transition group-hover:text-white ${colorClasses[color]}`}>
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default Services;
