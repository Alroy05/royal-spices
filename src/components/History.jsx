import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <div id='aboutus'  className="bg-slate-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-playfairDisplay min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-3xl font-extrabold text-green-950 sm:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easing, delay: 0.2 }}
        >
          Our Rich History
        </motion.h2>
        <div className="mt-8 flex flex-wrap items-center justify-center">
          <motion.div 
            className="w-full max-w-2xl sm:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.4 }}
          >
            <div className="text-base mx-10 font-sans">
              <p className="text-lg text-gray-500 text-center mb-4 italic">
                For over five decades, Royal Indian Spices has been at the forefront of bringing authentic Indian flavors to kitchens around the world. Our journey began in 1970 when our founder, inspired by his grandmother's secret spice blends, decided to share these treasured recipes with a wider audience.
              </p>
              <p className="text-lg text-gray-500 text-center italic">
                What started as a small family-owned shop in the heart of Mumbai has now grown into a global brand, recognized for its commitment to quality and authenticity.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="mt-8 w-full max-w-2xl sm:w-1/2"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: easing, delay: 0.6 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="rounded-lg object-cover object-center w-full h-full"
                src="https://t4.ftcdn.net/jpg/02/15/72/37/360_F_215723772_7PkUU1WEmlEE2MrJomXRsdou7K1G4QU1.jpg"
                alt="Spice market in India"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;
