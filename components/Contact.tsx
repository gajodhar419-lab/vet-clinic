"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { Send, AlertCircle } from "lucide-react";
import { clinicConfig as c } from "@/config/config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", pet: "", message: "" });

  const items = [
    { icon: "Phone", label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { icon: "WhatsApp", label: "WhatsApp", value: `+${c.whatsapp}`, href: `https://wa.me/${c.whatsapp}` },
    ...(c.email ? [{ icon: "Mail", label: "Email", value: c.email, href: `mailto:${c.email}` }] : []),
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nPet: ${form.pet}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${c.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="We&apos;d love to hear from you. Reach out to book an appointment or ask a question."
        />

        {/* Emergency card */}
        <FadeIn className="mb-10">
          <div className="rounded-3xl bg-gradient-to-r from-red-500 to-red-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <div className="font-semibold text-lg">Pet Emergency?</div>
                <div className="text-white/90 text-sm mt-1">
                  Call us immediately — we&apos;re here to help your pet in urgent situations.
                </div>
              </div>
            </div>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="shrink-0 inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Icon name="Phone" size={18} /> {c.phone}
            </a>
          </div>
        </FadeIn>

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
            <div className="space-y-6">
              {/* Appointment form */}
              <div className="rounded-3xl bg-white border border-border p-6 sm:p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-secondary mb-5">Book an Appointment</h3>
                <form onSubmit={submit} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Pet Name & Type"
                    value={form.pet}
                    onChange={(e) => setForm({ ...form, pet: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-secondary transition-colors shadow-soft"
                  >
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </form>
              </div>

              {/* Maps */}
              <div className="grid sm:grid-cols-2 gap-4">
                {c.locations.map((loc) => (
                  <div key={loc.name} className="rounded-3xl overflow-hidden shadow-soft border border-border h-[260px]">
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}