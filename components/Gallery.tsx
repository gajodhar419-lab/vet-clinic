"use client";
import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Gallery({ limit }: { limit?: number }) {
  const images = limit ? c.gallery.slice(0, limit) : c.gallery;
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clinic"
          title="A Space Designed for Comfort"
          subtitle="Clean, modern and welcoming — for pets and their people."
        />
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {images.map((src, i) => (
            <FadeIn key={src} delay={i * 0.04}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Clinic gallery ${i + 1}`}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active]}
              alt={`Clinic gallery ${active + 1}`}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}