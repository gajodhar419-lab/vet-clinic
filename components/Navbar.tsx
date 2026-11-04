"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Phone, Calendar, PawPrint } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

const links = [
  { href: "/", label: "Home", anchor: null },
  { href: "/services", label: "Services", anchor: null },
  { href: "/#products", label: "Pet Store", anchor: "products" },
  { href: "/about", label: "About Doctor", anchor: null },
  { href: "/gallery", label: "Gallery", anchor: null },
  { href: "/contact", label: "Contact", anchor: null },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNav = (e: React.MouseEvent, link: (typeof links)[number]) => {
    if (link.anchor) {
      e.preventDefault();
      const el = document.getElementById(link.anchor);
      if (el) {
        const offset = 90;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        router.push(link.href);
      }
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft">
              <PawPrint size={22} />
            </div>
            <span className="font-semibold text-secondary text-lg tracking-tight hidden sm:block">
              {c.clinicName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              <Phone size={16} /> {c.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-secondary transition-colors shadow-soft"
            >
              <Calendar size={16} /> Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-secondary"
            aria-label="menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l)}
                className="block text-base font-medium text-gray-700 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-base font-medium text-secondary">
              <Phone size={18} /> {c.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white text-base font-medium px-5 py-3 rounded-full"
            >
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}