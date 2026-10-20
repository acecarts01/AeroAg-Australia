import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, CONTACT } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { Check, Target, Zap, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'DJI Mavic 3 Multispectral Australia | M3M NDVI Crop Mapping',
  description: 'Maximize yield with the DJI Mavic 3 Multispectral (M3M) drone. Create centimeter-level precision RTK NDVI crop maps for variable rate spraying.',
  alternates: { canonical: `https://${SITE.domain}/dji-mavic-3-multispectral/` },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function Mavic3MPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DJI Mavic 3 Multispectral (M3M)",
    "image": `https://${SITE.domain}/images/mavic-3m.webp`,
    "description": "High-precision multispectral mapping drone for precision agriculture, featuring RGB + 4 multispectral bands and RTK module.",
    "brand": { "@type": "Brand", "name": "DJI" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "url": `https://${SITE.domain}/dji-mavic-3-multispectral/`,
      "description": "Price on request. Part of the Scout & Spray turnkey bundle."
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
            <span className="text-gray-900 font-medium">DJI Mavic 3 Multispectral</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                DJI Mavic 3 Multispectral (M3M): The Definitive Guide to Crop Scouting in Australia
              </h1>
              <div className="product-frame mb-8 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                <Image 
                  src="https://picsum.photos/seed/m3m-hero/800/600" 
                  alt="DJI Mavic 3 Multispectral Drone"
                  fill
                  priority
                  className="object-contain p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-brand text-white p-6 rounded-lg mb-8 flex justify-between items-center">
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-brand-light mb-1">Scout & Spray Bundle</p>
                  <p className="text-2xl font-bold">$46,990 inc. GST</p>
                </div>
                <Link href="#quote" className="btn bg-white text-brand hover:bg-gray-100">Inquire</Link>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The DJI Mavic 3 Multispectral (M3M) is a game-changer for Australian agronomy. By combining a 20MP RGB camera with a 4-band multispectral sensor, it allows farmers to see what the naked eye cannot—identifying crop stress, nutrient deficiencies, and weed pressure with centimetre-level RTK precision.
              </p>
            </div>
            
            <div className="sticky top-24">
              <LeadForm title="Request M3M Pricing" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technical Specifications: RGB + Multispectral Imaging</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex gap-2 items-center"><Target className="text-brand" /> Optical Sensors</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong>RGB:</strong> 20 MP 4/3 CMOS</li>
                <li><strong>Multispectral:</strong> 4 x 5 MP bands</li>
                <li><strong>Bands:</strong> Green (560), Red (650), Red Edge (730), NIR (860 nm)</li>
                <li><strong>Shutter:</strong> Mechanical (no rolling distortion)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex gap-2 items-center"><Zap className="text-brand" /> Flight Performance</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong>Flight Time:</strong> Up to 43 min</li>
                <li><strong>Max Takeoff:</strong> 1,050 g (under 2 kg class)</li>
                <li><strong>Transmission:</strong> O3 Enterprise (long range)</li>
                <li><strong>Obstacle:</strong> Omnidirectional sensing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex gap-2 items-center"><Check className="text-brand" /> Positioning</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong>Module:</strong> RTK (Real-Time Kinematic)</li>
                <li><strong>Horizontal:</strong> 1 cm + 1 ppm</li>
                <li><strong>Vertical:</strong> 1.5 cm + 1 ppm</li>
                <li><strong>Sunlight Sensor:</strong> For consistent NDVI calibration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">How to Generate NDVI Maps for Australian Agriculture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="font-bold mb-2">Autonomous Flight</h4>
              <p className="text-sm text-gray-600">Plan a mission in DJI Pilot 2. The drone captures high-res multispectral data autonomously.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold mb-2">Data Capture</h4>
              <p className="text-sm text-gray-600">Simultaneous capture of RGB and 4 spectral bands with RTK-tagged coordinates.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold mb-2">Cloud Processing</h4>
              <p className="text-sm text-gray-600">Process maps in DJI Terra to generate NDVI, GNDI, or NDRE indices.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold mb-2">Variable Rate</h4>
              <p className="text-sm text-gray-600">Export the prescription map directly to your <Link href="/dji-agras-t50/" className="text-brand">T50</Link> or <Link href="/dji-agras-t25/" className="text-brand">T25</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Maximizing ROI: Saving on Input Costs</h2>
            <p className="text-lg text-gray-600 mb-12">
              The M3M isn&apos;t just about pretty maps—it&apos;s about profitability. By identifying where chemical application is actually needed, farmers can reduce input costs by up to 30% through variable rate prescription spraying.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/dji-agras-t50/" className="btn btn-outline">Integrate with T50</Link>
              <Link href="/dji-agras-t25/" className="btn btn-outline">Integrate with T25</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Do I need an RePL for the Mavic 3M?</h4>
                <p className="text-gray-600">As the M3M weighs under 2kg (1,050g), it can be operated in the &quot;Excluded Category&quot; for commercial work on your own land with a simple CASA registration. However, for full commercial service work, an RePL is recommended.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">What mapping software is best?</h4>
                <p className="text-gray-600">DJI Terra is the industry standard for processing M3M data locally. For cloud-based analysis and team sharing, platforms like DroneDeploy or Pix4D are popular among Australian agronomists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
