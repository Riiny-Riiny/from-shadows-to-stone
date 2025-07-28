interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
  expertise: string[];
  email?: string;
}

export default function ProfileCard({ 
  name, 
  title, 
  bio, 
  image, 
  expertise, 
  email 
}: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          {image && (
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={image}
                alt={name}
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
        </div>
        
        {expertise.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Areas of Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {email && (
          <div className="mt-4">
            <a
              href={`mailto:${email}`}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 