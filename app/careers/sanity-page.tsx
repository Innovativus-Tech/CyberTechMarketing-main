import { getAllOpenPositions } from '@/lib/queries';
import Link from 'next/link';

export default async function CareersPage() {
  const positions = await getAllOpenPositions();

  return (
    <main className="pt-16 pb-16 bg-white min-h-screen">
      <section className="page-top-red-gradient relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200/30 bg-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse"></span>
            <span className="text-sm font-bold text-red-50 tracking-wide uppercase">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Careers at Cybertech</h1>
          <p className="text-xl text-red-50/85 max-w-3xl mx-auto font-medium">
            Be part of a team transforming digital marketing with AI-native solutions
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {positions && positions.length > 0 ? (
          <div className="space-y-8">
            {positions.map((position) => (
              <div key={position._id} className="border-l-4 border-red-600 pl-6 py-6 bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                    <p className="text-gray-600 mt-1">
                      {position.department} • {position.location} • {position.employmentType}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    Open
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{position.challenge}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {position.requirements && position.requirements.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {position.benefits && position.benefits.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Link
                  href={position.applicationUrl || '/contact'}
                  className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No open positions at the moment. Check back soon!</p>
          </div>
        )}
      </section>
    </main>
  );
}
