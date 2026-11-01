import FadeIn from "./FadeIn";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { clinicConfig as c } from "@/config/config";

export default function Contact() {
  const items = [
    { icon: "Phone", label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { icon: "WhatsApp", label: "WhatsApp", value: `+${c.whatsapp}`, href: `https://wa.me/${c.whatsapp}` },
    ...(c.email ? [{ icon: "Mail", label: "Email", value: c.email, href: `mailto:${c.email}` }] : []),
  ];
  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="We'd love to hear from you. Reach out to book an appointment or ask a question."
        />
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="space-y-4">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.label === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon name={it.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">{it.label}</div>
                    <div className="text-secondary font-medium mt-1">{it.value}</div>
                  </div>
                </a>
              ))}

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Our Locations</div>
                {c.locations.map((loc) => (
                  <div key={loc.name} className="p-5 rounded-2xl bg-white border border-border">
                    <div className="font-semibold text-secondary">{loc.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{loc.address}</div>
                    <div className="text-sm text-gray-500 mt-1">{loc.hours}</div>
                    <a
                      href={loc.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary mt-2"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                ))}
              </div>

              {c.googleReviewLink && (
                <a
                  href={c.googleReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary"
                >
                  Leave a Google Review →
                </a>
              )}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {c.locations.map((loc) => (
                <div key={loc.name} className="rounded-3xl overflow-hidden shadow-soft border border-border h-[320px]">
                  <iframe
                    src={loc.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={loc.name}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}