'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  // Replace with the actual phone number you want to use for WhatsApp
  const phoneNumber = '917428768779';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-gray-900"></div>
      </span>
    </a>
  );
}
