import { useState } from "react";
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Modal from "./ui/Modal";

const projects = [
  // ...existing project objects...
  // Add a `screenshots` or `videoUrl` property to any project if you want
  // Example:
  // {
  //   ...,
  //   screenshots: ["/project_pic/tic_tac_toe_1.jpg", "/project_pic/tic_tac_toe_2.jpg"],
  //   videoUrl: "https://www.youtube.com/embed/your-demo-video"
  // }
  	{
		title: "Tic Tac Toe",
		description: "Created Tic Tac Toe, a fun 2 player game with ReactJS.",
		tags: ["ReactJS", "JavaScript", "CSS"],
		githubUrl: "https://github.com/dodoshrey/tic-tac-toe",
		demoUrl: "https://dodoshrey.github.io/tic-tac-toe/",
		imageUrl: "/project_pic/tic_tac_toe.jpg",
	    videoUrl: "/project_video/tic_tac_toe.mp4"
	},
	{
		title: "Robot Name Search App",
		description: "A project to show 'filter name functionality'. Ensured responsiveness of the design on smartphones and other devices.",
		tags: ["ReactJS", "Node.js", "RESTful API", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/robots",
		demoUrl: "https://dodoshrey.github.io/robots",
		imageUrl: "/project_pic/robots.jpg",
		videoUrl: "/project_video/robots.mp4"
	},
	{
		title: "Budget Calculator",
		description: "A smart budget calculator app that helps you manage your finances effectively.",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/dodoshrey/budget-calculator-app",
		demoUrl: "https://dodoshrey.github.io/budget-calculator-app/",
		imageUrl: "/project_pic/budget_calculator.jpg",
		videoUrl: "/project_video/budget_calculator.mp4"
	},
	{
		title: "Pig Game",
		description: "Created a 2 player dice sum counting game using HTML, CSS, Javascript. The game is played by rolling a dice and accumulating points until one player reaches 100 points.",
		tags: ["HTML", "CSS", "JS", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/pig-game",
		demoUrl: "https://dodoshrey.github.io/pig-game/",
		imageUrl: "/project_pic/pig_game.jpg",
		videoUrl: "/project_video/pig_game.mp4"
	},
	{
		title: "DOM Manipulation Example",
		description: "Made a shopping list example in which you can add new items or delete existing items.",
		tags: ["HTML", "CSS", "JS"],
		githubUrl: "https://github.com/dodoshrey/DOM-Manupulation-Example",
		demoUrl: "https://dodoshrey.github.io/DOM-Manupulation-Example",
		imageUrl: "/project_pic/DOM_Manipulation.jpg",
		videoUrl: "/project_video/DOM_Manipulation.mp4"
	},
	{
		title: "Furniture Shopping Site",
		description: "Created a furniture shopping site using HTML, CSS, and JavaScript.",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/dodoshrey/first-site",
		demoUrl: "https://dodoshrey.github.io/first-site/",
		imageUrl: "/project_pic/furniture_shop.jpg",
		videoUrl: "/project_video/furniture_shop.mp4"
	},
	{
		title: "Basic Template for Website",
		description: "A template/design for creating a webpage using HTML and CSS. It includes a header, footer, and a main section with a simple layout.",
		tags: ["HTML", "CSS"],
		githubUrl: "https://github.com/dodoshrey/basic-template-for-a-website",
		demoUrl: "https://dodoshrey.github.io/basic-template-for-a-website/",
		imageUrl: "/project_pic/basic_template.jpg",
		videoUrl: "/project_video/basic_template.mp4"
	},
	{
		title: "Animation Using Hover",
		description: "Basic hover command is used to implement animation in this project. It is a simple example of using hover effects to create animations on elements.",
		tags: ["HTML", "CSS"],
		githubUrl: "https://github.com/dodoshrey/Example-of-using-hover-command-HTML-CSS",
		demoUrl: "https://dodoshrey.github.io/Example-of-using-hover-command-HTML-CSS/",
		imageUrl: "/project_pic/hover_animation.jpg",
		videoUrl: "/project_video/hover_animation.mp4"
	}
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<section id="projects" className="min-h-[100vh] py-20 bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 flex items-center justify-center">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-serif md:text-5xl font-bold text-green-950 dark:text-white mb-6">
						Personal Projects
					</h2>
					<p className="text-xl font-mono text-orange-200 dark:text-purple-300 max-w-3xl mx-auto">
						Here are some of my noteworthy projects that showcase my technical skills and problem-solving abilities.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
								<div className="h-48 overflow-hidden flex justify-center items-center w-full">
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
								<CardTitle className="text-xl font-mono items-center text-center">{project.title}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>

				<div className="text-center font-mono mt-12">
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
			</div>

			{/* Modal for Project Details */}
			<Modal open={!!selectedProject} onClose={() => setSelectedProject(null)} ariaLabel={selectedProject ? selectedProject.title : "Project Details"}>
				{selectedProject && (
					<div>
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