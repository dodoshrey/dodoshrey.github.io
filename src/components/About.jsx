import { Code, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-[100vh] py-20 bg-blue-950 dark:bg-gray-950 flex items-center justify-center">
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
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-300 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Clean Code</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Writing maintainable, scalable solutions</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-300 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Collaboration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Working seamlessly across teams</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 dark:bg-green-900 rounded-lg">
                <Zap className="w-8 h-8 text-green-600 dark:text-green-300 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Optimizing for speed and efficiency</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;