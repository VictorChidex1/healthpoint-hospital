import { motion } from "framer-motion";
import {
  UserCheck,
  Clock,
  Shield,
  Heart,
  Microscope,
  Stethoscope,
} from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Expert Specialists",
      description:
        "Our team includes board-certified physicians with years of experience in their respective fields.",
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-600" />,
      title: "Advanced Technology",
      description:
        "We utilize the latest medical equipment and diagnostic tools to ensure accurate treatments.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "24/7 Emergency Care",
      description:
        "Our emergency department is open round-the-clock to handle any medical crisis.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Patient-Centered Approach",
      description:
        "We treat the whole person, not just the symptoms, with compassion and respect.",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Safety First",
      description:
        "We adhere to the highest standards of safety and hygiene to protect our patients.",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      title: "Comprehensive Care",
      description:
        "From prevention to rehabilitation, we offer a full spectrum of healthcare services.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Why Choose Healthpoint?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We are committed to providing world-class healthcare with a personal
            touch. Here is what sets us apart.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
