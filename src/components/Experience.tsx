"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/container";
import { AnimatePresence, motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { jobExperience } from "@/lib/constants";
import { Job } from "@/types";
import { RiCheckLine } from "react-icons/ri";

export function Experience() {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="my-32 md:my-48 scroll-mt-28" id="experience">
      <motion.div viewport={{ root: scrollRef }} transition={{ duration: 5 }}>
        <Container className="relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="max-w-5xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300 font-heading">
              Work Experience
            </h2>
            <p className="font-medium mx-auto mt-4">
              Organizations I&apos;ve worked with.
            </p>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <Tabs
              defaultValue={jobExperience[0]?.company}
              className="grid md:grid-cols-4 gap-8"
            >
              <TabsList
                // aria-orientation="vertical"
                className={cn(
                  "flex space-x-4 overflow-scroll pb-2 px-1",
                  "md:col-span-1 md:flex-col md:w-full md:h-fit md:pb-0 md:space-x-0 md:px-0"
                )}
                // className="flex gap-2 overflow-scroll"
              >
                {jobExperience?.map((job: Job, idx: number) => (
                  <div
                    className="pb-2 relative"
                    key={job?.company}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <TabsTrigger
                      value={job?.company}
                      className={cn(
                        "inline-flex items-center gap-x-2 flex-none relative z-10",
                        "md:w-full md:flex-auto"
                      )}
                    >
                      {job?.logo && (
                        <span className="rounded-full shadow-inset p-1.5 flex-none">
                          <Image
                            src={job?.logo}
                            height="20"
                            width="20"
                            alt="logo"
                            className="rounded-full"
                          />
                        </span>
                      )}
                      {job?.company}
                    </TabsTrigger>
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.span
                          className="absolute inset-x-0 top-0 w-full h-[calc(100%-0.5rem-1px)] rounded-md border"
                          layoutId="hoverBackground"
                          initial={{ opacity: 1 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                          }}
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </TabsList>
              {jobExperience?.map((job) => (
                <TabsContent
                  key={job?.company}
                  value={job?.company}
                  className={cn("flex flex-col space-y-2", "md:col-span-3")}
                >
                  <h3 className="text-xl leading-tight sm:text-2xl font-bold font-heading text-gray-800 dark:text-gray-300">
                    {job?.position}
                  </h3>
                  <p className="text-sm mb-4  font-medium">{job?.duration}</p>
                  <ul className="text-sm space-y-2 leading-loose  font-medium">
                    {job?.duties?.map((duty, i) => (
                      <li key={i} className="flex gap-2">
                        <span
                          aria-hidden
                          className="pt-1.5 text-primary flex-none"
                        >
                          <RiCheckLine />
                        </span>{" "}
                        {duty}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
