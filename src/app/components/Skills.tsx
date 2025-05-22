import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "RESTful APIs"] },
    { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Docker"] },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 