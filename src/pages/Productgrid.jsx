import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Handcrafted Pearl Necklace", price: 89.99, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/Salty-5173763.jpg?v=1742216604&width=1080" },
    { id: 2, name: "Personalized Soy Candle", price: 34.50, category: "Home", image: "https://salty.co.in/cdn/shop/files/EN24152-G-RED_2.jpg?v=1728408497&width=1080" },
    { id: 3, name: "Custom Engraved Bracelet", price: 65.00, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/NS14426-G.jpg?v=1738920070&width=1080" },
    { id: 4, name: "Artisanal Tea Set", price: 120.00, category: "Home", image: "https://salty.co.in/cdn/shop/products/Hyacinth4-pcsZirconHeartMagneticCloverNecklace-Silver.jpg?v=1709709060&width=1080" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-light text-gray-900 mb-2">Our Collection</h1>
        <p className="text-[#E1AD99] font-light">Thoughtfully crafted gifts for every occasion</p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <motion.div 
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <Link to={`/products/${product.id}`}>
              <div className="aspect-square bg-[#F8F5EE] overflow-hidden rounded-lg mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-light text-gray-900">{product.name}</h3>
                  <p className="text-[#E1AD99] font-medium">${product.price.toFixed(2)}</p>
                </div>
                <button 
                  className="p-2 text-gray-400 hover:text-[#E1AD99] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to wishlist
                  }}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-3 py-2 bg-[#E1AD99] text-white font-light rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={() => {
                // Add to cart logic
              }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export   default ProductGrid;