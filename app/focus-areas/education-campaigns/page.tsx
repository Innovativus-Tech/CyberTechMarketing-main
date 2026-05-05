import Link from 'next/link';
import Image from 'next/image';

export default function EducationCampaignsPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1427504494785-405a60b8016c?q=80&w=2070&auto=format&fit=crop" alt="Education" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Education Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Drive enrollment and build educational institution reputation</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Increase Student Enrollment</h2>
            <p className="text-lg text-slate-600 mb-4">Educational institutions need effective marketing to attract qualified students. We develop comprehensive enrollment marketing strategies for colleges, universities, online learning platforms, and training institutes.</p>
            <p className="text-lg text-slate-600 mb-6">From student recruitment to program promotion and alumni engagement, we help educational organizations grow their student base and reputation.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Student Recruitment:</strong> Target qualified applicants</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Program Marketing:</strong> Promote specialized programs</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Reputation Building:</strong> Showcase achievements</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1470&auto=format&fit=crop" alt="Education Growth" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Student Recruitment Campaigns',
              'Program Promotion',
              'University Rankings & SEO',
              'Alumni Engagement',
              'Content Marketing for EdTech',
              'Virtual Tour & Video Production'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Student Enrollment Strategy</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Target Audience Research", desc: "Identify and understand your ideal student profile" },
            { num: "02", title: "Enrollment Marketing", desc: "Create campaigns that drive qualified applications" },
            { num: "03", title: "Student Journey Optimization", desc: "Guide prospects through application process" },
            { num: "04", title: "Student Retention", desc: "Programs to keep enrolled students engaged" }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Enrollment?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop an enrollment marketing strategy that works</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Start Education Marketing</Link>
        </div>
      </section>
    </main>
  );
}
