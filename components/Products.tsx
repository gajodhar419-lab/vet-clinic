import Image from "next/image";
import FadeIn from "./FadeIn";
import Card from "./Card";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pet Store"
          title="Food, Accessories & More"
          subtitle="Quality pet products available right at our clinic."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.products.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <Card className="h-full overflow-hidden p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name={p.icon} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}