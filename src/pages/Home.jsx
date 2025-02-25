import { Link } from "react-router-dom"; // Assuming you're using React Router
import { ArrowRight } from "lucide-react";

import { Button } from "../components/ui/Button";
import silk from "../assets/silk.jpg";
import prod_1 from "../assets/bs_1.webp";
import prod_2 from "../assets/bs_2.webp";
import prod_3 from "../assets/bs_3.webp";
import prod_4 from "../assets/bs_4.webp";
import j1 from '../assets/jew1.webp';
import j2 from '../assets/jew2.webp';
import j3 from '../assets/jew3.webp';
import j4 from '../assets/jew4.webp';
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
  {/* Background Image */}
  <img
    src={j1}
    alt="Hero background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Blurred Overlay */}
  <div className="absolute inset-0 backdrop-blur-xs"></div>

  {/* Fade-away Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/0 to-transparent"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Craft Your Perfect Gift
      </h1>
      <p className="text-lg mb-8">
        Create personalized gifts, custom hampers, and unique jewelry pieces
        that tell your story.
      </p>
      <div className="flex gap-4 text-white">
        <Button className="bg-fuchsia-400" size="lg" asChild>
          <Link to="/custom-gifts">Start Creating</Link>
        </Button>
        <Button size="lg" className="bg-fuchsia-400" asChild>
          <Link to="/build-hamper">Build a Hamper</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <section className="relative bg-cover bg-center h-50">
            {/* <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${banner_1_large})` }}> */}
            <div className="absolute inset-0  opacity-50"></div>
            <div className="relative container mx-auto flex items-center justify-center h-full">
              <div className="text-center text-gray-700">
                <h1 className="text-5xl font-bold mb-4">
                  Discover Our New Collection
                </h1>
                <p className="text-xl">
                  Elegant fabrics and clothes for every occasion
                </p>
              </div>
            </div>
          </section>
          {/* <h2 className="text-3xl font-bold  text-center mb-12">Our Collections</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Jewelry",
                image: prod_1,
                link: "/jewelry",
              },
              {
                title: "Spotify Keychains",
                image: prod_2,
                link: "/spotify-keychain",
              },
              {
                title: "Gift Hampers",
                image: prod_3,
                link: "/build-hamper",
              },
              {
                title: "Gift Hampers",
                image: prod_3,
                link: "/build-hamper",
              },
            ].map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative overflow-hidden rounded-lg"
              >
                {/* Image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Overlay (visible on hover) */}
                <div className="absolute inset-0 backdrop-blur-sm  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      {category.title}
                    </h3>
                    <Button className="bg-primary" size="lg">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trending Gifts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={j2}
                    alt="Product image"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium mb-2">Crystal Heart Necklace</h3>
                <p className="text-gray-700 font-semibold">$99.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
