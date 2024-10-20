import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sanjeev Kapoor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr22YH1hkODykPmyzXyF-YWNdjWiz_uddIyg&s",
    quote: "The spices from this company are simply outstanding. They bring authentic Indian flavors to every dish I create. A must-have for any serious chef!"
  },
  {
    name: "Vikas Khanna",
    image: "https://images.squarespace-cdn.com/content/v1/5c2bf337da02bc78edf965df/31d672ea-1143-49ed-a7ce-beb0ee4046f7/Vikas+Khanna+Bungalow.2.2024.jpeg",
    quote: "As a Michelin-starred chef, I demand the highest quality ingredients. This spice company consistently delivers exceptional products that elevate my culinary creations."
  },
  {
    name: "Ranveer Brar",
    image: "https://i0.wp.com/www.smartfood.org/wp-content/uploads/2019/09/Chef-ranveer-resized.jpg?fit=1902%2C2185&ssl=1",
    quote: "The aromatic blends from this spice company transport me back to the streets of India. They're a game-changer for anyone passionate about Indian cuisine."
  }
];

const TestimonialCard = ({ name, image, quote }) => (
  <motion.div
    className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
      </svg>
    <blockquote className="relative">
      {/* Adding quotation marks */}
      <p className="text-lg tracking-tight text-slate-900 italic">
        “{quote}”
      </p>
    </blockquote>
    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
      <div>
        <div className="font-playfairDisplay text-base text-slate-900">{name}</div>
      </div>
      <div className="overflow-hidden rounded-full bg-slate-50">
        <img
          alt={name}
          className="h-14 w-14 object-cover"
          src={image}
        />
      </div>
    </figcaption>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-playfairDisplay font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Master Chefs Are Saying
          </h2>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
