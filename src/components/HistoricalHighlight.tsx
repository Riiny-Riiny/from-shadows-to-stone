interface HistoricalHighlightProps {
  children: React.ReactNode;
  type?: 'name' | 'finding' | 'date' | 'location';
}

export default function HistoricalHighlight({ children, type = 'name' }: HistoricalHighlightProps) {
  const getStyles = () => {
    switch (type) {
      case 'name':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'finding':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'date':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'location':
        return 'bg-orange-50 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-md text-sm font-medium border ${getStyles()}`}>
      {children}
    </span>
  );
} 