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
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      pink: "bg-pink-50 border-pink-200 text-pink-800",
      red: "bg-red-50 border-red-200 text-red-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      pink: "text-pink-600",
      red: "text-red-600",
      yellow: "text-yellow-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="min-h-[100vh] py-20 bg-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.color === 'blue' ? 'bg-blue-100' : 
                  category.color === 'green' ? 'bg-green-100' :
                  category.color === 'purple' ? 'bg-purple-100' :
                  category.color === 'pink' ? 'bg-pink-100' :
                  category.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'}`}>
                  <category.icon className={`w-6 h-6 ${getIconColor(category.color)}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{category.title}</h3>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proficiency Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700">Years of Professional Experience</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-700">Technologies Mastered</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700">Projects Delivered</div>
            </div>

          </div>
        </div>

        <div className="text-center mt-24">
          <button
            onClick={scrollToTop}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowUp size={40}  className="inline-block ml-2" /> Back To Top <ArrowUp size={40}  className="inline-block ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Skills;