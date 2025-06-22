import "@/css/index.css";

import HeroSection from "@/components/home/HeroSection";
import WhyUs from "@/components/home/why-us/WhyUs";
import Value from "@/components/home/value/Value";
import FAQs from "@/components/home/faqs/FAQs";
import Projects from "@/components/home/projects/Projects";
import Services from "@/components/home/services/Services";
import SecondCTA from "@/components/home/second-cta/SecondCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Services />
      <WhyUs />
      <Value />
      <FAQs />
      <SecondCTA />
    </>
  );
}
