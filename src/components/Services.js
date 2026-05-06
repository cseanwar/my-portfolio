import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture.",
      icon: <FaCode className="h-8 w-8" />,
      color: "blue"
    },
    {
      title: "Frontend Development",
      description: "Fast, responsive, and user-friendly interfaces built with React and Tailwind CSS.",
      icon: <FaLaptopCode className="h-8 w-8" />,
      color: "purple"
    },
    {
      title: "Backend & API Development",
      description: "Secure and efficient REST APIs using Node.js and Express, optimized for scalability.",
      icon: <FaServer className="h-8 w-8" />,
      color: "indigo"
    },
    {
      title: "Database Management",
      description: "Structured MongoDB databases with optimized queries for speed and reliability.",
      icon: <FaDatabase className="h-8 w-8" />,
      color: "cyan"
    }
  ];

  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Services I can Provide</h2>
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
