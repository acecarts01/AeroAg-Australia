export const metadata = {
  title: 'Terms & Conditions | AeroAg Australia',
  description: 'Terms and conditions for purchasing agricultural drone systems from AeroAg Australia.'
};

export default function TermsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl prose">
        <h1>Terms & Conditions</h1>
        <p className="text-gray-500">Last Updated: October 2026</p>

        <h2>1. Scope of Agreement</h2>
        <p>
          These terms apply to all quotes, sales, and training services provided by AeroAg Australia regarding agricultural drone systems.
        </p>

        <h2>2. Pricing & Payments</h2>
        <p>
          All prices are in Australian Dollars (AUD) and include GST where stated. Quotes are valid for 30 days unless otherwise specified. Full payment is required prior to delivery or setup training.
        </p>

        <h2>3. Regulatory Responsibility</h2>
        <p>
          The purchaser is responsible for obtaining and maintaining all necessary licences (RePL, ReOC, chemical licences) required by CASA and state regulators. AeroAg provides guidance but does not guarantee the outcome of any licence application.
        </p>

        <h2>4. Warranty & Support</h2>
        <p>
          All new aircraft come with a written Australian warranty. Warranty support is provided through our Toowoomba headquarters or authorized service centres.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          AeroAg Australia is not liable for indirect losses, crop failure, or damages resulting from the use or misuse of the equipment.
        </p>
      </div>
    </main>
  );
}
