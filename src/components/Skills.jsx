import { ArrowUp, Code, Database, Globe, Smartphone, Shield } from 'lucide-react';

const scrollToTop = () => {
	const element = document.getElementById('hero');
	element?.scrollIntoView({ behavior: 'smooth' });
};

const Skills = () => {
  const skillCategories = [
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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
      green: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
      purple: "bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200",
      pink: "bg-pink-50 dark:bg-pink-900 border-pink-200 dark:border-pink-800 text-pink-800 dark:text-pink-200",
      red: "bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
      yellow: "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color) => {
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

  return (
    <section id="skills" className="min-h-[100vh] py-20 bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${
                  category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' : 
                  category.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                  category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                  category.color === 'pink' ? 'bg-pink-100 dark:bg-pink-900' :
                  category.color === 'red' ? 'bg-red-100 dark:bg-red-900' : 'bg-yellow-100 dark:bg-yellow-900'
                }`}>
                  <category.icon className={`w-6 h-6 ${getIconColor(category.color)}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Proficiency Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">3+</div>
              <div className="text-gray-700 dark:text-gray-200">Years of Professional Experience</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-300 mb-2">20+</div>
              <div className="text-gray-700 dark:text-gray-200">Technologies Mastered</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-200">Projects Delivered</div>
            </div>

          </div>
        </div>

        <div className="text-center mt-24">
          <button
            onClick={scrollToTop}
            className="animate-bounce text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowUp size={40}  className="inline-block ml-2" /> Back To Top <ArrowUp size={40}  className="inline-block ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Skills;