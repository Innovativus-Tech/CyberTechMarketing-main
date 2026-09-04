import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/917428768779"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Cybertech Marketing on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
