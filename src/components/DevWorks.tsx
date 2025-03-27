"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";

export function DevWorks() {
  return (
    <section className="my-32 md:my-48 scroll-mt-28" id="works">
      <Container>
        <div className="max-w-5xl mx-auto mb-12">
          <motion.h2
            // initial={{
            //   opacity: 0,
            //   y: 20,
            // }}
            // animate={{
            //   opacity: 1,
            //   y: [20, -5, 0],
            // }}
            // transition={{
            //   duration: 0.5,
            //   ease: [0.4, 0.0, 0.2, 1],
            // }}
            className="text-4xl font-bold text-gray-800 dark:text-gray-300 font-heading"
          >
            Recent Projects
          </motion.h2>
          <p className="text-gray-700 dark:text-neutral-400 font-medium max-w-5xl mx-auto mt-4">
            A few things built recently.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
          {devPortfolio?.map((item, index) => (
            <CardContainer
              key={index}
              className="h-full [&>div]:h-full [&>div]:w-full [&>div]:max-w-92 sm:[&>div]:max-w-full"
            >
              <CardBody className="group/card relative rounded-xl border dark:border-white/10 dark:bg-black/10 shadow-box-inset group w-full flex flex-col h-auto p-4 sm:p-6">
                {/* <GlowingEffect
                  blur={0}
                  borderWidth={1}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                /> */}
                <CardItem translateZ="50" className="w-full">
                  <div
                    className="w-full rounded-lg overflow-hidden bg-gradient-to-b from-zinc-800/0 to-zinc-800/20 px-7 pt-7 g:px-10 lg:pt-10"
                    style={{ backgroundColor: item?.bgColor }}
                  >
                    <div className="w-full aspect-video rounded-xl rounded-b-none overflow-hidden relative transition duration-500 border-4 border-b-0 border-white/20">
                      <Image
                        src={item?.imageSrc}
                        fill
                        className="object-cover "
                        alt="thumbnail"
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="flex flex-col gap-y-3 pt-4 h-full md:px-4"
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 font-heading">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-neutral-400 font-medium">
                    {item?.desc}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 w-full space-x-6">
                    <p className="text-xs text-gray-800 dark:text-neutral-400 truncate">
                      <span className="font-bold">Roles:</span>{" "}
                      {item?.roles.map((role, i) => (
                        <span key={i}>
                          {role}
                          {i + 1 < item?.roles?.length ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    <button className="font-bold text-primary text-sm flex gap-1 items-center font-heading ml-auto flex-none">
                      {item?.cta} <FiArrowRight />
                    </button>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </Container>
    </section>
  );
}

export const devPortfolio = [
  {
    title: "Portfolio v1",
    desc: "Hover over this card to unleash the power of CSS perspective",
    imageSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roles: ["Design", "Development"],
    cta: "Project Info",
    bgColor: "#419eb2",
  },
  {
    title: "Anthology Configurator",
    desc: "With the convenient 3D configurator, clients of the Keeler Brass Company are able to take an active role in crafting their own hardware samples. ",
    imageSrc: "/images/dev-work/anthology-configurator.jpg",
    roles: ["Development"],
    cta: "Project Info",
    bgColor: "#6f5958",
  },
];
