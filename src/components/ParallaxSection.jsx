// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // Replace with the path to your parallax background image
// import parallaxBg from "../assets/jew4.webp"; 

// export default function ParallaxSection() {
//   // Refs to DOM elements for GSAP animations
//   const parallaxSectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     /*
//       Parallax-like background movement:
//       - Moves backgroundPositionY from 0% to ~40% over the scroll
//       - 'scrub: true' allows the animation to track the scroll smoothly
//     */
//     gsap.fromTo(
//       parallaxSectionRef.current,
//       { backgroundPositionY: "0%" },
//       {
//         backgroundPositionY: "40%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: parallaxSectionRef.current,
//           start: "top bottom",  // when the top of this section hits the bottom of the viewport
//           end: "bottom top",    // when the bottom of this section hits the top of the viewport
//           scrub: 1,            // smooth scrubbing
//         },
//       }
//     );

//     /*
//       Fade/slide in text content as it enters the viewport
//     */
//     gsap.from(headingRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1.0,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: parallaxSectionRef.current,
//         start: "top 80%", // 80% means it begins animating slightly before fully in view
//       },
//     });

//     gsap.from(paragraphRef.current, {
//       y: 40,
//       opacity: 0,
//       duration: 1.0,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: parallaxSectionRef.current,
//         start: "top 75%",
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={parallaxSectionRef}
//       className="relative h-[80vh] md:h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${parallaxBg})`,
//       }}
//     >
//       {/* Semi-transparent overlay so text is more legible */}
//       {/* <div className="absolute inset-0 bg-black/30" /> */}

//       {/* Centered content */}
//       <div className="relative z-10 text-white text-center px-4">
//         <h2 
//           ref={headingRef} 
//           className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
//         >
//           A Creative Parallax Experience
//         </h2>
//         <p
//           ref={paragraphRef}
//           className="mx-auto max-w-2xl text-lg md:text-xl font-light leading-relaxed"
//         >
//           As you scroll through, experience our background and content
//           moving at different speeds for a stunning visual effect.
//         </p>
//       </div>
//     </section>
//   );
// }



import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const modelImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the model image to create a parallax effect
    gsap.to(modelImageRef.current, {
      y: -20, // Adjust this value as needed for a stronger or subtler effect
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // animation begins when section top reaches viewport bottom
        end: "bottom top",   // animation ends when section bottom reaches viewport top
        scrub: true,         // links the animation progress to scroll progress
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-2/3 mx-auto bg-white py-24 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between relative"
    >
      {/* LEFT: Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-sm tracking-widest uppercase text-gray-600 mb-4">
          Exquisite Curation
        </p>
        <h1 className="text-4xl sm:text-5xl font-light leading-tight text-gray-900 mb-8">
          Design<br />
          Innovation,<br />
          Crafted<br />
          Mastery, for<br />
          You
        </h1>
        <button className="bg-[#DCA98B] hover:bg-[#e0b196] text-sm tracking-wide px-6 py-3 text-white font-medium transition-all duration-300">
          Know More
        </button>
      </div>

      {/* RIGHT: Image Composition */}
      <div className="lg:w-1/2 relative mt-16 lg:mt-0">
        {/* Model image with parallax effect */}
        <img
          ref={modelImageRef}
          src="https://anmoljewellers.in/wp-content/uploads/2024/12/transform-4.jpg"
          alt="Model wearing jewelry"
          className="w-full max-w-md ml-auto rounded-sm"
        />
      </div>
    </section>
  );
}

