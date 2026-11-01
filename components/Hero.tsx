import Image from "next/image";
import FadeIn from "./FadeIn";
import Button from "./Button";
import { clinicConfig as c } from "@/config/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {c.clinicName}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-secondary leading-[1.05]">
              {c.tagline}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Compassionate, modern veterinary care for dogs, cats and all companions.
              From routine checkups to emergency support — we&apos;re here for every tail wag.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${c.phone.replace(/\s/g, "")}`}>
                <Button size="lg">Call Now</Button>
              </a>
              <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">WhatsApp</Button>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              {c.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-secondary">{s.value}</div>
                  <div className="text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15} y={40}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={c.heroImage}
                alt={`${c.doctorName} with a pet`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}