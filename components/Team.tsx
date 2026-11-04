import Image from "next/image";
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
              <Card className="h-full overflow-hidden p-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-secondary">{d.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{d.qualification}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}