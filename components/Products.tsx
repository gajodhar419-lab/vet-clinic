import Image from "next/image";
import FadeIn from "./FadeIn";
import Card from "./Card";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { clinicConfig as c } from "@/config/config";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pet Store"
          title="Food, Accessories & More"
          subtitle="Quality pet products available right at our clinic."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.products.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <Card className="h-full overflow-hidden p-0 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-primary shadow-soft">
                    <Icon name={p.icon} size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-secondary transition-colors shadow-soft"
          >
            <ShoppingBag size={16} /> Visit Our Store
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}