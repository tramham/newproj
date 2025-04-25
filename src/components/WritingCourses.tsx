import React from 'react';
import Link from 'next/link';

const WritingCourses = () => {
  return (
    <section id="writing-courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Writing Courses</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Common App Essay Course */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Common Application Essay Mastery</h3>
            <p className="text-red-700 font-medium">Transform Your Story into an Admission-Winning Essay</p>
            <p className="text-gray-600 mb-6">
            Craft a standout Common Application essay that captivates admissions officers in this 5-week intensive workshop.
            Perfect for high school juniors preparing for college applications or professionals pursuing graduate studies. </p>
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
                <span className="text-gray-700">Guaranteed completed submission-ready essay</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Master the art of concise, powerful storytelling </span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Receive personalized feedback from an experienced writing coach </span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Schedule Options:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Thursday 7-8pm EST (May 1st - May 29th, 2025)</li>
                <li>Saturday 12-1pm EST (May 3rd - May 31st, 2025)</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-800">$500</p>
              <Link href="#contact">
                <button className="mt-4 w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>

          {/* General Essay Writing Course */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Comprehensive Essay Writing Workshop</h3>
            <p className="text-red-700 font-medium">Learn to Write Any Type of Essay with Confidence</p>
            <p className="text-gray-600 mb-6"> Whether you&apos;re applying for scholarships, internships, or specialized programs, this 6-week course delivers personalized guidance for any essay challenge. Don&apos;t have a specific essay in mind? We&apos;ll help you identify opportunities and craft a compelling application for you to submit by the end of the course.
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
                <span className="text-gray-700">Guaranteed completed essay and submission to choice of application</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Scholarship search assistance</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Comprehensive revision process with personalized feedback </span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Schedule:</h4>
              <p className="text-gray-600">Wednesday 6-7pm EST (May 7th - June 11th, 2025)</p>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-800">$500</p>
              <Link href="#contact">
                <button className="mt-4 w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingCourses; 