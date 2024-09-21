import React from 'react';
import Image from 'next/image';

import { VStack } from '@/components/ui/v-stack';

const AboutSection = () => {
  return (
    <section id="about" className="container py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">About Mix Food</h2>
      <VStack align="start" spacing={40} className="md:flex-row">
        <div className="relative aspect-video h-96 w-full md:w-1/2">
          <Image
            src="/images/home/about.jpg"
            alt="Restaurant interior"
            className="rounded-lg shadow-md"
            fill
            priority
            unoptimized
          />
        </div>
        <div className="space-y-5 md:w-1/2">
          <p className="text-justify text-lg">
            {` Mix Food brings the authentic flavors of Thailand to your neighborhood. Our chefs, trained in traditional
              Thai cooking techniques, use only the freshest ingredients to create dishes that transport you to the
              streets of Bangkok.`}
          </p>
          <p className="text-justify text-lg">
            {`Founded in 2010, we've been serving our community with love and passion for over a decade. Come experience
              the warmth of Thai hospitality and the explosion of flavors in every dish.`}
          </p>
        </div>
      </VStack>
    </section>
  );
};

export default AboutSection;
