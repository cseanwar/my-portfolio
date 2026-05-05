import React from 'react';

const Timeline = () => {
  return (
    <section className="py-24 px-6" id="qualifications">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Education
          </h3>
          <div className="space-y-12 border-l border-white/10 ml-4 pl-8">
            <TimelineItem 
              year="2016 - 2018" 
              institution="College Name" 
              title="HSC-" 
              description="Intrinsically enhance efficient communities whereas magnetic products. Proactively." 
              color="blue"
            />
            <TimelineItem 
              year="2018 - 2022" 
              institution="University Name" 
              title="Bachelor's degree" 
              description="Quickly strategize real-time innovation rather than customer directed." 
              color="blue"
            />
            <TimelineItem 
              year="2022 - 2023" 
              institution="University Name" 
              title="Masters degree" 
              description="Interactively reconceptualize compelling leadership skills for magnetic content." 
              color="blue"
            />
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Experience
          </h3>
          <div className="space-y-12 border-l border-white/10 ml-4 pl-8">
            <TimelineItem 
              year="2023 - Present" 
              institution="" 
              title="Senior Designer" 
              description="Dynamically communicate mission-critical supply chains after client-based human." 
              color="purple"
            />
            <TimelineItem 
              year="2021 - Web Code" 
              institution="" 
              title="Lead ui/ux designer" 
              description="Holistically create excellent web-readiness and prospective strategic theme." 
              color="purple"
            />
            <TimelineItem 
              year="2018 - CodeCoder" 
              institution="" 
              title="UI & UX Designer" 
              description="Design teams enjoy user experience/UI/UX design as a process to marketing." 
              color="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, institution, title, description, color }) => {
  const dotColor = color === 'blue' ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]';
  const textColor = color === 'blue' ? 'text-blue-500' : 'text-purple-500';

  return (
    <div className="relative">
      <div className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full ${dotColor}`}></div>
      <p className={`${textColor} text-sm font-medium mb-1`}>{year} {institution}</p>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default Timeline;
