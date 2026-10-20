import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, CONTACT, FAQ } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Ultimate Guide to Agricultural Drones Australia | AeroAg',
  description: 'Compare top systems, prices, and CASA drone regulations for Australian broadacre and orchard farming. Get expert advice from AeroAg Australia.',
  alternates: { canonical: `https://${SITE.domain}/guide-agricultural-drones/` },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function GuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Choosing the Right Agricultural Drone for Your Operation",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selecting an agricultural drone involves balancing payload capacity against terrain and operational scale. Heavy-lift systems like the T50 are best for broadacre spraying, while compact units like the T25 excel in orchards. Multispectral drones like the M3M are used for crop health scouting and NDVI mapping."
          }
        }
      ]
    }
  };

  return (
    <main id="main">
      <JsonLd data={schema} />

      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-gray-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Guide</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              The Ultimate Guide to Agricultural Drones in Australia: Systems, Prices, & Regulations
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Agricultural drones have transformed from experimental tools into essential assets for Australian broadacre, pasture, and orchard management. This guide breaks down the current systems, the real-world economics of ownership, and the regulatory pathway required by CASA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24">
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">On This Page</h4>
                <nav className="space-y-4 text-sm font-medium">
                  <a href="#choosing" className="block hover:text-brand transition-colors">1. Choosing the Right Drone</a>
                  <a href="#economics" className="block hover:text-brand transition-colors">2. Economics & Pricing</a>
                  <a href="#regulation" className="block hover:text-brand transition-colors">3. Regulatory Compliance</a>
                  <a href="#faq" className="block hover:text-brand transition-colors">4. Frequently Asked Questions</a>
                </nav>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Link href="#quote" className="btn btn-primary w-full text-sm">Get Expert Advice</Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9 prose max-w-none">
              <div id="choosing">
                <h2>1. Choosing the Right Agricultural Drone for Your Operation</h2>
                <p>
                  Selecting the correct agricultural drone system requires a clear understanding of your specific terrain, chemical volume requirements, and battery turnaround logistics. In Australia, the market is primarily split between heavy-lift application systems and agronomy mapping platforms.
                </p>
                
                <h3 id="heavy-spraying">Heavy Spraying & Spreading Systems</h3>
                <p>
                  These aircraft are designed to carry high payloads of liquid or granulate materials. The current leaders in the Australian market are:
                </p>
                <ul>
                  <li>
                    <strong><Link href="/dji-agras-t50/">DJI Agras T50</Link>:</strong> The flagship broadacre workhorse. With a 40L spray tank and 50kg spreading capacity, it is designed for large-scale operations and high flow rates.
                  </li>
                  <li>
                    <strong><Link href="/dji-agras-t25/">DJI Agras T25</Link>:</strong> A compact, agile system perfect for orchardists, vineyard managers, and solo operators who prioritise portability without sacrificing advanced obstacle avoidance.
                  </li>
                  <li>
                    <strong><Link href="/dji-agras-t40/">DJI Agras T40</Link>:</strong> A proven legacy system that remains a popular choice for pasture regeneration and those seeking pre-owned value.
                  </li>
                </ul>

                <h3 id="mapping-platforms">Agronomy & Mapping Platforms</h3>
                <p>
                  Precision agriculture begins with accurate data. The <strong><Link href="/dji-mavic-3-multispectral/">DJI Mavic 3 Multispectral</Link></strong> provides the RGB and multispectral imaging (NDVI) required to identify crop stress and generate variable rate prescription maps.
                </p>
              </div>

              <div id="economics" className="mt-20">
                <h2>2. The Economics of Agricultural Drones: System Pricing vs. ROI</h2>
                <p>
                  The cost of an agricultural drone system goes beyond the base aircraft. For a production-ready setup, farmers must account for power management, chemical batching, and transport logistics. AeroAg Australia structures these into three tiers:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
                    <h4 className="font-bold text-gray-900 mb-2">Base Aircraft</h4>
                    <p className="text-2xl font-bold text-brand mb-4">From $18,150 <span className="text-xs font-normal text-gray-500">inc. GST</span></p>
                    <p className="text-xs text-gray-500">Includes the airframe and standard remote control. Best for those with existing batteries and chargers.</p>
                  </div>
                  <div className="border-2 border-brand p-6 rounded-lg bg-white relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] uppercase tracking-tighter px-2 py-1 rounded">Most Popular</span>
                    <h4 className="font-bold text-gray-900 mb-2">Ready-to-Fly</h4>
                    <p className="text-2xl font-bold text-brand mb-4">From $27,990 <span className="text-xs font-normal text-gray-500">inc. GST</span></p>
                    <p className="text-xs text-gray-500">The standard for commercial operations. Includes batteries, fast charger, and 1-day setup training.</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
                    <h4 className="font-bold text-gray-900 mb-2">Turnkey Field</h4>
                    <p className="text-2xl font-bold text-brand mb-4">From $36,990 <span className="text-xs font-normal text-gray-500">inc. GST</span></p>
                    <p className="text-xs text-gray-500">A complete mobile workshop. Includes trailers, generators, and chemical batching integration.</p>
                  </div>
                </div>

                <h3>Own-vs-Hire: An Illustrative Example</h3>
                <p>
                  Consider a farm managing 1,000 hectares per year. At a current Australian contractor rate of approximately $34/ha, the annual spend is $34,000. Investing in a $32,990 Ready-to-Fly T50 package offers a payback period of less than one year, based on contractor cost displacement alone (excluding labour and chemical savings). 
                </p>
                <p className="text-sm italic text-gray-500">
                  Note: This example is illustrative. Assumptions include consistent weather windows and availability of a licenced pilot.
                </p>
              </div>

              <div id="regulation" className="mt-20">
                <h2>3. Australian Regulatory Compliance: Navigating CASA Rules</h2>
                <p>
                  Safety and legal compliance are paramount in Australian agricultural aviation. Heavier aircraft have stricter requirements than the sub-2 kg excluded category that covers the Mavic 3M. The pathway includes a Remote Pilot Licence (RePL), an operator certificate (ReOC) for commercial operators, and a state chemical licence.
                </p>
                <h3>CASA Over 25kg Drone Licence Requirements: RePL, ReOC and State Chemical Licences</h3>
                <p>
                  To operate systems like the T50 or T25, you must follow these state-specific schemes:
                </p>
                <ul>
                  <li><strong>Queensland:</strong> Requires a RePL plus a state pilot chemical rating licence.</li>
                  <li><strong>Victoria:</strong> Requires an RPA AAOL for operators and an RPA PCRL for pilots.</li>
                  <li><strong>New South Wales:</strong> The Pesticides Act applies; specific training like Spraysafe or AHCCHM307/304 is required.</li>
                  <li><strong>Western Australia, SA, Tasmania, NT:</strong> Check your state regulator for specific chemical application licensing.</li>
                </ul>
                <p>
                  Training pathways often include Spraysafe Pilot Accreditation or national units of competency such as AHCCHM307 and AHCCHM304. <strong>Confirm current requirements with CASA and your state regulator.</strong>
                </p>
              </div>

              <div id="faq" className="mt-20">
                <h2>Frequently Asked Questions</h2>
                <div className="not-prose space-y-6">
                  {FAQ.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                  <div className="border-b border-gray-100 pb-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Is the T100 Starter Kit available?</h4>
                    <p className="text-gray-600">The T100 Starter Kit is listed at $44,990 inc. GST and is coming soon to the Australian market. Contact us for the latest arrival updates and pre-order availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LeadForm title="Get Your Custom Turnkey Quote Today" />
          </div>
        </div>
      </section>
    </main>
  );
}
