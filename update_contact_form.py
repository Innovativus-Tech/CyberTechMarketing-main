import re

try:
    with open('components/ContactFormSection.tsx', 'r') as f:
        contact = f.read()

    # Layout colors
    contact = contact.replace('bg-gray-50 border-t border-gray-200', 'bg-white border-t border-gray-100')
    
    # Headings
    contact = contact.replace('text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6',
                              'text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6')
    contact = contact.replace('text-xl text-gray-600 font-medium',
                              'text-lg text-gray-500 font-light')

    # Card background and shadow (contact info and form)
    contact = contact.replace('bg-white p-8 rounded-2xl shadow-sm border border-gray-100',
                              'bg-white p-8 rounded-2xl border border-gray-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]')
    contact = contact.replace('bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100',
                              'bg-white p-8 md:p-10 rounded-2xl border border-gray-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]')

    # Icons background
    contact = contact.replace('bg-red-50', 'bg-gray-50')
    contact = contact.replace('text-red-600', 'text-gray-900')

    # Input styles
    contact = contact.replace('border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500',
                              'border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900')
    
    # Label styles
    contact = contact.replace('text-sm font-semibold text-gray-700', 'text-sm font-medium text-gray-700')
    contact = contact.replace('text-red-500', 'text-gray-400') # asterisk

    # Submit button
    contact = contact.replace('bg-red-600 hover:bg-red-700 disabled:opacity-50',
                              'bg-black hover:bg-gray-900 text-white rounded-xl shadow-md disabled:opacity-50')

    with open('components/ContactFormSection.tsx', 'w') as f:
        f.write(contact)
    print("Updated ContactFormSection.tsx")
except Exception as e:
    print("Error:", e)
