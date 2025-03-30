"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ImBehance, ImGithub, ImLinkedin } from "react-icons/im";

export function Footer() {
  return (
    <section className="pb-12 relative scroll-mt-28" id="contact">
      <Container className="relative z-20">
        <div className="flex flex-col space-y-8">
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
            className="font-bold text-gray-800 dark:text-white leading-none text-3xl sm:text-5xl bg-opacity-50 font-heading text-center"
          >
            Get in Touch
          </motion.h2>
          <div className="flex flex-col space-y-1 text-center">
            <a
              className="w-fit mx-auto text-lg font-medium font-heading opacity-70 hover:opacity-100 transition text-gray-800 dark:text-gray-300"
              href="mailto:tessa.balisacan@gmail.com"
            >
              tessa.balisacan@gmail.com
            </a>
            <a
              className="w-fit mx-auto text-lg font-medium font-heading opacity-70 hover:opacity-100 transition text-gray-800 dark:text-gray-300"
              href="tel:+63-977-143-8397"
            >
              +63-977-143-8397
            </a>
            <div className="text-center my-4">
              <a
                href="/"
                className="inline-flex font-heading border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300"
              >
                <span>Download CV</span>
              </a>
            </div>
            <ul className="flex space-x-2 justify-center text-xl items-center my-4">
              {externalSites?.map((site, idx) => (
                <a
                  key={idx}
                  className="rounded-full dark:shadow-inset p-3 flex-none hover:-translate-y-1 transition duration-300 border text-black bg-white dark:bg-black dark:text-white dark:opacity-70 hover:opacity-100"
                  href={site?.link}
                  target="_blank"
                  aria-label={site?.name}
                >
                  {site?.icon}
                </a>
              ))}
            </ul>
          </div>
          <div className="text-center text-xs">
            &copy; {new Date().getFullYear()} T. Balisacan
          </div>
        </div>
      </Container>
      <div className="absolute h-1/2 bg-gradient-to-t from-transparent to-background w-full top-0 z-10"></div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-5 dark:opacity-100",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
    </section>
  );
}

const externalSites = [
  {
    name: "GitHub",
    link: "https://github.com/tbalisacan",
    icon: <ImGithub />,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/tbalisacan",
    icon: <ImBehance />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tbalisacan/",
    icon: <ImLinkedin />,
  },
];
