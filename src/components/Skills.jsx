import { ArrowUp } from 'lucide-react';
import { skillCategories, getColorClasses, getIconColor } from './content';

const scrollToTop = () => {
	const element = document.getElementById('hero');
	element?.scrollIntoView({ behavior: 'smooth' });
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-[100vh] py-10 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">

        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-serif md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
        </div>

        <div className="font-mono grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg ${
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
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getColorClasses(category.color)}`}
                    style={{ color: "#fff" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

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
    </section>
  );
};

export default Skills;