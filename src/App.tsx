import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { BookingWizard } from "./components/booking/BookingWizard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { LoginPage } from "./pages/LoginPage";
import { Doctors } from "./pages/Doctors"; // <--- New Import
import { AppointmentProvider } from "./context/AppointmentContext";
import { AuthProvider } from "./context/AuthContext"; // <--- New Import
import { ProtectedRoute } from "./components/layout/ProtectedRoute"; // <--- New Import
import { DoctorProfile } from "./pages/DoctorProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        {" "}
        {/* Wrap EVERYTHING in Auth */}
        <AppointmentProvider>
          <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            <Navbar />

            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                  </main>
                }
              />

              <Route
                path="/book"
                element={
                  <main className="min-h-screen bg-gray-50">
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
                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 z-20">
                      <BookingWizard />
                    </div>
                  </main>
                }
              />

              {/* Login Route */}
              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/doctors"
                element={
                  <div className="pt-0">
                    <Doctors />
                  </div> // Wrap the old Doctors component
                }
              />
              <Route path="/doctors/:doctorId" element={<DoctorProfile />} />

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
        </AppointmentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
