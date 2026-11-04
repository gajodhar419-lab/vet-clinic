import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Doctor from "@/components/Doctor";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <WhyChooseUs />
      <Doctor />
      <Team />
      <Gallery limit={6} />
      <Testimonials />
      <Contact />
    </>
  );
}