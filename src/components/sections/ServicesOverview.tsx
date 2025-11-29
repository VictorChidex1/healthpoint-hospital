import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data/services";

export function ServicesOverview() {
  // Take only the first 4 services for the preview
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Our Medical Departments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We provide comprehensive care across a wide range of specialties.
            Our expert teams are dedicated to your health and well-being.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.name}
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {service.shortDescription}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-transform"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
