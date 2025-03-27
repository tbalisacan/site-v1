import { Skills } from "@/components/Skills";
import { DesignWorks } from "@/components/DesignWorks";
import { DevWorks } from "@/components/DevWorks";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSpotlight } from "@/components/HeroSpotlight";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <HeroSpotlight />
      <Skills />
      <Experience />
      <DevWorks />
      <DesignWorks />
      <Contact />
    </>
  );
}
