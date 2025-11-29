import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoctorSelection } from './DoctorSelection';
import { DateSelection } from './DateSelection';
import { PatientForm } from './PatientForm';
import { Check, CalendarCheck } from 'lucide-react';
import { cn } from '../layout/Navbar';
import { useAppointments } from '../../context/AppointmentContext';
import { nanoid } from 'nanoid';

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState<{date: Date | null, time: string | null}>({
    date: null, 
    time: null
  });

  // Use our Global State to save the appointment
  const { addAppointment } = useAppointments();

  const steps = [
    { id: 1, name: 'Select Doctor' },
    { id: 2, name: 'Choose Date' },
    { id: 3, name: 'Your Details' },
  ];

  const handleFinalSubmit = (formData: any) => {
    if (!selectedDoctor || !bookingData.date || !bookingData.time) return;

    // 1. Create the final object
    const newAppointment = {
      id: nanoid(),
      doctorId: selectedDoctor,
      patientName: formData.name,
      patientEmail: formData.email,
      date: bookingData.date.toISOString(),
      timeSlot: bookingData.time!,
      reason: formData.reason,
      status: 'confirmed' as const, // Type assertion for TypeScript
    };

    // 2. Save to Context (LocalStorage)
    addAppointment(newAppointment);

    // 3. Move to Success Screen (Step 4)
    setCurrentStep(4);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
      {/* Progress Header (Hidden on Success Step 4) */}
      {currentStep < 4 && (
        <div className="bg-slate-50 border-b border-slate-100 p-6 relative">
          <div className="flex justify-between items-center max-w-2xl mx-auto relative">
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[75%] h-0.5 bg-slate-200 -z-0 hidden md:block" />
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative z-10 w-32">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2",
                  currentStep > step.id ? "bg-green-500 border-green-500 text-white" :
                  currentStep === step.id ? "bg-primary-600 border-primary-600 text-white shadow-lg scale-110" :
                  "bg-white border-slate-300 text-slate-400"
                )}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                </div>
                <span className={cn(
                  "mt-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                  currentStep === step.id ? "text-primary-700" : "text-slate-400"
                )}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Content Area */}
      <div className="flex-1 p-6 md:p-10 bg-white">
        <AnimatePresence mode="wait">
          {/* STEP 1: DOCTOR */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DoctorSelection 
                selectedId={selectedDoctor} 
                onSelect={(id) => {
                  setSelectedDoctor(id);
                  setCurrentStep(2);
                }} 
              />
            </motion.div>
          )}
          
          {/* STEP 2: DATE */}
          {currentStep === 2 && (
            <motion.div
               key="step2"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
            >
              <DateSelection 
                selectedDoctorId={selectedDoctor}
                onBack={() => setCurrentStep(1)}
                onSelect={(date, time) => {
                  setBookingData({ date, time });
                  setCurrentStep(3);
                }}
              />
            </motion.div>
          )}

          {/* STEP 3: FORM */}
          {currentStep === 3 && (
            <motion.div
               key="step3"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
            >
              <PatientForm 
                onBack={() => setCurrentStep(2)}
                onSubmit={handleFinalSubmit}
              />
            </motion.div>
          )}

          {/* STEP 4: SUCCESS SCREEN */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CalendarCheck className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
              <p className="text-lg text-slate-600 max-w-md mx-auto">
                We have sent a confirmation email to your inbox. Dr. {selectedDoctor} will see you soon.
              </p>
              
              <div className="mt-10 p-6 bg-slate-50 rounded-xl max-w-sm mx-auto border border-slate-200">
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">Appointment ID</p>
                <p className="font-mono text-xl text-slate-800 tracking-widest">{nanoid().slice(0, 8).toUpperCase()}</p>
              </div>

              <button 
                onClick={() => window.location.href = '/'}
                className="mt-10 bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg"
              >
                Return Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}