import React, { useRef } from 'react';
import { Building2, Phone, Mail, MapPin, ChevronRight, Users, Target, Flag, Briefcase } from 'lucide-react';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-[#4CAF50]" />
              <span className="text-xl font-bold text-[#001F3F]">Spirit-Led Solutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-600 hover:text-[#4CAF50] transition"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef)}
                className="text-gray-600 hover:text-[#4CAF50] transition"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="text-gray-600 hover:text-[#4CAF50] transition"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[600px] bg-[#001F3F] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office building"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Consultancy in Every Field
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Where Vision Meets Precision
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#4CAF50] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#45a049] transition"
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#001F3F] transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div ref={aboutRef} className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                At Spirit-Led Solutions Pvt. Ltd., we provide expert consultancy across all fields, 
                helping businesses tackle challenges and drive growth. From problem-solving and 
                strategic planning to project management, we tailor solutions to your unique needs.
              </p>
              <p className="text-gray-600">
                We go beyond solutions by offering training, technical support, and advisory services 
                to ensure lasting success. Partner with us to navigate change and achieve impactful 
                results with confidence.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div ref={servicesRef} className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-12 text-center">Our Servicing Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Management Consultancy',
              'Financial Consultancy',
              'IT & Technology Consultancy',
              'HR Consultancy',
              'Marketing Consultancy',
              'Healthcare Consultancy',
              'Legal Consultancy',
              'Environmental & Sustainability Consultancy',
              'Education Consultancy',
              'Agriculture Consultancy',
              'Sales Consultancy',
              'Non-Profit Consultancy'
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#001F3F]">{service}</h3>
                  <ChevronRight className="w-5 h-5 text-[#4CAF50] group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision, Mission, Goal Section */}
      <div className="bg-[#001F3F] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading provider of innovative and sustainable solutions that transform 
                businesses across the globe.
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower organizations by providing unparalleled consultancy services that 
                drive results and foster long-term success.
              </p>
            </div>
            <div className="text-center">
              <Flag className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-gray-300">
                Our goal is to empower businesses with innovative solutions that drive success 
                and foster long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-[#4CAF50] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#001F3F]">Office Address</h3>
                  <p className="text-gray-600">506, Empire Crest, Jawahar Chowk BRTS Bus Stop, Maninagar, Ahmedabad - 380008, Gujarat.</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-[#4CAF50] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#001F3F]">Phone</h3>
                  <p className="text-gray-600">+91 91062 44797</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#4CAF50] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#001F3F]">Email</h3>
                  <p className="text-gray-600">admin@spiritleds.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#4CAF50] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#45a049] transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Spirit-Led Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;