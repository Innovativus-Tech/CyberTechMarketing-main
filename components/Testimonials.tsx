export default function Testimonials() {
  const testimonials = [
    { name: "Ananya", text: "As a startup, we needed a digital marketing partner who could understand our unique needs. They not only understood but also delivered outstanding results through their marketing strategies." },
    { name: "Ajay", text: "Working with Cybertech Marketing has been a game-changer for my business. Their team's expertise and dedication to results have helped us achieve a 200% increase in website traffic. I highly recommend them!" },
    { name: "Simran", text: "We've been partners for years, and they continue to exceed our expectations. Their campaigns have consistently delivered a high ROI, and their attention to detail is unmatched." },
    { name: "Rahul", text: "Choosing Cybertech Marketing was one of the best decisions we made for our e-commerce business. Their strategies have propelled us to the top of search engine rankings, resulting in a significant increase in sales." },
    { name: "Jai", text: "It's a pleasure to work with the team. Their dedication to our success is evident in the consistent growth of our email marketing campaigns. They're responsive, professional, and results-driven." }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            What They’re Talking About Agency?
          </h2>
          <p className="text-xl text-gray-600 font-medium">OUR TESTIMONIALS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm relative group overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100 rounded-full blur-[30px] group-hover:bg-red-200 transition-colors duration-500"></div>
              
              <div className="mb-6 text-red-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              
              <p className="text-gray-700 mb-8 relative z-10 text-lg leading-relaxed italic">
                {`"${t.text}"`}
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
