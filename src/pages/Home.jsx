import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

import silk from "../assets/silk.jpg";
import j1 from "../assets/jew31.jpg";
import j2 from "../assets/jew2.webp";
import j3 from "../assets/jew3.webp";
import j4 from "../assets/jew4.webp";
import heroImage from "../assets/jew31.jpg";
import ParallaxSection from "../components/ParallaxSection";
import HorizontalScrollSection from "../components/HorizontalScrollSection";

export default function Home() {
  // Register the ScrollTrigger plugin if you plan on using scroll-based triggers
  gsap.registerPlugin(ScrollTrigger);

  // References to elements for animations
  const heroSectionRef = useRef(null);
  const heroImage1Ref = useRef(null);
  const heroImage2Ref = useRef(null);
  const heroTextRef = useRef(null);

  const imageSources = [j1, j2, "https://i.pinimg.com/736x/cf/15/7d/cf157df1cc66099914c4d79b6d3aa5ee.jpg", "https://i.pinimg.com/736x/23/7b/cd/237bcd1e25cbf84111357311bb508e4c.jpg", "https://i.pinimg.com/736x/12/75/07/12750706ce7716a05728cf13d148977a.jpg"];

  useEffect(() => {
    // Get direct image DOM elements from within your refs.
    const heroImg1El = heroImage1Ref.current.querySelector("img");
    const heroImg2El = heroImage2Ref.current.querySelector("img");

    // Use objects for indices to pass them by reference.
    let idx1 = { value: 0 };
    let idx2 = { value: 1 };

    // Set the initial images.
    heroImg1El.src = imageSources[idx1.value];
    heroImg2El.src = imageSources[idx2.value];

    // Helper function to fade out an image, update its src, then fade in.
    function fadeNextImage(imageEl, indexObj) {
      gsap.to(imageEl, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: () => {
          // Increment index cyclically.
          indexObj.value = (indexObj.value + 1) % imageSources.length;
          imageEl.src = imageSources[indexObj.value];
          gsap.to(imageEl, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }

    // Set an interval (for example, every 5 seconds) to trigger the fade.
    const intervalId = setInterval(() => {
      fadeNextImage(heroImg1El, idx1);
      fadeNextImage(heroImg2El, idx2);
    }, 5000);

    // Clean up on unmount.
    return () => clearInterval(intervalId);
  }, []);

  const collectionSectionRef = useRef(null);
  const collectionHeadingRef = useRef(null);
  const collectionItemsRef = useRef([]);

  const trendingSectionRef = useRef(null);
  const trendingHeadingRef = useRef(null);
  const trendingItemsRef = useRef([]);

  const aboutSectionRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutTextRefs = useRef([]);

  // Sample data arrays to map over
  const categories = [
    { title: "Custom Jewelry", image: j2, link: "/jewelry" },
    { title: "Spotify Keychains", image: j3, link: "/spotify-keychain" },
    { title: "Gift Hampers", image: j4, link: "/build-hamper" },
    { title: "Personalized Gifts", image: j1, link: "/custom-gifts" },
  ];

  const trendingProducts = [
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
  ];

  useEffect(() => {
    /* 
      ---------------------------
      HERO SECTION ANIMATIONS
      ---------------------------
    */
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top center", // Adjust as needed
      },
    });

    // Fade up the text
    heroTimeline.from(heroTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Stagger in the two images
    heroTimeline.from(
      [heroImage1Ref.current, heroImage2Ref.current],
      {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    );

    /* 
      ---------------------------
      COLLECTION SECTION
      ---------------------------
    */
    const collectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: collectionSectionRef.current,
        start: "top 80%", // Animate once 20% into viewport
      },
    });

    collectionTimeline.from(collectionHeadingRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Stagger effect for each item in the collection grid
    collectionTimeline.from(
      collectionItemsRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.7"
    );

    /* 
      ---------------------------
      TRENDING PRODUCTS SECTION
      ---------------------------
    */
    const trendingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: trendingSectionRef.current,
        start: "top 80%",
      },
    });

    trendingTimeline.from(trendingHeadingRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    trendingTimeline.from(
      trendingItemsRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.7"
    );

    /* 
      ---------------------------
      ABOUT SECTION
      ---------------------------
    */
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 80%",
      },
    });

    aboutTimeline.from(aboutImageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    aboutTimeline.from(
      aboutTitleRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );

    aboutTimeline.from(
      aboutTextRefs.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);








  
  return (
    <div className="bg-white text-gray-800 font-light">
      {/*  */}
      {/* 
        ---------------------------
        HERO SECTION
        ---------------------------
      */}
      <div ref={heroSectionRef} className="lg:mt-16 md:px-[10vw]">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-3 lg:gap-4">
          {/* Image 1 */}
          <div
            ref={heroImage1Ref}
            className="col-span-1 row-span-1 order-1 md:order-2"
          >
            <img src={j1} alt="Hero" className="w-full h-full object-cover" />
          </div>

          {/* Image 2 */}
          <div
            ref={heroImage2Ref}
            className="col-span-1 max-h-[500px]  row-span-1 order-2 md:order-3"
          >
            <img src={j2} alt="Hero" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div
            ref={heroTextRef}
            className="col-span-2 row-span-1 order-3 md:order-1 bg-[#F8F5EE] px-6 md:px-8 lg:py-16 py-16 flex flex-col"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-thin mb-6 text-gray-900 tracking-tight leading-tight text-center md:text-left">
              Craft Your <br className="hidden lg:block" />
              <span>Perfect Gift</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed max-w-lg text-center md:text-left">
              Create personalized gifts, custom hampers, and unique jewelry
              pieces that tell your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
              <Button
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-700 hover:to-gray-500 transition-all duration-300 rounded-sm px-8 py-4 text-base md:text-lg font-light text-center  shadow-lg hover:shadow-xl"
                size="lg"
                asChild
              >
                <Link to="/ourcollection">Our Collection</Link>
              </Button>
              <Button
                className="bg-[#9a6e4e85] text-white hover:bg-[#9a6e4ea6] transition-colors duration-300 rounded-sm px-8 py-4 text-base md:text-lg font-light text-center border border-gray-300"
                size="lg"
                asChild
              >
                <Link to="/build-hamper">Build Your Gift</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <HorizontalScrollSection />
      {/* 
        ---------------------------
        NEW COLLECTION SECTION
        ---------------------------
      */}
      <section ref={collectionSectionRef} className="lg:py-24 py-5">
        <div className="container mx-auto px-6">
          <div ref={collectionHeadingRef} className="text-center mb-20">
            <h2 className="text-4xl font-thin mb-4 tracking-tight">
              Explore Our New Collection
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Aesthetic Decor and resin craft for every home
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (collectionItemsRef.current[index] = el)}
                className="group relative overflow-hidden"
              >
                <Link to={category.link} className="block">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-light mb-2">
                      {category.title}
                    </h3>
                    <div className="flex items-center justify-center text-sm text-gray-500 transition-colors duration-200 group-hover:text-gray-800">
                      <span>Discover</span>
                      <svg
                        className="h-4 w-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ---------------------------
        TRENDING PRODUCTS SECTION
        ---------------------------
      */}
      <section ref={trendingSectionRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div ref={trendingHeadingRef} className="text-center mb-20">
            <h2 className="text-4xl font-thin mb-4 tracking-tight">
              Trending Gifts
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our most loved pieces this season
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                ref={(el) => (trendingItemsRef.current[index] = el)}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <Link to={product.link} className="block">
                  <div className="relative overflow-hidden aspect-square mb-6 transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button className="bg-white text-gray-900 rounded-none px-8 py-3 font-light border border-gray-300 hover:bg-gray-100">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-light mb-1">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-none px-8 py-4 font-light"
              size="lg"
              asChild
            >
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 
        ---------------------------
        ABOUT SECTION
        ---------------------------
      */}
      <section ref={aboutSectionRef} className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div ref={aboutImageRef} className="md:w-1/2 max-w-[500px]">
              <img
                src="https://i.pinimg.com/736x/9b/1d/db/9b1ddbe8f238c33d2e5040a4b9c8e761.jpg"
                alt="About us"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2
                ref={aboutTitleRef}
                className="text-5xl font-thin mb-8 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-gray-300"
              >
                Our Story
              </h2>
              <p
                ref={(el) => (aboutTextRefs.current[0] = el)}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                Founded with a passion for craftsmanship and personal
                expression, we create gifts that celebrate life’s special
                moments. Each piece is thoughtfully designed to tell a unique
                story.
              </p>
              <p
                ref={(el) => (aboutTextRefs.current[1] = el)}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Our artisans combine traditional techniques with contemporary
                design to deliver exceptional quality that stands the test of
                time.
              </p>
              <div ref={(el) => (aboutTextRefs.current[2] = el)}>
                <Button
                  className="bg-transparent border border-fuchsia-300 text-fuchsia-300 hover:bg-fuchsia-300 hover:text-white transition-colors duration-300 rounded-none px-8 py-4 font-light"
                  size="lg"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ParallaxSection/> */}
    </div>
  );
}
