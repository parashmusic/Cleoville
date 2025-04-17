import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, Filter } from "lucide-react";
import { useState ,useEffect} from "react";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Handcrafted Pearl Necklace", price: 89.99, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/Salty-5173763.jpg?v=1742216604&width=1080" },
    { id: 2, name: "Personalized Soy Candle", price: 34.50, category: "Home", image: "https://salty.co.in/cdn/shop/files/EN24152-G-RED_2.jpg?v=1728408497&width=1080" },
    { id: 3, name: "Custom Engraved Bracelet", price: 65.00, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/NS14426-G.jpg?v=1738920070&width=1080" },
    { id: 4, name: "Artisanal Tea Set", price: 120.00, category: "Home", image: "https://salty.co.in/cdn/shop/products/Hyacinth4-pcsZirconHeartMagneticCloverNecklace-Silver.jpg?v=1709709060&width=1080" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); 
  return (
    <div className="container mx-auto px-4 lg:py-12 py-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-normal tracking-widest text-rose-300 mb-4">Our Collection</h1>
        <p className="text-[#E1AD99] font-light">Thoughtfully crafted gifts for every occasion</p>
      </motion.div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col items-center">
        <div className="relative w-full max-w-md mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#E1AD99]" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 w-full py-2 border-b border-[#E1AD99] bg-transparent focus:outline-none focus:border-rose-300 text-gray-700 placeholder-[#E1AD99]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="absolute right-0 top-0 p-2 text-[#E1AD99] hover:text-rose-300 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {showFilters && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    selectedCategory === category 
                      ? 'border-rose-300 text-rose-300' 
                      : 'border-[#E1AD99] text-[#E1AD99]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
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
                className="w-full mt-3 py-2 lg:block hidden bg-[#E1AD99] text-white font-light rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => {
                  // Add to cart logic
                }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12 text-[#E1AD99]">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;