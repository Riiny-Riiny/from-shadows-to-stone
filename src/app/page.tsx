import Link from 'next/link';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  const researchers = [
    {
      name: "Frances Taylor",
      title: "Rising Junior at Franklin & Marshall College",
      bio: "Frances is passionate about uncovering hidden histories and bringing forgotten stories to light. Her work focuses on historical analysis and archival research.",
      expertise: ["Historical Analysis", "Archival Research", "Institutional History"],
      email: "ftaylor@fandm.edu"
    },
    {
      name: "Arek Giir Riny",
      title: "Rising Junior at Franklin & Marshall College",
      bio: "Arek brings a meticulous approach to record cross-referencing and field research. His work involves connecting disparate pieces of information to build comprehensive narratives.",
      expertise: ["Record Cross-referencing", "Field Notes", "Writing"],
      email: "agiir@fandm.edu"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Welcome Section */}
      <Section className="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            From Shadows to Stone
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Franklin College and the Legacy of Slavery
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            This project explores the complex history of Franklin College and its connections to slavery, 
            seeking to bring to light the stories of those whose lives were intertwined with the institution 
            but whose contributions have been largely overlooked. Through archival research, community 
            engagement, and thoughtful reflection, we aim to transform shadows of forgotten history into 
            lasting memorials of stone and memory.
          </p>
          
          {/* Researchers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {researchers.map((researcher, index) => (
              <ProfileCard
                key={index}
                name={researcher.name}
                title={researcher.title}
                bio={researcher.bio}
                expertise={researcher.expertise}
                email={researcher.email}
              />
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/research" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Research
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </Section>

      {/* Hero Section with Reflective Quote */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
            "Every historical truth has been integrated into a weaving of relationships, lives, and tales."
          </blockquote>
          <p className="text-lg text-gray-300 mb-8">
            — From Shadows to Stone Research Project
          </p>
          <div className="bg-white bg-opacity-10 rounded-lg p-8 border border-white border-opacity-20">
            <h3 className="text-blue-900 text-xl font-semibold mb-4">
              Remembering Overlooked Lives
            </h3>
            <p className="text-red-500 leading-relaxed">
              As we walk the halls and grounds of Franklin College, we must pause to remember 
              those whose labor, knowledge, and spirit helped build this institution but whose 
              names and stories have been erased from official histories. Their shadows still 
              walk these paths, and it is our responsibility to honor their memory and ensure 
              their contributions are never forgotten.
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us in This Important Work
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Understanding our institution's relationship with slavery is not about dwelling in guilt 
            or shame, but about acknowledging the full truth of our history so we can build a more 
            just and inclusive future. Every story uncovered, every name remembered, brings us closer 
            to reconciliation and healing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover</h3>
                <p className="text-gray-600 mb-4">
                  Explore our research findings and learn about the individuals whose stories 
                  we're working to preserve and honor.
                </p>
                <Link 
                  href="/research" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Our Research →
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn</h3>
                <p className="text-gray-600 mb-4">
                  Meet our research team and understand our methodology for uncovering 
                  these important historical narratives.
                </p>
                <Link 
                  href="/about" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  About Our Team →
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect</h3>
                <p className="text-gray-600 mb-4">
                  Have information to share or questions about our work? We welcome 
                  community input and collaboration.
                </p>
                <Link 
                  href="/contact" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

