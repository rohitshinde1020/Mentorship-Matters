import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, Users, MapPin, Monitor, Star, ArrowLeft, 
  CheckCircle, Share2, Bookmark, MessageCircle 
} from 'lucide-react';
import { mockSessions } from '../data/mockSessions';

const SessionDetailsPage = () => {
  const { id } = useParams();
  const session = mockSessions.find(s => s.id === parseInt(id));
  const [isJoined, setIsJoined] = useState(false);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Not Found</h2>
          <p className="text-gray-600 mb-4">The session you're looking for doesn't exist.</p>
          <Link to="/sessions" className="text-indigo-600 hover:text-indigo-700">
            Back to Sessions
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
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

  const handleJoinSession = () => {
    setIsJoined(true);
  };

  const isSessionFull = session.participants >= session.maxParticipants;
  const spotsLeft = session.maxParticipants - session.participants;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              to="/sessions"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sessions
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Session Header */}
            <div className="bg-white rounded-xl shadow-md p-8">
              {session.featured && (
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  ✨ Featured Session
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(session.category)}`}>
                  {session.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  {session.type === 'online' ? (
                    <>
                      <Monitor className="h-4 w-4 mr-1" />
                      Online Session
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4 mr-1" />
                      {session.location}
                    </>
                  )}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {session.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {session.description}
              </p>

              {/* Session Tags */}
              <div className="flex flex-wrap gap-2">
                {session.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Session Details */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Session Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Date</p>
                    <p className="text-gray-600">{formatDate(session.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Time & Duration</p>
                    <p className="text-gray-600">{session.time} • {session.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Participants</p>
                    <p className="text-gray-600">
                      {session.participants} of {session.maxParticipants} joined
                      {!isSessionFull && (
                        <span className="text-green-600 ml-2">
                          ({spotsLeft} spots left)
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {session.type === 'offline' && session.location && (
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-indigo-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{session.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Practical strategies and techniques from real experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Interactive Q&A session for personalized guidance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Actionable steps you can implement immediately</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Connect with like-minded peers in your field</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mentor Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Mentor</h3>
              
              <div className="flex items-center mb-4">
                <img 
                  src={session.mentor.avatar} 
                  alt={session.mentor.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{session.mentor.name}</h4>
                  <p className="text-sm text-gray-600">{session.mentor.year}</p>
                  <p className="text-sm text-gray-600">{session.mentor.department}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="font-medium text-gray-900">{session.mentor.rating}</span>
                <span className="text-sm text-gray-500 ml-1">(127 reviews)</span>
              </div>

              <button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors mb-3">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Mentor
              </button>
            </div>

            {/* Action Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">Free</div>
                <p className="text-gray-600">Join this session</p>
              </div>

              {isJoined ? (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 font-medium py-3 px-4 rounded-lg mb-4">
                    ✅ You're registered!
                  </div>
                  <p className="text-sm text-gray-600">
                    You'll receive session details via email
                  </p>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleJoinSession}
                    disabled={isSessionFull}
                    className={`w-full font-medium py-3 px-4 rounded-lg transition-colors mb-4 ${
                      isSessionFull
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {isSessionFull ? 'Session Full' : 'Join Session'}
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </button>
                    <button className="flex-1 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Related Sessions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Sessions</h3>
              <div className="space-y-4">
                {mockSessions
                  .filter(s => s.id !== session.id && s.category === session.category)
                  .slice(0, 2)
                  .map((relatedSession) => (
                    <Link 
                      key={relatedSession.id}
                      to={`/sessions/${relatedSession.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 text-sm mb-1">
                        {relatedSession.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        by {relatedSession.mentor.name}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(relatedSession.date)}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsPage;