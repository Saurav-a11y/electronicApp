import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Absolutely love the products! The quality and service are top-notch. Highly recommend!",
    // image: "/images/customers/john.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Smith",
    review: "Great shopping experience. Fast delivery and amazing deals. Will shop again!",
    // image: "/images/customers/sarah.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "Fantastic customer support and excellent prices. The best place to shop online!",
    // image: "/images/customers/michael.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">✨ What Our Customers Say ✨</h2>
        <p className="text-lg text-center text-gray-600 mb-10">See why our customers love shopping with us!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <img  alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-600" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              
              {/* Star Ratings */}
              <div className="flex justify-center my-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
