const Hero = () => {
  return (
    <section id="hero" className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950 dark:from-gray-950 dark:via-gray-500 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="animate-fade-in">
          <br /><br />
          <h1 className="text-6xl sm:text-5xl md:text-8xl font-serif text-gray-900 dark:text-white mb-6 tracking-tight">
            Shrey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400">
              {" "}Wahi{" "}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-3xl font-mono text-gray-900 dark:text-purple-200 leading-relaxed">
            <br></br>
            Software Engineer with expertise in ReactJS and TypeScript with an interest in front-end development.
            <br></br>
            <br></br>
            <br></br>
            I'm passionate about creating exceptional web experiences and solving complex problems with clean and efficient code. Specialized in designing and developing secure web applications.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16">
            
            <button 
              className="bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Download Resume"
            >
              <a href="https://drive.google.com/uc?export=download&id=1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg">
                Download Resume
              </a>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-700 dark:border-gray-200 text-gray-900 dark:text-gray-200 px-10 py-5 rounded-xl text-xl font-semibold hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Scroll to Contact section"
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