import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
	{
		title: "Tic-tac-toe Game",
		description: "Created a fun 2 player game working with React.js.",
		tags: ["React", "JavaScript", "CSS"],
		githubUrl: "https://github.com/dodoshrey/tic-tac-toe",
		demoUrl: "https://dodoshrey.github.io/tic-tac-toe/",
		imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQFrdI-CDCqLLg/profile-treasury-image-shrink_800_800/B56ZbQY.LcG4AY-/0/1747252929870?e=1748606400&v=beta&t=14L8RrlehrsUcMMlZ0WAWrGFlCwsr0aDSg6Vs56y6aI"
	},
	{
		title: "Robo-Search App",
		description: "Gained experience working with RESTful API, Node.js. Creating configuration, build, and test scripts to create a responsive website. Ensured responsiveness of the design on smartphones and other devices.",
		tags: ["React", "Node.js", "RESTful API", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/robots",
		demoUrl: "https://dodoshrey.github.io/robots",
		imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQGpQhWXP1Qkrw/profile-treasury-image-shrink_800_800/B56ZbQYsFRHgAY-/0/1747252855859?e=1748606400&v=beta&t=_Em90FDbfXOz80Yj4bZ-7y4bMOqXOIm3rgUNnxJkxwE"
	},
	{
		title: "Pig Game",
		description: "Created a 2 player game using HTML, CSS, Javascript",
		tags: ["HTML", "CSS", "JS", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/pig-game",
		demoUrl: "https://dodoshrey.github.io/pig-game/",
		imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQE_edLT4KmvKA/profile-treasury-image-shrink_800_800/B56ZbQYheVH0AY-/0/1747252812160?e=1748606400&v=beta&t=uU_Qv4_rdExWC-Le9rD0Z6I2lpNb0wY-badeUt17LEU"
	}
];

const Projects = () => {
	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						My Projects
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Here are some of my noteworthy projects that showcase my technical skills and problem-solving abilities.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Card key={index} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
							{project.imageUrl && (
								<div className="h-48 overflow-hidden">
									<img 
										src={project.imageUrl} 
										alt={project.title} 
										className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
									/>
								</div>
							)}
							<CardHeader>
								<CardTitle className="text-xl">{project.title}</CardTitle>
								<CardDescription className="flex flex-wrap gap-2 mt-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
											{tag}
										</span>
									))}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-gray-700">{project.description}</p>
							</CardContent>
							<CardFooter className="flex gap-3 pt-4">
								<Button variant="outline" size="sm" asChild>
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
										<Github size={16} />
										GitHub
									</a>
								</Button>
								{project.demoUrl && (
									<Button variant="outline" size="sm" asChild>
										<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
											<ExternalLink size={16} />
											Live Demo
										</a>
									</Button>
								)}
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button variant="outline" size="lg" asChild>
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
			</div>
		</section>
	);
};

export default Projects;