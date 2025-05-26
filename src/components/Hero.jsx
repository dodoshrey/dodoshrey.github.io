const Hero = () => {
  return (
    <section id="hero" className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="animate-fade-in">
          
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
            Shrey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {" "}Wahi
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Software Engineer at Microsoft with expertise in front-end development and UX design.
            <br></br>
            <br></br>
            Passionate about creating exceptional web experiences and solving complex problems with clean and efficient code. Specializing in React and TypeScript for designing and developing secure web applications.
          </p>

          {/* Resume Preview + Buttons in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-16">
            {/* Resume Preview */}
            <div className="flex justify-center">
              <iframe
                src="https://drive.google.com/file/d/1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg/preview"
                title="Resume Preview"
                width="100%"
                height="500"
                className="rounded-xl shadow-lg max-w-xl"
                allow="autoplay"
              ></iframe>
            </div>
            {/* Buttons stacked vertically and centered */}
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <a
                href="https://drive.google.com/uc?export=download&id=1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full text-center"
              >
                <u>Download Resume</u>
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-10 py-5 rounded-xl text-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 w-full"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;