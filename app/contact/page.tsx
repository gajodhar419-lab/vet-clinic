import { Metadata } from "next";
import Contact from "@/components/Contact";
import { clinicConfig as c } from "@/config/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${c.clinicName} — phone, WhatsApp, email, address and location map.`,
};

export default function ContactPage() {
  return <Contact />;
}