import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from 'react-router-dom';
import { useCart } from "../context/CartContext";


const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart, isCartOpen, setIsCartOpen } = useCart();
 
  const [selectedVariant, setSelectedVariant] = useState(null);
  const product = {
    id: 1,
    name: "Handcrafted Pearl Necklace",
    price: 89.99,
    description: "A timeless necklace featuring freshwater pearls hand-strung on a gold-plated chain. Each pearl is individually selected for its luster and shape.",
    details: "• 18\" gold-plated chain\n• 6-7mm freshwater pearls\n• Lobster clasp closure\n• Made in small batches",
    images: ["https://salty.co.in/cdn/shop/files/Salty-5173763.jpg?v=1742216604&width=1080", "https://salty.co.in/cdn/shop/files/Salty-5173752_d0e11b48-9814-4bf1-8f4f-40f8641d9a2d.jpg?v=1742216604&width=1800", "/necklace-3.jpg"],
    variants: ["Gold", "Silver"],
    
  };
  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a variant first");
      return;
    }
    
    addToCart({
      ...product,
      variant: selectedVariant,
      image: product.images[0]
    }, quantity);
  };
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -3 }}
        className="flex items-center text-[#E1AD99] mb-8 font-light"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </motion.button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="space-y-4"
        >
          <div className="aspect-square bg-[#F8F5EE] rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-[#E1AD99]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl text-[#E1AD99] font-medium mb-6">${product.price.toFixed(2)}</p>

          <div className="prose max-w-none mb-8 font-light text-gray-700">
            <p className="mb-4">{product.description}</p>
            <pre className="whitespace-pre-wrap font-sans">{product.details}</pre>
          </div>

          {/* Variant Selection */}
      <div className="mb-6">
        <h3 className="text-sm font-light mb-2">Select Color</h3>
        <div className="flex gap-2">
          {product.variants.map(variant => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-4 py-2 border rounded-sm ${
                selectedVariant === variant
                  ? 'border-[#E1AD99] bg-[#E1AD99]/10'
                  : 'border-gray-300'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

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
      </div>
               {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full py-3 bg-[#E1AD99] text-white hover:bg-[#D39C87] transition-colors mb-4"
      >
        Add to Cart - ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Buy Now Button */}
      <button
        onClick={() => {
          handleAddToCart();
          // Navigate to checkout
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