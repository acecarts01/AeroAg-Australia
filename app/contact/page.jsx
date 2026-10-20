import Link from 'next/link';
import { CONTACT, SITE } from '@/config/site';
import LeadForm from '@/components/LeadForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact AeroAg Australia | Toowoomba Ag Drone Specialists',
  description: 'Contact the AeroAg Australia team in Toowoomba for agricultural drone sales, turnkey packages, and technical support.'
};

export default function ContactPage() {
  return (
    <main id="main" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-16 text-center">Contact AeroAg Australia</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Whether you are ready for a turnkey package or just starting your drone journey, our team is here to provide expert advice tailored to your operation.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">{CONTACT.address}, {CONTACT.region}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-bold mb-2">Service Area</h3>
              <p className="text-sm text-gray-600">
                While we are based in Toowoomba, we provide turnkey delivery and on-farm training to agricultural operations across all Australian states and territories.
              </p>
            </div>
          </div>

          <div id="quote">
            <LeadForm title="Send us a Message" />
          </div>
        </div>
      </div>
    </main>
  );
}
