import { Metadata } from "next";
import Doctor from "@/components/Doctor";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { clinicConfig as c } from "@/config/config";

export const metadata: Metadata = {
  title: "About Doctor",
  description: `Meet ${c.doctorName}, ${c.doctorQualification} — ${c.doctorExperience} at ${c.clinicName}.`,
};

export default function AboutPage() {
  return (
    <>
      <Doctor />
      <Team />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}