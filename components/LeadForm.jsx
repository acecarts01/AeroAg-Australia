'use client';

import React from 'react';
import { FORMS, CONTACT, SITE } from '@/config/site';

export default function LeadForm({ title = "Request a Turnkey Package Quote", compact = false }) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: '',
    farm: '',
    phone: '',
    email: '',
    cropType: 'Broadacre cropping',
    packageType: 'Ready-to-Fly',
    finance: false,
    hectares: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }

    setStatus('loading');

    // Web3Forms logic
    const formDataObj = new FormData();
    formDataObj.append("access_key", FORMS.web3formsKey);
    formDataObj.append("subject", `New Lead from ${formData.name} - ${formData.farm}`);
    formDataObj.append("from_name", SITE.name);
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("message", `
      Farm: ${formData.farm}
      Crop Type: ${formData.cropType}
      Package: ${formData.packageType}
      Hectares/Year: ${formData.hectares}
      Finance Interest: ${formData.finance ? 'Yes' : 'No'}
    `);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formDataObj
      });

      const result = await response.json();
      if (result.success) {
        window.location.href = '/thank-you/';
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-bold text-brand mb-2">Thank You!</h3>
        <p>Your request has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div id="quote" className={`quote-form-container ${compact ? 'max-w-md mx-auto' : ''}`}>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      
      {/* Progress Bar */}
      <div className="mb-8 flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-brand -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
        {[1, 2, 3].map(i => (
          <div 
            key={i} 
            className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
              step >= i ? 'bg-brand text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name *</label>
              <input 
                required
                type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="farm">Farm Business Name *</label>
              <input 
                required
                type="text" id="farm" name="farm" value={formData.farm} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number *</label>
                <input 
                  required
                  type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address *</label>
                <input 
                  required
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cropType">Primary Crop/Terrain *</label>
              <select 
                id="cropType" name="cropType" value={formData.cropType} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              >
                <option>Broadacre cropping</option>
                <option>Pasture and seeding</option>
                <option>Orchard</option>
                <option>Vineyard</option>
                <option>Sugarcane</option>
                <option>Cotton</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Package Interest *</label>
              <div className="space-y-2">
                {['Aircraft Only', 'Ready-to-Fly', 'Turnkey Field Package'].map(pkg => (
                  <label key={pkg} className="flex items-center gap-2 cursor-pointer p-2 border border-gray-200 rounded hover:bg-gray-50">
                    <input 
                      type="radio" name="packageType" value={pkg} 
                      checked={formData.packageType === pkg} onChange={handleChange}
                      className="text-brand focus:ring-brand"
                    />
                    <span className="text-sm">{pkg}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hectares">Hectares per Year</label>
                <input 
                  type="number" id="hectares" name="hectares" value={formData.hectares} onChange={handleChange}
                  placeholder="e.g. 500"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer mt-6">
                <input 
                  type="checkbox" name="finance" checked={formData.finance} onChange={handleChange}
                  className="w-4 h-4 text-brand rounded focus:ring-brand"
                />
                <span className="text-sm">Interested in finance options</span>
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="font-bold text-gray-900 border-b pb-2">Review Your Request</h3>
            <div className="text-sm grid grid-cols-2 gap-y-2">
              <span className="text-gray-500">Name:</span> <span>{formData.name}</span>
              <span className="text-gray-500">Farm:</span> <span>{formData.farm}</span>
              <span className="text-gray-500">System:</span> <span>{formData.packageType}</span>
              <span className="text-gray-500">Operation:</span> <span>{formData.cropType}</span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By submitting, you agree to AeroAg Australia contacting you regarding this quote.
            </p>
          </div>
        )}

        <div className="flex gap-4 pt-6">
          {step > 1 && (
            <button 
              type="button" onClick={prevStep}
              className="btn btn-outline flex-1"
            >
              Back
            </button>
          )}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn btn-primary flex-1"
          >
            {status === 'loading' ? 'Sending...' : step === 3 ? 'Request Turnkey Package Quote' : 'Next Step'}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-sm mt-4">
            There was an error sending your request. Please call us directly at {CONTACT.phone}.
          </p>
        )}
      </form>
    </div>
  );
}
