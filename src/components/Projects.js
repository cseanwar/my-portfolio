/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Logic for displaying projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-[var(--background)]" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest real-world web development projects, featuring full-stack MERN applications and modern responsive web experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="gradient-border rounded-3xl overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Project Image */}
            <div className="p-4 bg-brand-dark overflow-hidden relative">
              <div className="relative w-full h-52 overflow-hidden rounded-2xl">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Project Info & Action */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3rem] flex items-center">
                {project.title}
              </h3>

              <div className="mt-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 text-sm cursor-pointer"
                >
                  <span>View Details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
          className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${
            currentPage === 1
              ? 'border-white/5 text-gray-600 cursor-not-allowed'
              : 'border-white/10 text-[var(--foreground)] hover:bg-white/5 hover:border-blue-500'
          }`}
        >
          Previous
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-10 h-10 rounded-lg font-bold transition-all cursor-pointer ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
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
          className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${
            currentPage === totalPages
              ? 'border-white/5 text-gray-600 cursor-not-allowed'
              : 'border-white/10 text-[var(--foreground)] hover:bg-white/5 hover:border-blue-500'
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
