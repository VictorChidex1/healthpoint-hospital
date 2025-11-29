import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-primary-700 font-medium text-sm mb-6 border border-blue-200"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
              Available 24/7 for Emergency Care
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl"
            >
              World-Class Care <br />
              <span className="text-primary-600">Right Near You</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-base text-slate-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed"
            >
              Experience modern healthcare at Healthpoint. Our expert team of specialists is ready to provide the compassionate, personalized care you deserve.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:text-lg md:px-10"
              >
                Book a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8"
            >
              {[
                { label: 'Specialists', value: '15+' },
                { label: 'Patients', value: '15k+' },
                { label: 'Rating', value: '4.9/5' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Hospital Interior"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-semibold text-slate-800">Doctors Online Now</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}