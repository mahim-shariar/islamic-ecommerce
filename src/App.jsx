import Navbar from "./components/Navbar";
import ProductHeroSection from "./components/ProductHeroSection";

import CheckoutSection from "./components/CheckoutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <section id="hero" className="min-h-screen">
          <ProductHeroSection />
        </section>

        <section id="checkout" className="w-full">
          <CheckoutSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
