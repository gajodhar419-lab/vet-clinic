import Image from "next/image";
import FadeIn from "./FadeIn";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Doctor() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet The Doctor"
          title="Compassionate Care, Expert Hands"
          subtitle="Led by a veterinarian who treats every pet like his own."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-md">
              <Image
                src={c.doctorImage}
                alt={c.doctorName}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-3xl font-semibold text-secondary">{c.doctorName}</h3>
            <p className="text-primary font-medium mt-1">{c.doctorTitle}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-white border border-border text-sm text-gray-700">{c.doctorQualification}</span>
              <span className="px-3 py-1 rounded-full bg-white border border-border text-sm text-gray-700">{c.doctorExperience}</span>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">{c.doctorBio}</p>
            <div className="mt-8">
              <Button href="/contact">Book a Consultation</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}