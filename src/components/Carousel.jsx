import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Spices',
    description: 'Aromatic seasonings to enhance flavors in your dishes.',
    image: 'https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg'
  },
  {
    id: 2,
    name: 'Pulses and Grains',
    description: 'Staple foods rich in protein and fiber for a balanced diet.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/YD/QW/PR/16624432/pulses-and-grains.jpg'
  },
  {
    id: 3,
    name: 'Oil Seeds',
    description: 'Nutrient-rich seeds used for oil extraction and cooking.',
    image: 'https://img1.exportersindia.com/product_images/bc-full/dir_148/4428190/oil-seeds-1529063343-3983958.jpeg'
  },
  {
    id: 4,
    name: 'Dry Fruits',
    description: 'Natural snacks packed with vitamins and minerals.',
    image: 'https://kumaribasket.com/wp-content/uploads/2022/07/393497851-H-scaled.jpg'
  },
  {
    id: 5,
    name: 'Food Products',
    description: 'Ready-to-use ingredients to simplify your cooking process.',
    image: 'https://i.pinimg.com/736x/ea/4e/5f/ea4e5fffcebbfff13509eec210d99771.jpg'
  },
  {
    id: 6,
    name: 'Herbs',
    description: 'Fresh and dried herbs to add flavor and aroma to your meals.',
    image: 'https://assets.epicurious.com/photos/661820a17af12b050e92c390/16:9/w_2580,c_limit/Fresh-Herbs_HERO_040424_3581.jpg'
  },
  {
    id: 7,
    name: 'Fenugreek',
    description: 'A slightly bitter spice with a maple-like flavor.',
    image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_772967_1709086156673855.jpg'
  },
  {
    id: 8,
    name: 'Mustard Seeds',
    description: 'Small seeds that add a warm, nutty flavor to dishes.',
    image: 'https://m.media-amazon.com/images/I/71+MmuGNG-L.jpg'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const containerRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
        setIsAutoScroll(true);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
        setIsAutoScroll(true);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
        setIsAutoScroll(false);
      } else {
        setItemsPerView(1);
        setIsAutoScroll(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoScroll) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScroll, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - itemsPerView + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length - itemsPerView + 1) % (products.length - itemsPerView + 1));
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-serif text-green-950 sm:text-4xl text-center mb-12">
          Our Products
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex"
            animate={{ x: `${-currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className={`flex-shrink-0 px-2 ${
                  itemsPerView === 4 ? 'w-1/4' :
                  itemsPerView === 3 ? 'w-1/3' :
                  itemsPerView === 2 ? 'w-1/2' : 'w-full'
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-green-950 font-serif">{product.name}</h3>
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
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;