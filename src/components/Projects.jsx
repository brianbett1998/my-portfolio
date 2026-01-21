import React from "react";

const Project = ({ title, description, tech, github, live }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
   
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3 flex-1">{description}</p>

        {/* Technologies */}
        {tech && tech.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors font-semibold"
            >
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors font-semibold"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
