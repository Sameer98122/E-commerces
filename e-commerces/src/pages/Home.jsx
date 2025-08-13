import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Leaf, Truck, Award, Users } from 'lucide-react';

const Home = ({ onAddToCart }) => {
  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      title: "Premium Quality",
      description: "Hand-selected organic ingredients for the healthiest soil mixes"
    },
    {
      icon: <Truck className="h-12 w-12 text-green-500" />,
      title: "Fast Delivery",
      description: "Same-day delivery available across Singapore"
    },
    {
      icon: <Award className="h-12 w-12 text-green-500" />,
      title: "Expert Tested",
      description: "All products tested by horticulture professionals"
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Community",
      description: "Join thousands of happy gardeners in Singapore"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your <span className="text-green-300">Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium soil, compost, and growing mediums for every plant enthusiast. 
              From houseplants to vegetables, we have everything you need.
            </p>
            <div className="space-x-4">
              <Link
                to="#products"
                className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose SoilBoy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality growing mediums and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <ProductList onAddToCart={onAddToCart} />
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-xl mb-8">
            Join our community of successful gardeners and get growing tips, exclusive offers, and more!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;