import re
import glob

files = glob.glob('components/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Find Lucide icons (e.g. <Mail className="..." />) and add strokeWidth={1.5}
    # This regex is a bit simplistic but works for basic self-closing tags
    
    # Let's just do a string replacement for the specific ones we know
    content = content.replace('<Mail className="w-5 h-5 text-gray-900" />', '<Mail className="w-5 h-5 text-gray-900" strokeWidth={1.5} />')
    content = content.replace('<Phone className="w-5 h-5 text-gray-900" />', '<Phone className="w-5 h-5 text-gray-900" strokeWidth={1.5} />')
    content = content.replace('<Building2 className="w-5 h-5 text-gray-900" />', '<Building2 className="w-5 h-5 text-gray-900" strokeWidth={1.5} />')

    with open(file, 'w') as f:
        f.write(content)

print("Updated icons in components")
