import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, Mail, Phone, CheckCircle, Calendar } from 'lucide-react';

const CollegePrepWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold">
                Essay Consulting<br />
                College Prep<br />
                Mentoring
              </h1>
              <p className="text-xl">
                College is a pivotal point for a young person. Let me help you take advantage
                of all the resources available to set yourself up for success.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Card className="bg-white text-blue-900 p-6">
                <CardTitle className="text-xl mb-4">Recent Cornell Graduate</CardTitle>
                <p className="font-semibold">with Magna Cum Laude honors</p>
                <p className="text-blue-700">Cornell O'Kane Scholar</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">What I help with:</h2>
            <div className="space-y-4">
              {['Individualized Consulting', 'Essay Writing & Editing', 'Scholarship & Grant Applications'].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <CheckCircle className="text-red-700" />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose Me:</h2>
            <div className="space-y-4">
              <p>• Mentored for Cornell University's College Readiness Initiative & Youth Outreach</p>
              <p>• Regents Scholar @ 3 Univ of California Schools</p>
              <p>• Full Ride - Fiat Lux Scholar @ UC Berkeley</p>
              <p>• Phoenix Scholar @ Stanford University</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Application Timeline</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <TimelineCard 
              period="JAN-APRIL"
              title="College Search & Test Prep"
              icon={<Calendar className="text-red-700" />}
            />
            <TimelineCard 
              period="MAY-AUG"
              title="Scholarships & Essays"
              icon={<Clock className="text-red-700" />}
            />
            <TimelineCard 
              period="SEPT-DEC"
              title="Finalize Application"
              icon={<CheckCircle className="text-red-700" />}
            />
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Successfully Mentored Students Accepted To:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {['Dartmouth', 'USC', 'UCLA', 'Cornell', 'Johns Hopkins', 'Berkeley'].map((school) => (
            <div key={school} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800">{school}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Contact</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="mailto:th575@cornell.edu" className="flex items-center space-x-2">
              <Mail />
              <span>th575@cornell.edu</span>
            </a>
            <a href="tel:4088887737" className="flex items-center space-x-2">
              <Phone />
              <span>408-888-7737</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ period, title, icon }) => (
  <Card className="p-6">
    <CardContent className="space-y-4">
      {icon}
      <h3 className="font-bold">{period}</h3>
      <p>{title}</p>
    </CardContent>
  </Card>
);

export default CollegePrepWebsite;