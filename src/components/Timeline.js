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
              year="2025 - Present:"
              institution="TUC Sweden"
              title="Yrkeshögskolan (YH)"
              description="Two-year distance learning YH education with physical meetings in Jönköping. I trained in web development with a focus on HTML, CSS, JavaScript and C#, as well as design, UX and publishing tools. The education includes 400 YH credits and included 25 weeks of LIA internship in the workplace. I am now ready for a career as a web developer."
              color="blue"
            />
            <TimelineItem
              year="2026-Present:"
              institution="Programming Hero"
              title="Complete Web Development Bootcamp"
              description="I completed an intensive web development program at Programming Hero, where I built over 45 projects and learned HTML, CSS, JavaScript, React, and the MERN stack. The course combined hands-on projects with conceptual sessions, preparing me for a career as a full-stack web developer."
              color="blue"
            />
            <TimelineItem
              year="2001 - 2006:"
              institution="Daffodil International University"
              title="B.Sc in Computer Science Engineering"
              description="This bachelor's program covers both theoretical aspects and practical constructions of hardware, software and networks. Programming languages ​​(C/C++, Java, Python), MS SQL, Oracle, network protocols and basic hardware design."
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

            {/* <TimelineItem
              year="2011 - Present:"
              institution="Pressen Morgontjänst KB (PREMO)"
              title="Newspaper Distributor"
              description="Distribute newspapers and packages to subscribers"
              color="purple"
            /> */}
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
