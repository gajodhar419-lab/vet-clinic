import { Metadata } from "next";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { clinicConfig as c } from "@/config/config";

export const metadata: Metadata = {
  title: "Services",
  description: `Veterinary services at ${c.clinicName}: vaccination, surgery, grooming, dental, emergency care and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <Contact />
    </>
  );
}