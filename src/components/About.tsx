import React from 'react';
import { Shield, Code, Database, Award, BookOpen, Users, TrendingUp, Eye, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proactive Cybersecurity Analyst with two years of experience and web developer passionate about creating secure, 
            educational, and visually compelling digital experiences. Expert in security operations, incident response, 
            and risk management with proven results in threat mitigation and system protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
            <div className="mb-6">
              <h4 className="font-semibold text-blue-600 mb-2">SOC Analyst • Infosys Ltd. (May 2019 - Dec 2020)</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <p>Managed 200+ security events daily using Splunk and Palo Alto IPS, achieving 30% reduction in false positives</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Eye className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <p>Led security incident investigations, reducing resolution time by 20% through SEDR and SEPM</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <p>Implemented DLP strategies, preventing 15 potential data breaches</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-orange-600 mt-0.5 flex-shrink-0" size={16} />
                  <p>Developed phishing campaigns using Phishme, improving detection rates by 40%</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Database className="text-red-600 mt-0.5 flex-shrink-0" size={16} />
                  <p>Conducted 50+ vulnerability scans using Nessus, reducing system vulnerabilities by 25%</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I combine advanced cybersecurity expertise with web development skills to build applications 
              that are both secure and user-friendly. My work spans from educational cybersecurity tools 
              to interactive data visualizations, always with security best practices at the forefront.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Shield className="text-blue-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">Security Operations</h4>
                <p className="text-sm text-gray-600">SIEM, GDPR/NIST compliance, incident response</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Code className="text-purple-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">Web Development</h4>
                <p className="text-sm text-gray-600">React, TypeScript, secure application development</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Credentials</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">MSc Advanced Computer Science</h4>
                  <p className="text-sm text-blue-600 font-medium">Cybersecurity Specialization • University of Manchester, UK</p>
                  <p className="text-sm text-gray-600">2023-2024 • Distinction (74%)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">BE Information Technology</h4>
                  <p className="text-sm text-purple-600 font-medium">Chaitanya Bharathi Institute of Technology, India</p>
                  <p className="text-sm text-gray-600">2015-2019 • CGPA: 8.46/10</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Security Operations</h4>
                    <p className="text-gray-600 text-sm">Splunk SIEM, Palo Alto/CISCO IPS, Symantec endpoint protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance & Risk</h4>
                    <p className="text-gray-600 text-sm">GDPR, NIST frameworks, vulnerability assessments, DLP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Development</h4>
                    <p className="text-gray-600 text-sm">React, TypeScript, Tailwind CSS with security best practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Threat Analysis</h4>
                    <p className="text-gray-600 text-sm">Incident response, forensic analysis, security event monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;