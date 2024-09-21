import React from 'react';
import { Icons } from '@/assets/icons';

const testimonials = [
  { name: 'John D.', comment: "The best Pad Thai I've ever had outside of Thailand!" },
  { name: 'Sarah M.', comment: 'Authentic flavors and great service. Highly recommended!' },
  { name: 'Mike L.', comment: "The green curry is to die for. I'm a regular now!" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 italic">{`"${testimonial.comment}"`}</p>
              <div className="flex items-center">
                <Icons.star className="mr-1 text-yellow-400" />
                <Icons.star className="mr-1 text-yellow-400" />
                <Icons.star className="mr-1 text-yellow-400" />
                <Icons.star className="mr-1 text-yellow-400" />
                <Icons.star className="mr-1 text-yellow-400" />
              </div>
              <p className="mt-2 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
