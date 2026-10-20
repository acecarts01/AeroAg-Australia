import Link from 'next/link';
import { SITE, CONTACT, BRAND, PRODUCTS } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">AeroAg Australia</h3>
            <p className="text-sm leading-relaxed mb-4">
              {BRAND.description}
            </p>
            <div className="text-sm">
              <p className="mb-1"><strong>HQ:</strong> {CONTACT.address}</p>
              <p className="mb-1"><strong>Phone:</strong> {CONTACT.phone}</p>
              <p className="mb-1"><strong>Email:</strong> {CONTACT.email}</p>
            </div>
          </div>

          {/* Shop Silos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Systems</h3>
            <ul className="text-sm space-y-2">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}/`} className="hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/guide-agricultural-drones/" className="hover:text-white transition-colors font-medium">Ultimate Guide</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Information</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/about/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Compliance</h3>
            <p className="text-xs italic mb-4">
              Operating agricultural drones over 25kg in Australia requires RePL, ReOC, and state chemical licensing. 
              Confirm current requirements with CASA and your state regulator.
            </p>
            <div className="border-t border-gray-800 pt-4 mt-4">
              <p className="text-xs">
                Last Reviewed: {SITE.lastReviewed}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} AeroAg Australia. All prices inc. GST where stated.
          </p>
          <div className="flex gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
