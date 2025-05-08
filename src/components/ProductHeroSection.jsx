// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProductHeroSection = () => {
  const bgRef = useRef(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut" } },
  };

  // Islamic pattern background animation
  useEffect(() => {
    // Create floating geometric patterns
    const islamicPatterns = [
      // Simple geometric shapes common in Islamic art
      '<path d="M12 2L2 12l10 10 10-10L12 2zm0 2l8 8-8 8-8-8 8-8z"/>',
      '<path d="M12 2L2 12l10 10 10-10L12 2zm0 2l8 8-8 8-8-8 8-8z" transform="rotate(45 12 12)"/>',
      '<circle cx="12" cy="12" r="10"/>',
      '<rect x="2" y="2" width="20" height="20" rx="2"/>',
    ];

    const colors = ["#f59e0b", "#d97706", "#b45309", "#92400e"];

    // Create animated background elements
    for (let i = 0; i < 25; i++) {
      const pattern = document.createElement("div");
      pattern.className = "islamic-pattern absolute";
      pattern.innerHTML = `
        <svg viewBox="0 0 24 24" class="w-full h-full" fill="${
          colors[Math.floor(Math.random() * colors.length)]
        }">
          ${islamicPatterns[Math.floor(Math.random() * islamicPatterns.length)]}
        </svg>
      `;

      pattern.style.width = `${Math.random() * 40 + 20}px`;
      pattern.style.height = pattern.style.width;
      pattern.style.left = `${Math.random() * 100}%`;
      pattern.style.top = `${Math.random() * 100}%`;
      pattern.style.opacity = Math.random() * 0.1 + 0.05;

      bgRef.current.appendChild(pattern);

      // Animate each pattern
      gsap.to(pattern, {
        rotation: Math.random() * 360,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 30 + 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Subtle gradient animation
    gsap.to(bgRef.current, {
      backgroundPosition: "50% 50%",
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  return (
    <section className="relative w-full overflow-y-auto min-h-screen flex items-start lg:items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      {/* Animated background */}
      <div
        ref={bgRef}
        className="fixed inset-0 overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 bg-[size:200%_200%]"
      />

      {/* Floating date seeds animation */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 16 + 8}px`,
              height: `${Math.random() * 16 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: "#d97706",
              borderRadius: "50%",
              opacity: 0.2,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full min-h-[90vh]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[90vh]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* YouTube Video Section */}
          <motion.div
            className="order-2 lg:order-1 h-full flex flex-col justify-center"
            variants={item}
          >
            <motion.div
              className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl border-4 border-white relative h-[300px] lg:h-[400px]"
              whileHover={{ scale: 1.01 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&playlist=YOUR_VIDEO_ID"
                title="Premium Ajwa Dates from Madinah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Play button overlay for mobile */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Video caption */}
            <motion.p
              className="text-center text-amber-800 mt-4 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Watch our dates being harvested in the orchards of Madinah
            </motion.p>
          </motion.div>

          {/* Product Details Section */}
          <div className="space-y-6 order-1 lg:order-2 h-full flex flex-col justify-center">
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900">
                <span className="font-arabic text-4xl sm:text-5xl md:text-6xl block mb-2">
                  تمر العجوة
                </span>
                Premium Ajwa Dates
              </h1>
              <p className="text-amber-600 text-base">
                From the blessed city of Madinah
              </p>
            </motion.div>

            <motion.div variants={item} className="flex items-center space-x-4">
              <div className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 text-amber-500 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-amber-800">
                  4.9 (248 reviews)
                </span>
              </div>
              <motion.div
                className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                In Stock • Ready to Ship
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-amber-100 relative overflow-hidden"
            >
              {/* Subtle animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                animate={{
                  borderColor: [
                    "rgba(245,158,11,0)",
                    "rgba(245,158,11,0.3)",
                    "rgba(245,158,11,0)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <div className="w-full relative mb-6 lg:mb-8 overflow-hidden rounded-lg bg-amber-50/50 p-3 lg:p-4">
                <img
                  src="https://atlantisdecora.com/public/products/prod-7127135.1631533533926ezgif.com-gif-maker%20(52).jpg"
                  alt="Ajwa Dates Package"
                  className="w-full h-auto max-h-[250px] object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent pointer-events-none"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-amber-900 font-bold text-2xl">1KG</div>
                  <div className="text-amber-600 text-sm">Net Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-900 font-bold text-2xl">
                    $24.99
                  </div>
                  <div className="text-amber-600 text-sm">Price</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center relative overflow-hidden text-base transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Buy Now
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-amber-500 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <section
          id="description"
          className="py-16 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Premium Ajwa Dates
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-amber-800">
                  Ajwa dates are a premium variety of dates grown exclusively in
                  the holy city of Madinah, Saudi Arabia. These dates are known
                  for their rich, dark color, soft texture, and distinctive
                  flavor with hints of caramel and prune.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">
                      Premium Quality, Hand-picked
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">Certified Halal</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">
                      Directly Imported from Madinah
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Nutritional Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">
                      Rich in essential minerals and vitamins
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">
                      High in dietary fiber
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-amber-800">
                      Natural source of energy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add this to your Tailwind config */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
        .font-arabic {
          font-family: "Amiri", serif;
        }
        .islamic-pattern {
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default ProductHeroSection;
