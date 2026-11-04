import Image from "next/image";
import FadeIn from "./FadeIn";
import Button from "./Button";
import { ShieldCheck, Phone, Star, Calendar } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[92vh] flex items-center overflow-hidden">
      <Image
        src={c.heroImage}
        alt={`${c.doctorName} with a pet`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur">
              <ShieldCheck size={14} /> Trusted Veterinary Care
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              {c.tagline}
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
              Compassionate, modern veterinary care for dogs, cats and all companions.
              From routine checkups to emergency support — we&apos;re here for every tail wag.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${c.phone.replace(/\s/g, "")}`}>
                <Button size="lg" className="bg-white/20 text-white backdrop-blur border border-white/40 hover:bg-white/30">
                  <Phone size={18} /> Call Now
                </Button>
              </a>
              <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white/20 text-white backdrop-blur border border-white/40 hover:bg-white/30">
                  <Calendar size={18} /> Book Appointment
                </Button>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-white/90 text-sm">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <span>4.9 rating · 500+ happy pet parents</span>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {c.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 text-white"
                >
                  <div className="text-2xl sm:text-3xl font-semibold">{s.value}</div>
                  <div className="text-xs sm:text-sm text-white/80 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}