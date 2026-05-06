import React from 'react';
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiMysql,
  SiDocker,
  SiRedhatopenshift,
  SiGit,
  SiMicrosoftazure
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Skills = () => {
  const skills = [
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl text-blue-400" />,
      description: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
      bgColor: "bg-blue-500/10",
      hoverBg: "group-hover:bg-blue-500/20"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-3xl text-yellow-400" />,
      description: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
      bgColor: "bg-yellow-500/10",
      hoverBg: "group-hover:bg-yellow-500/20"
    },
    {
      name: "React",
      icon: <SiReact className="text-3xl text-blue-300" />,
      description: "Building fast, interactive, and component-based UIs with clean state management.",
      bgColor: "bg-blue-400/10",
      hoverBg: "group-hover:bg-blue-400/20"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-3xl text-white" />,
      description: "Developing powerful, SEO-friendly, and highly optimized server-side rendered React apps.",
      bgColor: "bg-white/5",
      hoverBg: "group-hover:bg-white/10"
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-3xl text-green-500" />,
      description: "Developing scalable backend logic and high-performance server-side applications.",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-3xl text-green-400" />,
      description: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
      bgColor: "bg-green-600/10",
      hoverBg: "group-hover:bg-green-600/20"
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-3xl text-gray-400" />,
      description: "Creating robust and lightweight server-side applications and RESTful APIs.",
      bgColor: "bg-gray-500/10",
      hoverBg: "group-hover:bg-gray-500/20"
    },
    {
      name: "Better Auth",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z" />
        </svg>
      ),
      description: "Implementing secure, modern authentication and authorization for web apps.",
      bgColor: "bg-purple-500/10",
      hoverBg: "group-hover:bg-purple-500/20"
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="text-3xl text-orange-500" />,
      description: "Creating clean, well-structured page layouts with semantic markup for better SEO.",
      bgColor: "bg-orange-500/10",
      hoverBg: "group-hover:bg-orange-500/20"
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-3xl text-blue-500" />,
      description: "Designing and managing relational databases for secure and structured data storage.",
      bgColor: "bg-blue-600/10",
      hoverBg: "group-hover:bg-blue-600/20"
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-3xl text-blue-400" />,
      description: "Containerizing applications to ensure consistent and efficient deployment environments.",
      bgColor: "bg-blue-400/10",
      hoverBg: "group-hover:bg-blue-400/20"
    },
    {
      name: "OpenShift",
      icon: <SiRedhatopenshift className="text-3xl text-red-600" />,
      description: "Managing enterprise Kubernetes applications for high-scale container orchestration.",
      bgColor: "bg-red-600/10",
      hoverBg: "group-hover:bg-red-600/20"
    },
    {
      name: "Git",
      icon: <SiGit className="text-3xl text-orange-600" />,
      description: "Utilizing version control systems for efficient team collaboration and code management.",
      bgColor: "bg-orange-600/10",
      hoverBg: "group-hover:bg-orange-600/20"
    },
    // {
    //   name: "Azure",
    //   icon: <SiMicrosoftazure className="text-3xl text-blue-500" />,
    //   description: "Deploying and managing cloud-based applications and services using Microsoft Azure.",
    //   bgColor: "bg-blue-500/10",
    //   hoverBg: "group-hover:bg-blue-500/20"
    // }
  ];

  return (
    <section className="py-24 px-6 bg-[var(--background)]" id="skills">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">I work with modern tools and technologies to build fast, scalable and efficient web applications.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group">
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl transition ${skill.bgColor} ${skill.hoverBg}`}>
              {skill.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
