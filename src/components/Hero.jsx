const Hero = () => {
  return (
    <section id="hero" className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="animate-fade-in">
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
            Shrey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {" "}Wahi
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Software Engineer at Microsoft with expertise in front-end development and UX design.
            <br></br>
            <br></br>
            Passionate about creating exceptional web experiences and solving complex problems with clean and efficient code. Specializing in React and TypeScript for designing and developing secure web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            
            <button 
              className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <a href="https://drive.google.com/uc?export=download&id=1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg">
                <u>Download Resume</u>
              </a>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-10 py-5 rounded-xl text-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Get In Touch
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;