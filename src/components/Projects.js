/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "BookNPlay — Sports Facility Booking Platform",
      description: "A premium, full-stack sports venue and court booking platform enabling users to seamlessly discover, reserve, and manage football turfs, badminton courts, swimming pools, and tennis courts with instant slot bookings.",
      image: "/projects/BookNPlay.png",
      tags: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Better Auth"],
      github: "https://github.com/cseanwar/BookNPlay.git",
      demo: "https://book-n-play.vercel.app/"
    },
    {
      title: "Wanderlust — Travel Booking Platform",
      description: "A premium travel and destination discovery portal where users can explore featured locations, search by budget/duration, manage bookings, and view traveler reviews.",
      image: "/projects/wanderlust.png",
      tags: ["Next.js", "Tailwind CSS", "Better Auth", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/cseanwar/wonderlust.git",
      demo: "https://wonderlust-liart.vercel.app/"
    },
    {
      title: "TileMax — Tiles Shop Website",
      description: "A premium e-commerce platform for high-end tiles and ceramics, featuring a sleek modern design and seamless browsing experience.",
      image: "/projects/Tile-Max.png",
      tags: ["Next.js", "Tailwind CSS", "Better Auth", "E-Commerce", "MongoDB"],
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
      title: "Friend Keeper",
      description: "A personal CRM designed to help you nurture and track meaningful connections with friends and family in your busy life.",
      image: "/projects/keen-keeper.png",
      tags: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/cseanwar/assignment7-keen-keeper.git",
      demo: "https://friend-keen-keeper.vercel.app/"
    },
    {
      title: "DigiTools — Digital Tools Buying Website",
      description: "An interactive, modern electronics and tech gadget buying catalog with real-time cart management, category filtering, and product specification grids.",
      image: "/projects/digitools.png",
      tags: ["React", "Tailwind CSS", "Context API"],
      github: "https://github.com/cseanwar/assignment6-digitools.git",
      demo: "https://assignment6-digitools-buying-website.netlify.app/"
    },
    {
      title: "PixGen — AI Image Generation Platform",
      description: "An innovative AI-powered image generation platform that transforms text prompts into stunning visual art pieces.",
      image: "/projects/pixgen.png",
      tags: ["Next.js", "Better Auth", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/cseanwar/pixgen.git",
      demo: "https://pixgen-chi-pink.vercel.app/"
    },
    {
      title: "BPL Dream 11 — Fantasy Cricket Team Selector",
      description: "A fantasy cricket application for the Bangladesh Premier League, allowing users to build and manage their dream team.",
      image: "/projects/dream11.png",
      tags: ["React", "Context API", "Tailwind CSS"],
      github: "https://github.com/cseanwar/bpl-dream-11.git",
      demo: "https://bpl-dream-11-by-react.netlify.app/"
    },
    {
      title: "Book Vibe — Book Discovery & Reading List App",
      description: "A platform for book lovers to discover, review, and organize their reading lists with a focus on intuitive user experience.",
      image: "/projects/book-vibe.png",
      tags: ["React", "Tailwind CSS", "Local Storage", "Context API"],
      github: "https://github.com/cseanwar/book-vibe.git",
      demo: "https://book-vibe-beta.vercel.app/"
    },
    {
      title: "Job Application Tracker",
      description: "An intuitive job tracker dashboard that enables developers and job seekers to monitor application progress across Interview, Rejected, and Offer status with a responsive jobs board.",
      image: "/projects/job-tracker.png",
      tags: ["JavaScript", "DOM Manipulation", "CSS3", "Interactive Dashboard"],
      github: "https://github.com/cseanwar/assignment-4.git",
      demo: "https://interactive-web-for-job-tracker.netlify.app/"
    },
    {
      title: "TechWave — Premium Podcast Landing Page",
      description: "A sleek, responsive audio and technology podcast website showcasing episodes on AI, remote work productivity, and expert career roadmaps.",
      image: "/projects/techwave.png",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      github: "https://github.com/cseanwar/assignment-2.git",
      demo: "https://responsive-wep-app.netlify.app/"
    },
    {
      title: "GitHub Issue Tracker",
      description: "A lightweight administrative portal designed to simulate GitHub issue logging, tracking, and status updates, secured with login credentials.",
      image: "/projects/issue-tracker.png",
      tags: ["React", "Tailwind CSS", "JavaScript(ES6+)"],
      github: "https://github.com/cseanwar/assignment-5.git",
      demo: "https://project-for-github-issue-tracker.netlify.app/"
    },
    {
      title: "Payoo – Digital Wallet Simulation",
      description: "A secure mobile wallet interface featuring cash-in, cash-out, send money, bill pay, and interactive transactions logging with custom PIN verification.",
      image: "/projects/payoo.png",
      tags: ["JavaScript", "Tailwind CSS", "DaisyUI"],
      github: "https://github.com/cseanwar/payoo-app.git",
      demo: "https://cseanwar.github.io/payoo-app/"
    },
    {
      title: "English Janala — Language Learning Platform",
      description: "An interactive, accessible e-learning application designed for Bengali speakers to master English grammar, vocabulary lessons, and FAQ pronunciation guides.",
      image: "/projects/english-janala.png",
      tags: ["HTML5", "Tailwind CSS", "API Integration"],
      github: "https://github.com/cseanwar/project-english-janala.git",
      demo: "https://cseanwar.github.io/project-english-janala/"
    },
    {
      title: "Green Earth — Global Tree Plantation Campaign",
      description: "An environmental awareness landing page and global reforestation store where users can choose trees to support climate action, track community impact, and plant trees.",
      image: "/projects/green-earth.png",
      tags: ["JavaScript", "CSS3", "API Integration"],
      github: "https://github.com/cseanwar/project-green-earth.git",
      demo: "https://cseanwar.github.io/project-green-earth/"
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 min-h-150">
        {currentProjects.map((project, index) => (
          <div key={index} className="gradient-border rounded-3xl overflow-hidden group flex flex-col">
            <div className="p-4 bg-brand-dark">
              <Image alt={project.title} width={400} height={192} className="w-full h-48 object-cover rounded-2xl group-hover:scale-[1.02] transition duration-500" src={project.image} />
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
          className={`px-4 py-2 rounded-lg border transition-all ${currentPage === 1
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
              className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === i + 1
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
          className={`px-4 py-2 rounded-lg border transition-all ${currentPage === totalPages
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
