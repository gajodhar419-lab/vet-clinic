import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Gallery({ limit }: { limit?: number }) {
  const images = limit ? c.gallery.slice(0, limit) : c.gallery;
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clinic"
          title="A Space Designed for Comfort"
          subtitle="Clean, modern and welcoming — for pets and their people."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <FadeIn key={src} delay={i * 0.05}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={src}
                  alt={`Clinic gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}