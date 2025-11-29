import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '../layout/Navbar';

// 1. Define the Validation Schema (The "Rules")
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  reason: z.string().min(5, "Please provide a brief reason for your visit"),
});

// Extract TypeScript type from the schema
type FormData = z.infer<typeof formSchema>;

interface PatientFormProps {
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

export function PatientForm({ onBack, onSubmit }: PatientFormProps) {
  // 2. Initialize the Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Patient Details</h2>
        <p className="text-slate-500 mt-2">We just need a few details to confirm your appointment.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
          <input
            {...register('name')}
            id="name"
            className={cn(
              "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 outline-none transition-all",
              errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-200"
            )}
            placeholder="e.g. John Doe"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className={cn(
              "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 outline-none transition-all",
              errors.email ? "border-red-500 focus:ring-red-200" : "border-slate-200"
            )}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
          <input
            {...register('phone')}
            id="phone"
            className={cn(
              "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 outline-none transition-all",
              errors.phone ? "border-red-500 focus:ring-red-200" : "border-slate-200"
            )}
            placeholder="+234..."
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Reason Text Area */}
        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium text-slate-700">Reason for Visit</label>
          <textarea
            {...register('reason')}
            id="reason"
            rows={3}
            className={cn(
              "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none",
              errors.reason ? "border-red-500 focus:ring-red-200" : "border-slate-200"
            )}
            placeholder="Briefly describe your symptoms or reason for checking in..."
          />
          {errors.reason && <p className="text-sm text-red-500">{errors.reason.message}</p>}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
          >
            {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </div>
      </form>
    </div>
  );
}