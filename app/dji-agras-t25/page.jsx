import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, CONTACT, ADDONS } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { Check, Info } from 'lucide-react';

const product = PRODUCTS.find(p => p.slug === 'dji-agras-t25');

export const metadata = {
  title: 'DJI Agras T25 Australia | Compact Orchard & Vineyard Drone',
  description: 'Discover the DJI Agras T25 crop spraying drone. Perfect for Australian orchards, solo operators, and tight terrains. Request a custom price quote today.',
  alternates: { canonical: `https://${SITE.domain}/dji-agras-t25/` },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function T25Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://${SITE.domain}/images/agras-t25.webp`,
    "description": product.description,
    "brand": { "@type": "Brand", "name": "DJI" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AUD",
      "lowPrice": "18150",
      "highPrice": "36990",
      "offerCount": "3",
      "offers": product.packages.map(pkg => ({
        "@type": "Offer",
        "name": pkg.name,
        "price": pkg.price,
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": `https://${SITE.domain}/dji-agras-t25/`
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
            <span className="text-gray-900 font-medium">DJI Agras T25</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                DJI Agras T25 Review: The Ultimate Compact Spraying Drone for Australian Farms
              </h1>
              <div className="product-frame mb-8 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                <Image 
                  src="https://picsum.photos/seed/t25-hero/800/600" 
                  alt="DJI Agras T25 Compact Spray Drone"
                  fill
                  priority
                  className="object-contain p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The DJI Agras T25 provides a high-performance spraying and spreading solution in a portable, single-operator frame. Perfect for Australian orchards, vineyards, and specialty crops where agility is as important as payload.
              </p>
            </div>
            
            <div className="sticky top-24">
              <LeadForm title="Request a T25 Turnkey Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Why the T25 Fits Smaller Scale Operations & Orchards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none">
              <p className="text-lg">
                The DJI Agras T25 is designed for agility and portability. With a 20 kg spray payload and 25 kg spreading capacity, it strikes the perfect balance for solo operators or farms with complex terrain that requires a more compact footprint than the T50.
              </p>
              <ul className="space-y-4 my-8">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">1</div>
                  <span><strong>Portability:</strong> Easily transported in a standard ute or small trailer, making it ideal for multi-site work.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">2</div>
                  <span><strong>Precision:</strong> Phased array radars and binocular vision ensure safe navigation through tight orchard rows.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">3</div>
                  <span><strong>Efficiency:</strong> DJI states up to 12 ha/hr coverage, perfect for targeted applications and medium-scale plots.</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {product.packages.map((pkg, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-xl border ${pkg.popular ? 'border-brand' : 'border-gray-200'} shadow-sm`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{pkg.name}</h4>
                    <span className="font-bold text-brand">${pkg.price.toLocaleString()} inc. GST</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{pkg.inclusions.slice(0, 3).join(', ')}...</p>
                  <Link href="#quote" className="text-brand text-sm font-bold hover:underline">Select Package →</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Full Specification Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h4 className="font-bold mb-4 uppercase text-xs text-gray-400">Spray System</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Tank:</strong> 20 L / 20 kg</li>
                <li><strong>Max Flow:</strong> 16 L/min</li>
                <li><strong>4-Nozzle Kit:</strong> 24 L/min</li>
                <li><strong>Droplet Size:</strong> Dual Atomizing</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h4 className="font-bold mb-4 uppercase text-xs text-gray-400">Spread System</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Tank:</strong> 35 L</li>
                <li><strong>Payload:</strong> 25 kg</li>
                <li><strong>Spread Rate:</strong> High Efficiency</li>
                <li><strong>Material:</strong> Granulate/Seed</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h4 className="font-bold mb-4 uppercase text-xs text-gray-400">Safety & Radar</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Radar:</strong> Phased Array (Front/Rear)</li>
                <li><strong>Vision:</strong> Binocular Vision</li>
                <li><strong>Obstacle:</strong> Multidirectional</li>
                <li><strong>Terrain:</strong> Smart Slope Path</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h4 className="font-bold mb-4 uppercase text-xs text-gray-400">Aircraft Data</h4>
              <ul className="text-sm space-y-2">
                <li><strong>FPV:</strong> Gimbal Camera</li>
                <li><strong>Positioning:</strong> RTK Enabled</li>
                <li><strong>Max Takeoff:</strong> Optimized for T25</li>
                <li><strong>Coverage:</strong> Up to 12 ha/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Is the T25 suitable for broadacre work?</h4>
                <p className="text-gray-600">While the T25 is highly capable, its 20L tank means more frequent battery swaps compared to the T50. It is best suited for small to medium broadacre plots or as a precision spot-sprayer alongside a larger fleet.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">What batteries does the T25 use?</h4>
                <p className="text-gray-600">The T25 uses the DB800 Intelligent Flight Battery. We recommend the Turnkey package which includes a fast-charging solution to keep your operation moving throughout the season.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Do I still need an RePL for the T25?</h4>
                <p className="text-gray-600">Yes. Commercial operation of any agricultural spray drone in Australia requires a Remote Pilot Licence (RePL) and appropriate operator certification. Confirm current requirements with CASA and your state regulator.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
