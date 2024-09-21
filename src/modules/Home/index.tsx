import React from 'react';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/HeroSection'));
const AboutSection = dynamic(() => import('./components/AboutSection'));
const MenuSection = dynamic(() => import('./components/MenuSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const ContactSection = dynamic(() => import('./components/ContactSection'));

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
