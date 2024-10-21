import React from 'react';
import { motion } from 'framer-motion';
import ladyCooking from "../assets/ladyCooking.jpg";

const Recipe = () => {
  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold font-playfairDisplay text-green-950 sm:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Try out our recipes
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-0">
          {/* Image with zoom effect */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}  
          >
            <img
              src={ladyCooking}
              alt="Delicious Recipe"
              className="w-[75%] h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            />
          </motion.div>

          {/* Text content restricted to image width on desktop */}
          <motion.div
            className="w-full md:w-1/2 md:max-w-[75%] md:pl-8 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-6 text-center md:text-left italic">
              Discover a world of flavors with our curated collection of recipes. From quick weeknight dinners to impressive party dishes, we've got something for every occasion. Our step-by-step instructions make cooking a breeze, whether you're a novice or a seasoned chef.
            </p>
            <motion.button
              className="px-6 py-3 border border-green-950 hover:text-white hover:bg-green-900 font-semibold rounded-full shadow-md bg-green-950 text-white transition-colors duration-300 font-playfairDisplay"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check out our recipes
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
