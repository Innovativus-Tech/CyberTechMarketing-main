import Link from 'next/link';
import { getAllServices, type ServiceDocument } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import { defaultHomePageContent } from '@/lib/homePage';

const fallbackServices = [
    {
      title: "Digital Marketing & Growth",
      desc: "Comprehensive digital marketing strategies to accelerate your business growth and maximize ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      tag: "Growth Strategy",
      metric: "SEO + Paid Media + Funnels",
      href: "/services/digital-marketing-growth"
    },
    {
      title: "Web Development",
      desc: "Custom, responsive, and high-performance websites tailored to your brand and business goals.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      tag: "Digital Presence",
      metric: "Modern Sites That Convert",
      href: "/services/web-development"
    },
    {
      title: "Software Development",
      desc: "Robust and scalable software solutions designed to streamline operations and drive innovation.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      tag: "Enterprise Solutions",
      metric: "Scalable Architecture",
      href: "/services/software-development"
    },
    {
      title: "AI & Intelligent Solutions",
      desc: "Cutting-edge artificial intelligence tools to automate processes and enhance decision-making.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
      tag: "Automation & AI",
      metric: "Process Optimization",
      href: "/services/ai-intelligent-solutions"
    },
    {
      title: "Machine Learning & Data",
      desc: "Unlock the power of your data with advanced machine learning models and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      tag: "Data Science",
      metric: "Predictive Insights",
      href: "/services/machine-learning-data"
    },
    {
      title: "Mobile App Development",
      desc: "Engaging and intuitive mobile applications for iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
      tag: "Mobile First",
      metric: "iOS + Android Native",
      href: "/services/mobile-app-development"
    }
  ];

type ServiceCard = {
  title: string;
  desc: string;
  image: string;
  tag: string;
  metric: string;
  href: string;
};

type ServicesProps = {
  title?: string;
  description?: string;
  services?: ServiceCard[];
};

function mapServiceToCard(service: ServiceDocument): ServiceCard | null {
  const slug = service.slug?.current;

  if (!slug || !service.title || !service.description) {
    return null;
  }

  return {
    title: service.title,
    desc: service.description,
    image: service.image
      ? urlFor(service.image).width(1600).quality(80).url()
      : fallbackServices[0].image,
    tag: service.cardTag || service.title,
    metric: service.cardMetric || service.category || 'Growth System',
    href: `/services/cms/${slug}`,
  };
}

export default async function Services({
  title = defaultHomePageContent.servicesTitle,
  description = defaultHomePageContent.servicesDescription,
  services,
}: ServicesProps) {
  const resolvedServices = services
    ? services
    : ((await getAllServices()).map(mapServiceToCard).filter(Boolean) as ServiceCard[]);

  const cards = resolvedServices.length > 0 ? resolvedServices : fallbackServices;

  return (
    <section id="services" className="py-32 bg-gray-50 relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((service, idx) => (
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
