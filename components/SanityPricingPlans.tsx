'use client';

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface PricingPlan {
  _id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  ctaUrl: string;
}

export default function PricingPlans({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`rounded-2xl p-8 transition-transform hover:scale-105 ${
                plan.isPopular
                  ? 'bg-gradient-to-br from-red-900 to-red-700 text-white shadow-2xl ring-2 ring-red-400 md:scale-105'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="inline-block bg-red-400 text-red-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-red-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className={plan.isPopular ? 'text-red-100' : 'text-gray-600'}>{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`text-xl mt-1 ${plan.isPopular ? 'text-red-400' : 'text-red-600'}`}>✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaUrl}
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  plan.isPopular
                    ? 'bg-red-400 text-red-900 hover:bg-red-300'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
