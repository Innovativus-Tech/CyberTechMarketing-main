import re

with open('components/Services.tsx', 'r') as f:
    services = f.read()

# Update background from gray-50 to white for a cleaner look
services = services.replace('bg-gray-50 relative border-y border-gray-200', 'bg-white relative border-y border-gray-100')

# Make heading more elegant
services = services.replace('text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6',
                            'text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6')

services = services.replace('text-xl text-gray-600 font-medium',
                            'text-lg md:text-xl text-gray-500 font-light max-w-2xl')

# Card styling: sleek glass or elegant hover
services = services.replace('border border-gray-200 group cursor-pointer shadow-sm hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200',
                            'border border-gray-200/60 group cursor-pointer shadow-sm hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-2xl overflow-hidden bg-gray-50/50')

# Gradient inside the card
services = services.replace('bg-gradient-to-t from-black/80 via-black/30 to-white/10',
                            'bg-gradient-to-t from-black/90 via-black/40 to-black/5')

services = services.replace('bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]',
                            'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]')

# Card tag (e.g., Growth Strategy)
services = services.replace('border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm',
                            'border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md rounded-full')

# Card title
services = services.replace('text-2xl font-black text-white mb-2 leading-tight tracking-tight',
                            'text-2xl font-bold text-white mb-2 tracking-tight')

# Card desc
services = services.replace('text-white text-sm leading-relaxed font-medium',
                            'text-gray-300 text-sm leading-relaxed font-light')

# Card CTA
services = services.replace('border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-red-700',
                            'border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black rounded-full')


with open('components/Services.tsx', 'w') as f:
    f.write(services)

print("Updated Services.tsx")
