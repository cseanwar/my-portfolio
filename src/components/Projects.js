import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "MERN Todo App (2025)",
      description: "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_QRjNNXA_pkiyp7_pZ_A4_p_t1pyzTHF81gMFPTUvjFRABVBNTuTO3YZFKTc4F16hCMRULgBr1_9o3tjh1_CqJwqOeqozVRX4_75veWLoI91fQksEp8TdEmDxpbeFV6g43PZ9vXHCupw7hsNvE0NFSYXJLOdfgE0gAP2HwagVMcIvISryaUAtTsx7T9yGTYGVGMj9_CdkcbI-wPk4pUc7WcDk6r_PT5qLZ8CvE8vu7w_HAD_5gwXrCUchAIObhsrpo1IEURrtxkt",
      tags: ["React", "Node.js", "Express.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Demo (2025)",
      description: "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFZXuPk3hIFhfgFdCzxSKdhoWobijlENQ5NbIQBEgDUbodXv8Rpor5rWhxkSgeHBJ__DrRsABhjA6pmeoOdZFxaZL7XAaIjlvJfMKjz8YxEA2zoO27ac1gnseuKWNP4SIxnH5PsXWXtQRq-_xZiq87708TTE_Xy0KNvgzaAKC7nxX1saaaA7TaqnCS6ginr3noYI5eg71deOKASCkCw8svZlBU5-uTSc-6oACm8K1bXAZ-1KkwBv7hJ3tGZ0ycGGpiarODdDuPy7v",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#090c10]" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
        <p className="text-gray-400">Here are some of the real-world projects I've built using the MERN stack.</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="gradient-border rounded-3xl overflow-hidden group">
            <div className="p-4 bg-brand-dark">
              <img alt={project.title} className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition duration-500" src={project.image} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a className="flex-1 text-center py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition" href={project.github}>GitHub ↗</a>
                <a className="flex-1 text-center py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20" href={project.demo}>Live Demo ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
