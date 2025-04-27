import React from 'react';



const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-20 py-10">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          About Gadgetic
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Empowering the Future of Technology — One Gadget at a Time.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-16 max-w-4xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Gadgetic, our mission is to revolutionize how people connect with technology. 
          We believe that gadgets should be accessible, innovative, and designed to enrich lives. 
          Our team is passionate about curating the best tech products, delivering outstanding customer experiences, 
          and driving positive change in the digital world.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
        <div className="bg-blue-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
          <p className="text-gray-600 text-sm">
            We constantly seek out new ideas to bring the future closer to today.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Customer Focus</h3>
          <p className="text-gray-600 text-sm">
            Our customers are at the heart of everything we do — your success is ours.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Integrity</h3>
          <p className="text-gray-600 text-sm">
            We build trust through transparency, honesty, and commitment to quality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
