import { useState } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { Calendar, XCircle, CheckCircle, Clock, Search } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { doctors } from '../data/doctors'; // Import doctors to lookup names

export function AdminDashboard() {
  const { appointments, cancelAppointment } = useAppointments();
  const [filter, setFilter] = useState('');

  // Simple stats calculation
  const stats = [
    { label: 'Total Bookings', value: appointments.length, icon: Calendar, color: 'bg-blue-500' },
    { label: 'Confirmed', value: appointments.filter(a => a.status === 'confirmed').length, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Cancelled', value: appointments.filter(a => a.status === 'cancelled').length, icon: XCircle, color: 'bg-red-500' },
  ];

  // Filter logic (Search by Patient Name OR Doctor Name)
  const filteredAppointments = appointments.filter(apt => {
    const doctor = doctors.find(d => d.id === apt.doctorId);
    const doctorName = doctor?.name.toLowerCase() || '';
    const patientName = apt.patientName.toLowerCase();
    const searchTerm = filter.toLowerCase();

    return patientName.includes(searchTerm) || doctorName.includes(searchTerm);
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage hospital bookings and schedule.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
              <div className={`${stat.color} p-4 rounded-lg text-white mr-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Table Header / Filter */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Appointments</h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search patient or doctor..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Doctor</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((apt) => {
                    // Find the doctor details for this appointment
                    const doc = doctors.find(d => d.id === apt.doctorId);

                    return (
                      <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-slate-900">{apt.patientName}</p>
                          <p className="text-xs text-slate-500">{apt.patientEmail}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={doc?.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-slate-700 font-medium">
                              {doc ? doc.name : 'Unknown Doctor'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span>{format(parseISO(apt.date), 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{apt.timeSlot}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            apt.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {apt.status === 'confirmed' ? 'Confirmed' : 'Cancelled'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {apt.status === 'confirmed' && (
                            <button 
                              onClick={() => cancelAppointment(apt.id)}
                              className="text-red-600 hover:text-red-900 text-xs font-medium border border-red-200 px-3 py-1 rounded hover:bg-red-50 transition-colors"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}