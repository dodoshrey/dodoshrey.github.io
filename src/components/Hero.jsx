import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-10 tracking-tight">
            Shrey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Wahi
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Software Engineer at Microsoft with expertise in front-end development and UX design.
            <br></br>
            <br></br>
            Passionate about creating exceptional web experiences and solving complex problems with clean and efficient code. Specializing in React and TypeScript for designing and developing secure web applications.
          </p>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            To get a copy of my resume, please click the link below.
            <br></br>
            <a href="https://drive.google.com/uc?export=download&id=1rvD4iDZLZ771voHMAv2ZmP0YO8rVtBXR" className="text-blue-600 hover:underline">
              Download Resume
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Learn More About Me
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl text-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;