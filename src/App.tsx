import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { BookingWizard } from "./components/booking/BookingWizard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { LoginPage } from "./pages/LoginPage";
import { DoctorProfile } from "./pages/DoctorProfile";
import { Doctors } from "./pages/Doctors";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { Help } from "./pages/Help";
import { Footer } from "./components/layout/Footer"; // NEW IMPORT
import { AppointmentProvider } from "./context/AppointmentContext";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppointmentProvider>
          {/* Added flex flex-col and min-h-screen to make the footer stick */}
          <div className="min-h-screen bg-gray-50 font-sans text-slate-900 flex flex-col">
            <Navbar />
            {/* flex-grow pushes the footer down */}
            <div className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />

                <Route
                  path="/book"
                  element={
                    <main className="min-h-screen bg-gray-50">
                      {/* Blue Header */}
                      <div className="bg-primary-600 pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                        </div>
                        <div className="relative max-w-7xl mx-auto text-center z-10">
                          <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
                            Book an Appointment
                          </h1>
                          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                            Select a specialist and schedule your visit in less
                            than 2 minutes.
                          </p>
                        </div>
                      </div>
                      {/* Wizard Container */}
                      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 z-20">
                        <BookingWizard />
                      </div>
                    </main>
                  }
                />

                {/* Doctor Listing and Profile Routes */}
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:doctorId" element={<DoctorProfile />} />

                {/* Services Page */}
                <Route path="/services" element={<Services />} />

                {/* Contact Page */}
                <Route path="/contact" element={<Contact />} />

                {/* About Page */}
                <Route path="/about" element={<About />} />

                {/* Terms Page */}
                <Route path="/terms" element={<Terms />} />

                {/* Privacy Page */}
                <Route path="/privacy" element={<Privacy />} />

                {/* Help Center Page */}
                <Route path="/help" element={<Help />} />

                {/* Authentication Routes */}
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Admin Route */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <Footer />{" "}
            {/* Footer is now outside Routes, always at the bottom */}
          </div>
        </AppointmentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
