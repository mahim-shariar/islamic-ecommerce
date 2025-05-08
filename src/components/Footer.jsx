const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-amber-500 to-amber-700 text-white overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="white">
          <path
            d="M50 0L0 50l50 50 50-50L50 0zm0 10l40 40-40 40-40-40 40-40z"
            transform="rotate(45 50 50)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ajwa Dates</h3>
            <p className="text-amber-100">
              Premium quality dates imported directly from Madinah, Saudi
              Arabia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("description")}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("checkout")}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Order Now
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-amber-100">
              <li>Email: info@ajwadates.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800/50 mt-8 pt-8 text-center text-amber-100">
          <p>
            &copy; {new Date().getFullYear()} Ajwa Dates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
