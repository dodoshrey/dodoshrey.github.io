import { useState } from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import Modal from "./ui/Modal";
import { experiences } from './content';

const Experience = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  return (
    <section id="experience" className="min-h-[100vh] py-10 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-serif md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Professional Experience
          </h2>
        </div>

        <div className="font-mono space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6">
                <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-lg">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center w-full">
                      <p className="text-base sm:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-0 flex-1">{exp.company}</p>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ml-2"
                        onClick={() => setOpenModalIndex(index)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1"></div>
                <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-lg mb-0 leading-snug w-full md:w-auto">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

          {/* Modal for Experience Details */}
          {openModalIndex !== null && (
            <Modal open={true} onClose={() => setOpenModalIndex(null)}>
              <div className="p-0 sm:p-0">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">{experiences[openModalIndex].title}</h3>
                <div className="flex items-center w-full mb-2 text-base sm:text-xl">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-0">{experiences[openModalIndex].company}</p>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-xs sm:text-base ml-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{experiences[openModalIndex].period} • {experiences[openModalIndex].location}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg mb-3 sm:mb-4 text-justify">{experiences[openModalIndex].description}</p>
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experiences[openModalIndex].achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base text-justify">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {experiences[openModalIndex].projects && (
                  <div className="mb-3 sm:mb-4 text-justify">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Projects:</h4>
                    <div className="space-y-3 sm:space-y-4">
                      {experiences[openModalIndex].projects.map((project, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 rounded-md">
                          <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{project.name}</h5>
                          <ul className="space-y-1">
                            {project.details.map((detail, j) => (
                              <li key={j} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[openModalIndex].technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;