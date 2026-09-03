import os

services = [
    {
        "slug": "digital-marketing-growth",
        "title": "Digital Marketing & Growth",
        "desc": "Comprehensive digital marketing strategies to accelerate your business growth and maximize ROI.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
        "features": ["Search Engine Optimization (SEO)", "Pay-Per-Click Advertising", "Content Marketing", "Social Media Strategy"]
    },
    {
        "slug": "web-development",
        "title": "Web Development",
        "desc": "Custom, responsive, and high-performance websites tailored to your brand and business goals.",
        "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        "features": ["Frontend Development", "Backend Systems", "E-commerce Solutions", "CMS Integration"]
    },
    {
        "slug": "software-development",
        "title": "Software Development",
        "desc": "Robust and scalable software solutions designed to streamline operations and drive innovation.",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        "features": ["Custom Enterprise Software", "API Development", "Cloud Architecture", "System Integration"]
    },
    {
        "slug": "ai-intelligent-solutions",
        "title": "AI & Intelligent Solutions",
        "desc": "Cutting-edge artificial intelligence tools to automate processes and enhance decision-making.",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        "features": ["Natural Language Processing", "Process Automation", "Predictive Analytics", "AI Chatbots"]
    },
    {
        "slug": "machine-learning-data",
        "title": "Machine Learning & Data",
        "desc": "Unlock the power of your data with advanced machine learning models and predictive analytics.",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        "features": ["Data Mining", "Predictive Modeling", "Computer Vision", "Deep Learning"]
    },
    {
        "slug": "mobile-app-development",
        "title": "Mobile App Development",
        "desc": "Engaging and intuitive mobile applications for iOS and Android platforms.",
        "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        "features": ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"]
    }
]

template = """import Link from 'next/link';
import Image from 'next/image';

export default function {component_name}Page() {{
  return (
    <main className="w-full">
      {{/* Hero Section */}}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="{image}" 
            alt="{title}" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            {desc}
          </p>
        </div>
      </section>

      {{/* Overview Section */}}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why {title}?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our {title} services are designed to give you a competitive edge in today's fast-paced digital landscape. We focus on delivering high-quality, scalable solutions tailored to your unique requirements.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Expert Team:</strong> Dedicated professionals with years of experience.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Custom Solutions:</strong> Strategies and architectures built specifically for you.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Ongoing Support:</strong> We stand by our work with continuous optimization and support.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image 
              src="{image}"
              alt="{title} Analytics"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {{/* Key Services */}}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Core Capabilities</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to ensure your success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {{[
              "{f1}",
              "{f2}",
              "{f3}",
              "{f4}"
            ].map((feature, idx) => (
              <div key={{idx}} className="bg-white border border-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-red-700 font-bold text-lg">{{idx + 1}}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{{feature}}</h3>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* CTA Section */}}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's build something amazing together.
          </p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}}
"""

for s in services:
    component_name = "".join(word.capitalize() for word in s['slug'].split('-'))
    content = template.format(
        component_name=component_name,
        title=s['title'],
        desc=s['desc'],
        image=s['image'],
        f1=s['features'][0],
        f2=s['features'][1],
        f3=s['features'][2],
        f4=s['features'][3]
    )
    
    dir_path = f"app/services/{s['slug']}"
    os.makedirs(dir_path, exist_ok=True)
    
    with open(f"{dir_path}/page.tsx", "w") as f:
        f.write(content)

print("Pages created successfully.")
