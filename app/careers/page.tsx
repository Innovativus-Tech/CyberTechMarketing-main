import Link from 'next/link';

export default function CareersPage() {
  const jobs = [
    { title: "Senior SEO Specialist", department: "Marketing", location: "Remote", type: "Full-time" },
    { title: "Lead Graphic Designer", department: "Design", location: "New York, NY", type: "Full-time" },
    { title: "PPC Campaign Manager", department: "Advertising", location: "Remote", type: "Contract" },
    { title: "Frontend Developer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" }
  ];

  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="about-page-hero">
        <div className="site-container about-page-layout" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-page-copy" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}><span /> Careers at Cybertech</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Join the <em>Cybertech</em> Team</h1>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
              We&apos;re always looking for brilliant minds to help us build the future of AI-native marketing and connected software. Discover your next career move below.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ padding: '80px 0' }}>
        <div className="site-container">
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> {job.location}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> {job.type}</span>
                </div>
              </div>
              <Link href="/contact" className="px-6 py-3 rounded-full bg-gray-900 hover:bg-[var(--color-brand-primary)] text-white font-bold transition-colors whitespace-nowrap">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
