import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, CONTACT } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { Check, Info, AlertTriangle } from 'lucide-react';

const product = PRODUCTS.find(p => p.slug === 'dji-agras-t40');

export const metadata = {
  title: 'DJI Agras T40 For Sale Australia | Used & New Ag Drone Deals',
  description: 'Looking for a DJI Agras T40 for sale in Australia? Compare specifications, explore pre-owned market pricing, and find affordable B2B seeding packages.',
  alternates: { canonical: `https://${SITE.domain}/dji-agras-t40/` },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function T40Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DJI Agras T40",
    "image": `https://${SITE.domain}/images/agras-t40.webp`,
    "description": "The DJI Agras T40 is a proven workhorse for Australian pasture regeneration and broadacre spraying, featuring a 40L spray tank and 50kg spreading capacity.",
    "brand": { "@type": "Brand", "name": "DJI" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "url": `https://${SITE.domain}/dji-agras-t40/`,
      "description": "Price on request. New and pre-owned units available."
    }
  };

  return (
    <main id="main">
      <JsonLd data={schema} />

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-gray-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">DJI Agras T40</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                DJI Agras T40 for Sale Australia: Buying New vs. Pre-Owned
              </h1>
              <div className="product-frame mb-8 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                <Image 
                  src="https://picsum.photos/seed/t40-hero/800/600" 
                  alt="DJI Agras T40 Spraying Drone"
                  fill
                  priority
                  className="object-contain p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
                <p className="text-sm uppercase tracking-widest font-bold text-brand-light mb-1">Pricing</p>
                <p className="text-2xl font-bold">Price on Request</p>
                <p className="text-xs text-gray-400 mt-2">New and pre-owned units available. Trade-ins welcome.</p>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The DJI Agras T40 remains a highly sought-after &quot;workhorse&quot; for Australian agriculture. Known for its robust active phased array radar and 50kg spreading capacity, it continues to be the primary choice for pasture regeneration and high-volume seeding across the country.
              </p>
            </div>
            
            <div className="sticky top-24">
              <LeadForm title="Request T40 Pricing & Stock" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Key Features of the DJI T40 Workhorse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-6">Proven Performance</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span><strong>Payload:</strong> 40 L spray tank / 40 kg spray payload capacity.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span><strong>Spreading:</strong> 70 L tank / 50 kg internal load for pasture regeneration.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span><strong>Flow Rate:</strong> 12 L/min max via two magnetic-drive impeller pumps.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span><strong>Spread Width:</strong> 7 m effective width with 1.5 t/hr capacity.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-6">Safety Systems</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span>Active Phased Array Radar system for 360-degree obstacle detection.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span>Binocular vision system for precise terrain following.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span>Weight: 38 kg without battery (50 kg with battery).</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-brand shrink-0" />
                  <span>Max Takeoff Weight: 90 kg (spraying) / 101 kg (spreading).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Should You Buy a Used T40 or a New T25?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="mb-6 text-gray-600">
                Choosing between a pre-owned T40 and a new T25 depends on your volume requirements versus the benefits of new technology and warranty coverage.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="border border-gray-200 p-3">Metric</th>
                      <th className="border border-gray-200 p-3">DJI T40 (Used)</th>
                      <th className="border border-gray-200 p-3">DJI T25 (New)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Spray Tank</td>
                      <td className="border border-gray-200 p-3">40 L</td>
                      <td className="border border-gray-200 p-3">20 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Spread Tank</td>
                      <td className="border border-gray-200 p-3">70 L</td>
                      <td className="border border-gray-200 p-3">35 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Flow Rate</td>
                      <td className="border border-gray-200 p-3">12 L/min</td>
                      <td className="border border-gray-200 p-3">16 L/min (24 L/min opt.)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Radar</td>
                      <td className="border border-gray-200 p-3">Single Active Phased</td>
                      <td className="border border-gray-200 p-3">Front & Rear Phased</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-brand-light" />
                Pre-Owned Inspection Checklist
              </h3>
              <p className="text-sm text-gray-400 mb-6">If buying a used T40, ensure the following are verified:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><span className="text-brand-light font-bold">•</span> Battery cycle count and health state</li>
                <li className="flex gap-3"><span className="text-brand-light font-bold">•</span> Pump and nozzle wear condition</li>
                <li className="flex gap-3"><span className="text-brand-light font-bold">•</span> Frame and arm stress or damage</li>
                <li className="flex gap-3"><span className="text-brand-light font-bold">•</span> Firmware and flight log history</li>
                <li className="flex gap-3"><span className="text-brand-light font-bold">•</span> Warranty transfer and spares availability</li>
              </ul>
              <Link href="#quote" className="btn btn-primary w-full mt-8">Request T40 Inspection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Are parts for the T40 still readily available?</h4>
                <p className="text-gray-600">Yes, as the T40 remains a current-generation workhorse globally, parts and support are widely available through AeroAg Australia and the national service network.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Can I trade in my T40 for a T50?</h4>
                <p className="text-gray-600">We offer trade-in quotes for well-maintained T40 units. This is a popular way for farmers to upgrade to the higher flow rate and improved radar system of the new T50.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
