import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your college application journey? Contact me to schedule a consultation or learn more about my services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-2 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a href="mailto:th575@cornell.edu" className="text-red-700 hover:underline">
                      th575@cornell.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-2 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a href="tel:408-888-7737" className="text-red-700 hover:underline">
                      408-888-7737
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-2 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p>Ithaca, NY / San Francisco Bay Area</p>
                    <p className="text-sm text-gray-600">Available for in-person and virtual consultations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-2 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Availability</h4>
                    <p>Monday - Friday: 9am - 6pm EST</p>
                    <p>Weekend appointments available upon request</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-4">Application Timeline</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">January - April:</span>
                    <span>College Search & Test Prep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">May - August:</span>
                    <span>Scholarships & Essays</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">September - December:</span>
                    <span>Finalize Applications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to get in touch. I'll respond within 24 hours to schedule a consultation or answer your questions.
              </p>
              
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfnmLONFxYoi9mgr22VmRQlHaHGrkWED6owviUrHDgmKnnI4w/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="mx-auto"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 