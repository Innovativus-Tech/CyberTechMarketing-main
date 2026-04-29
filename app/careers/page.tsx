import Link from 'next/link';

export default function CareersPage() {
  const jobs = [
    { title: "Senior SEO Specialist", department: "Marketing", location: "Remote", type: "Full-time" },
    { title: "Lead Graphic Designer", department: "Design", location: "New York, NY", type: "Full-time" },
    { title: "PPC Campaign Manager", department: "Advertising", location: "Remote", type: "Contract" },
    { title: "Frontend Developer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" }
  ];

  return (
    <main className="pt-20 pb-32 bg-white min-h-screen">
      <section className="page-top-red-gradient relative overflow-hidden pt-16 pb-20 mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join the Cybertech Team</h1>
            <p className="text-xl text-red-50/85 max-w-3xl mx-auto font-medium">
              We&apos;re always looking for brilliant minds to help us build the future of AI-native marketing. Discover your next career move below.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </main>
  );
}
