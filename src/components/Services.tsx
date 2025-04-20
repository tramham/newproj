import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPopular?: boolean;
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${isPopular ? 'border-2 border-red-500' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="bg-red-500 text-white text-center py-1 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold text-red-700 mb-4">{price}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href="#contact" 
          className={`block text-center py-3 px-4 rounded-md font-medium transition-colors ${
            isPopular 
              ? 'bg-red-700 text-white hover:bg-red-800' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive College Application Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that best fits your needs. Each option includes personalized guidance to help you navigate the college application process with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="College Application Essentials" 
            price="$250" 
            description="Perfect for students who need guidance with their personal statement and a few supplemental essays."
            features={[
              "Personal Statement Editing (2 rounds)",
              "3 Supplemental Essay Reviews",
              "3 Consultation Sessions (30 min each)",
              "Essay Brainstorming & Development",
              "Application Strategy Planning",
              "Weekly Email Check-in"
            ]}
          />
          
          <ServiceCard 
            title="Competitive Edge Advantage" 
            price="$450" 
            description="Ideal for students applying to multiple competitive schools who need comprehensive support."
            isPopular={true}
            features={[
              "Unlimited Personal Statement Reviews",
              "6 Supplemental Essay Revisions",
              "4 Consultation Sessions (30 min each)",
              "Detailed Application Strategy",
              "ED/EA Strategy Planning",
              "Common App Activities Enhancement",
              "Mock Interview Practice",
              "Scholarship Guidance"
            ]}
          />
          
          <ServiceCard 
            title="Dream Achievement & Success" 
            price="$1,200" 
            description="The ultimate package for students seeking comprehensive support throughout the entire application process."
            features={[
              "Unlimited Essay Reviews & Editing",
              "6 Consultation Sessions (30 min each)",
              "Personalized Application Planning",
              "School Research & Selection",
              "Professional Resume Development",
              "3 Mock Interviews with Feedback",
              "Scholarship Application Guidance (up to 5)",
              "Priority Communication Support",
              "Waitlist & Deferral Guidance"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a customized package? I&apos;m happy to work with you to create a plan that meets your specific needs.
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
          >
            Contact Me for Custom Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 