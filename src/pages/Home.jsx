import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import silk from "../assets/silk.jpg";
import j1 from '../assets/jew31.jpg';
import j2 from '../assets/jew2.webp';
import j3 from '../assets/jew3.webp';
import j4 from '../assets/jew4.webp';
import heroImage from '../assets/jew31.jpg';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] // Smooth ease curve
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  }
};


export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-light ">
      {/* Hero Section */}
      {/* <section className="relative min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            className="lg:w-1/2 w-full"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1 
              className="text-5xl md:text-6xl xl:text-7xl font-thin mb-8 text-gray-900 tracking-tight leading-tight"
              variants={item}
            >
              Craft Your <br className="hidden lg:block"/><span className="bg-gradient-to-r from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">Perfect Gift</span>

            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed max-w-lg"
              variants={item}
            >
              Create personalized gifts, custom hampers, and unique jewelry pieces that tell your story.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={item}
            >
             <Button 
            className="bg-gradient-to-r from-gray-800 to-gray-600 text-white hover:from-gray-700 hover:to-gray-500 transition-all duration-300 rounded-sm px-8 py-4 text-lg font-light flex-1 lg:flex-none text-center border border-gray-900 shadow-lg hover:shadow-xl"
            size="lg"
            asChild
          >
            <Link to="/custom-gifts">Start Creating</Link>
          </Button>
              <Button 
                className="bg-transparent text-gray-900 hover:bg-gray-100 transition-colors duration-300 rounded-sm px-8 py-4 text-lg font-light flex-1 lg:flex-none text-center border border-gray-300"
                size="lg"
                asChild
              >
                <Link to="/build-hamper">Build a Hamper</Link>
              </Button>
            </motion.div>
          </motion.div>
          
         
          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <motion.div 
                className="absolute inset-0 w-full h-full overflow-hidden rounded-lg shadow-lg z-20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={j1}
                  alt="Personalized gift example"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-full h-full rounded-lg z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
              
            
            </div>
            
            <motion.div 
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 -rotate-90 text-gray-200 text-8xl font-bold tracking-widest opacity-10 hidden xl:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1 }}
            >
              PERSONALIZE
            </motion.div>
          </motion.div>
        </div>
      </section> */}
      <div className="lg:mt-16 md:px-[10vw]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-3 lg:gap-4"
        >
          {/* Image 1 */}
          <motion.div
            className="col-span-1 row-span-1 order-1 md:order-2"
            variants={imageVariants}
          >
            <img src={j1} alt="Hero" className="w-full h-full object-cover" />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="col-span-1 row-span-1 order-2 md:order-3"
            variants={imageVariants}
          >
            <img src={j2} alt="Hero" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="col-span-2 row-span-1 order-3 md:order-1 bg-[#F8F5EE] px-6 md:px-8 py-16 flex flex-col"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-thin mb-6 text-gray-900 tracking-tight leading-tight text-center md:text-left"
              variants={itemVariants}
            >
              Craft Your <br className="hidden lg:block" />
              <span className="">Perfect Gift</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed max-w-lg text-center md:text-left"
              variants={itemVariants}
            >
              Create personalized gifts, custom hampers, and unique jewelry
              pieces that tell your story.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start"
              variants={itemVariants}
            >
              <Button
                className="bg-gradient-to-r from-gray-600 to-gray-600 text-white hover:from-gray-700 hover:to-gray-500 transition-all duration-300 rounded-sm px-8 py-4 text-base md:text-lg font-light text-center border border-gray-900 shadow-lg hover:shadow-xl"
                size="lg"
                asChild
              >
                <Link to="/custom-gifts">Start Creating</Link>
              </Button>
              <Button
                className="bg-[#9a6e4e85] text-white hover:bg-gray-100 transition-colors duration-300 rounded-sm px-8 py-4 text-base md:text-lg font-light text-center border border-gray-300"
                size="lg"
                asChild
              >
                <Link to="/build-hamper">Build a Hamper</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={item}>
            <h2 className="text-4xl font-thin mb-4 tracking-tight">
              Explore Our New Collection
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Aesthetic Decor and resin craft for every home
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
          >
            {[
              { title: "Custom Jewelry", image: j2, link: "/jewelry" },
              {
                title: "Spotify Keychains",
                image: j3,
                link: "/spotify-keychain",
              },
              { title: "Gift Hampers", image: j4, link: "/build-hamper" },
              { title: "Personalized Gifts", image: j1, link: "/custom-gifts" },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={category.link} className="block">
                  <motion.div
                    className="relative overflow-hidden aspect-square"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-light mb-2">
                      {category.title}
                    </h3>
                    <motion.div
                      className="flex items-center justify-center text-sm text-gray-500"
                      whileHover={{ color: "#1f2937" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Discover</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="py-24 bg-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={item}>
            <h2 className="text-4xl font-thin mb-4 tracking-tight">
              Trending Gifts
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our most loved pieces this season
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
          >
            {[
              {
                name: "Crystal Heart Necklace",
                price: "$99.00",
                image: j2,
                link: "/product/crystal-heart",
              },
              {
                name: "Personalized Spotify Keychain",
                price: "$49.00",
                image: j3,
                link: "/product/spotify-keychain",
              },
              {
                name: "Luxury Gift Hamper",
                price: "$129.00",
                image: j4,
                link: "/product/luxury-hamper",
              },
              {
                name: "Custom Engraved Bracelet",
                price: "$79.00",
                image: j1,
                link: "/product/engraved-bracelet",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="group"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={product.link} className="block">
                  <motion.div
                    className="relative overflow-hidden aspect-square mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button className="bg-white text-gray-900 rounded-none px-8 py-3 font-light border border-gray-300 hover:bg-gray-100">
                        Quick View
                      </Button>
                    </motion.div>
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-lg font-light mb-1">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-16" variants={item}>
            <Button
              className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-none px-8 py-4 font-light"
              size="lg"
              asChild
            >
              <Link to="/shop">View All Products</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-16"
            variants={container}
          >
            <motion.div className="md:w-1/2" variants={item}>
              <motion.img
                src={silk}
                alt="About us"
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <motion.div className="md:w-1/2" variants={container}>
              <motion.h2
                className="text-4xl font-thin mb-8 tracking-tight"
                variants={item}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                variants={item}
              >
                Founded with a passion for craftsmanship and personal
                expression, we create gifts that celebrate life's special
                moments. Each piece is thoughtfully designed to tell a unique
                story.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                variants={item}
              >
                Our artisans combine traditional techniques with contemporary
                design to deliver exceptional quality that stands the test of
                time.
              </motion.p>
              <motion.div variants={item}>
                <Button
                  className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-none px-8 py-4 font-light"
                  size="lg"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}