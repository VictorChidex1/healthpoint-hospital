import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Calendar,
  CreditCard,
  FileText,
  User,
  MessageCircle,
  HeartPulse,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = [
    {
      id: "appointments",
      name: "Appointments",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "billing",
      name: "Billing & Insurance",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "records",
      name: "Medical Records",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "portal",
      name: "Patient Portal",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "emergency",
      name: "Emergency Care",
      icon: <HeartPulse className="w-5 h-5" />,
    },
    {
      id: "visitors",
      name: "Visitor Info",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      category: "appointments",
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment directly through our website by clicking the 'Book Appointment' button in the top right corner. Alternatively, you can call our reception desk.",
    },
    {
      category: "appointments",
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, you can reschedule or cancel your appointment up to 24 hours in advance through the Patient Portal or by contacting us directly.",
    },
    {
      category: "billing",
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans. Please visit our Insurance page or contact our billing department for a specific list of accepted providers.",
    },
    {
      category: "billing",
      question: "How can I pay my bill?",
      answer:
        "Bills can be paid online through the Patient Portal, by mail, or in person at the hospital. We accept credit cards, checks, and cash.",
    },
    {
      category: "records",
      question: "How can I access my medical records?",
      answer:
        "You can view and download your medical records securely through the Patient Portal. For physical copies, please submit a request to our Medical Records department.",
    },
    {
      category: "portal",
      question: "I forgot my password. How do I reset it?",
      answer:
        "Click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password.",
    },
    {
      category: "emergency",
      question: "When should I go to the Emergency Room?",
      answer:
        "You should visit the ER for life-threatening conditions such as chest pain, severe difficulty breathing, sudden severe pain, or uncontrolled bleeding. For non-emergencies, please visit our Urgent Care center.",
    },
    {
      category: "visitors",
      question: "What are the visiting hours?",
      answer:
        "General visiting hours are from 10:00 AM to 8:00 PM daily. ICU visiting hours may vary. Please check with the nursing station for specific unit policies.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-5xl mb-6"
          >
            How can we help you?
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl leading-5 text-white placeholder-slate-300 focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-lg backdrop-blur-sm transition-all"
              placeholder="Search for answers (e.g., 'booking', 'insurance')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`p-4 rounded-xl text-center transition-all ${
              activeCategory === "all"
                ? "bg-primary-600 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm"
            }`}
          >
            <span className="font-bold block">All Topics</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-4 rounded-xl text-center transition-all flex flex-col items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm"
              }`}
            >
              {cat.icon}
              <span className="font-bold block text-sm sm:text-base">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                No results found for "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-primary-600 font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 bg-blue-50 rounded-3xl p-8 sm:p-12 text-center border border-blue-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Still need help?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to assist you with any questions or concerns.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
