import React from 'react';
import { Leaf, Users, Award, Truck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable gardening solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Community",
      description: "Building a community of gardeners who share knowledge and passion for plants."
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Quality",
      description: "Every product is carefully tested to ensure the highest quality standards."
    },
    {
      icon: <Truck className="h-8 w-8 text-green-500" />,
      title: "Service",
      description: "Fast, reliable delivery and excellent customer support across Singapore."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SoilBoy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Singapore's trusted source for premium gardening supplies since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SoilBoy started as a passion project in 2018 when our founder, Alex Chen, 
                  struggled to find quality soil for his rooftop garden in Singapore. Frustrated 
                  by the limited options available, he began experimenting with his own soil blends.
                </p>
                <p>
                  Word spread quickly among the local gardening community about Alex's exceptional 
                  soil mixes. What began as sharing with neighbors grew into a thriving business 
                  dedicated to providing premium gardening supplies to plant enthusiasts across Singapore.
                </p>
                <p>
                  Today, SoilBoy serves thousands of satisfied customers, from apartment herb gardeners 
                  to commercial urban farms. We remain committed to our founding mission: helping every 
                  plant reach its full potential with the right foundation.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gardening"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at SoilBoy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind SoilBoy's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Alex Chen</h3>
              <p className="text-green-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Horticulture expert with over 15 years of experience in sustainable gardening practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Lim</h3>
              <p className="text-green-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Ensures every order is perfectly prepared and delivered on time to our customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">David Wong</h3>
              <p className="text-green-600 font-medium mb-3">Product Specialist</p>
              <p className="text-gray-600 text-sm">
                Develops and tests new soil formulations to meet the evolving needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-green-200">Product Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-200">Organic Certified</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;