import FadeIn from "./FadeIn";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Team() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Doctors"
          subtitle="A dedicated team working alongside Dr. Harish Garhwal."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.team.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.05}>
              <Card className="h-full text-center">
                <h3 className="text-lg font-semibold text-secondary">{d.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{d.qualification}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}