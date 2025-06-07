import React from 'react';
import { ChevronDown, Code, Palette, Zap, Mail, Linkedin, Github, Shield, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                <Code className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Full-Stack Developer</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-100">Abhiram</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Komanduri
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Web Developer with cybersecurity expertise, crafting secure and scalable digital experiences 
                with modern technologies and security-first mindset.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start items-center space-x-6">
              <a 
                href="https://github.com/Abhiramk65" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhiram-koushik-komanduri/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:abhiramk65@gmail.com" 
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="flex items-center justify-center">
                  View My Projects
                  <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Let's Connect
              </a>
            </div>


          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Development Stack</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Frontend</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="text-blue-400 text-xs bg-blue-400/10 px-2 py-1 rounded">React</span>
                        <span className="text-purple-400 text-xs bg-purple-400/10 px-2 py-1 rounded">TypeScript</span>
                        <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">Next.js</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Backend</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded">Node.js</span>
                        <span className="text-red-400 text-xs bg-red-400/10 px-2 py-1 rounded">Express</span>
                        <span className="text-blue-500 text-xs bg-blue-500/10 px-2 py-1 rounded">Python</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Database</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="text-orange-400 text-xs bg-orange-400/10 px-2 py-1 rounded">MongoDB</span>
                        <span className="text-blue-600 text-xs bg-blue-600/10 px-2 py-1 rounded">PostgreSQL</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Styling</span>
                      <div className="flex items-center">
                        <Palette className="w-4 h-4 text-cyan-400 mr-1" />
                        <div className="flex flex-wrap gap-1">
                          <span className="text-cyan-400 text-xs bg-cyan-400/10 px-2 py-1 rounded">Tailwind</span>
                          <span className="text-pink-400 text-xs bg-pink-400/10 px-2 py-1 rounded">CSS</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Tools</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="text-gray-400 text-xs bg-gray-400/10 px-2 py-1 rounded">Git</span>
                        <span className="text-orange-500 text-xs bg-orange-500/10 px-2 py-1 rounded">Docker</span>
                        <span className="text-yellow-500 text-xs bg-yellow-500/10 px-2 py-1 rounded">AWS</span>
                      </div>
                    </div>
                    

                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-sm text-gray-400">
                      MSc Computer Science (Cybersecurity) • University of Manchester
                    </div>
                    <div className="text-sm text-blue-400 font-medium">Security-minded Development</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-500/30 flex items-center justify-center">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;