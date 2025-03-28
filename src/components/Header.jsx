import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/Button'; 
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log('Search Query:', searchQuery);
    alert(`You searched for: ${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/"  style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontWeight: 400 }} className="text-3xl bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 bg-clip-text  text-transparent font-bold">
            Cleoville
          </Link>

         
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jewelry" className="hover:text-blue-500">
              Jewelry
            </Link>
            <Link to="/custom-gifts" className="hover:text-blue-500">
              Custom Gifts
            </Link>
            <Link to="/build-hamper" className="hover:text-blue-500">
              Build Hamper
            </Link>
            <Link to="/spotify-keychain" className="hover:text-blue-500">
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

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
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
                  <Link to="/jewelry" className="hover:text-blue-500">
                    Jewelry
                  </Link>
                  <Link to="/custom-gifts" className="hover:text-blue-500">
                    Custom Gifts
                  </Link>
                  <Link to="/build-hamper" className="hover:text-blue-500">
                    Build Hamper
                  </Link>
                  <Link to="/spotify-keychain" className="hover:text-blue-500">
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