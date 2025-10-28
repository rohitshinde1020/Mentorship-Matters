import { Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">MentorshipMatters</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting new college students with experienced seniors to share knowledge, 
              guidance, and support for academic and personal growth.
            </p>
            <div className="text-sm text-gray-400">
              © 2025 MentorshipMatters. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/sessions" className="text-gray-300 hover:text-white transition-colors">Browse Sessions</a></li>
              <li><a href="/create-session" className="text-gray-300 hover:text-white transition-colors">Create Session</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300 text-sm">support@mentorshipmatters.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300 text-sm">University Campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;