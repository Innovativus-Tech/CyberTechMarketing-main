import re

try:
    with open('components/WhyChooseUs.tsx', 'r') as f:
        why = f.read()

    # Improve background and borders
    why = why.replace('bg-white', 'bg-[#FAFAFA]')
    
    # Headings
    why = why.replace('text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6',
                      'text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6')
    
    why = why.replace('text-xl text-gray-600 font-medium',
                      'text-lg md:text-xl text-gray-500 font-light max-w-2xl')

    # Accent color
    why = why.replace('text-red-600', 'text-gray-900') # Dark icons instead of red
    why = why.replace('bg-red-50', 'bg-gray-100')
    why = why.replace('bg-red-600', 'bg-black')
    why = why.replace('bg-red-700', 'bg-gray-900')

    with open('components/WhyChooseUs.tsx', 'w') as f:
        f.write(why)
    print("Updated WhyChooseUs.tsx")
except Exception as e:
    print("Error:", e)
