import FadeIn from "./FadeIn";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on Trust, Care & Expertise"
          subtitle="A clinic designed around your pet's comfort and your peace of mind."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.whyChooseUs.map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.05}>
              <div className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={w.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">{w.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{w.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}