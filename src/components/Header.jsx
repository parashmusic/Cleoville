import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, ShoppingCart, User, Menu, X, ChevronRight } from 'lucide-react';import { Button } from './ui/Button'; 
import { motion, AnimatePresence } from 'framer-motion';


const mockProducts = [
  { id: 1, name: "Handcrafted Pearl Necklace", price: 89.99, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/Salty-5173763.jpg?v=1742216604&width=1080" },
  { id: 2, name: "Personalized Soy Candle", price: 34.50, category: "Home", image: "https://salty.co.in/cdn/shop/files/EN24152-G-RED_2.jpg?v=1728408497&width=1080" },
  { id: 3, name: "Custom Engraved Bracelet", price: 65.00, category: "Jewelry", image: "https://salty.co.in/cdn/shop/files/NS14426-G.jpg?v=1738920070&width=1080" },
  { id: 4, name: "Artisanal Tea Set", price: 120.00, category: "Home", image: "https://salty.co.in/cdn/shop/products/Hyacinth4-pcsZirconHeartMagneticCloverNecklace-Silver.jpg?v=1709709060&width=1080" },
];
export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = mockProducts
      .filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
    setSuggestions(filtered);
  }, [searchQuery]);


 const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search navigation
      console.log('Search submitted:', searchQuery);
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/"  style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontWeight: 400 }} className="text-3xl bg-gradient-to-r from-fuchsia-300 to-[#E1AD99] bg-clip-text  text-transparent font-bold">
            Cleoville
          </Link>

         
          <nav className="hidden md:flex text-gray-700 items-center space-x-8">
            <Link to="/" className="hover:text-primary">
             Home
            </Link>
            <Link to="/products" className="hover:text-primary">
              Collections
            </Link>
            <Link to="/build-hamper" className="hover:text-primary">
              Build Hamper
            </Link>
            <Link to="/spotify-keychain" className="hover:text-primary">
              Spotify Keychain
            </Link>
          </nav>

       
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            {/* <div className="flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <form onSubmit={handleSearch} className="flex items-center">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-3 py-2 border rounded-md text-sm"
                      />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                aria-label="Search"
              >
                <Search className="h-5  w-5" />
              </Button>
            </div> */}
            <Button 
              onClick={toggleSearch}
              className="p-2 hover:text-white transition-colors"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
            <Button  className="p-2 hover:text-white transition-colors">
              <User className="h-5 w-5 " />
            </Button>
            {/* <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button> */}
            <Button  className="p-2 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          </div>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 lg:w-2/4 mx-auto  mt-1 z-50 rounded-b-lg overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <form onSubmit={handleSearchSubmit} className="p-4 ">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search our collection..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-3 px-5 pr-10 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-[#E1AD99]/50 bg-white text-gray-700 placeholder-gray-400"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#E1AD99] transition-colors"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className="py-2 mx-4 rounded-md bg-white">
                    {suggestions.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="flex items-center px-4 py-3   hover:bg-[#E1AD99]/5 transition-colors group"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                      >
                        <div className="w-12 h-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-light text-gray-900 group-hover:text-[#E1AD99] transition-colors">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                        <div className="ml-4">
                          <p className="text-[#E1AD99] font-medium">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-300 ml-2 group-hover:text-[#E1AD99] transition-colors" />
                      </Link>
                    ))}
                  </div>
                )}

                {/* No results */}
                {searchQuery && suggestions.length === 0 && (
                  <div className="px-4 py-6 text-center bg-white mx-4 rounded-md text-gray-500">
                    <p>No products found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

       
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-0 bg-black/0 backdrop-blur-xs bg-opacity-50 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleSidebar}
            >
              <motion.div
                className="fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-lg"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={toggleSidebar}
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Navigation Links */}
                <nav className="mt-12 flex flex-col space-y-4">
                  <Link to="/" onClick={toggleSidebar} className="hover:text-blue-500">
                   Home
                  </Link>
                  <Link to="/ourcollection" onClick={toggleSidebar}  className="hover:text-blue-500">
                    Collection
                  </Link>
                  <Link to="/build-hamper" onClick={toggleSidebar}  className="hover:text-blue-500">
                    Build Hamper
                  </Link>
                  <Link to="/spotify-keychain" onClick={toggleSidebar}  className="hover:text-blue-500">
                    Spotify Keychain
                  </Link>
                </nav>

               
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};