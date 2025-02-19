import { useState } from "react";
import { Plus, ShoppingBasket } from "lucide-react";
import j1 from '../assets/jew1.webp';
import j2 from '../assets/jew2.webp';
import j3 from '../assets/jew3.webp';
import j4 from '../assets/jew4.webp';
import { Button } from "../components/ui/Button";

export default function BuildHamper() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    { id: 1, name: "Crystal Necklace", price: 99, image: j1 },
    { id: 2, name: "Rose Gold Bracelet", price: 79, image: j2 },
    { id: 3, name: "Pearl Earrings", price: 69, image: j3 },
    { id: 4, name: "Diamond Ring", price: 199, image: j4 },
  ];

  const addToHamper = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Build Your Custom Hamper</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Product Catalog */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white   hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-square relative mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-gray-600 font-semibold">${product.price}</p>
                      </div>
                      <Button
                        size="icon"
                        onClick={() => addToHamper(product)}
                        className=" border-gray-900 hover:bg-gray-700 hover:text-white text-black"
                      >
                        <Plus className="h-4w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hamper Preview */}
          <div className="lg:sticky lg:top-4 h-fit">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Hamper</h2>

                {selectedProducts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <ShoppingBasket className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>Your hamper is empty</p>
                    <p className="text-sm">Add items from the catalog</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedProducts.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 py-2 border-b border-gray-200 last:border-0"
                      >
                        <div className="relative w-16 h-16 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-600">${product.price}</p>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold text-gray-900">Total:</span>
                        <span className="text-xl font-bold text-gray-600">${totalPrice}</span>
                      </div>
                      <Button
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}