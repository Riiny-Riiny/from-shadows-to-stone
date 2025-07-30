import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';

export default function About() {
  const researchers = [
    {
      name: "Frances Taylor",
      title: "Rising Junior at Franklin & Marshall College",
      bio: "Frances is passionate about uncovering hidden histories and bringing forgotten stories to light. Their work focuses on historical analysis and archival research, with a particular interest in how institutions can acknowledge and address their complex pasts. She believes that understanding our history is essential for building a more just future.",
      expertise: ["Historical Analysis", "Archival Research", "Institutional History", "Social Justice"],
      email: "ftaylor@fandm.edu",
      funFact: "When not in the archives, Frances enjoys hiking and discovering local historical sites.",
      quote: "\"Every document tells a story, and every story deserves to be heard.\""
    },
    {
      name: "Arek Giir Riny",
      title: "Rising Junior at Franklin & Marshall College",
      bio: "Arek brings a meticulous approach to record cross-referencing and field research. Her work involves connecting disparate pieces of information to build comprehensive narratives about Franklin College's past. He is particularly interested in how historical research can inform present-day institutional practices and community relationships.",
      expertise: ["Record Cross-referencing", "Field Notes", "Writing", "Research Methodology"],
      email: "agiir@fandm.edu",
      funFact: "Arek enjoys crocheting and is a member of the Franklin & Marshall College Cross Country team. She is also a model and a film student.",
      quote: "\"The past is not a foreign country—it's the foundation we're still building on.\""
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Section className="pt-20 pb-16 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About the Researchers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the student researchers behind "From Shadows to Stone," dedicated to uncovering 
            Franklin College's complex history and honoring the forgotten stories of those who 
            helped build this institution.
          </p>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              "From Shadows to Stone" represents our commitment to transforming ephemeral 
              memories and forgotten histories into lasting memorials of truth and remembrance. 
              We believe that institutions must honestly confront their pasts to build more 
              just and inclusive futures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through archival research, community engagement, and thoughtful analysis, 
              we seek to honor those whose labor and contributions have been overlooked 
              in official histories. Our work is guided by the principle that every 
              story matters and every life deserves to be remembered.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Team */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Research Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchers.map((researcher, index) => (
              <div key={index} className="space-y-4">
                <ProfileCard
                  name={researcher.name}
                  title={researcher.title}
                  bio={researcher.bio}
                  expertise={researcher.expertise}
                  email={researcher.email}
                />
                
                {/* Additional Details */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="space-y-4">
                    {researcher.quote && (
                      <div className="border-l-4 border-blue-500 pl-4">
                        <blockquote className="italic text-gray-700">
                          {researcher.quote}
                        </blockquote>
                      </div>
                    )}
                    
                    {researcher.funFact && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Fun Fact</h4>
                        <p className="text-sm text-gray-600">{researcher.funFact}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Approach */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Research Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Archival Research
              </h3>
              <p className="text-gray-700">
                We meticulously examine historical documents, records, and artifacts to 
                uncover the true stories of Franklin College's past, particularly focusing 
                on the institution's relationship with slavery.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Engagement
              </h3>
              <p className="text-gray-700">
                We actively seek input from community members, alumni, and local historians 
                who may have additional information or perspectives to share about the college's history.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ethical Storytelling
              </h3>
              <p className="text-gray-700">
                We approach our research with respect for the individuals whose stories 
                we're uncovering, ensuring their narratives are presented with dignity and accuracy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Institutional Accountability
              </h3>
              <p className="text-gray-700">
                Our work aims to help institutions acknowledge their complex histories 
                and take meaningful steps toward reconciliation and justice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Internship Experience */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Internship Experience
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              This research project is part of a summer internship program at Franklin & Marshall College, 
              designed to give students hands-on experience in historical research and archival work. 
              Through this program, students develop valuable skills in:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Primary source analysis and interpretation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Digital humanities and archival technology
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Community outreach and engagement
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Academic writing and presentation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Ethical research practices
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Collaborative project management
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
} 