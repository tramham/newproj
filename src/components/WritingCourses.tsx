import React from 'react';

const WritingCourses = () => {
  return (
    <section id="writing-courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Writing Courses</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Common App Essay Course */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Common Application Essay Course</h3>
            <p className="text-gray-600 mb-6">
              Master the art of writing a compelling Common Application essay in this 5-week intensive course.
              By the end, you'll have a polished draft ready for submission.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">5-week comprehensive program</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Guaranteed completed essay draft</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Weekly sessions</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Schedule Options:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Thursday evenings (May 1st - May 29th, 2025)</li>
                <li>Saturday mornings (May 3rd - May 31st, 2025)</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-800">$500</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>

          {/* General Essay Writing Course */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Comprehensive Essay Writing Course</h3>
            <p className="text-gray-600 mb-6">
              Learn to write any type of essay with confidence. From scholarship applications to personal statements,
              this 6-week course will give you the skills to succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">6-week comprehensive program</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Guaranteed completed essay</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Scholarship search assistance</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Schedule:</h4>
              <p className="text-gray-600">Wednesday evenings (May 7th - June 11th, 2025)</p>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-800">$500</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingCourses; 