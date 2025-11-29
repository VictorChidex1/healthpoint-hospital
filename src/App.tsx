import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AppointmentProvider } from './context/AppointmentContext';

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                {/* We will add Department Section here later */}
              </main>
            } />
            <Route path="/book" element={<div className="pt-24 text-center">Booking Wizard Coming Soon...</div>} />
            <Route path="/doctors" element={<div className="pt-24 text-center">Doctors List Coming Soon...</div>} />
          </Routes>
        </div>
      </AppointmentProvider>
    </Router>
  );
}

export default App;