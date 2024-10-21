import React from 'react';

const Contact = () => {
  return (
    <section id='contactus' className="bg-slate-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfairDisplay text-gray-900">Visit Our Store</h2>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.3367730579057!2d72.8317111747891!3d18.94761458223076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce26b6352bb9%3A0x87a30143bf18b577!2sCrawford%20Market%2C%20Lokmanya%20Tilak%20Rd%2C%20Dhobi%20Talao%2C%20Chhatrapati%20Shivaji%20Terminus%20Area%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e1!3m2!1sen!2sin!4v1729426555666!5m2!1sen!2sin" width="100%"
                height="350" style={{ border:0 }} allowfullscreen="" loading="lazy"  title="Google Maps" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg text-gray-900 font-playfairDisplay font-bold">Our Address</h3>
                  <p className="mt-1 text-gray-600 italic">Lokmanya Tilak Rd, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400 001</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900 font-playfairDisplay">Hours</h3>
                  <p className="mt-1 text-gray-600 italic">Monday - Friday: 9am - 8pm</p>
                  <p className="mt-1 text-gray-600 italic">Saturday: 10am - 8pm</p>
                  <p className="mt-1 text-gray-600 italic">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold font-playfairDisplay text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600 italic">Email: info@royalspices.com</p>
                  <p className="mt-1 text-gray-600 italic">Phone: +91 98745 63215</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;