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
    <footer className="bg-slate-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-700 pb-10">
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Healthpoint</span>
            </Link>
            <p className="text-sm text-slate-400 mt-2 pr-8">
              Providing compassionate, world-class healthcare with a focus on
              patient well-being and innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0 mr-2" />
                <span className="text-slate-400">
                  123 Healthpoint Ave, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0 mr-2" />
                <span className="text-slate-400">+234 (0) 800-CARE</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mr-2" />
                <span className="text-slate-400">info@healthpoint.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Admin Portal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Portal
            </h3>
            <Link
              to="/login"
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-6"
            >
              <User className="w-4 h-4 mr-2" /> Doctor Login
            </Link>

            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-8 pt-4 flex justify-between items-center flex-col md:flex-row text-center md:text-left">
          <p className="text-sm text-slate-500 order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Healthpoint Hospital. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
