import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604740795401-f44c12cf68b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your actual image URL
          transform: "translateY(0)",
          transition: "transform 0.5s ease-out",
        }}
      ></div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-playfairDisplay text-center mb-4">
          India's Most Trusted Brand
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl italic">
          Experience the authentic flavors of India in every dish
        </p>
      </div>
    </div>
  );
};

export default Hero;