import type { Doctor } from "../types";
import drSarah from "../assets/images/dr-sarah.png";
import drMichael from "../assets/images/dr-Michael.png";
import drAmara from "../assets/images/dr-amara.png";
import drOzioma from "../assets/images/dr-ozioma.png";
import drChidera from "../assets/images/dr-chidera.png";
import drAlex from "../assets/images/dr-alex.png";

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Okeke",
    specialty: "Cardiology",
    image: drSarah,
    description:
      "Specialist in heart health and cardiovascular surgery with 10 years of experience.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    email: "sarah.okeke@healthpoint.com",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    image: drMichael,
    description:
      "Expert in child healthcare, focusing on developmental milestones and preventive care.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    email: "michael.chen@healthpoint.com",
  },
  {
    id: "3",
    name: "Dr. Amara Nwachukwu",
    specialty: "Neurology",
    image: drAmara,
    description:
      "Focused on treating disorders of the nervous system, including migraines and epilepsy.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    email: "amara.nwachukwu@healthpoint.com",
  },
  {
    id: "4",
    name: "Dr. Ozioma Agbaho",
    specialty: "Oncology",
    image: drOzioma,
    description: "Focused on treating cancer and other tumors.",
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    email: "ozioma.agbago@healthpoint.com",
  },
  {
    id: "5",
    name: "Dr. Chidera Agbaho",
    specialty: "Dermatology",
    image: drChidera,
    description: "Focused on treating skin conditions and diseases.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    email: "chidera.agbago@healthpoint.com",
  },
  {
    id: "6",
    name: "Dr. Alex Okafor",
    specialty: "optometry",
    image: drAlex,
    description: "Focused on treating eye conditions and diseases.",
    availableDays: ["Tuesday", "Wednesday", "Friday"],
    email: "alex.okafor@healthpoint.com",
  },
];
