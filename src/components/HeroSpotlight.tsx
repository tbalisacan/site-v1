"use client";

import { motion } from "framer-motion";
import React from "react";
import { Container } from "./ui/container";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroSpotlight() {
  return (
    <div className="relative pt-32 pb-64 md:pt-48 md:pb-72">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-20"
        fill="var(--primary)"
      />
      <Container className="relative z-20">
        <motion.div className="flex flex-col space-y-8 max-w-3xl">
          <motion.h1 className="font-bold text-heading-color leading-none text-4xl sm:text-6xl bg-opacity-50 font-heading">
            <span className="text-primary">Front-end developer</span>;<br />
            design enthusiast.
          </motion.h1>
          <motion.p className="max-w-xl">
            Hi! I&apos;m Teresa Christine. I build thoughtful, pixel-perfect web
            apps that run efficiently under the hood.
          </motion.p>
          <motion.div className="mt-4">
            <Link
              href="/"
              className="inline-flex font-heading border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300"
            >
              <span>Download CV</span>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
      <div className="absolute h-1/2 bg-gradient-to-b from-transparent to-background w-full bottom-0 z-10"></div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-5 dark:opacity-100",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
    </div>
  );
}
