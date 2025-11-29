import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Hero } from "../components/sections/Hero";
import { ServicesOverview } from "../components/sections/ServicesOverview";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Testimonials } from "../components/sections/Testimonials";
import { CtaSection } from "../components/sections/CtaSection";

export function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
