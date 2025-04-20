'use client'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MentorshipWebsite = () => {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default MentorshipWebsite;