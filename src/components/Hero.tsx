import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-700 to-red-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/src/components/images/cornell-campus.jpg"
          alt="Cornell University Campus"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="opacity-70"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey to College Success Starts Here
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              One&apos;s college journey is more than just applications—it&apos;s the foundation for a lifetime of opportunities. 
              Let me guide you through this transformative process with personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#services" 
                className="bg-white text-red-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact" 
                className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-500 transition-colors text-center border border-white"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/src/components/images/cornell-clocktower.jpg"
                alt="Cornell University Clock Tower"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 