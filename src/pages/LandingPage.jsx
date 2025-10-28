import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Globe, Star, TrendingUp, CheckCircle } from 'lucide-react';
import SessionCard from '../components/SessionCard';
import { mockSessions } from '../data/mockSessions';

const LandingPage = () => {
  const featuredSessions = mockSessions.filter(session => session.featured).slice(0, 3);
  
  const stats = [
    { label: 'Active Sessions', value: '150+', icon: BookOpen },
    { label: 'Students Helped', value: '2,000+', icon: Users },
    { label: 'Success Stories', value: '500+', icon: Star },
    { label: 'Growth Rate', value: '85%', icon: TrendingUp }
  ];

  const features = [
    {
      title: 'Expert Mentorship',
      description: 'Learn from experienced seniors who have walked the same path',
      icon: Users
    },
    {
      title: 'Flexible Learning',
      description: 'Choose between online and offline sessions that fit your schedule',
      icon: Globe
    },
    {
      title: 'Proven Results',
      description: 'Join thousands of students who have achieved their goals',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Journey to Success Starts with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Mentorship</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Connect with experienced seniors who provide guidance on academics, career planning, 
                networking, and personal development. Join a community where knowledge flows freely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/sessions"
                  className="inline-flex items-center justify-center bg-white text-indigo-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  Explore Sessions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/create-session"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-200"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-indigo-200">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MentorshipMatters?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a platform - we're a community dedicated to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Sessions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Sessions
              </h2>
              <p className="text-xl text-gray-600">
                Popular sessions curated by our community
              </p>
            </div>
            <Link 
              to="/sessions"
              className="hidden md:inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View All Sessions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/sessions"
              className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All Sessions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join our community today and unlock your potential with guidance from experienced mentors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/sessions"
              className="inline-flex items-center justify-center bg-white text-indigo-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Sessions
            </Link>
            <Link 
              to="/create-session"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-200"
            >
              Share Your Knowledge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;