import { useState } from 'react';
import { format, addDays, startOfToday, isSameDay, addMinutes, parse } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { doctors } from '../../data/doctors';
import { cn } from '../layout/Navbar';

interface DateSelectionProps {
  selectedDoctorId: string | null;
  onBack: () => void;
  onSelect: (date: Date, time: string) => void;
}

export function DateSelection({ selectedDoctorId, onBack, onSelect }: DateSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // 1. Find the doctor to get their available days
  const doctor = doctors.find(d => d.id === selectedDoctorId);
  const availableDays = doctor?.availableDays || []; 

  // 2. Generate the next 14 days
  const today = startOfToday();
  const next14Days = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  // 3. Time Slot Logic
  const generateTimeSlots = () => {
    if (!selectedDate) return [];
    
    // Start at 9:00 AM, End at 5:00 PM
    const startTime = parse('09:00', 'HH:mm', selectedDate);
    const endTime = parse('18:00', 'HH:mm', selectedDate);
    
    const slots = [];
    let current = startTime;

    while (current < endTime) {
      slots.push(format(current, 'HH:mm')); 
      current = addMinutes(current, 60); 
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-sm text-slate-400 hover:text-slate-600 mr-auto">
          &larr; Change Doctor
        </button>
        <div className="flex items-center gap-2">
          <img src={doctor?.image} alt="doc" className="w-8 h-8 rounded-full border border-slate-200" />
          <span className="font-semibold text-slate-700"> {doctor?.name}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Col: The Calendar */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary-600" />
            Select Date
          </h3>
          
          <div className="grid grid-cols-4 gap-3">
            {next14Days.map((date) => {
              const dayName = format(date, 'EEEE');
              const isAvailable = availableDays.includes(dayName);
              const isSelected = selectedDate && isSameDay(date, selectedDate);

              return (
                <button
                  key={date.toString()}
                  disabled={!isAvailable}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTime(null); 
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                    isSelected 
                      ? "border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600" 
                      : isAvailable 
                        ? "border-slate-200 bg-white hover:border-primary-300 hover:shadow-sm"
                        : "border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed"
                  )}
                >
                  <span className="text-xs font-medium uppercase">{format(date, 'EEE')}</span>
                  <span className="text-lg font-bold">{format(date, 'd')}</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            * Gray dates are non-working days for this doctor
          </p>
        </div>

        {/* Right Col: Time Slots */}
        <div className={cn("transition-opacity duration-300", !selectedDate ? "opacity-50 pointer-events-none" : "opacity-100")}>
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-600" />
            Available Times
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "py-2 px-3 text-sm font-medium rounded-lg border transition-all",
                  selectedTime === time
                    ? "bg-primary-600 text-white border-primary-600 shadow-md transform scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary-400"
                )}
              >
                {time}
              </button>
            ))}
          </div>
          
          {!selectedDate && (
             <div className="text-sm text-slate-400 text-center mt-8 italic">
               Select a date first to see times
             </div>
          )}
        </div>
      </div>

      {/* Confirmation Button */}
      <div className="mt-10 flex justify-end pt-6 border-t border-slate-100">
        <button
          disabled={!selectedDate || !selectedTime}
          onClick={() => selectedDate && selectedTime && onSelect(selectedDate, selectedTime)}
          className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
        >
          Continue
          <span className="text-xl">&rarr;</span>
        </button>
      </div>
    </div>
  );
}