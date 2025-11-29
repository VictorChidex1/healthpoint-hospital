import { motion } from "framer-motion";
import { Eye, Database, Shield, UserCheck, Mail } from "lucide-react";

export function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-32 px-4 sm:px-6 lg:px-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-300"
          >
            Last updated: November 29, 2025
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-blue-400 to-primary-600"></div>

          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-primary-600 hover:prose-a:text-primary-700">
            <p className="text-lg leading-relaxed mb-10">
              At Healthpoint Hospital, we are committed to protecting your
              privacy and ensuring the security of your personal health
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data.
            </p>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                1. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                We collect various types of information to provide better
                healthcare services to you:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "Personal Information: Name, date of birth, contact details.",
                  "Medical Information: Medical history, test results, prescriptions.",
                  "Technical Data: IP address, browser type, and usage data when you visit our website.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Your data is used primarily to provide medical care, schedule
                appointments, and communicate with you about your health. We may
                also use anonymized data for research and service improvement.
              </p>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                3. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                We implement robust security measures, including encryption and
                strict access controls, to protect your personal information
                from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <UserCheck className="w-6 h-6 text-primary-600" />
                </div>
                4. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                You have the right to access, correct, or request the deletion
                of your personal data. You can also object to the processing of
                your data for specific purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                5. Contact Us
              </h2>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <p className="text-slate-600 leading-relaxed mb-6">
                  If you have any questions about our Privacy Policy, please
                  contact our Data Protection Officer at:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Email Us
                      </p>
                      <a
                        href="mailto:privacy@healthpoint.com"
                        className="text-primary-600 font-bold hover:underline"
                      >
                        privacy@healthpoint.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Call Us
                      </p>
                      <a
                        href="tel:+2348004014014"
                        className="text-primary-600 font-bold hover:underline"
                      >
                        +234 (0) 800-401-4014
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
