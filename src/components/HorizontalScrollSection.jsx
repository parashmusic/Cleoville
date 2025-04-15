import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Kept for the item entrance animations
import silk from "../assets/silk.jpg";
import j1 from "../assets/jew31.jpg";
import j2 from "../assets/jew2.webp";
import j3 from "../assets/jew3.webp";
import j4 from "../assets/jew4.webp";
import heroImage from "../assets/jew31.jpg";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const progressRef = useRef(null);

  // Sample categories data
  const categories = [
    {
      title: "Personalized Jewelry",
      description: "Custom pieces that tell your story",
      image: j1,
      link: "/jewelry"
    },
    {
      title: "Spotify Keychains",
      description: "Your favorite songs in resin",
      image: j3,
      link: "/spotify-keychain"
    },
    {
      title: "Luxury Hampers",
      description: "Curated gift collections",
      image: j4,
      link: "/build-hamper"
    },
    {
      title: "Resin Art",
      description: "Unique home decor pieces",
      image: j2,
      link: "/resin-art"
    },
    {
      title: "Engraved Gifts",
      description: "Special messages preserved",
      image: j1,
      link: "/engraved-gifts"
    },
    {
      title: "Seasonal Collections",
      description: "Limited edition designs",
      image: j3,
      link: "/seasonal"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const items = itemsRef.current;

    // Calculate the total width of the original items only.
    const getTotalWidth = () => {
      let totalWidth = 0;
      items.forEach((item) => {
        if (item) {
          totalWidth += item.offsetWidth + parseFloat(getComputedStyle(item).marginRight);
        }
      });
      return totalWidth;
    };

    const originalWidth = getTotalWidth();

    // Set slider width to double the original width (to accommodate duplicate items)
    gsap.set(slider, { width: originalWidth * 2 });

    // Infinite auto-scroll tween
    let autoScrollTween;
    const setupAutoScroll = () => {
      const duration = 20; // seconds for one loop
      autoScrollTween = gsap.to(slider, {
        x: -originalWidth, // animate by the width of one set for a seamless loop
        duration: duration,
        ease: "none",
        repeat: -1,
        onUpdate: function () {
          // Rename variable for clarity to avoid shadowing the outer 'progress'
          const scrollProgress = this.progress();
          gsap.set(progressRef.current, { scaleX: scrollProgress });
        }
      });
    };

    // Pause auto-scroll when hovering over the section
    const pauseAutoScroll = () => {
      if (autoScrollTween) autoScrollTween.pause();
    };

    const resumeAutoScroll = () => {
      if (autoScrollTween) autoScrollTween.resume();
    };

    setupAutoScroll();
    sectionRef.current.addEventListener("mouseenter", pauseAutoScroll);
    sectionRef.current.addEventListener("mouseleave", resumeAutoScroll);

    // Animate items on entering the viewport (only for the original set)
    items.forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? 100 : -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => {
      if (autoScrollTween) autoScrollTween.kill();
      sectionRef.current?.removeEventListener("mouseenter", pauseAutoScroll);
      sectionRef.current?.removeEventListener("mouseleave", resumeAutoScroll);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="relative py-13 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-thin mb-4 tracking-tight">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our curated categories of handcrafted gifts
          </p>
        </div>

        {/* Progress indicator */}
        <div className="h-px bg-gray-200 mb-8 relative">
          <div 
            ref={progressRef} 
            className="absolute top-0 left-0 h-full w-full bg-gray-900 origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Horizontal slider */}
      <div  ref={sectionRef} className="relative h-[300px] lg:h-[500px]">
        <div 
          ref={sliderRef}
          className="absolute left-0 top-0 h-full flex items-center gap-8 px-[5vw] will-change-transform"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className="group relative lg:w-[300px] lg:h-[400px] w-[200px] h-[250px] flex-shrink-0 overflow-hidden hover:scale-95 transition-transform duration-500"
            >
              <Link to={category.link} className="block h-full">
                <div className="relative h-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  lg:bg-gradient-to-t lg:from-black/70 lg:via-black/30 lg:to-transparent  bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-light text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <span className="text-white text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Collection
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Duplicate items for a seamless infinite scroll */}
          {categories.map((category, index) => (
            <div
              key={`duplicate-${index}`}
              className="group relative lg:w-[300px] lg:h-[400px] w-[200px] h-[250px] flex-shrink-0 overflow-hidden hover:scale-95 transition-transform duration-500"
              aria-hidden="true"
            >
              <div className="relative h-full">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0  lg:bg-gradient-to-t lg:from-black/70 lg:via-black/30 lg:to-transparent  bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-light text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <span className="text-white text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Collection
                    <svg
                      className="h-4 w-4 ml-2"
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
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 text-center">
        <Button
          className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-none px-8 py-4 font-light"
          size="lg"
          asChild
        >
          <Link to="/collections">View All Collections</Link>
        </Button>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
