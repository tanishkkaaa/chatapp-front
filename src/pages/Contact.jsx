import React from 'react';
import LandingNav from '../components/LandingNav';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <LandingNav />
      <section className="bg-gray-900 text-white min-h-screen py-20">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Get in touch
          </h2>
          <p className="mb-8 font-light text-gray-300 lg:text-xl">
            We're here to help! Send us a message or find us on social media.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-gray-200">
              Email: support@swiftchat.com
            </p>
            {/* Add more contact details here if needed */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;