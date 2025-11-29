import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BookingWizard } from './components/booking/BookingWizard';
import { AppointmentProvider } from './context/AppointmentContext';

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
          <Navbar />
          
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <main>
                <Hero />
                {/* Services section will go here later */}
              </main>
            } />

            {/* The Revamped Booking Route */}
            <Route path="/book" element={
              <main className="min-h-screen bg-gray-50">
                {/* 1. The Blue Header Section */}
                <div className="bg-primary-600 pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                  {/* Decorative background circles */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                  </div>

                  {/* Header Content */}
                  <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
                      Book an Appointment
                    </h1>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                      Select a specialist and schedule your visit in less than 2 minutes.
                    </p>
                  </div>
                </div>

                {/* 2. The Overlapping Wizard Container */}
                {/* -mt-20 pulls the card UP into the blue section */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 z-20">
                  <BookingWizard />
                </div>
              </main>
            } />

            {/* Doctors Route Placeholder */}
            <Route path="/doctors" element={
              <div className="pt-32 text-center px-4">
                <h1 className="text-3xl font-bold text-slate-800">Our Specialists</h1>
                <p className="text-slate-500 mt-2">Full directory coming soon...</p>
              </div>
            } />
          </Routes>
        </div>
      </AppointmentProvider>
    </Router>
  );
}

export default App;