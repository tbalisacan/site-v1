"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import Image from "next/image";

export const FloatingNav = () => {
  // const { scrollYProgress } = useScroll();

  const [scrolled, setScrolled] = useState(0);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;

  //     if (scrollYProgress.get() < 0.05) {
  //       setScrolled(false);
  //     } else {
  //       if (direction < 0) {
  //         setScrolled(true);
  //       } else {
  //         setScrolled(false);
  //       }
  //     }
  //   }
  // });

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    setScrolled(latest);
  });

  return (
    <AnimatePresence mode="wait">
      <div className={cn("w-full fixed top-4 z-[5000]")}>
        <motion.div
          className="max-w-6xl mx-auto px-4 relative"
          initial={{
            maxWidth: "72rem",
          }}
          animate={{
            maxWidth: scrolled > 50 ? "70rem" : "72rem",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex rounded-lg p-2 pl-4 md:pl-8 gap-7 items-center relative">
            <Link
              href="/"
              className={cn(
                "relative z-10 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium font-heading text-lg"
              )}
            >
              <span className="w-7 h-7 relative rounded-full bg-primary/50 pt-0.5 overflow-hidden">
                <Image
                  src={"/images/avatartion.png"}
                  width="28"
                  height="28"
                  alt="logo"
                  className="object-bottom"
                />
              </span>
              <span className="text-sm ml-1">T. Balisacan</span>
            </Link>
            <div className="hidden md:flex gap-7 items-center">
              {navItems.map(
                (navItem: { name: string; link: string }, idx: number) => (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative z-10 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium"
                    )}
                  >
                    <span className="text-sm">{navItem.name}</span>
                  </Link>
                )
              )}
            </div>
            {/* <div className="ml-auto">
              <Variants />
            </div> */}
            <div className="hidden md:flex gap-4 items-center ml-auto z-10 relative">
              <ThemeSwitch />

              <button className="font-heading border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300">
                <span>Download CV</span>
              </button>
            </div>
            <motion.div
              className="absolute w-full h-full inset-0 bg-background/80 backdrop-blur border rounded-lg dark:border-white/10"
              initial={{ opacity: "0" }}
              animate={{
                opacity: scrolled > 50 ? "1" : "0",
              }}
              transition={{
                duration: 0.3,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const navItems = [
  {
    name: "Experience",
    link: "/",
  },
  {
    name: "Works",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
