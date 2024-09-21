import React from 'react';
import Image from 'next/image';
import { Icons } from '@/assets/icons';
import { Button } from '@nextui-org/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen items-center justify-center">
      <Image
        src="/images/home/banner.jpg"
        alt="Thai food spread"
        className="object-cover brightness-50"
        fill
        unoptimized
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="mb-4 text-center text-4xl font-bold">Experience Authentic Thai Cuisine</h2>
        <p className="mb-8 text-center text-xl">Discover the flavors of Thailand in the heart of the city</p>
        <Button color="primary" className="bg-primary-700">
          Book Now
          <Icons.chevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
