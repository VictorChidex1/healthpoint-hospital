import { Link } from "react-router-dom";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  User,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2.5 rounded-xl shadow-lg shadow-primary-900/20">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Healthpoint
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Providing compassionate, world-class healthcare with a focus on
              patient well-being and medical innovation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>Our
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium mt-2"
                >
                  <User className="w-4 h-4 mr-2" /> Doctor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
              Get in Touch
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Visit Us</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    123 Healthpoint Ave, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Call Us</p>
                  <a
                    href="tel:+2348006092134"
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    +234 (0) 800-609-2134
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email Us</p>
                  <a
                    href="mailto:info@healthpoint.com"
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    info@healthpoint.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Healthpoint Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/terms"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/cookies"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
