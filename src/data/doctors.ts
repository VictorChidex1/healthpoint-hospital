import type { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Okeke',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Specialist in heart health and cardiovascular surgery with 10 years of experience.',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    email: 'sarah.okeke@healthpoint.com'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Expert in child healthcare, focusing on developmental milestones and preventive care.',
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    email: 'michael.chen@healthpoint.com'
  },
  {
    id: '3',
    name: 'Dr. Amara Nwachukwu',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Focused on treating disorders of the nervous system, including migraines and epilepsy.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    email: 'amara.nwachukwu@healthpoint.com'
  },
  {
    id: '4',
    name: 'Dr. Ozioma Agbago',
    specialty: 'Oncology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Focused on treating cancer and other tumors.',
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    email: 'ozioma.agbago@healthpoint.com'
  },
  {
    id: '5',
    name: 'Dr. Chidera Agbago',
    specialty: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Focused on treating skin conditions and diseases.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    email: 'chidera.agbago@healthpoint.com'
  },
  {
    id: '6',
    name: 'Dr. Alex Agbago',
    specialty: 'optometry',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Focused on treating eye conditions and diseases.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    email: 'alex.agbago@healthpoint.com'
  }
];