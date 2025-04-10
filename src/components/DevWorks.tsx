"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { projects } from "@/lib/constants";
import { Project } from "@/types";

export function DevWorks() {
  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="my-32 scroll-mt-40"
      id="works"
    >
      <Container>
        <div className="max-w-5xl mx-auto mb-12">
          <motion.h2 className="text-4xl font-bold text-heading-color font-heading">
            Recent Projects
          </motion.h2>
          <p className="max-w-5xl mx-auto mt-4">A few things built recently.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
          {projects
            ?.map((item: Project, index: number) => (
              <CardContainer
                key={index}
                className="h-full [&>div]:h-full [&>div]:w-full [&>div]:max-w-92 sm:[&>div]:max-w-full"
              >
                <CardBody className="group/card relative rounded-xl border dark:bg-black/10 shadow-box-inset group w-full flex flex-col h-auto p-4 sm:p-6 overflow-hidden">
                  <CardItem translateZ="50" className="w-full">
                    <div
                      className="w-full rounded-lg overflow-hidden bg-gradient-to-b from-zinc-800/0 to-zinc-800/20 px-7 pt-7 g:px-10 lg:pt-10"
                      style={{
                        backgroundColor: item?.bgColor ?? "var(--background)",
                      }}
                    >
                      <div className="w-full aspect-video rounded-xl rounded-b-none overflow-hidden relative transition duration-500 border-4 border-b-0 border-white/20">
                        {item?.coverImage && (
                          <Image
                            src={item?.coverImage}
                            fill
                            className="object-cover "
                            alt="thumbnail"
                            sizes="(min-width: 640px) 50vw, 100vw"
                          />
                        )}
                      </div>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="flex flex-col gap-y-3 pt-4 h-full md:px-4"
                  >
                    <Link
                      href={`/projects/${item?.slug}`}
                      className="text-xl font-bold text-heading-color font-heading hover:text-foreground transition duration-300 w-fit"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm">{item?.shortDesc}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 w-full space-x-6">
                      {item?.roles && (
                        <p className="text-xs truncate">
                          <span className="font-bold ">Roles:</span>{" "}
                          {item?.roles.map((role, i) => (
                            <span key={i}>
                              {role?.name}
                              {item?.roles?.length &&
                                (i + 1 < item?.roles?.length ? ", " : "")}
                            </span>
                          ))}
                        </p>
                      )}
                      <Link
                        href={`/projects/${item?.slug}`}
                        className="font-bold text-primary text-sm flex gap-1 items-center font-heading ml-auto flex-none"
                      >
                        Project Info <RiArrowRightLine />
                      </Link>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))
            ?.reverse()}
        </div>
      </Container>
    </motion.section>
  );
}
