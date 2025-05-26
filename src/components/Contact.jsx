import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] py-20 bg-blue-950 dark:bg-gray-950 flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-orange-400 dark:text-purple-500 md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="font-mono text-xl text-purple-200 dark:text-orange-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can collaborate.
          </p>
        </div>

        <div className="font-mono grid place-items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:wahishrey@gmail.com" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Send email to wahishrey@gmail.com">
                    wahishrey@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/shrey-wahi/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="View LinkedIn profile">
                    /in/shrey-wahi
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <a href="https://github.com/shreywahi" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="View GitHub profile">
                    /shreywahi
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-200">Dublin, Ireland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-mono mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © 2025 Shrey Wahi. Built with ReactJS, Vite and passion for great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;