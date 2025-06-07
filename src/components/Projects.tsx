import React from 'react';
import ProjectCard from './ProjectCard';
import { Code2, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CISSP Certification Guide",
      description: "Comprehensive study guide and resource platform for CISSP certification preparation with interactive content, practice questions, and detailed explanations of cybersecurity concepts.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/Abhiramk65/CISSP",
      liveUrl: "https://cissp-five.vercel.app/",
      date: "2024"
    },
    {
      title: "Password Strength Analyzer",
      description: "Advanced password strength checker with real-time analysis, security recommendations, and visual feedback to help users create stronger, more secure passwords.",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Security APIs"],
      githubUrl: "https://github.com/Abhiramk65/Password_strength",
      liveUrl: "https://password-strength-peach.vercel.app/",
      date: "2025"
    },
    {
      title: "Phishing Awareness Game",
      description: "Interactive educational game designed to teach users how to identify phishing attempts and improve cybersecurity awareness through gamified learning experiences.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Game Logic", "Educational UX"],
      githubUrl: "https://github.com/Abhiramk65/PhishGame",
      liveUrl: "https://phish-game.vercel.app/",
      date: "2025"
    },
    {
      title: "India Missile Visualizer",
      description: "Interactive data visualization platform showcasing India's missile defense systems and capabilities with detailed technical specifications and geographic mapping.",
      image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "D3.js", "Data Visualization", "Geographic APIs"],
      githubUrl: "https://github.com/Abhiramk65/Indian-missile-visualiser",
      liveUrl: "https://india-missile-visualiser.vercel.app/",
      date: "2025"
    },
    {
      title: "Komanduri Family Website",
      description: "Beautiful family website featuring photo galleries, family history, event announcements, and interactive family tree with responsive design and modern aesthetics.",
      image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Photo Gallery", "Family Tree UI"],
      githubUrl: "https://github.com/Abhiramk65/family-tree",
      liveUrl: "https://komanduri-family.vercel.app/",
      date: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-blue-500 mr-2" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <Code2 className="text-purple-500 ml-2" size={24} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of web applications and interactive experiences I've built, ranging from 
            cybersecurity tools to educational platforms and data visualizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;