import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Turmeric',
    description: 'A vibrant spice known for its anti-inflammatory properties.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 2,
    name: 'Cumin',
    description: 'A spice with a warm, earthy flavor perfect for savory dishes.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 3,
    name: 'Coriander',
    description: 'A fresh and citrusy spice used in various global cuisines.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 4,
    name: 'Clove',
    description: 'A strong, pungent spice with a sweet aftertaste.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 5,
    name: 'Cardamom',
    description: 'A sweet, aromatic spice used in both sweet and savory dishes.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 6,
    name: 'Black Pepper',
    description: 'A spicy, bold pepper perfect for adding heat to any dish.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 7,
    name: 'Fenugreek',
    description: 'A slightly bitter spice with a maple-like flavor.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  },
  {
    id: 8,
    name: 'Mustard Seeds',
    description: 'Small seeds that add a warm, nutty flavor to dishes.',
    image: 'https://img.pikbest.com/wp/202343/beautifully-indian-spices-arranged-cumin-seeds-on-a-textured-white-background_9981193.jpg!w700wp'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    return [...products, ...products.slice(0, 3)];
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold font-playfairDisplay text-green-950 sm:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Products
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-currentIndex * 25}%` }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
          >
            {getVisibleProducts().map((product, index) => (
              <div 
                key={`${product.id}-${index}`}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-green-950 font-playfairDisplay">{product.name}</h3>
                    <p className="text-gray-600 mt-2 italic">{product.description}</p>
                    <button className="mt-4 px-4 py-2 border border-green-950 rounded-full hover:bg-white hover:text-green-950 text-sm bg-green-950 text-white transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;