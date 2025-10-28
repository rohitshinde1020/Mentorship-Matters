import { Users, Target, Heart, Award, Mail, Linkedin, Github } from 'lucide-react';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';

const AboutPage = () => {
  const stats = [
    { label: 'Students Helped', value: '2,000+' },
    { label: 'Sessions Conducted', value: '500+' },
    { label: 'Active Mentors', value: '150+' },
    { label: 'Success Rate', value: '85%' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of peer-to-peer learning and building strong student communities.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every session is designed with clear learning objectives to help students achieve their goals.'
    },
    {
      icon: Users,
      title: 'Inclusive Learning',
      description: 'We create a welcoming environment where every student feels comfortable to learn and grow.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain high standards for our sessions and continuously improve based on feedback.'
    }
  ];

  const team = [
    {
      name: 'Rohit Shinde',
      role: 'Founder',
      image: founder1,
      bio: 'Second year Computer Science student passionate about creating meaningful connections between students.',
      social: {
        linkedin: '#',
        github: '#',
        email: '24113016@pvgcoet.ac.in'
      }
    },
    {
      name: 'Krish Gurjelwar',
      role: 'Founder',
      image: founder2,
      bio: 'Engineering student with a love for building platforms that make education more accessible.',
      social: {
        linkedin: '#',
        github: '#',
        email: '24113068@pvgcoet.ac.in'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MentorshipMatters
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We're a student-led initiative dedicated to connecting new college students with 
              experienced seniors who can guide them through their academic and personal journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Starting college can be overwhelming. We believe that every student deserves access 
                to guidance and support from those who have walked the same path. Our platform creates 
                meaningful connections between new students and experienced seniors, fostering a 
                community of shared knowledge and mutual growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through structured mentorship sessions, we help students navigate academic challenges, 
                career planning, networking opportunities, and personal development - all while building 
                lasting relationships within their college community.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the community we're building
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                MentorshipMatters was born from a simple observation: new college students often 
                struggle with challenges that their seniors have already overcome. As final-year 
                students ourselves, we realized the immense value of peer guidance and wanted to 
                create a structured way to share knowledge across different academic years.
              </p>
              <p>
                What started as informal study groups and career advice sessions in our dorm rooms 
                has grown into a comprehensive platform serving hundreds of students. We've seen 
                first-hand how the right guidance at the right time can transform a student's 
                college experience.
              </p>
              <p>
                Today, MentorshipMatters continues to be student-run and student-focused, ensuring 
                that our platform evolves with the real needs of our college community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate students behind MentorshipMatters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.github}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Whether you're looking for mentorship or want to become a mentor, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@mentorshipmatters.com"
              className="inline-flex items-center justify-center bg-white text-indigo-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
            <a 
              href="/sessions"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-200"
            >
              Join a Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;