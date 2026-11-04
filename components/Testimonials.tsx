import FadeIn from "./FadeIn";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import { Star, Quote } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Pets & Their Parents"
          subtitle="Real stories from families we've had the joy of caring for."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {c.testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <Card className="h-full flex flex-col relative overflow-hidden">
                <Quote
                  size={64}
                  className="absolute -top-2 -right-2 text-primary/5"
                />
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed flex-1">“{t.review}”</p>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-semibold text-sm shrink-0">
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.pet}</div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}