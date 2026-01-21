import React from "react";
import Projects from "./Projects";
import files from "../data/files.json";

const ProjectsPage = () => {
  return (
    <section className="p-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">
        Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Selected projects demonstrating real-world problem solving and system development.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {files.length > 0 ? (
          files.map((project, index) => <Projects key={index} {...project} />)
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
