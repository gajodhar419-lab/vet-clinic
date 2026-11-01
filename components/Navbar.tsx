"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { clinicConfig as c } from "@/config/config";
import Icon from "./Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#products", label: "Pet Store" },
  { href: "/about", label: "About Doctor" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
              <Icon name="PawPrint" size={22} />
            </div>
            <span className="font-semibold text-white text-lg tracking-tight hidden sm:block">
              {c.clinicName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              <Phone size={16} /> {c.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors shadow-soft">
              <Calendar size={16} /> Book Appointment
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-gray-700 hover:text-primary">
                {l.label}
              </Link>
            ))}
            <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-base font-medium text-secondary">
              <Phone size={18} /> {c.phone}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 bg-primary text-white text-base font-medium px-5 py-3 rounded-full">
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}