import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 px-5">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid gap-6 sm:grid-cols-3 text-center">
          {/* Email */}
          <a
            href="mailto:briankibish@gmail.com"
            className="flex flex-col items-center p-4 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors shadow-md dark:bg-purple-900 dark:hover:bg-purple-800"
          >
            <FiMail className="text-3xl mb-2 text-purple-700 dark:text-purple-200" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Email
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              briankibish@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/brianbett1998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors shadow-md dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FiGithub className="text-3xl mb-2 text-gray-800 dark:text-gray-200" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              GitHub
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              github.com/brianbett1998
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brian-kiprono-bett-260372201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors shadow-md dark:bg-blue-900 dark:hover:bg-blue-800"
          >
            <FiLinkedin className="text-3xl mb-2 text-blue-700 dark:text-blue-200" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              LinkedIn
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              linkedin.com/in/brian-kiprono-bett
            </span>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
