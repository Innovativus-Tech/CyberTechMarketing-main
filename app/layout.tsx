import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollRestoration from "@/components/ScrollRestoration";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Cybertech Marketing | Digital Growth, Software & AI",
  description: "Cybertech Marketing builds connected digital growth systems, software products, AI solutions, and mobile experiences.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "4500x4500" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-scroll-behavior="smooth">
      <body>
        <ScrollProgress />
        <ScrollRestoration />
        <Navbar />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
