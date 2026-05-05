import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: "Tailwind CSS",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzNBY-gGuJaTAI3ne3orde__8iCvyJzReBKihNXCM38Lyqzt0CQ6Rk6rO_oBZiJKeFU5UkBjcmq4UMdvSEGhrQkxqnPRXwsEvblt9fPVeiQP_ZmFzkztK7DXzoA7rICfvwiCYJ4h4H_NSrRedYHkzXFUlwAHFD-3LWCDfx8vt3rWGJ_HqsUZH6VXMzbJQ2fKW-n9FKIwq_v5pD6Dll1Up-xtpNPVd9fBzdVDHzwV29KZn9po7htJAot-XLhO-iWk0lIqCTzCvb9g5W",
      description: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
      bgColor: "bg-blue-500/10",
      hoverBg: "group-hover:bg-blue-500/20"
    },
    {
      name: "JavaScript",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeEEyd87ykAb5_MwcM7tpW8dFbuuD8tQnvcqFWDgYyTx-0vzJa7YdrGGsw6jhFbuifrDDWK1whriN8IqF3K4KGffabx5syIkSg0HoojDcolV9MT3g-81RtKprEWQrBysw0Weyht6ado-11QmrG7LuqlQftb5wrtsgvE7zHwuTsCTTxzWZR-zuzReEOxjowrBZb4s_-G1cvr_uxtJzST-Kc5Em98GKJyowCSmIwFlH1bAdi3153HfWFuNy87uFibNN8s1S1sq1-kUvp",
      description: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
      bgColor: "bg-yellow-500/10",
      hoverBg: "group-hover:bg-yellow-500/20"
    },
    {
      name: "React",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmjKvaevL84nLY-fD2JyEuw9syq90vfWMtFX4SECPNqxCaN-n15DBr5OpdMXz-aR7ehqZI4GXFe3QRMdyFrc8FM-p4vygagYl73_pWFatb7ZiosRRAAUcP9jUt-Hoite9pdca7js5lJ_XiAXq_HCTAyuStW25fqLKGZA0Q6HksTUIMbucys2jMv0IghV2DJQxJQUQnxc7uwwj_rv4Dr3x-34ZwU5xMO8nO-BiMUDjdtAKytW08dwTaQnX8E5wdo0_KjMnoM_QATmk3",
      description: "Building fast, interactive, and component-based UIs with clean state management.",
      bgColor: "bg-blue-400/10",
      hoverBg: "group-hover:bg-blue-400/20"
    },
    {
      name: "Node.js",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBADTIQk9zWzeuVLAiEgH3KVFk4w_AwSthO4dGMwpQJOAUK8zv-3QqdnlsL3-4OOgJwIzyUcSoWy_SasWda3UtbNJLRawFeoMyrSmhfXTYUBpGvu80DmTOBFCqM9zrEWo-z5JuMMbBV7ImwZpgKOdjmeAdzjcOUI3gBhDdaMksd8wBuWSUcH8RLuWoT-JH2NzyijXWbJdWeEY_3a6QcKn7wuqFmujny7rGTCHHM8FLix_-XWaZ5eFCXI20O-d11PtJ6its0N3-fLiOh",
      description: "Developing scalable backend logic and high-performance server-side applications.",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20"
    },
    {
      name: "MongoDB",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvHdqMxUNuQ7FSKc33jrgwIPwuDtjITU37Zq1pBpZmh0e886lUxsqFejvRZCJRt6PT1buYYlPSHdKLQ4zSh1txjVM5Ja-B7wHPjnVu9HLlga61_M3FN6SZawLt0DFPLTvVIETzwj1bSCoTkxaV9qT5rlIhtY7O-CUdpXZM4vuRjIm2XjxQuMubjz_pE56LOZs5hEFSyekUTPn7HdTo-jtUzp8yd1aQx-OsaHcT_IEGH40XVSAdBlbfsE6m4GqvGrq8OZzdnCL2uw0T",
      description: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
      bgColor: "bg-green-600/10",
      hoverBg: "group-hover:bg-green-600/20"
    },
    {
      name: "HTML",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_4Grdftlwt6CK-u7tyGeWKygs_CxEbVqm34yKDz_IQtOtN8fYDsud3RbJqNaTJFg0UDkt4POq19udVXgDYlRXP2WvXR2YoduF55-cqsvZ-ID7hwNTmRJaEiGRSD10_jYx-VNa0K8i3Wfd2YTD2X8YUDR0umX9IGiQOG6qw88Efhi_35hFfIntB5v9p7C3b_fIANc1YmfDJgM3wdjoKpkLLfbq3dJBXWk7oWgpdxDeNOMGZNlXvG7AEJ8e2gfex8Od48bUWOAAX4e",
      description: "Creating clean, well-structured page layouts with semantic markup for better SEO.",
      bgColor: "bg-orange-500/10",
      hoverBg: "group-hover:bg-orange-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[var(--background)]" id="skills">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">I work with modern tools and technologies to build fast, scalable and efficient web applications.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group">
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl transition ${skill.bgColor} ${skill.hoverBg}`}>
              <img alt={skill.name} className="w-10 h-10" src={skill.icon} />
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
