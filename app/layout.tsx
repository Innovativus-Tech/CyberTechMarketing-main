import type { Metadata } from "next";
import { headers } from 'next/headers';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getSiteSettings } from '@/lib/siteSettings';

export const metadata: Metadata = {
  title: "Cybertech Marketing | AI-Powered Digital Agency",
  description: "Transforming clicks into conversions with cutting-edge digital marketing strategies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const pathname = headerStore.get('x-pathname') || '';
  const isStudioRoute = pathname.startsWith('/studio');
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[var(--background)] relative">
        {!isStudioRoute && <Navbar settings={siteSettings} />}
        <main className="flex-grow">
          {children}
        </main>
        {!isStudioRoute && <Footer settings={siteSettings} />}
        {!isStudioRoute && <Chatbot />}
        {!isStudioRoute && <WhatsAppWidget />}
      </body>
    </html>
  );
}
