import Section from '@/components/Section';
import Accordion from '@/components/Accordion';
import HistoricalHighlight from '@/components/HistoricalHighlight';
import ReferenceList from '@/components/ReferenceList';
import Image from 'next/image';

export default function Research() {
  const researchSections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <div className="prose prose-lg max-w-none">
          <p>
            Every historical truth has been integrated into a weaving of relationships, lives, and tales that influence how we perceive the past. This report aims to document the experiences of enslaved individuals and those who enslaved them who were connected to Franklin College from its founding in <HistoricalHighlight type="date">1787</HistoricalHighlight> to its merger with Marshall College in <HistoricalHighlight type="date">1853</HistoricalHighlight>.
          </p>
          
          <p>
            By digging into these individual identities, we hope to offer a more open and human viewpoint on a trying period in the college's and the country's history. The relationship between slavery and Franklin College is more than simply institutional history; it also recounts the tale of real people whose daily lives were marked by suffering, determination, and complicated relationships.
          </p>
          
          <p>
            Franklin College was a part of this environment, connected by its trustees, founders, students, and professors. Historic Rock Ford's Witness Stones Project, with which we are collaborating on this initiative, aims to commemorate individuals who have been overlooked and underrepresented in the historical narrative.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Research Context</h4>
            <p className="text-blue-800">
              The institution of slavery is multifaceted and took many different forms depending on geography. The southern slavery that we typically see portrayed in media and history classes is not how enslavement looked everywhere. In fact, there is a misconception that slavery ceased to exist in the Northern states. However, we know that this is not the case; states North of the Mason-Dixon Line had a relationship with slavery that was different from the South. Though less overt, the institution of slavery was still embedded in society in the North.
            </p>
          </div>
          
          <p>
            We can see how ingrained slavery was in the North by looking at Lancaster County. In <HistoricalHighlight type="date">1780</HistoricalHighlight>, Lancaster County was home to <HistoricalHighlight type="finding">807 enslaved individuals</HistoricalHighlight>, comprising 394 males and 412 females, ranging in age from 2.5 to 60 years old. Scotch-Irish residents owned two-thirds of these individuals, while the remaining third was owned by English, German, Huguenot, and Welsh families.
          </p>
          
          <p>
            The Pennsylvania Gradual Emancipation Act of 1780 introduced several vital provisions, marking a significant legal shift toward limited rights and eventual emancipation. Between <HistoricalHighlight type="date">1780</HistoricalHighlight> and <HistoricalHighlight type="date">1831</HistoricalHighlight>, Lancaster County recorded the births of <HistoricalHighlight type="finding">427 children</HistoricalHighlight> to enslaved parents, reflecting a steady decline in enslaved children's births following the passage of Pennsylvania's Gradual Emancipation Act.
          </p>
        </div>
      )
    },
    {
      id: 'methodology',
      title: '2. Methodology',
      content: (
        <div className="prose prose-lg max-w-none">
          <p>
            While most of our research was conducted at LancasterHistory's archives, we began by accessing the resources available at F&M's archives to find biographical information about the people we were researching.
          </p>
          
          <h3>Archival Research Process</h3>
          <p>
            We went to Lancaster History to access the register created after the Gradual Abolition Act of 1780, to find information about those who were enslaved. We also accessed <HistoricalHighlight type="finding">marriage, baptismal, and burial records</HistoricalHighlight>, as well as <HistoricalHighlight type="finding">family histories</HistoricalHighlight> at LancasterHistory.
          </p>
          
          <h3>Cross-Referencing Approach</h3>
          <p>
            As we gathered more information about the list of people we were researching, we cross-referenced some of that information with the founding documents of Franklin College. This approach allowed us to build comprehensive profiles of individuals connected to the institution.
          </p>
          
          <h3>Collaboration with Rock Ford</h3>
          <p>
            Our research expands upon F&M's 2022 Legacy of Slavery Report by cross-listing names with another list provided by Rock Ford, which included people they determined to have been enslavers. After conducting thorough research, we found that most of these enslavers/trustees had deep connections to Franklin College.
          </p>
        </div>
      )
    },
    {
      id: 'results',
      title: '3. Results',
      content: (
        <div className="prose prose-lg max-w-none">
          <h3>Key Findings</h3>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Trustee Connections to Slavery</h4>
              <p className="mb-4">
                Several members of the Franklin College Board of Trustees from 1787 to the early 1800s also appeared in historical records as enslavers, highlighting the complex and troubling connections between the college's leadership and the institution of slavery during that period.
              </p>
              
              {/* Historical Images of Trustees */}
              <div className="space-y-6">
                {/* Adam Reigart Sr. */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/images/adam-reigart-sr.jpg" 
                        alt="Adam Reigart Sr. Portrait" 
                        width={192} 
                        height={256} 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Adam Reigart Sr. (1739-1813)</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Role:</strong> Franklin College Trustee (1787-1813)<br/>
                        <strong>Position:</strong> Treasurer (1789-1813)<br/>
                        <strong>Connection:</strong> Historical records show Reigart as an enslaver
                      </p>
                      <p className="text-sm text-gray-600">
                        This historical portrait shows one of the key figures in Franklin College's early administration. 
                        As treasurer during the institution's formative years, Reigart's financial decisions and 
                        institutional leadership were intertwined with the economic systems that supported slavery 
                        in Pennsylvania during this period.
                      </p>
                    </div>
                  </div>
                </div>

                {/* William Hamilton */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/images/william-hamilton.jpg" 
                        alt="William Hamilton Portrait" 
                        width={192} 
                        height={256} 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">William Hamilton (1787-1813)</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Role:</strong> Franklin College Trustee (1787-1813)<br/>
                        <strong>Connection:</strong> Historical records show Hamilton as an enslaver<br/>
                        <strong>Enslaved Individuals:</strong> Adam, Ephraim, Esther, Loby, Ben
                      </p>
                      <p className="text-sm text-gray-600">
                        William Hamilton was one of the most prominent trustees of Franklin College, serving from its founding 
                        until his death. Historical records reveal he enslaved multiple individuals, including children, 
                        demonstrating the direct connection between the college's leadership and the institution of slavery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Jasper Yeates */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/images/jasper-yeates.jpg" 
                        alt="Jasper Yeates Portrait" 
                        width={192} 
                        height={256} 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Jasper Yeates (1787-1817)</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Role:</strong> Franklin College Trustee (1787-1817)<br/>
                        <strong>Connection:</strong> Historical records show Yeates as an enslaver<br/>
                        <strong>Background:</strong> Prominent Lancaster attorney and judge
                      </p>
                      <p className="text-sm text-gray-600">
                        Jasper Yeates served as a trustee for thirty years, from the college's founding until his death. 
                        As a prominent attorney and judge in Lancaster, his involvement with slavery reflects how deeply 
                        embedded the institution was in the legal and social fabric of Pennsylvania during this period.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Edward Hand */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/images/edward-hand.jpg" 
                        alt="Edward Hand Portrait" 
                        width={192} 
                        height={256} 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Edward Hand (1787-1802)</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Role:</strong> Franklin College Trustee (1787-1802)<br/>
                        <strong>Connection:</strong> Historical records show Hand as an enslaver<br/>
                        <strong>Background:</strong> Revolutionary War officer and physician
                      </p>
                      <p className="text-sm text-gray-600">
                        Edward Hand was a prominent figure in Lancaster County, serving as a Revolutionary War officer 
                        and physician before becoming a trustee of Franklin College. His involvement with slavery 
                        demonstrates how the institution was connected to the broader economic and social systems 
                        of early Pennsylvania.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mb-4">
                These trustees included:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><HistoricalHighlight type="name">William Hamilton</HistoricalHighlight> (1787–1813)</li>
                <li><HistoricalHighlight type="name">Jasper Yeates</HistoricalHighlight> (1787–1817)</li>
                <li><HistoricalHighlight type="name">Adam Reigart Sr.</HistoricalHighlight> (1787–1813)</li>
                <li><HistoricalHighlight type="name">Adam Reigart Jr.</HistoricalHighlight> (succeeding in 1813)</li>
                <li><HistoricalHighlight type="name">John Hubley Esq.</HistoricalHighlight> (1787–1821)</li>
                <li><HistoricalHighlight type="name">Paul Zantzinger</HistoricalHighlight> (1787–1816)</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Student Connections</h4>
              <p className="mb-4">
                We also got a list of their children who attended Franklin College in 1848. The junior class in 1848 included notable students such as <HistoricalHighlight type="name">James H. Hamilton</HistoricalHighlight> and <HistoricalHighlight type="name">James H. Reigart, Esq.</HistoricalHighlight>, who graduated on September 13, 1848, while other members connected to the Reigart family included <HistoricalHighlight type="name">Rev. Samuel W. Reigart, D.D.</HistoricalHighlight> (1859) and <HistoricalHighlight type="name">Emanuel C. Reigart, Esq.</HistoricalHighlight> (1857-58).
              </p>
              <p>
                The following scholars entered the English school at Franklin College during 1787–1788: William Hamilton, Jasper Yeates, John Hubley, George Moore, Michael Hubley, Samuel Hubley, Henry Hubley, Henry Moore, John Yeates, Sarah Hand, Dorothy Hand, Catherine Hand, Charlotte Hubley, Juliana Hubley, Augusta Hubley, Margaret Moore, Christopher Reigart, John Reigart, Henry Reigart, Edward Hubley, and George Hubley.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Specific Enslaved Individuals Identified</h4>
              <p className="mb-4">
                After going through the records of these enslavers, we were able to reveal that William Hamilton owned more enslaved people than previously listed, beyond the two named Adam and Ephraim; additional records identify:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>A 14-year-old Black girl named <HistoricalHighlight type="name">Esther</HistoricalHighlight></li>
                <li>A 14-year-old boy named <HistoricalHighlight type="name">Loby</HistoricalHighlight></li>
                <li>An approximately 8-year-old boy named <HistoricalHighlight type="name">Ben</HistoricalHighlight></li>
              </ul>
              <p className="mb-4">
                Further evidence from runaway slave advertisements referencing these individuals confirms Hamilton's ownership. At the same time, records also show that out of the eight enslaved individuals held by Paul Zantzinger, who were James, Faly, Polly, Bill (listed twice), Dinah, Louisa, and Bell Gardner, we discovered that he also enslaved <HistoricalHighlight type="name">Isaac</HistoricalHighlight>, a young boy about 9 to 10 months old.
              </p>
              <p>
                After the Gradual Act of Abolition, we found that all these individuals had at least owned an indentured servant who served until they were 28 years old, or some who were sold to them for a short period. This demonstrates the more profound and more extensive involvement of some Franklin College trustees in slavery than initially documented.
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="text-lg font-semibold text-green-900 mb-3">Research Significance</h4>
            <p className="text-green-800">
              The research we conducted reveals a connection between the original trustees and students of Franklin College and the institution's involvement in enslavement. This demonstrates a strong institutional link between Franklin College and the institution of slavery. Consequently, the legacy of the college's founders is more complicated than previously known.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: '4. Conclusion',
      content: (
        <div className="prose prose-lg max-w-none">
          <p>
            The research we conducted reveals a connection between the original trustees and students of Franklin College and the institution's involvement in enslavement. This demonstrates a strong institutional link between Franklin College and the institution of slavery. Consequently, the legacy of the college's founders is more complicated than previously known.
          </p>
          
          <p>
            With all the information that was found, the Witness Stone Project will not only create a space of awareness and acceptance but also a community where our past is embraced with truth by recognizing not only those who participated in slavery but also those who were enslaved. Each of these slaves had a remarkable story to be remembered, not just as slaves, but also as individuals who made significant contributions to this community.
          </p>
          
          <h3>Recommendations</h3>
          <ul>
            <li>Establish a permanent memorial on campus honoring the enslaved individuals connected to Franklin College</li>
            <li>Create an ongoing research program to continue uncovering these stories</li>
            <li>Integrate this history into the college's curriculum and public programming</li>
            <li>Develop partnerships with descendant communities to ensure their voices are included in institutional memory</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <h4 className="text-lg font-semibold text-yellow-900 mb-3">Moving Forward</h4>
            <p className="text-yellow-800">
              Acknowledging this history is not about dwelling in guilt or shame, but about building 
              a more honest and inclusive future. By confronting the full truth of our past, 
              Franklin College can become a model for how institutions can reckon with their 
              complex histories and work toward justice and reconciliation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'references',
      title: '5. References',
      content: <ReferenceList />
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Section className="pt-20 pb-16 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Research Report
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive investigation into Franklin College's relationship with slavery, 
            uncovering forgotten stories and building a foundation for institutional accountability.
          </p>
        </div>
      </Section>

      {/* Research Sections */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Accordion items={researchSections} />
        </div>
      </Section>

      {/* Reflect & Remember Banner */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 bg-opacity-10 rounded-lg p-8 border border-white border-opacity-20">
            <h2 className="text-3xl font-bold mb-6 text-yellow-900">
              Reflect & Remember
            </h2>
            <p className="text-lg text-black leading-relaxed mb-6">
              We honor the memory of those whose lives were intertwined with Franklin College but whose stories have been largely forgotten. Their labor, resilience, and humanity helped build this institution, and their legacy deserves to be remembered with dignity and respect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-yellow bg-opacity-5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-900">Esther</h3>
                <p className="text-black">14-year-old Black girl enslaved by William Hamilton</p>
              </div>
              <div className="bg-yellow bg-opacity-5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-900">Loby</h3>
                <p className="text-black">14-year-old boy enslaved by William Hamilton</p>
              </div>
              <div className="bg-yellow bg-opacity-5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-900">Ben</h3>
                <p className="text-black">8-year-old boy enslaved by William Hamilton</p>
              </div>
              <div className="bg-yellow bg-opacity-5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-900">Isaac</h3>
                <p className="text-black">9-10 month old boy enslaved by Paul Zantzinger</p>
              </div>
            </div>
            <p className="text-black mt-6 text-sm">
              "Each of these individuals had a remarkable story to be remembered, not just as slaves, but also as individuals who made significant contributions to this community."
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
} 