import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SpiceDetail from './SpiceDetail';
import spicesData from '../data/spicesData';

const Articles = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isRecipesOpen, setIsRecipesOpen] = useState(false);
  const { productName } = useParams();
  const [selectedSpice, setSelectedSpice] = useState(null);

  useEffect(() => {
    const spice = spicesData[productName] || spicesData["Achari Masala"];
    setSelectedSpice(spice);
  }, [productName]);

  const products = Object.keys(spicesData);
  const recipes = ["Palak Paneer", "Butter Chicken", "Dal Makhni"];

  return (
    <>
      <div className='mt-20'></div>
      <div className="bg-white font-playfairDisplay w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
        {/* sticky sidebar */}
        <aside className="hidden md:w-1/3 lg:w-1/4 md:block h-screen sticky top-20">
          <div className="flex flex-col gap-2 p-2 border rounded-xl overflow-y-auto">
            <Link to="/" className="items-center px-3 py-1 font-semibold hover:bg-green-100 rounded-md">
              Home
            </Link>
            <div className="flex flex-col">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full flex items-center justify-between px-3 py-1 font-semibold hover:bg-green-100 rounded-md"
              >
                Products
                {isProductsOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isProductsOpen ? 'max-h-40' : 'max-h-0'}`}>
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={`/products/${product.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 text-left w-full rounded-lg"
                  >
                    {product}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => setIsRecipesOpen(!isRecipesOpen)}
                className="w-full flex items-center justify-between px-3 py-1 font-semibold hover:bg-green-100 rounded-lg"
              >
                Recipes
                {isRecipesOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isRecipesOpen ? 'max-h-40' : 'max-h-0'}`}>
                {recipes.map((recipe, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 rounded-lg green-100 text-left w-full"
                  >
                    {recipe}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
        <main className="md:w-2/3 lg:w-3/4 w-full py-1 min-h-screen">
          <SpiceDetail spice={selectedSpice} />
        </main>
      </div>
    </>
  );
};

export default Articles;