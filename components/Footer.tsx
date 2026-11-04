import Link from "next/link";
import Icon from "./Icon";
import { Heart } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#products", label: "Pet Store" },
    { href: "/about", label: "About Doctor" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <footer className="bg-secondary text-white mt-0 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon name="PawPrint" size={20} className="text-white" />
              </div>
              <span className="font-semibold text-lg">{c.clinicName}</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">{c.tagline}</p>
            <div className="flex gap-3 mt-5">
              {c.instagram && (
                <a
                  href={c.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="Instagram" size={16} className="text-white" />
                </a>
              )}
              {c.facebook && (
                <a
                  href={c.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="Facebook" size={16} className="text-white" />
                </a>
              )}
              <a
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="WhatsApp" size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{c.phone}</li>
              {c.email && <li>{c.email}</li>}
              {c.locations.map((loc) => (
                <li key={loc.name}>{loc.name}: {loc.address}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {c.locations.map((loc) => (
                <li key={loc.name}>{loc.name}: {loc.hours}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/60">
          <span>© {new Date().getFullYear()} {c.clinicName}. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-400" /> for pets
          </span>
        </div>
      </div>
    </footer>
  );
}