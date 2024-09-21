import React from 'react';
import { Icons } from '@/assets/icons';
import { Button, Input, Textarea } from '@nextui-org/react';

import { VStack } from '@/components/ui/v-stack';

const classNameInput = {
  input: 'placeholder:text-black/50',
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary-400 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Contact Us</h2>
        <VStack spacing={40} className="md:flex-row">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input classNames={classNameInput} type="text" placeholder="Name" />
              <Input classNames={classNameInput} type="email" placeholder="Email" />
              <Input classNames={classNameInput} type="tel" placeholder="Phone" />
              <Textarea classNames={classNameInput} placeholder="Special requests" />
              <Button color="primary" type="submit" className="bg-primary-700 w-full">
                Make Reservation
              </Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold ">Our Location</h3>
              <p className="mb-2 flex items-center">
                <Icons.mapPin className="mr-2" /> 123 Thai Street, Foodville, TH 12345
              </p>
              <p className="mb-2 flex items-center">
                <Icons.phone className="mr-2" /> (123) 456-7890
              </p>
              <p className="mb-4 flex items-center">
                <Icons.mail className="mr-2" /> info@mixfood.com
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5468578673723!2d100.56324715!3d13.7455676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ0LjAiTiAxMDDCsDMzJzQ3LjciRQ!5e0!3m2!1sen!2sus!4v1635176630672!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </VStack>
      </div>
    </section>
  );
};

export default ContactSection;
