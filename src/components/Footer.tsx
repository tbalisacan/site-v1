"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { contactDetails } from "@/lib/constants";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function Footer() {
  const { email, phone, links, filePath } = contactDetails;
  return (
    <section className="pb-12 relative scroll-mt-40" id="contact">
      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col space-y-8"
        >
          <h2 className="font-bold text-gray-800 dark:text-white leading-none text-3xl sm:text-5xl bg-opacity-50 font-heading text-center">
            Get in Touch
          </h2>
          <div className="flex flex-col space-y-1 text-center">
            {email && (
              <a
                className="w-fit mx-auto text-lg font-heading opacity-70 hover:opacity-100 transition duration-300 text-heading-color"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            )}

            {phone && (
              <a
                className="w-fit mx-auto text-lg font-heading opacity-70 hover:opacity-100 transition duration-300 text-heading-color"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            )}

            {filePath && (
              <div className="text-center my-4">
                <a
                  href={filePath}
                  target="_blank"
                  className="inline-flex font-heading border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300"
                >
                  Download CV
                </a>
              </div>
            )}

            {links && (
              <div className="flex space-x-2 justify-center text-xl items-center my-4">
                <AnimatedTooltip
                  items={links}
                  className="inline-flex"
                  iconClassName="rounded-full dark:shadow-inset p-2 flex-none hover:-translate-y-1 transition duration-300 border text-black bg-white dark:bg-black dark:text-white dark:opacity-70 hover:opacity-100 text-2xl shadow-inset"
                />
              </div>
            )}
          </div>
          <div className="text-center text-xs">
            &copy; {new Date().getFullYear()} T. Balisacan
          </div>
        </motion.div>
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
