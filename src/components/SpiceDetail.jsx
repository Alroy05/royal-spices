import React from 'react';

const SpiceDetail = ({ spice }) => {
  if (!spice) {
    return <div>Data not available. Please select either Achari Masala, Chole Masala, Garam Masala, or Tandoori Masala.</div>;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="bg-cover bg-center text-center overflow-hidden" style={{ minHeight: '500px', backgroundImage: `url('${spice.image}')` }} title={`${spice.title} image`}>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{spice.title}</h1>
            <p className="text-gray-700 text-xs mt-2">Written By: <a href="#" className="text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">Spice Expert</a> In <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">Indian Spices</a>, <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">Culinary Arts</a></p>
            <p className="text-base leading-8 my-5">{spice.description}</p>
            <h3 className="text-2xl font-bold my-5">#1. What is {spice.title.split(":")[0]}?</h3>
            <p className="text-base leading-8 my-5">{spice.details}</p>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-green-700">
              {spice.quote}
            </blockquote>
            <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">#{spice.title.replace(/\s+/g, '')}</a>, <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">#IndianSpices</a>, <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">#Culinary</a>, <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">#SpiceBlend</a>, <a href="#" className="text-xs text-green-700 font-medium hover:text-gray-900 transition duration-500 ease-in-out">#IndianCuisine</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiceDetail;