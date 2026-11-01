import FadeIn from "./FadeIn";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import { Star } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Pets & Their Parents"
          subtitle="Real stories from families we've had the joy of caring for."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {c.testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <Card className="h-full flex flex-col">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed flex-1">“{t.review}”</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-secondary">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.pet}</div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}