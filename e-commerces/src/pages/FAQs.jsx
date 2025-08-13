import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What makes SoilBoy's soil mixes different from others?",
      answer: "Our soil mixes are carefully crafted using premium organic ingredients, tested by horticulture professionals, and formulated specifically for Singapore's tropical climate. We source only the highest quality components and ensure proper pH balance and drainage for optimal plant health."
    },
    {
      question: "Do you offer same-day delivery in Singapore?",
      answer: "Yes! We offer same-day delivery for orders placed before 2 PM on weekdays and 12 PM on weekends. We deliver across all areas in Singapore, including HDB estates, condominiums, and landed properties."
    },
    {
      question: "How should I store unused soil mix?",
      answer: "Store your soil mix in a cool, dry place away from direct sunlight. If the bag is opened, transfer the soil to an airtight container or reseal the bag tightly. Properly stored soil can maintain its quality for up to 2 years."
    },
    {
      question: "Can I use your potting mix for outdoor plants?",
      answer: "Absolutely! Our premium potting mix is suitable for both indoor and outdoor plants. It provides excellent drainage and nutrition for container gardening, raised beds, and direct planting."
    },
    {
      question: "Do you offer bulk discounts for larger orders?",
      answer: "Yes, we offer attractive bulk discounts for orders over $200. Contact our customer service team for custom pricing on large orders. We also provide special rates for commercial customers and garden centers."
    },
    {
      question: "What if my plants don't thrive with your soil?",
      answer: "We stand behind our products with a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund or exchange. Our team will also provide personalized advice to help troubleshoot any issues."
    },
    {
      question: "Are your products organic and environmentally friendly?",
      answer: "Yes! All our soil mixes are made from 100% organic ingredients. We're committed to sustainable practices and use only eco-friendly materials. Our compost is made from recycled organic waste, contributing to Singapore's circular economy."
    },
    {
      question: "Can I visit your facility to see the products?",
      answer: "We operate as an online-first business to keep costs low and pass savings to our customers. However, we do have a small showroom by appointment. Please contact us to schedule a visit if you'd like to see our products in person."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our friendly customer service team is here to help you find the perfect solution for your gardening needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQs;