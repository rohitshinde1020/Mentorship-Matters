import { Calendar, Clock, Users, MapPin, Monitor, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SessionCard = ({ session, variant = 'default' }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getBadgeColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Career': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Wellness': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const isCardLarge = variant === 'featured';

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${
      isCardLarge ? 'md:col-span-2' : ''
    }`}>
      {session.featured && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium px-4 py-2">
          ✨ Featured Session
        </div>
      )}
      
      <div className={`p-6 ${isCardLarge ? 'md:p-8' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(session.category)}`}>
                {session.category}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                {session.type === 'online' ? (
                  <>
                    <Monitor className="h-3 w-3 mr-1" />
                    Online
                  </>
                ) : (
                  <>
                    <MapPin className="h-3 w-3 mr-1" />
                    {session.location || 'Offline'}
                  </>
                )}
              </div>
            </div>
            
            <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors ${
              isCardLarge ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {session.title}
            </h3>
            
            <p className={`text-gray-600 mb-4 line-clamp-2 ${isCardLarge ? 'text-base' : 'text-sm'}`}>
              {session.description}
            </p>
          </div>
        </div>

        {/* Mentor Info */}
        <div className="flex items-center mb-4">
          <img 
            src={session.mentor.avatar} 
            alt={session.mentor.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <p className="font-medium text-gray-900 text-sm">{session.mentor.name}</p>
            <p className="text-xs text-gray-500">{session.mentor.year} • {session.mentor.department}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-medium text-gray-700">{session.mentor.rating}</span>
          </div>
        </div>

        {/* Session Details */}
        <div className={`grid grid-cols-2 gap-4 mb-4 text-sm ${isCardLarge ? 'md:grid-cols-4' : ''}`}>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{formatDate(session.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{session.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{session.participants}/{session.maxParticipants}</span>
          </div>
          <div className="text-gray-600">
            <span className="font-medium">{session.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {session.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              #{tag}
            </span>
          ))}
          {session.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{session.tags.length - 3} more</span>
          )}
        </div>

        {/* Action Button */}
        <Link 
          to={`/sessions/${session.id}`}
          className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 group"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default SessionCard;