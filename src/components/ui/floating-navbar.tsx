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
import { contactDetails, navItems } from "@/lib/constants";
import { NavItem } from "@/types";

export const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest);
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <div className={cn("w-full fixed top-4 z-[5000]")}>
        <motion.div
          className="max-w-5xl mx-auto px-2 relative"
          initial={{
            maxWidth: "64rem",
          }}
          animate={{
            maxWidth: scrolled > 50 ? "60rem" : "64rem",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex flex-wrap rounded-lg p-2 pl-3 md:pl-4 space-x-7 items-center relative">
            <Link
              href="/"
              className={cn(
                "relative z-10 items-center flex space-x-1 text-black dark:text-white font-bold font-heading transition"
              )}
            >
              <span className="w-7 h-7 relative rounded-full overflow-hidden">
                <Image
                  src={"/images/site-icon.png"}
                  width="28"
                  height="28"
                  alt="logo"
                  className="object-bottom"
                />
              </span>
              <span className="text-sm ml-1 -mt-0.5 hidden [@media(min-width:280px)]:block">
                T. Balisacan
              </span>
            </Link>
            <div className="hidden md:flex gap-7 items-center">
              {navItems.map((navItem: NavItem, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative z-10 items-center flex space-x-1 font-semibold transition hover:text-black dark:hover:text-white duration-300"
                  )}
                >
                  <span className="text-sm">{navItem.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex space-x-4 items-center ml-auto mr-2 md:mr-0 z-10 relative">
              <ThemeSwitch />

              <div className="flex md:hidden mr-0">
                <MenuToggle toggle={() => setIsOpen(!isOpen)} open={isOpen} />
              </div>

              {contactDetails?.filePath && (
                <a
                  href={contactDetails?.filePath}
                  target="_blank"
                  className="hidden md:inline-flex font-heading border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300"
                >
                  Download CV
                </a>
              )}
            </div>

            {/* mobile menu */}
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="relative z-10 w-full flex-none"
            >
              <motion.div variants={navVariants} className="overflow-hidden">
                <ul className="flex flex-col space-y-4 items-center py-4 mt-1.5 border-t dark:border-t-white/10">
                  {navItems?.map((item: NavItem, i: number) => (
                    <li key={i} onClick={() => setIsOpen(false)}>
                      <a
                        href={item?.link}
                        className="font-heading text-lg font-medium"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}

                  {contactDetails?.filePath && (
                    <li>
                      <a
                        href={contactDetails?.filePath}
                        target="_blank"
                        className="inline-flex font-heading border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-3 rounded-md bg-primary hover:-translate-y-1 transition duration-300"
                      >
                        Download CV
                      </a>
                    </li>
                  )}
                </ul>
              </motion.div>
            </motion.div>

            {/* background */}
            <motion.div
              className="absolute w-full h-full inset-0 bg-background/80 backdrop-blur-sm border rounded-lg "
              initial={{ opacity: "0" }}
              animate={{
                opacity: scrolled > 50 || isOpen ? "1" : "0",
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

const MenuToggle = ({
  toggle,
  open,
}: {
  toggle: () => void;
  open: boolean;
}) => (
  <button onClick={toggle} aria-label="Menu">
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="text-xl"
    >
      <motion.line
        x1={3}
        y1={12}
        x2={21}
        y2={12}
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: !open ? 1 : 0,
        }}
      />
      <motion.line
        x1={3}
        y1={6}
        x2={21}
        y2={6}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: !open ? 0 : 45,
          originX: "5px",
          originY: "9px",
        }}
      />
      <motion.line
        x1={3}
        y1={18}
        x2={21}
        y2={18}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: !open ? 0 : -45,
          originX: "5px",
          originY: "14px",
        }}
      />
    </svg>
  </button>
);

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    height: "auto",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    height: "0",
  },
};
