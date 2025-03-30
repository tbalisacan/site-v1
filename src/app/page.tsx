import { Skills } from "@/components/Skills";
import { DesignWorks } from "@/components/DesignWorks";
import { DevWorks } from "@/components/DevWorks";
import { Experience } from "@/components/Experience";
import { HeroSpotlight } from "@/components/HeroSpotlight";

export default function Home() {
  return (
    <>
      <HeroSpotlight />
      <Skills />
      <Experience />
      <DevWorks />
      <DesignWorks />
    </>
  );
}
