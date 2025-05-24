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
		imageUrl: "/project_pic/tic_tac_toe.jpg"
	},
	{
		title: "Robo-Search App",
		description: "Gained experience working with RESTful API, Node.js. Creating configuration, build, and test scripts to create a responsive website. Ensured responsiveness of the design on smartphones and other devices.",
		tags: ["React", "Node.js", "RESTful API", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/robots",
		demoUrl: "https://dodoshrey.github.io/robots",
		imageUrl: "/project_pic/robots.jpg"
	},
	{
		title: "Budget Calculator",
		description: "A smart budget calculator app that helps you manage your finances effectively.",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/dodoshrey/budget-calculator-app",
		demoUrl: "https://dodoshrey.github.io/budget-calculator-app/",
		imageUrl: "/project_pic/budget_calculator.jpg"
	},
	{
		title: "Pig Game",
		description: "Created a 2 player game using HTML, CSS, Javascript",
		tags: ["HTML", "CSS", "JS", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/pig-game",
		demoUrl: "https://dodoshrey.github.io/pig-game/",
		imageUrl: "/project_pic/pig_game.jpg"
	},
	{
		title: "DOM Manipulation Example",
		description: "Made a list in which you can add new items or delete existing items",
		tags: ["HTML", "CSS", "JS"],
		githubUrl: "https://github.com/dodoshrey/DOM-Manupulation-Example",
		demoUrl: "https://dodoshrey.github.io/DOM-Manupulation-Example",
		imageUrl: "/project_pic/DOM_Manipulation.jpg"
	},
	{
		title: "Furniture Shopping Site",
		description: "Created a furniture shopping site using HTML, CSS, and JavaScript.",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/dodoshrey/first-site",
		demoUrl: "https://dodoshrey.github.io/first-site/",
		imageUrl: "/project_pic/furniture_shop.jpg"
	},
	{
		title: "Basic template for website",
		description: "A template/design for creating a webpage using HTML and CSS",
		tags: ["HTML", "CSS"],
		githubUrl: "https://github.com/dodoshrey/basic-template-for-a-website",
		demoUrl: "https://dodoshrey.github.io/basic-template-for-a-website/",
		imageUrl: "/project_pic/basic_template.jpg"
	},
	{
		title: "Animation using hover",
		description: "Basic hover command is used to implement animation in this project",
		tags: ["HTML", "CSS"],
		githubUrl: "https://github.com/dodoshrey/Example-of-using-hover-command-HTML-CSS",
		demoUrl: "https://dodoshrey.github.io/Example-of-using-hover-command-HTML-CSS/",
		imageUrl: "/project_pic/hover_animation.jpg"
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
						<Card key={index} className="overflow-hidden h-full flex flex-col border-2 border-blue-500 transition-all duration-300 hover:shadow-2xl bg-white" style={{ borderRadius: "1rem" }} >
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
								<CardTitle className="text-xl items-center text-center">{project.title}</CardTitle>
								<CardDescription className="flex flex-wrap gap-2 mt-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
											{tag}
										</span>
									))}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow items-center text-center">
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