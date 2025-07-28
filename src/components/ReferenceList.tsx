import references from '@/data/references.json';

interface Reference {
  id: string;
  type: 'book' | 'journal' | 'archival' | 'web' | 'report';
  author?: string;
  title: string;
  publisher?: string;
  journal?: string;
  volume?: string;
  issue?: string;
  year: string;
  pages?: string;
  isbn?: string;
  repository?: string;
  date?: string;
  call_number?: string;
  location?: string;
  url?: string;
}

export default function ReferenceList() {
  const formatReference = (ref: Reference): string => {
    switch (ref.type) {
      case 'book':
        return `${ref.author}. (${ref.year}). ${ref.title}. ${ref.publisher}.${ref.location ? ` ${ref.location}.` : ''}${ref.isbn ? ` ISBN: ${ref.isbn}` : ''}`;
      
      case 'journal':
        return `${ref.author}. (${ref.year}). ${ref.title}. ${ref.journal}, ${ref.volume}(${ref.issue}), ${ref.pages}.`;
      
      case 'archival':
        return `${ref.title}. (${ref.date}). ${ref.repository}. Call Number: ${ref.call_number}.${ref.location ? ` ${ref.location}.` : ''}`;
      
      case 'web':
        return `${ref.title}. (${ref.year}). ${ref.publisher}. Retrieved from ${ref.url}`;
      
      case 'report':
        return `${ref.title}. (${ref.year}). ${ref.publisher}.`;
      
      default:
        return ref.title;
    }
  };

  const getTypeLabel = (type: string): string => {
    switch (type) {
      case 'book': return 'Book';
      case 'journal': return 'Journal Article';
      case 'archival': return 'Archival Document';
      case 'web': return 'Web Resource';
      case 'report': return 'Report';
      default: return 'Reference';
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'book': return 'bg-blue-100 text-blue-800';
      case 'journal': return 'bg-green-100 text-green-800';
      case 'archival': return 'bg-purple-100 text-purple-800';
      case 'web': return 'bg-orange-100 text-orange-800';
      case 'report': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
      
      <div className="space-y-4">
        {references.map((reference: Reference, index: number) => (
          <div key={reference.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(reference.type)}`}>
                  {getTypeLabel(reference.type)}
                </span>
                <span className="text-sm text-gray-500">#{reference.id}</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {formatReference(reference)}
            </p>
            
            {reference.type === 'archival' && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Repository:</strong> {reference.repository}<br/>
                  <strong>Date:</strong> {reference.date}<br/>
                  <strong>Call Number:</strong> {reference.call_number}
                </p>
              </div>
            )}
            
            {reference.type === 'web' && reference.url && (
              <div className="mt-3 p-3 bg-orange-50 rounded-md">
                <p className="text-sm text-orange-800">
                  <strong>URL:</strong> <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{reference.url}</a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Citation Guidelines</h3>
        <p className="text-sm text-blue-800">
          When citing this research, please use the following format: Taylor, F., & Riny, A. G. (2024). 
          From Shadows to Stone: Franklin College and the Legacy of Slavery. Franklin & Marshall College.
        </p>
      </div>
    </div>
  );
} 