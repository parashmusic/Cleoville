// components/SidebarCart.jsx
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const SidebarCart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  return (
    <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform ${
      isCartOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}>
      
      {/* Cart header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-light">Your Cart ({cartItems.length})</h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Cart items */}
      <div className="h-[calc(100vh-180px)] overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <p className="text-center py-8 text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b">
              <div className="w-20 h-20 bg-gray-100 rounded-sm overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-light">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.variant}</p>
                <p className="text-[#E1AD99] mt-1">${item.price.toFixed(2)}</p>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center border border-gray-300 rounded-sm">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart footer */}
      <div className="absolute bottom-0 w-full p-4 border-t bg-white">
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <button 
          className="w-full py-3 bg-[#E1AD99] text-white hover:bg-[#D39C87] transition-colors"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SidebarCart;