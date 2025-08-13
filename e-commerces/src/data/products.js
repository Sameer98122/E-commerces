export const products = [
  {
    id: 1,
    name: "Premium Potting Mix",
    price: 25.99,
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Soil",
    description: "High-quality potting mix perfect for all indoor and outdoor plants. Rich in nutrients and provides excellent drainage.",
    features: ["Organic ingredients", "pH balanced", "Excellent drainage", "Nutrient-rich"],
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Organic Compost",
    price: 18.50,
    image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Compost",
    description: "100% organic compost made from kitchen scraps and yard waste. Perfect for enriching your garden soil.",
    features: ["100% organic", "Improves soil structure", "Slow-release nutrients", "Eco-friendly"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 3,
    name: "Cactus & Succulent Mix",
    price: 22.00,
    image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Specialty",
    description: "Specially formulated for cacti and succulents. Provides excellent drainage and prevents root rot.",
    features: ["Fast-draining", "Low moisture retention", "Mineral-rich", "Perfect for desert plants"],
    inStock: true,
    rating: 4.9
  },
  {
    id: 4,
    name: "Vegetable Garden Soil",
    price: 28.75,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Soil",
    description: "Premium soil blend specifically designed for growing healthy vegetables and herbs.",
    features: ["Vegetable-specific nutrients", "pH optimized", "Organic matter", "Disease resistant"],
    inStock: false,
    rating: 4.7
  },
  {
    id: 5,
    name: "Seed Starting Mix",
    price: 19.99,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Specialty",
    description: "Fine-textured mix perfect for germinating seeds and growing seedlings.",
    features: ["Fine texture", "Excellent water retention", "Sterile medium", "Promotes germination"],
    inStock: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "Orchid Bark Mix",
    price: 32.50,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Specialty",
    description: "Premium bark mix designed specifically for orchids and epiphytic plants.",
    features: ["Excellent aeration", "Natural bark chips", "Long-lasting", "Orchid-specific"],
    inStock: true,
    rating: 4.8
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "soil", name: "Soil" },
  { id: "compost", name: "Compost" },
  { id: "specialty", name: "Specialty Mix" }
];