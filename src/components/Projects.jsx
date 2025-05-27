import { useState } from "react";
import { Github, ExternalLink, ArrowUp } from 'lucide-react';
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Modal from "./ui/Modal";
import { projects } from './content';

const scrollToTop = () => {
    const element = document.getElementById('hero');
    element?.scrollIntoView({ behavior: 'smooth' });
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="min-h-[100vh] py-10 sm:py-16 bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-2xl sm:text-4xl font-serif md:text-5xl font-bold text-green-950 dark:text-white mb-4 sm:mb-6">
                        Personal Projects
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden h-full flex flex-col border-2 border-red-500 dark:border-blue-900 transition-all duration-300 hover:shadow-2xl bg-orange-200 dark:bg-gray-800 cursor-pointer items-center text-center"
                            style={{ borderRadius: "1rem" }}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View details for ${project.title}`}
                            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setSelectedProject(project); }}
                        >
                            {project.imageUrl && (
                                <div className="h-16 sm:h-48 overflow-hidden flex justify-center items-center w-full">
                                	<img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    aria-label={`${project.title} screenshot`}
                                    />
                                </div>
                            )}

                            <br />
                            
                            <CardHeader className="w-full flex flex-col items-center text-center">
                                <CardTitle className="text-lg sm:text-xl font-mono items-center text-center">{project.title}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <div className="text-center font-mono mt-8 sm:mt-12">
                    <Button variant="outline" size="lg" asChild aria-label="View more projects on GitHub">
                        <a
                        href="https://github.com/dodoshrey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        >
                            <Github size={20} />
                            View More on GitHub
                        </a>
                    </Button>
                </div>

                {/* Proficiency Highlights */}
                <div className="font-mono mt-8 sm:mt-16 text-center">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-8">Proficiency Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-4 sm:gap-8">

                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-900 dark:to-blue-800 p-4 sm:p-6 rounded-xl text-white">
                            <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">3+</div>
                            <div className="text-gray-100 text-xs sm:text-base">Years of Professional Experience</div>
                        </div>

                        <div className="bg-gradient-to-br from-green-700 to-green-900 dark:from-green-900 dark:to-green-800 p-4 sm:p-6 rounded-xl text-white">
                            <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">20+</div>
                            <div className="text-gray-100 text-xs sm:text-base">Technologies Mastered</div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-700 to-purple-900 dark:from-purple-900 dark:to-purple-800 p-4 sm:p-6 rounded-xl text-white">
                            <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">10+</div>
                            <div className="text-gray-100 text-xs sm:text-base">Projects Delivered</div>
                        </div>

                    </div>
                </div>

                {/* Back To Top Button */}
                <div className="font-mono text-center mt-12 sm:mt-24">
                    <button
                        onClick={scrollToTop}
                        className="animate-bounce text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
                        aria-label="Back To Top"
                    >
                        <ArrowUp size={28} className="inline-block ml-1" /> Back To Top <ArrowUp size={28} className="inline-block ml-1" />
                    </button>
                </div>
            </div>

            {/* Modal for Project Details */}
            <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)} ariaLabel={selectedProject ? selectedProject.title : "Project Details"}>
                {selectedProject && (
                    <div className="rounded-xl p-0 sm:p-0">
                        <h2 className="text-2xl font-mono font-bold mb-2 text-center">{selectedProject.title}</h2>

                        <div className="font-mono flex flex-wrap gap-2 mb-4 justify-center">
                            {selectedProject.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-700 dark:bg-blue-900 text-white dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                                    style={{ color: "#fff" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="font-mono mb-4 text-gray-800 dark:text-gray-200 text-center">{selectedProject.description}</p>

                        {/* Screenshots */}
                        {selectedProject.screenshots && (
                            <div className="mb-4 flex gap-4 overflow-x-auto justify-center">
                                {selectedProject.screenshots.map((src, i) => (
                                    <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="h-120 rounded-lg border" aria-label={`Screenshot ${i + 1} of ${selectedProject.title}`} />
                                ))}
                            </div>
                        )}

                        {/* Video Demo */}
                        {selectedProject.videoUrl && (
                            <div className="mb-4 flex justify-center">
                                <iframe
                                    src={selectedProject.videoUrl}
                                    title="Project Video Demo"
                                    width="100%"
                                    height="315"
                                    className="rounded-lg"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        <div className="flex font-mono gap-3 mt-4 justify-center">
                            <Button className="bg-blue-700 dark:bg-blue-900 text-white dark:text-blue-200" variant="outline" size="sm" asChild aria-label="View on GitHub">
                                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </Button>
                            {selectedProject.demoUrl && (
                                <Button className="bg-blue-700 dark:bg-blue-900 text-white dark:text-blue-200" variant="outline" size="sm" asChild aria-label="View live demo">
                                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;