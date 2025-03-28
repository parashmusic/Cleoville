import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home'; // Example page
import Jewelry from './pages/Jewelry'; // Example page
import CustomGifts from './pages/CustomGifts'; // Example page
import BuildHamper from './pages/BuildHamper';
import SpotifyKeychain from './pages/Spotify';
//import ProductGrid from './pages/Productgrid';
import SidebarCart from './components/SidebarCart';
import { lazy, Suspense } from 'react';
const ProductGrid = lazy(() => import('./pages/Productgrid'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    
      <Layout>
        <SidebarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/build-hamper" element={<BuildHamper/>} />
          <Route path="/spotify-keychain" element={<SpotifyKeychain/>} />
          <Route path="/custom-gifts" element={<ProductGrid />} />
          {/* Add more routes as needed */}
          
          <Route 
                path="/products" 
                element={
                  <ProductGrid 
                    onCartOpen={() => setIsCartOpen(true)} 
                  />
                } 
              />
              
              {/* Product Detail Route */}
              <Route 
                path="/products/:id" 
                element={
                  <ProductPage 
                    onCartOpen={() => setIsCartOpen(true)} 
                  />
                } 
              />
         
        </Routes>
      </Layout>
    
  );
};

export default App;