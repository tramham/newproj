import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-700">Future Bound</span>
              <span className="text-2xl font-light text-gray-700 ml-1">College Mentoring</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Services
            </Link>
            <Link href="#writing-courses" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Writing Courses
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#home" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#writing-courses" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Writing Courses
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#faq" 
              className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 text-red-700 hover:text-red-800 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 