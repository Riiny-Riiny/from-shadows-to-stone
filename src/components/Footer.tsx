export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              From Shadows to Stone
            </h3>
            <p className="text-gray-600 text-sm">
              Exploring Franklin College's complex history and the legacy of slavery 
              through archival research and community engagement.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/research" className="text-gray-600 hover:text-gray-900">
                  Research
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Connect</h4>
            <p className="text-gray-600 text-sm mb-2">
              Have information to share about Franklin College's history?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
            >
              Share Your Story
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} From Shadows to Stone. Dedicated to uncovering and honoring 
            the forgotten stories of Franklin College's past.
          </p>
        </div>
      </div>
    </footer>
  );
} 