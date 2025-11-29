export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  description: string;
  availableDays: string[];
  email: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  timeSlot: string;
  reason: string;
  status: "confirmed" | "cancelled";
}

export interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  commonConditions: string[];
}
