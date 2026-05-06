import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: any;
  icon: string;
  category: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug.current}`}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        {service.image && (
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <Image
              src={urlFor(service.image).url()}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">
            {service.category}
          </span>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
          <span className="inline-flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 transition-all">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
