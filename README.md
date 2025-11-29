Healthpoint Hospital - Patient Appointment Portal

🏥 Project Overview

Healthpoint Hospital is a modern, responsive web application designed to streamline the patient booking process. It replaces traditional phone scheduling with a sleek, digital interface that allows patients to select specialists, view real-time availability, and secure appointments in under 2 minutes.

This project demonstrates complex frontend logic including custom date generation algorithms, state management via Context API, form validation, and protected administrative routes.

🚀 Live Demo

Live Site (GitHub Pages): https://victorchidex1.github.io/healthpoint-hospital/

Source Code: https://github.com/VictorChidex1/healthpoint-hospital

🛠️ Tech Stack

This project was built using the modern React ecosystem, focusing on performance, type safety, and user experience.

Core: React 18 + Vite

Language: TypeScript (Strict Mode)

Styling: Tailwind CSS

Animations: Framer Motion

Routing: React Router DOM

Forms & Validation: React Hook Form + Zod

Date Logic: date-fns

Icons: Lucide React

✨ Key Features

1. 📅 Intelligent Booking Wizard

Dynamic Calendar: Custom-built date picker that generates the next 14 days.

Availability Filter: Automatically disables weekends or specific days off based on the selected doctor's schedule.

Time Slot Engine: Generates 1-hour slots (e.g., 09:00, 10:00) dynamically.

2. 🛡️ Admin Dashboard (Protected)

Secure Access: Mock authentication system (admin@healthpoint.com / admin123).

Appointment Management: View all bookings in a searchable table.

Status Control: Ability to cancel appointments directly from the dashboard.

3. 📝 Robust Form Handling

Validation: Real-time feedback for invalid emails or short names using Zod schema.

State Persistence: Appointments are saved to localStorage, mimicking a database interaction.

4. 🎨 Enterprise-Grade UI/UX

Responsive: Fully mobile-optimized navbar and layouts.

Glassmorphism: Modern design elements with backdrop blurs and smooth transitions.

Accessibility: Focus states and semantic HTML structure.

📸 Screenshots

(You can add screenshots here later)

⚡ Getting Started

Follow these steps to run the project locally on your machine.

1. Clone the repository

git clone [https://github.com/VictorChidex1/healthpoint-hospital.git](https://github.com/VictorChidex1/healthpoint-hospital.git)
cd healthpoint-hospital

2. Install dependencies

npm install

3. Run the development server

npm run dev

4. Build for production

npm run build

🔐 Admin Credentials

To test the Admin Dashboard features:

URL: /login or click "Doctor Login" in Navbar

Email: admin@healthpoint.com

Password: admin123

📂 Project Structure

src/
├── components/
│ ├── booking/ # Complex Wizard Logic (Date, Doctor, Form)
│ ├── layout/ # Navbar, ProtectedRoute
│ └── sections/ # Hero, Marketing Sections
├── context/ # Global State (Auth, Appointments)
├── data/ # Mock Database (Doctors list)
├── pages/ # AdminDashboard, LoginPage
├── types/ # TypeScript Interfaces
└── App.tsx # Main Routing

👨‍💻 Author

Victor Chidex Lead Software Engineer & Architect

Built with ❤️ using React & TypeScript.
