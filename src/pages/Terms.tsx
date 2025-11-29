import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  AlertCircle,
  Calendar,
  Lock,
  AlertTriangle,
  Mail,
} from "lucide-react";

export function Terms() {
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
            Terms of Service
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
            <div className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 mb-10 backdrop-blur-sm">
              <div className="bg-blue-100 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-blue-900 font-bold text-lg m-0 mb-2">
                  Medical Disclaimer
                </h3>
                <p className="text-blue-800/90 m-0 text-base leading-relaxed">
                  The content on this website is for informational purposes only
                  and is not a substitute for professional medical advice,
                  diagnosis, or treatment. Always seek the advice of your
                  physician or other qualified health provider with any
                  questions you may have regarding a medical condition.
                </p>
              </div>
            </div>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                By accessing and using the Healthpoint Hospital website and
                services, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                2. Use of Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                You agree to use our services only for lawful purposes and in
                accordance with these Terms. You are prohibited from:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "Using the service in any way that violates applicable laws or regulations.",
                  "Attempting to interfere with the proper working of the website.",
                  "Impersonating another person or entity.",
                  "Collecting or harvesting any personally identifiable information.",
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
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                3. Appointment Booking
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                When booking an appointment through our portal, you agree to
                provide accurate and complete information. We reserve the right
                to cancel or reschedule appointments based on doctor
                availability or emergency situations.
              </p>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Lock className="w-6 h-6 text-primary-600" />
                </div>
                4. Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Your privacy is important to us. Please review our Privacy
                Policy to understand how we collect, use, and disclose
                information about you. By using our services, you consent to our
                data practices.
              </p>
            </section>

            <section className="mb-10 border-b border-slate-100 pb-10 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-primary-600" />
                </div>
                5. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Healthpoint Hospital shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your access to or use of, or inability to access
                or use, the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                6. Contact Us
              </h2>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <p className="text-slate-600 leading-relaxed mb-6">
                  If you have any questions about these Terms, please contact us
                  at:
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
                        href="mailto:legal@healthpoint.com"
                        className="text-primary-600 font-bold hover:underline"
                      >
                        legal@healthpoint.com
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
