import { useState } from 'react';
import { doctors } from '../../data/doctors';
import { Search, Stethoscope } from 'lucide-react';
import { cn } from '../layout/Navbar';

interface DoctorSelectionProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function DoctorSelection({ selectedId, onSelect }: DoctorSelectionProps) {
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  
  const specialties = ['All', ...new Set(doctors.map(d => d.specialty))];

  const filteredDoctors = specialtyFilter === 'All' 
    ? doctors 
    : doctors.filter(d => d.specialty === specialtyFilter);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Choose your Specialist</h2>
        <p className="text-slate-500 mt-2">Select a doctor to view their availability</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {specialties.map((spec) => (
          <button
            key={spec}
            onClick={() => setSpecialtyFilter(spec)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              specialtyFilter === spec
                ? "bg-primary-600 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {spec}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => onSelect(doctor.id)}
            className={cn(
              "group relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg",
              selectedId === doctor.id 
                ? "border-primary-600 bg-blue-50/50 ring-1 ring-primary-600" 
                : "border-slate-200 bg-white hover:border-primary-300"
            )}
          >
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" 
            />
            <div className="ml-4">
              <h3 className="font-bold text-slate-900">{doctor.name}</h3>
              <div className="flex items-center text-primary-600 text-sm font-medium mt-0.5">
                <Stethoscope className="w-3 h-3 mr-1" />
                {doctor.specialty}
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{doctor.description}</p>
            </div>
            
            <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary-600">
              <Search className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}