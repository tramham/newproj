import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    school: 'Cornell University',
    quote: "Tram&apos;s guidance was invaluable during my college application process. Her insights helped me craft essays that truly reflected my personality and experiences. I&apos;m now a proud Cornell student!",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    school: 'Stanford University',
    quote: "Working with Tram gave me the confidence I needed to apply to top universities. Her personalized approach and attention to detail made all the difference in my applications.",
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    school: 'UC Berkeley',
    quote: "Tram&apos;s expertise in college admissions is unmatched. She helped me identify my strengths and present them effectively in my applications. I couldn&apos;t have done it without her!",
    rating: 5
  },
  {
    id: 4,
    name: 'David Kim',
    school: 'Johns Hopkins University',
    quote: "The mock interviews and essay feedback were game-changers for my application process. Tram&apos;s guidance was instrumental in helping me get accepted to my dream school.",
    rating: 5
  },
  {
    id: 5,
    name: 'Olivia Williams',
    school: 'Dartmouth College',
    quote: "Tram&apos;s mentorship went beyond just college applications. She helped me develop skills that I continue to use in my academic and professional life. I&apos;m forever grateful!",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="mb-4">
        <h4 className="font-bold text-lg">{testimonial.name}</h4>
        <p className="text-red-700">{testimonial.school}</p>
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
              <p className="font-bold text-red-700">UC Berkeley</p>
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
              <p className="font-bold text-red-700">UCLA</p>
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