import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { useCart } from "../context/CartContext";

const ProductGrid = () => {
  const { 
    products, 
    isLoading, 
    error, 
    categories,
    filterProducts,
    addToWishlist,
    isInWishlist
  } = useShop();
  
  const { addToCart } = useCart();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = filterProducts(searchTerm, selectedCategory);

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
    window.scrollTo(0, 0);
  }, []);

if (isLoading) return <div className="container mx-auto px-4 py-12 text-center">Loading products...</div>;
if (error) return <div className="container mx-auto px-4 py-12 text-center text-red-500">Error: {error}</div>;
if (!Array.isArray(products)) return <div className="container mx-auto px-4 py-12 text-center">No products available</div>;
  return (
    <div className="container mx-auto px-4 lg:py-12 py-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-normal tracking-widest text-rose-300 mb-4">Our Collection</h1>
        <p className="text-[#E1AD99] font-light">Thoughtfully crafted products for every occasion</p>
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
              key={product._id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link to={`/products/${product._id}`}>
                <div className="aspect-square bg-[#F8F5EE] overflow-hidden rounded-lg mb-3">
                  {product.image?.length > 0 ? (
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-light text-gray-900">{product.name}</h3>
                    <p className="text-[#E1AD99] font-medium">₹{product.price.toFixed(2)}</p>
                    {/* {product.bestseller && (
                      <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">
                        Bestseller
                      </span>
                    )} */}
                  </div>
                  <button 
                    className="p-2 text-gray-400 hover:text-[#E1AD99] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      addToWishlist(product);
                    }}
                  >
                    <Heart 
                      className="w-5 h-5" 
                      fill={isInWishlist(product._id) ? "#E1AD99" : "none"} 
                      stroke={isInWishlist(product._id) ? "#E1AD99" : "currentColor"}
                    />
                  </button>
                </div>
              </Link>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-3 py-2 lg:block hidden bg-[#E1AD99] text-white font-light rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => addToCart(product)}
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