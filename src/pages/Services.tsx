import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import { ArrowRight, CheckCircle2, Activity, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHero from "../assets/images/services-hero.png";

export function Services() {
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
    <div className="min-h-screen bg-slate-50 relative">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 lg:py-40 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Medical Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 font-bold text-sm mb-6 border border-blue-400/30 backdrop-blur-sm">
              <Activity className="w-4 h-4 mr-2 text-blue-400" />
              World-Class Healthcare
            </div>

            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 leading-tight">
              Medical Excellence <br />
              <span className="text-blue-400">You Can Trust</span>
            </h1>

            <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl">
              From preventive care to complex surgeries, our specialized
              departments are equipped with cutting-edge technology and staffed
              by industry-leading experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => {
                  document
                    .getElementById("departments")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-xl text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                View Departments
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div
        id="departments"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon & Visual */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-primary-600" />
                  <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">
                    Department
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {service.name}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
                      Key Services
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
                      Conditions Treated
                    </h3>
                    <ul className="space-y-3">
                      {service.commonConditions.map((condition, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/book"
                  className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors group"
                >
                  Book an Appointment for {service.name}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need help choosing a specialist?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our patient support team is available 24/7 to guide you to the right
            department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/book"
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors"
            >
              Book General Consultation
            </Link>
          </div>
        </div>
      </div>

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
    </div>
  );
}
