interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ 
  title, 
  subtitle, 
  children, 
  className = "", 
  id 
}: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
} 