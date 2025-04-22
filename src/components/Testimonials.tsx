import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    school: 'Student currently attending Cornell University',
    quote: "Tram helped me build confidence in myself and told me to dream big. She really mentored me and helped me become proud of my application, and for that I am grateful for her efforts.",
    rating: 5
  },
  {
    id: 2,
    school: 'Parent of student currently attending USC',
    quote: "I’m really glad we found Tram, as she does the due diligence and supported my son in developing skills to write on his own.",
    rating: 5
  },
  {
    id: 3,
    school: 'Student currently attending UC Berkeley',
    quote: "I was on a big time crunch but Tram was genuinely so helpful through it all. She was reassuring throughout the whole process and worked very fast to support me applying to college!",
    rating: 5
  },
  {
    id: 4,
    school: 'Student currently attending Johns Hopkins Grad School',
    quote: "Tram's guidance helped me to think deeply and reflect more. I was able to craft essays that reflected my personality and experiences",
    rating: 5
  },
  {
    id: 5,
    school: 'Student currently attending Dartmouth Grad School',
    quote: "Best mentor I could've asked for!",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="mb-4">
        <p className="text-red-700 font-medium"> {testimonial.school}</p>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-current" size={16} />
        ))}
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };
  
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who have successfully navigated the college application process with my guidance.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md mr-4 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="text-red-700" size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="text-red-700" size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Where Our Students Have Been Accepted</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">Cornell University</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">Stanford University</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">UCB & UCLA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">Johns Hopkins</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">Dartmouth College</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">USC</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">Vanderbilt University</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-bold text-red-700">And Many More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 