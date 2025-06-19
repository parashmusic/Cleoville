import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useShop } from "../context/ShopContext";
import { useCart } from "../context/CartContext";


const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const { addToCart, isCartOpen, setIsCartOpen } = useCart();
  const { getProductById, addToWishlist, isInWishlist, isLoading, error } = useShop();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = getProductById(id);
        if (!foundProduct) {
          setNotFound(true);
          return;
        }
        setProduct(foundProduct);
      } catch (err) {
        setNotFound(true);
      }
    };

    fetchProduct();
  }, [id, getProductById]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    if (product.sizes?.length > 0 && !selectedSize) {
      alert("Please select a size first");
      return;
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      image: product.image?.[0] || ''
    }, quantity);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading product...</p>
      </div>
    );
  }

  if (error || notFound || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500 mb-4">Product not found</p>
        <Link 
          to="/ourcollection" 
          className="text-[#E1AD99] hover:underline inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>
      </div>
    );
  }
  console.log("Current state:", {
  product,
  id,
  notFound,
  isLoading,
  products: useShop().products.map(p => p._id)
});

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Back Button */}
      <Link to='/ourcollection'>
        <motion.button
          whileHover={{ x: -3 }}
          className="flex items-center text-[#E1AD99] mb-8 font-light"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </motion.button>
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="space-y-4"
        >
          <div className="aspect-square bg-[#F8F5EE] rounded-lg overflow-hidden">
            {product.image?.length > 0 ? (
              <img
                src={product.image[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
          </div>
          {product.image?.length > 1 && (
            <div className="flex gap-3">
              {product.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-[#E1AD99]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl text-[#E1AD99] font-medium mb-6">₹{product.price.toFixed(2)}</p>

          {product.bestseller && (
            <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mb-4">
              Bestseller
            </span>
          )}

          <div className="prose max-w-none mb-8 font-light text-gray-700">
            <p className="mb-4">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-light mb-2">Select Size</h3>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-sm ${
                      selectedSize === size
                        ? 'border-[#E1AD99] bg-[#E1AD99]/10'
                        : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-sm">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToWishlist(product)}
              className="p-2 text-gray-400 hover:text-[#E1AD99] transition-colors"
            >
              <Heart 
                className="w-5 h-5" 
                fill={isInWishlist(product._id) ? "#E1AD99" : "none"} 
                stroke={isInWishlist(product._id) ? "#E1AD99" : "currentColor"}
              />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-[#E1AD99] text-white hover:bg-[#D39C87] transition-colors mb-4"
          >
            Add to Cart - ₹{(product.price * quantity).toFixed(2)}
          </button>

          {/* Buy Now Button */}
          <button
            onClick={() => {
              handleAddToCart();
              setIsCartOpen(true);
            }}
            className="w-full py-3 border border-[#E1AD99] text-[#E1AD99] hover:bg-[#E1AD99]/10 transition-colors"
          >
            Buy Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;