import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer - Level 60",
      company: "Microsoft Ireland",
      period: "April 2022 - Present",
      location: "Dublin, Ireland",
      description: "Building solutions to improve security and privacy for Microsoft and connect to Microsoft services on https://login.live.com/ and https://account.live.com/pw to provide authentication to 2+ billion customers per month.",
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
      technologies: ["React", "TypeScript", "JavaScript", "C#", ".NET", "KnockoutJS", "Azure"]
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
      description: "Worked on interface with the design team, product management and development teams to create elegant, usable, responsive and interactive interfaces across multiple devices.",
      achievements: [
        "Developed an in-depth understanding of the entire web development process using HTML, CSS and Javascript. Converting UI/UX designs into prototypes, creating excellent interactions from designs as well as developing features to enhance user experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="min-h-[100vh] py-20 bg-gray-900 dark:bg-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions and driving impact through technology.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4">

                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period} • {exp.location}</span>
                    </div>
                  </div>

                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-500 dark:text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {exp.projects && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Projects:</h4>
                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                        <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{project.name}</h5>
                        <ul className="space-y-1">
                          {project.details.map((detail, j) => (
                            <li key={j} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-200 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;