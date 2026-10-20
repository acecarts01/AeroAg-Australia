'use client';

import React from 'react';

/**
 * Finance Calculator
 */
export function FinanceCalculator({ basePrice = 32990 }) {
  const [price, setPrice] = React.useState(basePrice);
  const [deposit, setDeposit] = React.useState(10);
  const [term, setTerm] = React.useState(5);
  const [rate, setRate] = React.useState(9);

  const calculateMonthly = () => {
    const principal = price * (1 - deposit / 100);
    const monthlyRate = (rate / 100) / 12;
    const numberOfPayments = term * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;
    
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthly;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Finance Repayment Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Package Price ($)</label>
          <input 
            type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Deposit (%)</label>
          <input 
            type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Term (Years)</label>
          <input 
            type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Rate (% p.a.)</label>
          <input 
            type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Estimated Monthly Repayment</span>
        <span className="text-3xl font-bold text-brand">${Math.round(calculateMonthly()).toLocaleString()}</span>
        <span className="block text-[10px] text-gray-400 mt-2 italic leading-tight">
          Indicative only. Subject to lender approval. Not credit advice.
        </span>
      </div>
    </div>
  );
}

/**
 * Own-vs-Hire Calculator
 */
export function PaybackCalculator({ packagePrice = 32990 }) {
  const [hectares, setHectares] = React.useState(1000);
  const [contractorRate, setContractorRate] = React.useState(34);

  const annualContractorSpend = hectares * contractorRate;
  const paybackHectares = (packagePrice / 1.1) / contractorRate; // Using ex-GST for ROI

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Own-vs-Hire ROI Calculator</h3>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Hectares per Year</label>
          <input 
            type="number" value={hectares} onChange={(e) => setHectares(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Contractor Rate ($/ha)</label>
          <input 
            type="number" value={contractorRate} onChange={(e) => setContractorRate(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          />
          <span className="text-[10px] text-gray-400 italic">2024 WA contractor figure, edit to your quote.</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded text-center">
          <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Annual Spend</span>
          <span className="text-xl font-bold text-gray-900">${Math.round(annualContractorSpend).toLocaleString()}</span>
        </div>
        <div className="bg-brand/5 p-3 rounded text-center border border-brand/10">
          <span className="block text-[10px] text-brand uppercase font-bold mb-1">Payback (ha)</span>
          <span className="text-xl font-bold text-brand">{Math.round(paybackHectares).toLocaleString()} ha</span>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 mt-4 italic leading-tight">
        Excludes labour, chemicals, batteries, licensing and finance costs. ILLUSTRATIVE.
      </p>
    </div>
  );
}
