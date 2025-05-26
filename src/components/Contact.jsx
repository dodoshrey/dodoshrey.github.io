import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] py-20 bg-gray-900 dark:bg-gray-950 flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid place-items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:wahishrey@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    wahishrey@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/shrey-wahi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    /in/shrey-wahi
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <a href="https://github.com/shreywahi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    /shreywahi
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-300">Dublin, Ireland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Shrey Wahi. Built with React and passion for great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;