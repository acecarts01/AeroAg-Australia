import Link from 'next/link';
import { SITE, BRAND, CONTACT } from '@/config/site';

export const metadata = {
  title: 'About AeroAg Australia | Agricultural Drone Specialists',
  description: 'Learn about AeroAg Australia, based in Toowoomba. We supply turnkey agricultural drone packages and expert training to Australian farmers.'
};

export default function AboutPage() {
  return (
    <main id="main" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About AeroAg Australia</h1>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AeroAg Australia is a dedicated B2B agricultural drone supplier focused on providing practical, field-ready solutions for the Australian farming community.
          </p>

          <h2>Our Mission</h2>
          <p>
            Based in Toowoomba, QLD, we understand that an agricultural drone is only as good as the logistics supporting it. Our mission is to move beyond the &quot;box-drop&quot; model and provide complete, turnkey systems that integrate aircraft, power management, and chemical batching into a seamless workflow.
          </p>

          <h2>Why AeroAg?</h2>
          <p>
            Australian conditions are unique. From the vast broadacre plains of the WA wheatbelt to the dense orchards of the Goulburn Valley, we provide systems tailored to specific terrains and crop types.
          </p>
          <ul>
            {BRAND.differentiation.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2>Our Footprint</h2>
          <p>
            While our headquarters is in Toowoomba, we service all of Australia. We assist our clients not only with equipment but with the critical regulatory path required by CASA and state chemical regulators.
          </p>

          <h2>Core Milestones</h2>
          <div className="space-y-4 my-8">
            {BRAND.milestones.map((m, idx) => (
              <div key={idx} className="flex gap-4 border-l-4 border-brand pl-6 py-2">
                <span className="font-bold text-brand">{m.year}</span>
                <span>{m.event}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mt-12">
            <h3 className="mt-0">Contact Our Team</h3>
            <p>Ready to discuss a turnkey package for your farm? Get in touch with our Toowoomba-based specialists.</p>
            <p>
              <strong>Email:</strong> {CONTACT.email}<br />
              <strong>Phone:</strong> {CONTACT.phone}<br />
              <strong>Location:</strong> {CONTACT.address}
            </p>
            <Link href="/#quote" className="btn btn-primary mt-4">Request a Quote</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
