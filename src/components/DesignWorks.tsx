"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Container } from "./ui/container";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { RiExternalLinkLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { createMedia } from "@artsy/fresnel";
import { designs } from "@/lib/constants";
import { DesignProject } from "@/types";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    xs: 0,
    sm: 640,
  },
});

export function DesignWorks() {
  const firstRow = designs.slice(0, 5);
  const secondRow = designs.slice(5, 10);
  const thirdRow = designs.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.1]),
    springConfig
  );

  return (
    <MediaContextProvider>
      <section className="my-32 md:my-48">
        <Header />

        <Media at="xs">
          <Container>
            <div className="flex overflow-scroll space-x-4 md:space-x-8 lg:space-x-12 pb-4 mt-12 w-full">
              {designs.map((design: DesignProject, i: number) => (
                <DesignCard project={design} key={`${design.title}-${i}`} />
              ))}
            </div>
          </Container>
        </Media>
        <Media greaterThanOrEqual="sm">
          <div
            ref={ref}
            className="overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
          >
            <motion.div
              style={{
                opacity,
              }}
              className="pt-16"
            >
              <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-8 lg:space-x-12 mb-4 md:mb-8 lg:mb-12">
                {firstRow.map((design: DesignProject, i: number) => (
                  <DesignCard
                    project={design}
                    translate={translateX}
                    key={`${design.title}-${i}`}
                  />
                ))}
              </motion.div>
              <motion.div className="flex flex-row space-x-4 md:space-x-8 lg:space-x-12 mb-4 md:mb-8 lg:mb-12">
                {secondRow.map((design: DesignProject, i: number) => (
                  <DesignCard
                    project={design}
                    translate={translateXReverse}
                    key={`${design.title}-${i}`}
                  />
                ))}
              </motion.div>
              <motion.div className="flex flex-row-reverse space-x-reverse space-x-4  md:space-x-8 lg:space-x-12">
                {thirdRow.map((design: DesignProject, i: number) => (
                  <DesignCard
                    project={design}
                    translate={translateX}
                    key={`${design.title}-${i}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Media>
      </section>
    </MediaContextProvider>
  );
}

const Header = () => {
  return (
    <Container>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300 font-heading">
        Previous Design Work
      </h2>
      <p className="font-medium max-w-5xl mx-auto mt-4">
        An assortment of clean and functional website designs.
      </p>
    </Container>
  );
};

const DesignCard = ({
  project,
  translate,
}: {
  project: DesignProject;
  translate?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={project.title}
      className="group/product w-1/2 sm:w-1/3 relative flex-shrink-0"
    >
      <CardContainer>
        <CardBody className="group/card relative rounded-xl border dark:border-white/10 dark:bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col gap-4 p-2 sm:p-4 w-full h-full">
          <CardItem translateZ="50" className="w-full relative">
            <div
              className={cn(
                "absolute w-full h-24 left-0 bottom-0 flex items-end justify-center z-10 pb-4 bg-gradient-to-b from-neutral-900/0 to-neutral-900/90 group-hover:opacity-100  transition duration-300 group/cta rounded-lg",
                "[@media(hover:hover)]:opacity-0"
              )}
            >
              <a
                className={cn(
                  "font-bold text-primary text-xs flex gap-1 items-center bg-white rounded-md px-4 py-2 group-hover/card:translate-y-0 group-hover/card:opacity-100 translate-y-2 transition",
                  "[@media(hover:none)]:hidden"
                )}
                href={project.link}
                target="_blank"
                aria-label={`Behance link to ${project.title} design`}
              >
                View Design <RiExternalLinkLine />
              </a>
              <a
                className={cn(
                  "text-white text-xl hidden",
                  "[@media(hover:none)]:block"
                )}
                href={project.link}
                target="_blank"
                aria-label={`Behance link to ${project.title} design`}
              >
                <RiExternalLinkLine />
              </a>
            </div>
            <div
              className="w-full p-2 sm:p-4 lg:p-10 !pb-0 overflow-hidden bg-gradient-to-b from-zinc-800/0 to-zinc-800/20 rounded-lg"
              style={{ backgroundColor: project?.bgColor }}
            >
              <div className="aspect-[5/4] rounded-md lg:rounded-lg !rounded-b-none overflow-hidden relative transition duration-500 border-4 border-b-0 border-white/20">
                {project?.thumbnail && (
                  <Image
                    src={project?.thumbnail}
                    fill
                    className="object-cover bg-top"
                    alt="thumbnail"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                )}
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};
