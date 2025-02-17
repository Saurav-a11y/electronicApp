import  OurProducts from "../ui/homePage/OurProducts";
import SpecialOffers from "../ui/homePage/SpecialOffers";
import Testimonials from "../ui/homePage/Testimonials";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('images/homePage/electronicsBanner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center items-center w-full h-full text-center text-white z-10">
          <div>
            <h1 className="text-5xl font-bold mb-6">Explore the Future of Electronics</h1>
            <p className="text-xl mb-6">Discover cutting-edge gadgets and technology at unbeatable prices</p>
            <a href="#join-us" className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg">
              Join Now
            </a>
          </div>
        </div>
      </section>
      <OurProducts />
      <SpecialOffers />
      <Testimonials />

      
    </>

  );
}
