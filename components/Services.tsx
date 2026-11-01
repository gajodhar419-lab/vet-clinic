import FadeIn from "./FadeIn";
import Card from "./Card";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Services({ limit }: { limit?: number }) {
  const items = limit ? c.services.slice(0, limit) : c.services;
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Veterinary Services"
          subtitle="From preventive care to complex procedures — everything your pet needs under one roof."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <Card className="h-full">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}