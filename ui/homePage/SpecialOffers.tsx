import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off on Electronics",
      description: "Grab the latest gadgets at half price!",
      image: "/images/offers/electronics.jpg",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free - Fashion",
      description: "Trendy outfits with amazing deals.",
      image: "/images/offers/fashion.jpg",
    },
    {
      id: 3,
      title: "Up to 40% Off - Home & Kitchen",
      description: "Upgrade your home with quality products.",
      image: "/images/offers/home-kitchen.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">🔥 Special Offers 🔥</h2>
        <p className="text-xl text-center mb-8">Limited-time deals on top products. Don't miss out!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-lg mb-4">{offer.description}</p>
                <a href="/offers" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-lg">
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
