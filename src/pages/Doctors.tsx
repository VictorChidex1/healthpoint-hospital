import { useState } from "react";
import { doctors } from "../data/doctors";
import { Stethoscope, Search, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../components/layout/Navbar";

export function Doctors() {
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = ["All", ...new Set(doctors.map((d) => d.specialty))];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty =
      specialtyFilter === "All" || doctor.specialty === specialtyFilter;
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Meet Our Specialists
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Our team of experienced doctors is dedicated to providing you with
            the best possible care.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Specialty Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSpecialtyFilter(spec)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  specialtyFilter === spec
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                )}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-500 text-lg">
                No doctors found matching your criteria.
              </p>
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="aspect-w-3 aspect-h-2 relative overflow-hidden h-64">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-slate-700">
                      4.9
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary-600 text-sm font-medium mb-2">
                    <Stethoscope className="w-4 h-4" />
                    {doctor.specialty}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                    {doctor.description}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>Healthpoint Main Campus</span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/book"
                      className="flex-1 bg-primary-600 text-white py-2.5 rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
                    >
                      Book Appointment
                    </Link>
                    <button className="px-3 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
