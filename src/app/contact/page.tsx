'use client';

import { useState } from 'react';
import Section from '@/components/Section';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  type Researcher = {
    name: string;
    title: string;
    email: string;
    bio: string;
    expertise: string[];
    linkedin?: string;
    portfolio?: string;
    availability: string;
  };

  const researchers: Researcher[] = [
    {
      name: "Frances Taylor",
      title: "Rising Junior at Franklin & Marshall College",
      email: "ftaylor@fandm.edu",
      bio: "Frances is passionate about uncovering hidden histories and bringing forgotten stories to light. Her work focuses on historical analysis and archival research.",
      expertise: ["Historical Analysis", "Archival Research", "Institutional History"],
      linkedin: "https://www.linkedin.com/in/frances-taylor/",
      availability: "Available for research collaborations"
    },
    {
      name: "Arek Giir Riny",
      title: "Rising Junior at Franklin & Marshall College",
      email: "agiir@fandm.edu",
      bio: "Arek brings a meticulous approach to record cross-referencing and field research. Her work involves connecting disparate pieces of information to build comprehensive narratives.",
      expertise: ["Record Cross-referencing", "Field Notes", "Writing"],
      linkedin: "https://www.linkedin.com/in/arek-giir-643b90352/",
     
      availability: "Available for research collaborations"
    },
    {
      name: "Professor Christina Perez",
      title: "Assistant Professor of American Studies at Franklin & Marshall College",
      email: "cperez1@fandm.edu",
      bio: "Professor Perez teaches American Studies at Franklin & Marshall College.",
      expertise: ["Record Cross-referencing", "Field Notes", "Writing", "American Studies", "Institutional History", "Research", "Teaching"],
      linkedin: "https://www.linkedin.com/in/cristina-perez-06b66954/",
      //portfolio: "https://arek-riny-research.com",
      availability: "Available via email"
    },
    {
      name: "Professor Peter Jaros",
      title: "Associate Professor of English at Franklin & Marshall College",
      email: "pjaros@fandm.edu",
      bio: "",
      expertise: ["American Literature", "Research", "Teaching", "Record Cross-referencing", "Field Notes", "Writing"],
      //linkedin: "https://linkedin.com/in/arek-giir-riny",
      //portfolio: "https://arek-riny-research.com",
      availability: "Available via email"
    },
    {
      name: "Professor Christina Helene McSherry (Research Contact)",
      title: "Assistant of American Studies at Franklin & Marshall College",
      email: "christina.mcsherry@fandm.edu",
      bio: "Professor McSherry is the primary contact for the research project.",
      expertise: ["Record Cross-referencing", "Field Notes", "Writing", "American Studies", "Institutional History", "Research", "Teaching"],
      //linkedin: "https://linkedin.com/in/arek-giir-riny",
      //portfolio: "https://arek-riny-research.com",
      availability: "Available via email"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Section className="pt-20 pb-16 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our research? Want to collaborate? We'd love to hear from you. 
            Reach out to our team of researchers and scholars.
          </p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form 
                action="https://formspree.io/f/your-form-id" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="research-inquiry">Research Inquiry</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="speaking-engagement">Speaking Engagement</option>
                    <option value="publication">Publication Question</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Project Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Information
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Project</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Title:</strong> From Shadows to Stone: Franklin College and the Legacy of Slavery</p>
                  <p><strong>Institution:</strong> Franklin & Marshall College</p>
                  <p><strong>Program:</strong> Reckoning with Lancaster Summer Project</p>
                  <p><strong>Research Period:</strong> 1787-1853</p>
                  <p><strong>Focus:</strong> Enslaved individuals and enslavers connected to Franklin College</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Response Time</h3>
                <p className="text-blue-800 text-sm">
                  We typically respond to inquiries within 2-3 business days. 
                  For urgent matters, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Individual Researcher Contact Sections */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Research Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchers.map((researcher, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{researcher.name}</h3>
                  <p className="text-gray-600 mb-4">{researcher.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{researcher.bio}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {researcher.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${researcher.email}`}
                        className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        {researcher.email}
                      </a>
                      
                      {researcher.linkedin && (
                        <a 
                          href={researcher.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                          </svg>
                          LinkedIn Profile
                        </a>
                      )}
                      
                      {researcher.portfolio && (
                        <a 
                          href={researcher.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Academic Portfolio
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Availability</h4>
                    <p className="text-gray-600 text-sm">{researcher.availability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ways to Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Collaboration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interested in collaborating on historical research projects? We welcome 
                  partnerships with other institutions and researchers.
                </p>
                <a href="mailto:frances.taylor@fandm.edu" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Speaking Engagements</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our researchers are available for speaking engagements, 
                  workshops, and educational presentations about institutional history.
                </p>
                <a href="mailto:arek.riny@fandm.edu" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Request Speaker →
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Publications</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Access our latest research findings and publications 
                  on Franklin College's relationship with slavery.
                </p>
                <a href="/research" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Research →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 