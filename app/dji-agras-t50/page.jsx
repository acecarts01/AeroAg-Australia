import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, CONTACT, ADDONS } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { FinanceCalculator, PaybackCalculator } from '@/components/Calculators';
import { Check, Info, ArrowRight } from 'lucide-react';

const product = PRODUCTS.find(p => p.slug === 'dji-agras-t50');

export const metadata = {
  title: 'DJI Agras T50 Price Australia | Turnkey Spray Drone Packages',
  description: 'Get expert dealer pricing on the DJI Agras T50 drone in Australia. View specs, broadacre payload kits, and custom field-ready spray trailer packages.',
  alternates: { canonical: `https://${SITE.domain}/dji-agras-t50/` },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function T50Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://${SITE.domain}/images/agras-t50.webp`,
    "description": product.description,
    "brand": { "@type": "Brand", "name": "DJI" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AUD",
      "lowPrice": "24200",
      "highPrice": "44990",
      "offerCount": "3",
      "offers": product.packages.map(pkg => ({
        "@type": "Offer",
        "name": pkg.name,
        "price": pkg.price,
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": `https://${SITE.domain}/dji-agras-t50/`
      }))
    }
  };

  return (
    <main id="main">
      <JsonLd data={schema} />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-gray-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">DJI Agras T50</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                DJI Agras T50 in Australia: Price, Specs, and Complete Turnkey Packages
              </h1>
              <div className="product-frame mb-8 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                <Image 
                  src="https://picsum.photos/seed/t50-hero/800/600" 
                  alt="DJI Agras T50 Spraying Drone"
                  fill
                  priority
                  className="object-contain p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The DJI Agras T50 is the ultimate broadacre workhorse for Australian farmers. With its 40L spray tank and 50kg spreading capacity, it offers unmatched efficiency for heavy-duty agricultural applications.
              </p>
            </div>
            
            <div className="sticky top-24">
              <LeadForm title="Request a T50 Turnkey Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Core Specifications & Broadacre Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
              <h3 className="font-bold text-lg mb-4">Liquid Payload</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 40 L Spray Tank</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 40 kg Max Payload</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 16 L/min Flow (2 Sprinklers)</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 24 L/min Flow (Optional 4-kit)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
              <h3 className="font-bold text-lg mb-4">Dry Payload</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 75 L Spreading Tank</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 50 kg Internal Load</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 108 kg/min Spread Rate</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> 4-11 m Effective Swath</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
              <h3 className="font-bold text-lg mb-4">Efficiency & Logic</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> Up to 21 ha/hr (DJI Test Conditions)</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> Front & Rear Phased Array Radars</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> Binocular Vision Systems</li>
                <li className="flex gap-2"><Check size={16} className="text-brand shrink-0" /> Dual Atomizing Spraying System</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic text-center">
            DJI test conditions: 15 L/ha, 11 m swath, 7 m/s, 3 m height. Actual performance varies by location.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">DJI Agras T50 vs T40: Key Upgrades Compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <caption className="sr-only">Comparison of DJI Agras T50 and T40 specifications</caption>
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="border border-gray-200 p-4 text-left font-bold">Feature</th>
                  <th scope="col" className="border border-gray-200 p-4 text-center font-bold">DJI Agras T50</th>
                  <th scope="col" className="border border-gray-200 p-4 text-center font-bold">DJI Agras T40</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Max Spray Flow Rate</td>
                  <td className="border border-gray-200 p-4 text-center">16 L/min (24 L/min with 4 kit)</td>
                  <td className="border border-gray-200 p-4 text-center">12 L/min</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Spread Tank Capacity</td>
                  <td className="border border-gray-200 p-4 text-center">75 L</td>
                  <td className="border border-gray-200 p-4 text-center">70 L</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Radar Layout</td>
                  <td className="border border-gray-200 p-4 text-center">Front & Rear Phased Array</td>
                  <td className="border border-gray-200 p-4 text-center">Single Active Phased Array</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Aircraft Weight (ex. battery)</td>
                  <td className="border border-gray-200 p-4 text-center">39.9 kg</td>
                  <td className="border border-gray-200 p-4 text-center">38 kg</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Max Takeoff (Spraying)</td>
                  <td className="border border-gray-200 p-4 text-center">92 kg</td>
                  <td className="border border-gray-200 p-4 text-center">90 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiers & Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Turnkey Spray Trailer Packages for Australian Farmers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {product.packages.map((pkg, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 flex flex-col shadow-sm border-2 ${pkg.popular ? 'border-brand relative' : 'border-transparent'}`}>
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm ml-1">inc. GST</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#quote" className={`btn w-full ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Request {pkg.name} Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FinanceCalculator basePrice={32990} />
            <PaybackCalculator packagePrice={32990} />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Popular T50 Add-ons</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 font-bold">Item</th>
                  <th className="py-4 font-bold text-right">Price (inc. GST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ADDONS.filter(a => a.name.includes('T50') || a.name.includes('C10000')).map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-4 text-gray-700">{item.name}</td>
                    <td className="py-4 text-right font-medium">${item.price.toLocaleString()}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 text-gray-700">Licence Pathway Guide</td>
                  <td className="py-4 text-right text-brand font-bold uppercase text-xs">Included Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Australian Regulatory Compliance: CASA and Weight Class Limits</h2>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="mb-4">
                Operating the DJI Agras T50 commercially in Australia requires strict adherence to aviation and chemical safety laws. As a heavy-lift aircraft (max takeoff weight up to 103kg), the pathway includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Remote Pilot Licence (RePL)</li>
                <li>Remote Operator Certificate (ReOC) for business entities</li>
                <li>State-based chemical licences (e.g. QLD Pilot Chemical Rating)</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded flex gap-4 items-start border-l-4 border-blue-500">
                <Info size={24} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-sm text-blue-800">
                  <strong>Regulation Check:</strong> Heavier aircraft have stricter requirements than the sub-2 kg excluded category. Confirm current requirements with CASA and your state regulator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">What are the real-world pricing realities for the T50?</h4>
                <p className="text-gray-600">While the aircraft starts at $24,200, most production-scale farmers invest in the Ready-to-Fly ($32,990) or Turnkey Field ($44,990) packages to ensure they have the power management and trailer logistics required for high-volume broadacre application.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">How do I navigate the licensing path?</h4>
                <p className="text-gray-600">AeroAg Australia provides a free licence pathway guide with every package. We assist with finding RePL training providers and navigating state-based chemical accreditation such as the Victorian RPA PCRL or the Queensland state pilot chemical rating licence.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">How do I manage the Intelligent Flight Batteries?</h4>
                <p className="text-gray-600">The T50 uses the DB1560 battery. For continuous operation, we recommend a minimum of 3 batteries and a 12,000W charger or C10000 power supply to allow for fast charging cycles that keep the drone in the air while others are on the cooling station.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
