import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { clinicConfig as c } from "@/config/config";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look inside ${c.clinicName} — our clinic, patients and care.`,
};

export default function GalleryPage() {
  return <Gallery />;
}