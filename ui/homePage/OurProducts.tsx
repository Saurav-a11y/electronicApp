// components/Products.js
'use client'
import { useState } from 'react';

const products = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: '$499', image: '/images/products/smartphone.jpg' },
  { id: 2, name: 'Laptop', category: 'Electronics', price: '$899', image: '/images/products/laptop.jpg' },
  { id: 3, name: 'Wireless Headphones', category: 'Accessories', price: '$129', image: '/images/products/headphones.jpg' },
  { id: 4, name: 'Smart Watch', category: 'Accessories', price: '$199', image: '/images/products/smartwatch.jpg' },
  { id: 5, name: 'Bluetooth Speaker', category: 'Accessories', price: '$89', image: '/images/products/speaker.jpg' },
];

export default function OurProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        {/* Categories Filter */}
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-4 py-2 px-6 text-lg rounded-full ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{product.price}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
