import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Shield, Activity } from "lucide-react";
import heroImage from "../assets/images/hero.png"; // Reusing hero image for now
import hospitalImage from "../assets/images/hospital.png";

export function About() {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Qualified Doctors", value: "50+" },
    { label: "Satisfied Patients", value: "10k+" },
    { label: "Hospital Rooms", value: "100+" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description:
        "We treat every patient with empathy, kindness, and respect, understanding that healing begins with caring.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in medical care, continuously improving our skills and technology.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Integrity",
      description:
        "We operate with honesty and transparency, ensuring that our patients' trust is never compromised.",
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: "Innovation",
      description:
        "We embrace the latest medical advancements to provide state-of-the-art treatments and solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 lg:py-40 overflow-hidden min-h-[500px] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={heroImage}
            alt="Hospital Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              About <span className="text-primary-500">Healthpoint</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Dedicated to providing world-class healthcare with a personal
              touch. We believe in a future where quality medical care is
              accessible, compassionate, and advanced.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                To improve the health and well-being of the communities we serve
                by providing exceptional, patient-centered care. We are
                committed to clinical excellence, safety, and a compassionate
                healing environment.
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the region's most trusted healthcare partner, recognized
                for our medical expertise, innovative treatments, and unwavering
                dedication to our patients' lives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={hospitalImage}
                  alt="Hospital Interior"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary-600 p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white font-bold text-2xl">
                  "Your Health,
                  <br />
                  Our Priority"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-primary-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every
              interaction we have with our patients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200 group"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary-50 transition-colors duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
            Ready to experience world-class care?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Our team of specialists is ready to help you achieve your best
            health. Schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/doctors"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300"
            >
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
