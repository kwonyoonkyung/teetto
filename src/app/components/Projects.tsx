import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "프로젝트 1",
      description: "Next.js와 TypeScript를 활용한 웹 애플리케이션",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      imageUrl: "/project1.jpg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "프로젝트 2",
      description: "반응형 포트폴리오 웹사이트",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      imageUrl: "/project2.jpg",
      githubUrl: "#",
      liveUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* 프로젝트 이미지를 추가할 수 있는 공간 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-blue-600 hover:text-blue-700"
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
      </div>
    </section>
  );
};

export default Projects; 