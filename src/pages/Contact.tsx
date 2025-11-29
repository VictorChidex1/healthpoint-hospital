import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: "Phone",
      details: ["+234 (0) 800-609-2134", "+234 (0) 800-889-1234"],
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: "Email",
      details: ["info@healthpoint.com", "support@healthpoint.com"],
      description: "Online support 24/7",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: "Office",
      details: ["123 Healthpoint Ave", "Victoria Island, Lagos"],
      description: "Come say hello at our HQ",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Working Hours",
      details: ["Mon-Fri: 8am - 8pm", "Sat-Sun: 9am - 5pm"],
      description: "Emergency: 24/7",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div className="bg-slate-900 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white sm:text-5xl mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Our friendly team is always here to
            chat.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {info.title}
              </h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 font-medium">
                    {info.title === "Phone" ? (
                      <a
                        href={`tel:${detail.replace(/\s+/g, "")}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {detail}
                      </a>
                    ) : info.title === "Email" ? (
                      <a
                        href={`mailto:${detail}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
              <p className="text-sm text-slate-400">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send us a message
              </h2>
              <p className="text-slate-500">
                We'll get back to you within 24 hours.
              </p>
            </div>

            {formState === "success" ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700">
                  Thank you for contacting us. We'll be in touch shortly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 text-green-700 font-medium hover:text-green-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Appointment Help</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728929694206!2d3.421678974570073!3d6.428864893562217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5c00e2e86!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709300000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "600px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Healthpoint Hospital Location"
            ></iframe>

            {/* Location Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Healthpoint Hospital HQ
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    123 Healthpoint Ave, Victoria Island, Lagos
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 text-sm font-bold mt-2 inline-block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
