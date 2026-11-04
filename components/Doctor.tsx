import Image from "next/image";
import FadeIn from "./FadeIn";

import SectionHeading from "./SectionHeading";
import { Award, GraduationCap, Briefcase, Heart } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Doctor() {
  const certs = [
    { icon: GraduationCap, label: c.doctorQualification },
    { icon: Briefcase, label: c.doctorExperience },
    { icon: Award, label: "Registered Veterinarian" },
    { icon: Heart, label: "Compassionate Care" },
  ];
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet The Doctor"
          title="Compassionate Care, Expert Hands"
          subtitle="Led by a veterinarian who treats every pet like his own."
        />
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <FadeIn className="lg:col-span-2">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg ring-1 ring-border">
              <Image
                src={c.doctorImage}
                alt={c.doctorName}
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-secondary/90 to-transparent">
                <div className="text-white font-semibold text-lg">{c.doctorName}</div>
                <div className="text-white/80 text-sm">{c.doctorTitle}</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <h3 className="text-3xl sm:text-4xl font-semibold text-secondary">{c.doctorName}</h3>
            <p className="text-primary font-medium mt-1">{c.doctorTitle}</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {certs.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <cert.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{cert.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">{c.doctorBio}</p>
            <div className="mt-6" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}