import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home'; // Example page
import Jewelry from './pages/Jewelry'; // Example page
import CustomGifts from './pages/CustomGifts'; // Example page
import BuildHamper from './pages/BuildHamper';
import SpotifyKeychain from './pages/Spotify';

const App = () => {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/build-hamper" element={<BuildHamper/>} />
          <Route path="/spotify-keychain" element={<SpotifyKeychain/>} />
          <Route path="/custom-gifts" element={<CustomGifts />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    
  );
};

export default App;