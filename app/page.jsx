import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, BRAND, FAQ, SHOP, CONTACT } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, Zap, Shield, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'AeroAg Australia | Turnkey Agricultural Drone Packages',
  description: 'AeroAg Australia supplies turnkey agricultural drone packages to Australian farmers. Specialised in DJI Agras T50, T25 and precision mapping solutions.',
  openGraph: {
    title: 'AeroAg Australia | Agricultural Drones Australia',
    description: 'Turnkey agricultural drone packages for Australian farmers. Broadacre, pasture, and orchard solutions.',
    images: [{ url: '/images/hero-ag-drone.webp' }],
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Store", "Organization"],
        "name": SITE.name,
        "url": `https://${SITE.domain}/`,
        "description": BRAND.description,
        "foundingDate": BRAND.foundingYear,
        "foundingLocation": { "@type": "Place", "name": BRAND.foundingLocation },
        "address": { "@type": "PostalAddress", "addressCountry": "Australia", "addressRegion": "QLD" },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONTACT.phone,
          "contactType": "sales",
          "email": CONTACT.email,
          "areaServed": "AU"
        },
        "knowsAbout": ["Agricultural Drones", "Drone Spraying", "NDVI Mapping"],
        "priceRange": "$$$",
        "brand": { "@type": "Brand", "name": "DJI" }
      }
    ]
  };

  return (
    <main id="main">
      <JsonLd data={schema} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://picsum.photos/seed/aeroag/1920/1080" 
            alt="Agricultural drone spraying crops" 
            fill 
            priority
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Turnkey Agricultural Drones in Australia
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {BRAND.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/guide-agricultural-drones/" className="btn btn-primary px-8">
                View Drone Guide
              </Link>
              <Link href="#quote" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-brand shrink-0" size={32} />
              <div>
                <h3 className="font-bold">Ready-to-Fly</h3>
                <p className="text-xs text-gray-500">Fully configured systems</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Zap className="text-brand shrink-0" size={32} />
              <div>
                <h3 className="font-bold">Fast Setup</h3>
                <p className="text-xs text-gray-500">1-day training included</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="text-brand shrink-0" size={32} />
              <div>
                <h3 className="font-bold">Full Warranty</h3>
                <p className="text-xs text-gray-500">Written AU support</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <HelpCircle className="text-brand shrink-0" size={32} />
              <div>
                <h3 className="font-bold">Expert Support</h3>
                <p className="text-xs text-gray-500">CASA path assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precision Agriculture Systems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Compare our heavy-lift spray drones and multispectral mapping platforms designed for Australian conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <div key={product.slug} className="product-card">
                <div className="product-frame">
                  <Image 
                    src={`https://picsum.photos/seed/${product.slug}/400/300`} 
                    alt={product.name}
                    width={400}
                    height={300}
                    className="p-4"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">{product.shortDescription}</p>
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 block mb-1">Packages from</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price > 0 ? `$${product.price.toLocaleString()} inc. GST` : 'Price on Request'}
                    </span>
                  </div>
                  <Link href={`/${product.slug}/`} className="btn btn-outline w-full">
                    View Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About AeroAg Authority Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/aeroag-hq/800/800" 
                alt="AeroAg Australia Headquarters"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About AeroAg Australia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in {BRAND.foundingYear} and based in {BRAND.foundingLocation}, AeroAg Australia was established to bridge the gap between advanced technology and practical farming logistics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {BRAND.differentiation.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <CheckCircle className="text-brand shrink-0" size={20} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-8">
                We don&apos;t just sell drones; we supply complete, field-ready systems that allow farmers to start spraying and spreading with minimal downtime. Our Toowoomba headquarters services operations across broadacre, pasture, orchards, and vineyards throughout Australia.
              </p>
              <Link href="/about/" className="btn btn-outline">Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Turnkey Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">How Our Turnkey Packages Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/20">1</div>
              <h3 className="text-xl font-bold mb-4">Consultation & Selection</h3>
              <p className="text-gray-600">We analyze your terrain, crop types, and payload requirements to select the right system, from the T25 to the flagship T50.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/20">2</div>
              <h3 className="text-xl font-bold mb-4">Setup & Testing</h3>
              <p className="text-gray-600">Your aircraft is updated, calibrated, and field-tested. We integrate your batteries, power station, and trailer logistics.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/20">3</div>
              <h3 className="text-xl font-bold mb-4">Delivery & Training</h3>
              <p className="text-gray-600">We provide a full day of hands-on setup and training at your farm or our Toowoomba site, ensuring you are ready for autonomous flight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Agricultural Drone FAQ</h2>
            <p className="text-gray-600">Quick answers to common questions about agricultural drone operations in Australia.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq/" className="text-brand font-bold hover:underline">View All Frequently Asked Questions →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
