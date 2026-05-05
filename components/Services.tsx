import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Our services leverage online channels to promote businesses, products, or services. These encompass SEO, social media, email marketing, PPC advertising, and content marketing to reach and engage target audiences effectively.",
      color: "from-red-600 to-red-950",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      tag: "Growth Strategy",
      metric: "SEO + Paid Media + Funnels",
      href: "/services/digital-marketing"
    },
    {
      title: "Graphic Design",
      desc: "We craft visual elements like logos, images, and layouts to communicate messages effectively. We enhance branding, marketing materials, and websites to engage and leave lasting impressions on audiences.",
      color: "from-rose-600 to-red-900",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
      tag: "Creative Systems",
      metric: "Branding + Campaign Visuals",
      href: "/services/graphic-design"
    },
    {
      title: "E-commerce Marketing",
      desc: "We specialize in promoting online stores, enhancing visibility, driving traffic, and optimizing conversions. Strategies include SEO, SEM, email marketing, social media ads, and product listing optimization for e-commerce success.",
      color: "from-red-500 to-rose-950",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
      tag: "Revenue Engine",
      metric: "Store Growth + Retention",
      href: "/services/ecommerce-marketing"
    },
    {
      title: "Pay Per Click",
      desc: "PPC marketing services manage online advertising campaigns, paying only when users click on ads. We target keywords, demographics, and platforms to maximize ROI and drive targeted traffic to websites.",
      color: "from-orange-600 to-red-950",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      tag: "Performance Ads",
      metric: "Clicks + ROAS Optimization",
      href: "/services/pay-per-click"
    },
    {
      title: "Web Design",
      desc: "We create visually appealing, user-friendly websites. We focus on layout, graphics, navigation, and responsiveness to provide an engaging online experience, optimizing branding and customer engagement.",
      color: "from-pink-600 to-red-950",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      tag: "UX + Conversion",
      metric: "Modern Sites That Convert",
      href: "/services/web-design"
    },
    {
      title: "Content Writing",
      desc: "Content writing services create high-quality, relevant, and engaging written content for websites, blogs, and marketing materials. We aim to inform, entertain, and persuade, boosting online visibility and audience engagement.",
      color: "from-red-700 to-red-950",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
      tag: "Content Engine",
      metric: "Authority + Organic Reach",
      href: "/services/content-writing"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Marketing Systems Built to Grow Your Business
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Explore our integrated services designed to increase visibility, conversions, and long-term revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="service-card h-[400px] border border-gray-200 group cursor-pointer shadow-sm hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105" style={{ backgroundImage: `url(${service.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-white/10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]"></div>

              <div className="absolute top-8 left-8 right-8 z-10">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
                  {service.tag}
                </div>
                <h3 className="mt-5 text-2xl font-black text-white mb-2 leading-tight tracking-tight">{service.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  {service.metric}
                </p>
              </div>

              <div className="service-card-content z-10">
                <div className="w-12 h-1 bg-white mb-4 rounded-full opacity-50"></div>
                <p className="service-card-desc text-white text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-red-700 group-focus-visible:bg-white group-focus-visible:text-red-700">
                  Explore Service
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
