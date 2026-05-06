import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface Testimonial {
  _id: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorImage: any;
  rating: number;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
      <div className="flex items-center gap-4">
        {testimonial.authorImage && (
          <div className="relative w-12 h-12">
            <Image
              src={urlFor(testimonial.authorImage).url()}
              alt={testimonial.authorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{testimonial.authorName}</p>
          <p className="text-sm text-gray-600">
            {testimonial.authorRole}
            {testimonial.authorCompany && ` at ${testimonial.authorCompany}`}
          </p>
        </div>
      </div>
    </div>
  );
}
