import re

with open('app/globals.css', 'r') as f:
    css = f.read()

# Update hero-red-gradient to be a sleek dark gradient with subtle red accents
new_hero_gradient = """
.hero-red-gradient {
  background:
    radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 40%),
    linear-gradient(180deg, #09090b 0%, #18181b 100%);
}
"""
css = re.sub(r'\.hero-red-gradient\s*\{[^}]*\}', new_hero_gradient.strip(), css, flags=re.MULTILINE)

# Update page-top-red-gradient
new_page_top = """
.page-top-red-gradient {
  background:
    radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 60%),
    linear-gradient(180deg, #09090b 0%, #18181b 100%);
}
"""
css = re.sub(r'\.page-top-red-gradient\s*\{[^}]*\}', new_page_top.strip(), css, flags=re.MULTILINE)

# Adjust service card hover to be more elegant (less red shadow)
new_service_card_hover = """
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.1);
  border-color: rgba(220, 38, 38, 0.4);
}
"""
css = re.sub(r'\.service-card:hover\s*\{[^}]*\}', new_service_card_hover.strip(), css, flags=re.MULTILINE)

# Adjust section badge glow
new_badge_glow = """
.section-badge-glow {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #171717;
}
"""
css = re.sub(r'\.section-badge-glow\s*\{[^}]*\}', new_badge_glow.strip(), css, flags=re.MULTILINE)

# Ensure the changes are written
with open('app/globals.css', 'w') as f:
    f.write(css)

print("Updated globals.css")
