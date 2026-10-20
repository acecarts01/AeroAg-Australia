import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Thank You | AeroAg Australia',
  robots: { index: false, follow: true }
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
        <CheckCircle className="text-brand mx-auto mb-6" size={64} />
        <h1 className="text-3xl font-bold mb-4">Request Received!</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for reaching out to AeroAg Australia. One of our agricultural drone specialists will contact you within 24 hours to discuss your turnkey package requirements.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn btn-primary w-full">Return Home</Link>
          <Link href="/guide-agricultural-drones/" className="btn btn-outline w-full">Back to Guide</Link>
        </div>
      </div>
    </main>
  );
}
