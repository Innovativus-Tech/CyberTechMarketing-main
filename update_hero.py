import re

with open('components/Hero.tsx', 'r') as f:
    hero = f.read()

# Make heading more elegant: text-[80px] to maybe text-[90px], tighter tracking, maybe a lighter font weight, drop-shadow removed for cleaner look
hero = hero.replace('text-4xl md:text-7xl lg:text-[80px] font-normal tracking-tight mb-6 md:mb-8 leading-[1.1] text-white drop-shadow-lg', 
                    'text-5xl md:text-7xl lg:text-[90px] font-light tracking-[-0.04em] mb-6 md:mb-8 leading-[1.05] text-white')

# Description text: subtle gray, better weight
hero = hero.replace('text-lg md:text-[22px] text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-snug font-medium',
                    'text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light')

# Buttons: Sleeker solid and outline styles
hero = hero.replace('px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-red-950/30',
                    'px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.1)]')

hero = hero.replace('flex items-center justify-between bg-white/15 backdrop-blur-sm rounded-full p-1 pl-6 w-full sm:w-auto border border-white/10',
                    'flex items-center justify-between bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full p-1.5 pl-8 w-full sm:w-auto border border-white/10 transition-all duration-300')

hero = hero.replace('text-white font-bold mr-4', 'text-white font-medium mr-6')
hero = hero.replace('w-10 h-10 rounded-full bg-red-600 hover:bg-red-700', 'w-10 h-10 rounded-full bg-transparent border border-white/20')

# Hero card gradients/blurs
hero = hero.replace('bg-gradient-to-r from-slate-950/70 via-red-950/45 to-slate-950/55', 
                    'bg-gradient-to-tr from-black/80 via-black/40 to-transparent')

# Change red/orange blurs to more subtle brand colors
hero = hero.replace('bg-red-500/18 blur-3xl', 'bg-red-500/20 blur-[80px]')
hero = hero.replace('bg-orange-400/12 blur-3xl', 'bg-red-600/10 blur-[80px]')
hero = hero.replace('bg-white/10 blur-3xl', 'bg-white/5 blur-[80px]')

with open('components/Hero.tsx', 'w') as f:
    f.write(hero)

print("Updated Hero.tsx")
