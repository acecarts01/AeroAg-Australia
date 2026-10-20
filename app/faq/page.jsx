import Link from 'next/link';
import { FAQ, SITE } from '@/config/site';

export const metadata = {
  title: 'Agricultural Drone FAQ | AeroAg Australia',
  description: 'Find answers to common questions about DJI Agras drones, CASA licensing, and turnkey package pricing in Australia.'
};

export default function FAQPage() {
  return (
    <main id="main" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Common questions regarding agricultural drone operations, pricing, and regulations in Australia.
        </p>
        
        <div className="space-y-12">
          {FAQ.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-12 last:border-0">
              <h2 className="text-2xl font-bold mb-4">{item.question}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
          
          <div className="border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold mb-4">What is the difference between the T50 and T25?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The primary difference is scale. The T50 features a 40L spray tank and 50kg spreading capacity, making it the choice for large broadacre farms. The T25 has a 20L spray tank and 25kg spreading capacity, offering greater portability and agility for orchards, vineyards, and solo operators.
            </p>
          </div>

          <div className="border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold mb-4">How long does the training take?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our turnkey packages include a full day of setup and operational training. We ensure you are comfortable with the DJI Pilot 2 interface, autonomous flight planning, and basic maintenance before you take the aircraft into production.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-brand text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8 text-brand-light text-lg">Our specialists are ready to help you navigate the transition to drone-based agriculture.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#quote" className="btn bg-white text-brand hover:bg-gray-100">Request a Quote</Link>
            <Link href="/contact/" className="btn btn-outline border-white text-white hover:bg-white hover:text-brand">Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
