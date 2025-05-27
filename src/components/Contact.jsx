import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] py-10 sm:py-20 bg-blue-950 dark:bg-gray-950 flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-serif text-orange-400 dark:text-purple-500 md:text-5xl font-bold mb-4 sm:mb-6">
            Let's Work Together
          </h2>
          <p className="font-mono text-base sm:text-xl text-purple-200 dark:text-orange-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can collaborate.
          </p>
        </div>

        <div className="font-mono grid place-items-center">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8">Get In Touch</h3>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10">
              <div className="flex items-center">
                <div className="bg-blue-700 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Email</div>
                  <a href="mailto:wahishrey@gmail.com" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base" aria-label="Send email to wahishrey@gmail.com">
                    wahishrey@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/shrey-wahi/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base" aria-label="View LinkedIn profile">
                    /in/shrey-wahi
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">GitHub</div>
                  <a href="https://github.com/dodoshrey" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base" aria-label="View GitHub profile">
                    /dodoshrey
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Location</div>
                  <div className="text-gray-200 text-xs sm:text-base">Dublin, Ireland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-mono mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-xs sm:text-base">
            © 2025 Shrey Wahi. Built with ReactJS, Vite and passion for great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;