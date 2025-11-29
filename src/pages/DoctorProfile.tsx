import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctors";
import {
  Stethoscope,
  MapPin,
  Calendar,
  Mail,
  ArrowLeft,
  Star,
} from "lucide-react";

export function DoctorProfile() {
  // 1. Get the dynamic ID from the URL
  const { doctorId } = useParams();

  // 2. Find the corresponding doctor data
  const doctor = doctors.find((d) => d.id === doctorId);

  // Handle case where doctor is not found
  if (!doctor) {
    return (
      <div className="pt-32 min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          404: Doctor Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The specialist profile you are looking for does not exist.
        </p>
        <Link
          to="/doctors"
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Doctor Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-12 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/doctors"
          className="flex items-center gap-2 text-slate-500 hover:text-primary-600 font-medium transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
          {/* Header and Image */}
          <div className="md:flex md:gap-8">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-primary-50 shadow-md"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                {doctor.name}
              </h1>
              <div className="flex items-center gap-3 text-primary-600 font-semibold text-lg mb-4">
                <Stethoscope className="w-5 h-5" /> {doctor.specialty}
              </div>

              {/* Quick Info */}
              <div className="space-y-2 text-slate-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold">4.9/5 Rating</span> (Excellent
                  Patient Feedback)
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  {doctor.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Healthpoint Main Campus
                </div>
              </div>

              {/* Booking CTA */}
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-all"
              >
                Book Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <hr className="my-8 border-slate-100" />

          {/* Detailed Biography */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">
              Biography & Focus
            </h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {doctor.description}
              {"\n\n"}
              Dr. {doctor.name.split(" ")[1] || doctor.name} is deeply committed
              to patient education and personalized treatment plans. With a
              focus on preventive care, {doctor.specialty} is a critical area of
              health, and Dr. {doctor.name.split(" ")[1] || doctor.name} is
              proud to lead the department at Healthpoint Hospital.
            </p>
          </section>

          <hr className="my-8 border-slate-100" />

          {/* Availability Summary */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">
              Working Days
            </h2>
            <div className="flex flex-wrap gap-3">
              {doctor.availableDays.map((day) => (
                <span
                  key={day}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {day}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              You can book an appointment on the days listed above by clicking
              "Book Appointment" above.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
