import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Detailed Project Breakdown`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-dark text-[var(--foreground)] overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-1">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-(--border-color) text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section / Banner */}
        <div className="gradient-border rounded-3xl overflow-hidden p-6 md:p-10 mb-12 bg-white/5 backdrop-blur-md shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Project Screenshot */}
            <div className="lg:col-span-7 relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Quick Summary & Direct Links */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                  Project Details
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology Stack Tags */}
              <div>
                <h3 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                  Main Technology Stack Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 text-sm text-center cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-3 px-5 bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl font-semibold transition-all duration-300 text-sm text-center cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Client GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Challenges Faced Section */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-(--border-color) relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-2xl border border-red-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Challenges Faced</h2>
                <p className="text-xs text-gray-400">Key technical hurdles encountered during development</p>
              </div>
            </div>

            <ul className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Improvements & Future Plans Section */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-(--border-color) relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Future Plans & Roadmap</h2>
                <p className="text-xs text-gray-400">Potential improvements and upcoming feature additions</p>
              </div>
            </div>

            <ul className="space-y-4">
              {project.futurePlans.map((plan, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Bottom Action */}
        <div className="text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-xl shadow-blue-500/20 transition-all duration-300"
          >
            ← Explore More Projects
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
