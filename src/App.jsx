import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { FeaturedCategories } from "./components/FeaturedCategories"
import { ProductGrid } from "./components/ProductGrid"
import { PromoBar } from "./components/PromoBar"
import { Routes,Route } from "react-router-dom"
import { ProductDetailPage } from './components/Product';
import Home from "./pages/Home"
import Footer from "./components/ui/Footer"

function App() {
  return (
    <div >
      {/*
      <main>
        <HeroSection />
        <FeaturedCategories />
        <ProductGrid />
      </main> */}
       <Header />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

