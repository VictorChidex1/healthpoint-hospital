import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-600 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Don't wait until it's too late. Schedule a check-up with our
              expert doctors today and take the first step towards a healthier
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-primary-700 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book an Appointment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-xl text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
