import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:abhiramk65@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Abhiramk65" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhiram-koushik-komanduri/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Next.js & Data Visualization</li>
              <li>Cybersecurity & Web Security</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-2" /> using React & Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2">© 2024 Abhiram Komanduri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;