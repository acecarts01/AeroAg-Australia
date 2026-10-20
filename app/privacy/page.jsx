import { SITE } from '@/config/site';

export const metadata = {
  title: 'Privacy Policy | AeroAg Australia',
  description: 'Learn how AeroAg Australia handles your data and protects your privacy.'
};

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl prose">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500">Last Updated: October 2026</p>
        
        <p>
          At AeroAg Australia, we are committed to protecting the privacy of our customers and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information when you request a quote, sign up for a newsletter, or contact us through our website. This may include:
        </p>
        <ul>
          <li>Name and contact details (email, phone number)</li>
          <li>Farm business name and location</li>
          <li>Details about your agricultural operation (crop types, hectares)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your data primarily to:
        </p>
        <ul>
          <li>Provide accurate quotes for turnkey drone packages</li>
          <li>Contact you regarding your inquiries</li>
          <li>Provide technical support and regulatory updates</li>
          <li>Comply with Australian consumer and privacy laws</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. We do not sell or lease your personal information to third parties.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have questions about this policy, please contact us at sales@aeroag.com.au.
        </p>
      </div>
    </main>
  );
}
