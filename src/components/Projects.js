'use client';
import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Tile Max - Tiles Shop",
      description: "A premium e-commerce platform for high-end tiles and ceramics, featuring a sleek modern design and seamless browsing experience.",
      image: "/projects/tiles-shop.png",
      tags: ["Next.js", "Tailwind CSS", "Better Auth", "E-Commerce"],
      github: "https://github.com/cseanwar/tiles-shop-website.git",
      demo: "https://tiles-shop-website.vercel.app/"
    },
    {
      title: "Dragon News",
      description: "A comprehensive news portal with category-based filtering and secure user authentication powered by BetterAuth.",
      image: "/projects/dragon-news.png",
      tags: ["Next.js", "BetterAuth", "Tailwind CSS"],
      github: "https://github.com/cseanwar/dragon-news-next-better-auth.git",
      demo: "https://dragon-news-next-better-auth.vercel.app/"
    },
    {
      title: "KeenKeeper",
      description: "A personal CRM designed to help you nurture and track meaningful connections with friends and family in your busy life.",
      image: "/projects/keen-keeper.png",
      tags: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/cseanwar/assignment7-keen-keeper.git",
      demo: "https://friend-keen-keeper.vercel.app/"
    },
    {
      title: "PixGen AI",
      description: "An innovative AI-powered image generation platform that transforms text prompts into stunning visual art pieces.",
      image: "/projects/pixgen.png",
      tags: ["Next.js", "Better Auth", "Tailwind CSS"],
      github: "https://github.com/cseanwar/pixgen.git",
      demo: "https://pixgen-chi-pink.vercel.app/"
    },
    {
      title: "BPL Dream 11",
      description: "A fantasy cricket application for the Bangladesh Premier League, allowing users to build and manage their dream team.",
      image: "/projects/dream11.png",
      tags: ["React", "Context API", "Tailwind CSS"],
      github: "https://github.com/cseanwar/bpl-dream-11.git",
      demo: "https://bpl-dream-11-by-react.netlify.app/"
    },
    {
      title: "Book Vibe",
      description: "A platform for book lovers to discover, review, and organize their reading lists with a focus on intuitive user experience.",
      image: "/projects/book-vibe.png",
      tags: ["React", "Tailwind CSS", "Local Storage"],
      github: "https://github.com/cseanwar/book-vibe.git",
      demo: "https://book-vibe-beta.vercel.app/"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Logic for displaying projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-[#090c10]" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
        <p className="text-gray-400">Here are some of the real-world projects I've built using the MERN stack.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 min-h-[600px]">
        {currentProjects.map((project, index) => (
          <div key={index} className="gradient-border rounded-3xl overflow-hidden group flex flex-col">
            <div className="p-4 bg-brand-dark">
              <img alt={project.title} className="w-full h-48 object-cover rounded-2xl group-hover:scale-[1.02] transition duration-500" src={project.image} />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  className="flex-1 text-center py-2.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition text-sm"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="flex-1 text-center py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20 text-sm"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-center items-center gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border transition-all ${
            currentPage === 1 
              ? 'border-white/5 text-gray-600 cursor-not-allowed' 
              : 'border-white/10 text-white hover:bg-white/5 hover:border-blue-500'
          }`}
        >
          Previous
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-10 h-10 rounded-lg font-bold transition-all ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border transition-all ${
            currentPage === totalPages 
              ? 'border-white/5 text-gray-600 cursor-not-allowed' 
              : 'border-white/10 text-white hover:bg-white/5 hover:border-blue-500'
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
