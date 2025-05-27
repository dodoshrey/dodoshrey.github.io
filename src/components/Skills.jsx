import { skillCategories, getColorClasses, getIconColor } from './content';

const Skills = () => {
  return (
    <section id="skills" className="min-h-[100vh] py-10 sm:py-20 bg-blue-950 dark:bg-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">

        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-serif md:text-5xl font-bold text-orange-400 dark:text-purple-500 mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
        </div>

        <div className="font-mono grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-0 sm:p-3 rounded-lg ${
                  category.color === 'blue' ? 'bg-blue-200 dark:bg-blue-900' : 
                  category.color === 'green' ? 'bg-green-200 dark:bg-green-900' :
                  category.color === 'purple' ? 'bg-purple-200 dark:bg-purple-900' :
                  category.color === 'pink' ? 'bg-pink-200 dark:bg-pink-900' :
                  category.color === 'red' ? 'bg-red-200 dark:bg-red-900' : 'bg-yellow-200 dark:bg-yellow-900'
                }`}>
                  <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${getIconColor(category.color)}`} />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-1 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getColorClasses(category.color)}`}
                    style={{ color: "#fff" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;