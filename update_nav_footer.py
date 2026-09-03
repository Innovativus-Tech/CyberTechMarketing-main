import re

try:
    with open('components/Navbar.tsx', 'r') as f:
        nav = f.read()

    # Red/heavy buttons -> black/elegant buttons
    nav = nav.replace('bg-red-600 hover:bg-red-700', 'bg-black hover:bg-gray-900')
    nav = nav.replace('bg-red-50 text-red-700 hover:bg-red-100', 'bg-gray-100 text-black hover:bg-gray-200')
    nav = nav.replace('text-[var(--color-brand-primary)]', 'text-gray-900')
    
    with open('components/Navbar.tsx', 'w') as f:
        f.write(nav)
    print("Updated Navbar.tsx")
except Exception as e:
    print("Error:", e)

try:
    with open('components/Footer.tsx', 'r') as f:
        foot = f.read()

    foot = foot.replace('bg-red-100 opacity-50 blur-[100px]', 'bg-gray-100 opacity-50 blur-[120px]')
    foot = foot.replace('text-[var(--color-brand-primary)]', 'text-gray-900')
    foot = foot.replace('bg-red-900', 'bg-gray-900')
    foot = foot.replace('border-l-[var(--color-brand-primary)] border-t-[var(--color-brand-primary)] border-b-[var(--color-brand-accent)]', 
                        'border-l-gray-900 border-t-gray-900 border-b-gray-400')
    
    with open('components/Footer.tsx', 'w') as f:
        f.write(foot)
    print("Updated Footer.tsx")
except Exception as e:
    print("Error:", e)
