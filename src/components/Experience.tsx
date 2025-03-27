"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function Experience() {
  const scrollRef = useRef(null);
  return (
    <section className="my-32 md:my-48 scroll-mt-28" id="experience">
      <motion.div viewport={{ root: scrollRef }} transition={{ duration: 5 }}>
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto mb-12 ">
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
              Work Experience
            </motion.h2>
            <p className="text-gray-700 dark:text-neutral-400 font-medium mx-auto mt-4">
              Organizations I&apos;ve worked with.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Tabs
              defaultValue={jobExperience[0]?.company}
              className="grid md:grid-cols-4 gap-8"
              // className="grid grid-cols-1 gap-8"
            >
              <TabsList
                // aria-orientation="vertical"
                className={cn(
                  "flex space-x-4 overflow-scroll pb-2 px-1",
                  "md:col-span-1 md:flex-col md:w-full md:h-fit md:pb-0 md:space-y-2 md:space-x-0 md:px-0"
                )}
                // className="flex gap-2 overflow-scroll"
              >
                {jobExperience?.map((job) => (
                  <TabsTrigger
                    key={job?.company}
                    value={job?.company}
                    className={cn(
                      "inline-flex items-center gap-x-2 flex-none",
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
                  <p className="text-sm mb-4 text-gray-700 dark:text-neutral-400 font-medium">
                    {job?.duration}
                  </p>
                  <ul className="text-sm space-y-2 leading-loose text-gray-700 dark:text-neutral-400 font-medium">
                    {job?.duties?.map((duty, i) => (
                      <li key={i} className="flex gap-2">
                        <span
                          aria-hidden
                          className="pt-1.5 text-primary flex-none"
                        >
                          <FiCheck />
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

const jobExperience = [
  {
    company: "WebriQ",
    logo: "/images/company-logos/webriq.svg",
    duration: "Jul 2018 - Oct 2024",
    position: "Web Designer & Front-End Developer",
    duties: [
      "Designed high-fidelity UI/UX prototypes in Figma, accelerating the development process;",
      "Developed responsive web interfaces from Figma prototypes using ReactJS/NextJS/Gatsby  and Tailwind CSS, ensuring cross-browser compatibility;",
      "Implemented component-based web design aligned with the company’s platform, StackShift, reducing development time through reusable code components;",
      "Partnered with project managers and engaged with clients to refine technical requirements to reduce revisions and shorten delivery timelines",
      "Optimized web app performance to achieve Lighthouse metric scores of 90-100;",
      "Led front-end development for multiple projects, delivering pixel-perfect interfaces with optimized web performance;",
      "Mentored team members on CSS, UI/UX, ReactJS, and site optimization to foster growth and improve code quality;",
      "Researched and integrated Figma-to-code AI tools (Plasmic and Kombai) into development workflow to reduce manual implementation.",
    ],
  },
  {
    company: "Mopro",
    logo: "/images/company-logos/mopro.png",
    duration: "Feb 2017 - Jun 2018",
    position: "Jr. Web Builder",
    duties: [
      "Built and deployed responsive websites using the company’s proprietary backend system;",
      "Developed custom HTML, CSS, and JavaScript solutions for unique client needs;",
      "Designed and optimized web-ready image assets to enhance site aesthetics and performance;",
      "Provided real-time technical support to customer service teams for reduced issue resolution time.",
    ],
  },
  {
    company: "Tate Publishing",
    logo: "/images/company-logos/tate.png",
    duration: "Apr 2014 - Dec 2016",
    position: "Promos Designer",
    duties: [
      "Revamped and formatted book layouts for various print formats using Adobe InDesign and Photoshop, ensuring high-quality print production;",
      "Enhanced illustrations to create 3D books and coloring books;",
      "Developed engaging social media branding for authors and music artists using Adobe Photoshop and provided email support, strengthening their online presence and audience engagement.",
    ],
  },
  {
    company: "Live2Sell, Inc.",
    logo: "/images/company-logos/live2sell.png",
    duration: "Oct 2012 - Feb 2013",
    position: "Graphic Designer & Content Creator (Intern)",
    duties: [
      "Managed and updated WordPress blogs with SEO-optimized content;",
      "Created visually engaging infographics using Adobe Photoshop/Illustrator for marketing campaigns;",
      "Produced and edited short promotional videos using Vegas Pro;",
      "Researched and wrote SEO-friendly articles on industry trends, improving website ranking and online visibility.",
    ],
  },
];
