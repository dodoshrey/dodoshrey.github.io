import { Code, Database, Globe, Smartphone, Shield } from 'lucide-react';

export const experiences = [
  {
    title: "Software Engineer - Level 60",
    company: "Microsoft Ireland",
    period: "April 2022 - Present",
    location: "Dublin, Ireland",
    description: "Building solutions to improve security and privacy for Microsoft and connect to Microsoft services on login.live.com and account.live.com to provide authentication to 2+ billion customers per month.",
    achievements: [
      "Independently delivered solutions across multiple micro-services following the Scrum development process.",
      "Migrated a legacy .NET Framework architecture to ReactJS, improving efficiency of service and reducing latency.",
      "Collaborated with cross-functional teams across Microsoft—including Authenticator, Windows, Teams, and Xbox—to enhance security and privacy features for user authentication, ensuring seamless integration and platform compatibility.",
      "Coordinated closely with design, product management, and development teams to deliver elegant, usable, and responsive UI/UX across multiple platforms and devices.",
      "Regularly engaged in writing, debugging, and testing code, implementing key features, contributing to project planning, and mentoring engineers.",
      "Implemented security enhancements to reduce unauthorized access attempts, significantly improving the integrity of Microsoft’s authentication system.",
      "Served as an On-Call Engineer to monitor and maintain service health, proactively resolving and mitigating incidents to ensure high availability and reliability."
    ],
    projects: [
      {
        name: "Account Reset Password Migration to React",
        details: [
          "Migrated Microsoft’s Account Recovery screens from Knockout.JS to React.JS.",
          "Collaborated with Figma design team to work the UI design and successfully migrated screen by creating the right components.",
          "Wrote integration tests and unit tests to test the integrity of migrated page on Playwright (Storybook)."
        ]
      },
      {
        name: "Microsoft Account Recovery Service (MARS) Migration",
        details: [
          "Worked closely with multiple teams to depreciate old service and migrate to new one.",
          "Build new API to send/receive data with their required configurations.",
          "Mentoring peers across team with technical assistance and overall feedback and coaching.",
          "Wrote E2E functional, integration and unit tests to cover all scenarios and avoid breaking changes."
        ]
      },
      {
        name: "Xbox Build Number Logging",
        details: [
          "Collaborated with Xbox teams to capture build number of Xbox and log the activity of users going through Account Login/SignUp through Xbox.",
          "Logged new datapoint to send new parameter to data-stream by updating APIs to pick build number and then forward it to the required service for logging.",
          "Created monitors and dashboard to keep track of the Xbox Login and Signup service."
        ]
      }
    ],
    technologies: ["ReactJS", "TypeScript", "JavaScript", "C#", ".NET", "KnockoutJS", "Azure", "C++", "Microservices", "RESTful APIs", "Playwright", "Unit Testing", "CI/CD", "Git", "Webpack", "Copilot", "Visual Studio", "VS Code"]
  },
  {
    title: "Frontend Developer - Intern",
    company: "Techmates Technologies",
    period: "May 2021 - November 2021",
    location: "India",
    description: "Orchestrate reusable code and libraries (with matching documentation) to a standard to make it quick and easy to maintain the code in the future.",
    achievements: [
      "Ensured efficient web development by supporting designers and app developers while resolving website performance issues."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Web Development - Intern",
    company: "NT-MDT",
    period: "September 2020 - May 2021",
    location: "Ireland",
    description: "Worked on interface with the design team, product management and development teams to create elegant, responsive and interactive interfaces across multiple devices.",
    achievements: [
      "Developed an in-depth understanding of the entire web development process using HTML, CSS and Javascript. Converting UI/UX designs into prototypes, creating excellent interactions from designs as well as developing features to enhance user experience"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"]
  }
];

export const projects = [
  	{
		title: "Robot Name Search App",
		description: "A project to show 'filter name functionality'. Ensured responsiveness of the design on smartphones and other devices.",
		tags: ["ReactJS", "Node.js", "RESTful API", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/robots",
		demoUrl: "https://dodoshrey.github.io/robots",
		imageUrl: "/project_pic/robots.jpg",
		videoUrl: "/project_video/robots.mp4"
	},
    {
		title: "Tic Tac Toe",
		description: "Created Tic Tac Toe, a fun 2 player game with ReactJS.",
		tags: ["ReactJS", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/tic-tac-toe",
		demoUrl: "https://dodoshrey.github.io/tic-tac-toe/",
		imageUrl: "/project_pic/tic_tac_toe.jpg",
	    videoUrl: "/project_video/tic_tac_toe.mp4"
	},
	{
		title: "Budget Calculator",
		description: "A smart budget calculator app that helps you manage your finances effectively.",
		tags: ["JavaScript", "CSS3", "HTML5"],
		githubUrl: "https://github.com/dodoshrey/budget-calculator-app",
		demoUrl: "https://dodoshrey.github.io/budget-calculator-app/",
		imageUrl: "/project_pic/budget_calculator.jpg",
		videoUrl: "/project_video/budget_calculator.mp4"
	},
	{
		title: "Pig Game",
		description: "Created a 2 player dice sum counting game using HTML, CSS, Javascript. The game is played by rolling a dice and accumulating points until one player reaches 100 points.",
		tags: ["JavaScript", "CSS3", "HTML5", "Responsive Design"],
		githubUrl: "https://github.com/dodoshrey/pig-game",
		demoUrl: "https://dodoshrey.github.io/pig-game/",
		imageUrl: "/project_pic/pig_game.jpg",
		videoUrl: "/project_video/pig_game.mp4"
	},
	{
		title: "DOM Manipulation Example",
		description: "Made a shopping list example in which you can add new items or delete existing items.",
		tags: ["JavaScript", "CSS3", "HTML5"],
		githubUrl: "https://github.com/dodoshrey/DOM-Manupulation-Example",
		demoUrl: "https://dodoshrey.github.io/DOM-Manupulation-Example",
		imageUrl: "/project_pic/DOM_Manipulation.jpg",
		videoUrl: "/project_video/DOM_Manipulation.mp4"
	},
	{
		title: "Furniture Shopping Site",
		description: "Created a furniture shopping site using HTML, CSS, and JavaScript.",
		tags: ["JavaScript", "CSS3", "HTML5"],
		githubUrl: "https://github.com/dodoshrey/first-site",
		demoUrl: "https://dodoshrey.github.io/first-site/",
		imageUrl: "/project_pic/furniture_shop.jpg",
		videoUrl: "/project_video/furniture_shop.mp4"
	},
	{
		title: "Basic Template for Website",
		description: "A template/design for creating a webpage using HTML and CSS. It includes a header, footer, and a main section with a simple layout.",
		tags: ["HTML5", "CSS3"],
		githubUrl: "https://github.com/dodoshrey/basic-template-for-a-website",
		demoUrl: "https://dodoshrey.github.io/basic-template-for-a-website/",
		imageUrl: "/project_pic/basic_template.jpg",
		videoUrl: "/project_video/basic_template.mp4"
	},
	{
		title: "Animation Using Hover",
		description: "Basic hover command is used to implement animation in this project. It is a simple example of using hover effects to create animations on elements.",
		tags: ["HTML5", "CSS3"],
		githubUrl: "https://github.com/dodoshrey/Example-of-using-hover-command-HTML-CSS",
		demoUrl: "https://dodoshrey.github.io/Example-of-using-hover-command-HTML-CSS/",
		imageUrl: "/project_pic/hover_animation.jpg",
		videoUrl: "/project_video/hover_animation.mp4"
	}
];

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: Globe,
        color: "blue",
        skills: ["JavaScript", "TypeScript", "HTML", "CSS", "ReactJS", "VueJS", "AngularJS", "KnockoutJS", "FluentUI", "Redux", "JSX"]
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "green",
        skills: ["C#", ".NET", "C++", "C", "Python", "NodeJS", "ExpressJS", "MySQL", "GraphQL", "RESTful APIs"]
    },
    {
        title: "Tools & Technologies",
        icon: Code,
        color: "purple",
        skills: ["GIT", "GitBash", "Jest", "Unit Testing", "CI/CD", "Webpack", "Babel", "Visual Studios", "VS Code", "Sublime Text", "Jupyter", "Anaconda", "Playwright"]
    },
    {
        title: "Cloud & DevOps",
        icon: Smartphone,
        color: "pink",
        skills: ["Azure", "Microservices", "Distributed Systems"]
    },
    {
        title: "Programming Concepts",
        icon: Shield,
        color: "red",
        skills: ["OOP", "KQL", "Microservices", "Distributed Systems"]
    }
];

export const getColorClasses = (color) => {
  const colorMap = {
    blue: "bg-blue-700 dark:bg-blue-900 border-blue-200 dark:border-blue-800 text-white dark:text-blue-200",
    green: "bg-green-700 dark:bg-green-900 border-green-200 dark:border-green-800 text-white dark:text-green-200",
    purple: "bg-purple-700 dark:bg-purple-900 border-purple-200 dark:border-purple-800 text-white dark:text-purple-200",
    pink: "bg-pink-700 dark:bg-pink-900 border-pink-200 dark:border-pink-800 text-white dark:text-pink-200",
    red: "bg-red-700 dark:bg-red-900 border-red-200 dark:border-red-800 text-white dark:text-red-200",
    yellow: "bg-yellow-700 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800 text-white dark:text-yellow-200"
  };
  return colorMap[color] || colorMap.blue;
};

export const getIconColor = (color) => {
  const colorMap = {
    blue: "text-blue-600 dark:text-blue-300",
    green: "text-green-600 dark:text-green-300",
    purple: "text-purple-600 dark:text-purple-300",
    pink: "text-pink-600 dark:text-pink-300",
    red: "text-red-600 dark:text-red-300",
    yellow: "text-yellow-600 dark:text-yellow-300"
  };
  return colorMap[color] || colorMap.blue;
};
