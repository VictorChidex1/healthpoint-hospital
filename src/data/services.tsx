import {
  Heart,
  Brain,
  Baby,
  Activity,
  Eye,
  Bone,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: <Heart className="w-12 h-12 text-red-500" />,
    shortDescription:
      "Comprehensive heart care from diagnosis to rehabilitation.",
    fullDescription:
      "Our Cardiology department is equipped with state-of-the-art technology to diagnose, treat, and manage a wide range of heart conditions. From non-invasive testing to complex interventional procedures, our team of expert cardiologists is dedicated to your heart health.",
    features: [
      "Echocardiography & Stress Testing",
      "Interventional Cardiology",
      "Cardiac Rehabilitation",
      "Heart Failure Management",
      "24/7 Heart Attack Care",
    ],
    commonConditions: [
      "Coronary Artery Disease",
      "Arrhythmias",
      "Heart Failure",
      "Hypertension",
      "Valvular Heart Disease",
    ],
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    shortDescription:
      "Advanced care for disorders of the brain, spine, and nervous system.",
    fullDescription:
      "The Neurology department provides specialized care for patients with neurological disorders. We use advanced imaging and diagnostic tools to develop personalized treatment plans for conditions affecting the brain, spinal cord, and nerves.",
    features: [
      "Stroke Center",
      "Epilepsy Monitoring",
      "Movement Disorders Clinic",
      "Sleep Medicine",
      "Neuro-Rehabilitation",
    ],
    commonConditions: [
      "Stroke",
      "Epilepsy",
      "Multiple Sclerosis",
      "Parkinson’s Disease",
      "Migraines & Headaches",
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: <Baby className="w-12 h-12 text-blue-400" />,
    shortDescription:
      "Compassionate healthcare for infants, children, and adolescents.",
    fullDescription:
      "Our Pediatrics department offers a child-friendly environment where we provide comprehensive care for children from birth through adolescence. We focus on preventive care, developmental monitoring, and treating acute and chronic illnesses.",
    features: [
      "Well-Child Visits",
      "Vaccinations & Immunizations",
      "Pediatric Intensive Care (PICU)",
      "Developmental Screening",
      "Adolescent Medicine",
    ],
    commonConditions: [
      "Asthma & Allergies",
      "Infections",
      "Growth Disorders",
      "ADHD & Behavioral Issues",
      "Diabetes",
    ],
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: <Activity className="w-12 h-12 text-pink-500" />,
    shortDescription:
      "Leading-edge cancer treatment and compassionate support.",
    fullDescription:
      "Healthpoint Oncology provides a multidisciplinary approach to cancer care. We combine advanced medical treatments with supportive care services to treat the whole person, not just the disease.",
    features: [
      "Chemotherapy & Immunotherapy",
      "Radiation Oncology",
      "Surgical Oncology",
      "Genetic Counseling",
      "Survivorship Programs",
    ],
    commonConditions: [
      "Breast Cancer",
      "Lung Cancer",
      "Colorectal Cancer",
      "Leukemia & Lymphoma",
      "Prostate Cancer",
    ],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: <Sparkles className="w-12 h-12 text-yellow-500" />,
    shortDescription: "Expert care for skin, hair, and nail conditions.",
    fullDescription:
      "Our Dermatology specialists diagnose and treat thousands of skin conditions. We offer medical, surgical, and cosmetic dermatology services to help you look and feel your best.",
    features: [
      "Skin Cancer Screening",
      "Acne Treatment",
      "Cosmetic Procedures",
      "Laser Therapy",
      "Eczema & Psoriasis Care",
    ],
    commonConditions: ["Acne", "Eczema", "Psoriasis", "Skin Cancer", "Rosacea"],
  },
  {
    id: "optometry",
    name: "Optometry",
    icon: <Eye className="w-12 h-12 text-teal-500" />,
    shortDescription: "Comprehensive eye care and vision services.",
    fullDescription:
      "Protect your vision with our comprehensive eye care services. From routine eye exams to the management of complex eye diseases, our optometrists and ophthalmologists are here to help you see clearly.",
    features: [
      "Comprehensive Eye Exams",
      "Contact Lens Fitting",
      "Glaucoma Management",
      "Diabetic Eye Care",
      "Pediatric Eye Care",
    ],
    commonConditions: [
      "Myopia & Hyperopia",
      "Glaucoma",
      "Cataracts",
      "Macular Degeneration",
      "Dry Eye Syndrome",
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: <Bone className="w-12 h-12 text-slate-500" />,
    shortDescription: "Specialized care for bones, joints, and muscles.",
    fullDescription:
      "Our Orthopedics team helps you regain mobility and live pain-free. We specialize in the diagnosis and treatment of musculoskeletal conditions, offering both surgical and non-surgical solutions.",
    features: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Physical Therapy",
      "Trauma & Fracture Care",
    ],
    commonConditions: [
      "Arthritis",
      "Sports Injuries",
      "Back Pain",
      "Fractures",
      "Carpal Tunnel Syndrome",
    ],
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    icon: <Stethoscope className="w-12 h-12 text-primary-600" />,
    shortDescription: "Primary care for your overall health and wellness.",
    fullDescription:
      "Our General Medicine department is your first stop for healthcare. We provide routine check-ups, manage chronic conditions, and coordinate your care with specialists when needed.",
    features: [
      "Annual Physicals",
      "Chronic Disease Management",
      "Preventive Screenings",
      "Geriatric Care",
      "Lifestyle Counseling",
    ],
    commonConditions: [
      "Hypertension",
      "Diabetes",
      "Respiratory Infections",
      "Digestive Issues",
      "Thyroid Disorders",
    ],
  },
];
