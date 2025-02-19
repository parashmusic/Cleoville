import { Heart, Star, ShoppingCart, Truck, Shield, Leaf, ThumbsUp, ChevronRight } from "lucide-react";
import { useParams } from 'react-router-dom';
import prod_1 from '../assets/bs_1.webp';
import prod_2 from '../assets/bs_2.webp';
import prod_3 from '../assets/bs_3.webp';
import prod_4 from '../assets/bs_4.webp';
const products = [
  {
    id: 1,
    name: "Cotton Embroidery Fabric",
    price: "₹1,999",
    image: prod_1,
    rating: 4.5,
    reviews: 12,
    description: "This elegant cotton fabric features intricate embroidery, perfect for traditional wear. The soft texture and vibrant colors make it ideal for sarees, suits, and dresses.",
    details: "Material: 100% Cotton | Care: Machine Washable",
    shipping: "Free shipping on orders above ₹2,000",
    careInstructions: "Hand wash with mild detergent. Do not bleach. Dry in shade.",
    quality: "Premium Quality Fabric",
    benefits: [
      "Breathable and comfortable",
      "Eco-friendly and sustainable",
      "Durable and long-lasting",
    ],
  },
  {
    id: 2,
    name: "Cotton Printed Fabric",
    price: "₹1,499",
    image: prod_2,
    rating: 4.2,
    reviews: 8,
    description: "Soft and lightweight cotton fabric with a beautiful printed design. Perfect for casual and summer wear.",
    details: "Material: 100% Cotton | Care: Hand Wash Recommended",
    shipping: "Free shipping on orders above ₹2,000",
    careInstructions: "Hand wash with mild detergent. Do not bleach. Dry in shade.",
    quality: "Premium Quality Fabric",
    benefits: [
      "Breathable and comfortable",
      "Eco-friendly and sustainable",
      "Durable and long-lasting",
    ],
  },
  {
    id: 3,
    name: "Cotton Printed Fabric",
    price: "₹1,499",
    image: prod_3,
    rating: 4.2,
    reviews: 8,
    description: "Soft and lightweight cotton fabric with a beautiful printed design. Perfect for casual and summer wear.",
    details: "Material: 100% Cotton | Care: Hand Wash Recommended",
    shipping: "Free shipping on orders above ₹2,000",
    careInstructions: "Hand wash with mild detergent. Do not bleach. Dry in shade.",
    quality: "Premium Quality Fabric",
    benefits: [
      "Breathable and comfortable",
      "Eco-friendly and sustainable",
      "Durable and long-lasting",
    ],
  },
  {
    id: 4,
    name: "Cotton Printed Fabric",
    price: "₹1,499",
    image: prod_4,
    rating: 4.2,
    reviews: 8,
    description: "Soft and lightweight cotton fabric with a beautiful printed design. Perfect for casual and summer wear.",
    details: "Material: 100% Cotton | Care: Hand Wash Recommended",
    shipping: "Free shipping on orders above ₹2,000",
    careInstructions: "Hand wash with mild detergent. Do not bleach. Dry in shade.",
    quality: "Premium Quality Fabric",
    benefits: [
      "Breathable and comfortable",
      "Eco-friendly and sustainable",
      "Durable and long-lasting",
    ],
  },

];

export function ProductDetailPage() {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
            />
            <button className="absolute right-2 top-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-semibold">{product.price}</p>

            {/* Quality Bar */}
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <Leaf className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium">{product.quality}</p>
                <p className="text-sm text-gray-500">Eco-friendly and sustainable</p>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Product Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Details</h2>
              <p className="text-gray-600">{product.details}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Benefits</h2>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Information */}
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <Truck className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium">Shipping Information</p>
                <p className="text-sm text-gray-500">{product.shipping}</p>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-medium">Care Instructions</p>
                <p className="text-sm text-gray-500">{product.careInstructions}</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Customer Name</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "This fabric is amazing! The quality is top-notch, and the embroidery is so beautiful. Highly recommend!"
                </p>
              </div>
            ))}
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <span>View All Reviews</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}