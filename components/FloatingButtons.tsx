"use client";
import { Phone, MessageCircle } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {c.instagram && (
        <a
          href={c.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="h-12 w-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      )}
      <a
        href={`https://wa.me/${c.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${c.phone.replace(/\s/g, "")}`}
        aria-label="Call"
        className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}