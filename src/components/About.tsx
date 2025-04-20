import Image from 'next/image';
import { Award, GraduationCap, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a Cornell University graduate with extensive experience in college admissions, I&apos;m passionate about helping students achieve their academic dreams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/src/components/images/TramHuynh_profile.jpg"
              alt="Cornell University Profile"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Tram Huynh</h3>
            <p className="text-gray-700 mb-6">
              I believe in education and mentorship as transformative forces in a young person&apos;s life.
              Having had a mentor who profoundly changed my life, I am passionate about being that person for others.
            </p>
            <p className="text-gray-700 mb-6">
              My commitment reaches beyond college acceptance letters. 
              I mentor each student to help them discover their fullest potential, defining success in ways that 
              authentically align with their personal values, passions, and aspirations. Through dedicated guidance and support,
              I empower students to think critically, embrace challenges, and develop the resilience essential for lifelong personal growth.
            </p>
            <p className="text-gray-700 mb-6">
              Together, we work to uncover their authentic voice, build lasting confidence,
              and transform aspirations into achievements. My greatest joy comes from watching students 
              discover their untapped potential and develop into accomplished, 
              purposeful individuals who go on to inspire others.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <GraduationCap className="text-red-700 mr-2" size={24} />
                <span className="font-medium">Cornell University &apos;24</span>
              </div>
              <div className="flex items-center">
                <Award className="text-red-700 mr-2" size={24} />
                <span className="font-medium">Magna Cum Laude</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="text-red-700 mr-2" size={24} />
                <span className="font-medium">O&apos;Kane Scholar</span>
              </div>
              <div className="flex items-center">
                <Users className="text-red-700 mr-2" size={24} />
                <span className="font-medium">Admissions Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Education & Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Education</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Cornell University &apos;24</p>
                    <p className="text-gray-600">Early Graduate, Magna Cum Laude Honors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Cornell O&apos;Kane Scholar</p>
                    <p className="text-gray-600">Academic Excellence Recognition</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Stanford University</p>
                    <p className="text-gray-600">Phoenix Scholar</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Professional Experience</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Cornell University Undergraduate Admissions Office</p>
                    <p className="text-gray-600">Insider knowledge of the admissions process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Youth Outreach Undergraduates Reshaping Success (YOURS)</p>
                    <p className="text-gray-600">Mentor for high school students</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Cornell&apos;s College & Career Readiness Initiative (CCRI)</p>
                    <p className="text-gray-600">College preparation mentor</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Cornell University Increasing Multicultural Admissions and Gains in Enrollment (CU IMAGE)</p>
                    <p className="text-gray-600">Diversity and inclusion initiatives</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 