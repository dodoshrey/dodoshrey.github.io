import { ArrowDown, ArrowUp, Code, Users, Zap } from 'lucide-react';

const scrollToTop = () => {
  const element = document.getElementById('hero');
  element?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToProjects = () => {
  const element = document.getElementById('projects');
  element?.scrollIntoView({ behavior: 'smooth' });
};

const About = () => {
  return (
    <section id="about" className="min-h-[100vh] py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional web experiences and solving complex problems with clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img 
              src="https://img.freepik.com/premium-photo/3d-vector-illustration-web-dev-design-with-laptop-phone-coding-tools_1262618-495.jpg?w=360"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl w-full max-w-xl h-auto md:w-[370px] md:h-[350px]"
            />
          </div>
          
          <div className="space-y-6">

            <p className="text-lg text-gray-300 leading-relaxed">
              A Software Engineer at Microsoft with a focus on UX Engineering, I blend creative design with 
              technical development to create secure and intuitive web applications. As a frontend expert with a strong 
              foundation in backend technologies, I design and implement comprehensive solutions that prioritize 
              user experience and security.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 3 years of experience, I've developed expertise in React, TypeScript, and various cloud technologies.
              My work at Microsoft has involved enhancing security solutions and designing user interfaces that protect 
              millions of users while maintaining a seamless experience. I'm also experienced in optimizing application 
              performance and architecting scalable frontend solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-sm text-gray-600 mt-2">Writing maintainable, scalable solutions</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Collaboration</h3>
                <p className="text-sm text-gray-600 mt-2">Working seamlessly across teams</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Performance</h3>
                <p className="text-sm text-gray-600 mt-2">Optimizing for speed and efficiency</p>
              </div>
            </div>

          </div>

        </div>

        <div className="text-center mt-24">

          <button
            onClick={scrollToProjects}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={40}  className="inline-block ml-2" /> Projects <ArrowDown size={40}  className="inline-block ml-2" />
          </button>

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

export default About;