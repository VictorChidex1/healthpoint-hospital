import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoctorSelection } from './DoctorSelection';
import { ChevronRight, Check } from 'lucide-react';
import { cn } from '../../components/layout/Navbar';

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const steps = [
    { id: 1, name: 'Select Doctor' },
    { id: 2, name: 'Choose Date' },
    { id: 3, name: 'Your Details' },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
      {/* Progress Header */}
      <div className="bg-slate-50 border-b border-slate-100 p-6 relative">
        <div className="flex justify-between items-center max-w-2xl mx-auto relative">
          
          {/* THE FIXED LINE: Shorter width (75%) and centered */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[75%] h-0.5 bg-slate-200 -z-0 hidden md:block" />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative z-10 w-32"> {/* Added w-32 for better spacing */}
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

      {/* Dynamic Content Area */}
      <div className="flex-1 p-6 md:p-10 bg-white">
        <AnimatePresence mode="wait">
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
          
          {currentStep === 2 && (
            <motion.div
               key="step2"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="text-center py-20"
            >
              <h2 className="text-2xl font-bold text-slate-800">Calendar Logic Coming Next...</h2>
              <button onClick={() => setCurrentStep(1)} className="text-primary-600 underline mt-4">Go Back</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}