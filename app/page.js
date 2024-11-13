import React, { useState } from 'react';
import { GraduationCap, BookOpen, Edit, Award, Clock, Mail, Phone, CheckCircle2, Building2, Users, Trophy, Heart, DollarSign, BookOpenCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const MainPage = () => {
  // ... Previous main page content from the hero section
};

const CostPage = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Investment in Your Future</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="p-6 hover:shadow-xl transition-shadow">
          <CardContent className="space-y-4">
            <div className="h-12 flex items-center justify-center">
              <Edit className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="text-xl font-bold text-center">Essay Package</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-red-700" />
                <span>Common App Essay Review</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-red-700" />
                <span>Supplemental Essays</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-red-700" />
                <span>Unlimited Revisions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* Add more pricing cards */}
      </div>
      <p className="text-center mt-8 text-gray-600">Contact for detailed pricing information</p>
    </div>
  </div>
);

const PhilosophyPage = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Philosophy</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-8">
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-red-700" />
              <h3 className="text-2xl font-semibold">Student-Centered Approach</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every student has a unique story to tell. My role is to help you discover and articulate your authentic voice while providing the tools and guidance needed for success.
            </p>
          </CardContent>
        </Card>
        {/* Add more philosophy cards */}
      </div>
    </div>
  </div>
);

const WhyTramPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-12 space-y-8 md:space-y-0">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <img 
              src="/api/placeholder/400/500" 
              alt="Tram's Profile"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Tram Huynh</h3>
              <p className="text-gray-600 mb-4">Cornell University Graduate<br/>Magna Cum Laude</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-700" />
                  <span>th575@cornell.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-700" />
                  <span>408-888-7737</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 space-y-8">
          <h2 className="text-4xl font-bold">Why Choose Me As Your Mentor</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              I've been very lucky to have mentored so many amazing students, and I only hope they've learned as much as they taught me during our time together.
            </p>
            {/* Add more content about your experience and approach */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SuccessStoriesPage = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <img src="/api/placeholder/200/100" alt="Stanford University Logo" className="w-full object-contain" />
        <img src="/api/placeholder/200/100" alt="Cornell University Logo" className="w-full object-contain" />
        <img src="/api/placeholder/200/100" alt="USC Logo" className="w-full object-contain" />
        <img src="/api/placeholder/200/100" alt="UCLA Logo" className="w-full object-contain" />
        <img src="/api/placeholder/200/100" alt="Johns Hopkins Logo" className="w-full object-contain" />
        <img src="/api/placeholder/200/100" alt="UC Berkeley Logo" className="w-full object-contain" />
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8">Student Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Add testimonial cards */}
        </div>
      </div>
    </div>
  </div>
);

const CollegeConsulting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-red-700" />
              <span className="text-xl font-bold">College Prep Mentoring</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs Navigation */}
      <Tabs defaultValue="home" className="w-full">
        <div className="bg-white border-b">
          <div className="container mx-auto px-6">
            <TabsList className="h-12">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="why-tram">Why Tram</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              <TabsTrigger value="cost">Cost</TabsTrigger>
              <TabsTrigger value="success">Success Stories</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="home">
          <MainPage />
        </TabsContent>

        <TabsContent value="why-tram">
          <WhyTramPage />
        </TabsContent>

        <TabsContent value="philosophy">
          <PhilosophyPage />
        </TabsContent>

        <TabsContent value="cost">
          <CostPage />
        </TabsContent>

        <TabsContent value="success">
          <SuccessStoriesPage />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="opacity-70">© 2024 College Prep Mentoring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CollegeConsulting;