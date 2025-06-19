import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [wishlist, setWishlist] = useState([]);


 useEffect(() => {
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:4000/api/product/list');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      // Make sure to use data.products (the array) not data (the object)
      setProducts(data.products || []); // Fallback to empty array
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.products?.map(product => product.category) || [])];
      setCategories(['All', ...uniqueCategories]);
      
      setFeaturedProducts(data.products?.slice(0, 4) || []);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchProducts();
}, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

const getProductById = (id) => {
  // Ensure products is an array
  if (!Array.isArray(products)) return null;
  
  // Convert both IDs to string for reliable comparison
  const stringId = String(id);
  
  return products.find(product => 
    String(product._id) === stringId
  );
};

const filterProducts = (searchTerm = '', category = 'All') => {
  if (!Array.isArray(products)) return []; // Safety check
  
  return products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });
};

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        featuredProducts,
        isLoading,
        error,
        categories,
        wishlist,
        getProductById,
        filterProducts,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);