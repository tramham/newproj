import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Future Bound College Mentoring</h3>
            <p className="text-gray-400 mb-4">
              Expert college admissions consulting to help students achieve their academic dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-red-500 mr-2 mt-1" size={18} />
                <a href="mailto:th575@cornell.edu" className="text-gray-400 hover:text-white transition-colors">
                  th575@cornell.edu
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-red-500 mr-2 mt-1" size={18} />
                <a href="tel:408-888-7737" className="text-gray-400 hover:text-white transition-colors">
                  408-888-7737
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-red-500 mr-2 mt-1" size={18} />
                <span className="text-gray-400">
                New York Tristate / San Francisco Bay Area
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Success Stories</h3>
            <p className="text-gray-400 mb-4">
              Students admitted to top universities including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                Cornell University
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                Stanford University
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                UC Berkeley
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                Johns Hopkins
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                Dartmouth College
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm">
                USC
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Future Bound College Mentoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 