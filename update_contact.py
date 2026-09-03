import re

with open('app/contact/page.tsx', 'r') as f:
    content = f.read()

# Replace ContactFormModal import with ContactFormSection
content = content.replace("import ContactFormModal from '@/components/ContactFormModal';", "import ContactFormSection from '@/components/ContactFormSection';")

# Find the start of the Direct Contact Section
start_marker = "{/* Direct Contact Section */}"
end_marker = "{/* Trust Signals Section */}"
start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + "<ContactFormSection />\n\n      " + content[end_idx:]
    
    # Remove the Contact Form Modal logic at the bottom
    modal_logic_start = "{/* Contact Form Modal */}"
    modal_idx = new_content.find(modal_logic_start)
    if modal_idx != -1:
        new_content = new_content[:modal_idx] + "</main>\n  );\n}\n"
    
    with open('app/contact/page.tsx', 'w') as f:
        f.write(new_content)
    print("Updated app/contact/page.tsx successfully.")
else:
    print("Could not find sections in app/contact/page.tsx")
