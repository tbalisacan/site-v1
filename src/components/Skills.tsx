"use client";

import React, { useState, useEffect } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Container } from "./ui/container";
import { ReactNode } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Skills() {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-expect-error: no matching overload
      repeat: Infinity,
      repeatDelay: 0,
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="-mt-40 mb-32 relative z-10 scroll-mt-40"
      id="skills"
    >
      <Container>
        <div className="grid grid-cols-1 gap-3">
          <div className="grid gap-3 lg:grid-cols-3">
            <GridItem
              className="[&>div]:border-0 lg:[&>div]:border [&>div]:shadow-none lg:[&>div]: lg:[&>div]:dark:bg-black/10 lg:[&>div]:shadow-box-inset"
              glowClassName="!hidden lg:!block"
            >
              <div className="lg:p-6 flex flex-col h-full mb-12 lg:mb-0">
                <h2 className="text-4xl font-bold text-heading-color font-heading">
                  Skills
                </h2>
                <p className="max-w-96 mt-4">Plus continuous learning...</p>
              </div>
            </GridItem>
            <GridItem className="lg:col-span-2">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-heading-color font-heading leading-tight mb-6">
                  Frameworks &amp; Libraries
                </h3>
                <div className="relative [@media(hover:hover)]:py-12">
                  <IconTooltips
                    items={techStack}
                    className="justify-center w-full gap-3 flex-wrap mt-auto"
                    iconClassName="border dark:shadow-inset dark:opacity-90 dark:hover:opacity-100 transition duration-300 p-2 rounded-full w-16 h-16 flex items-center justify-center"
                    animateIcon={true}
                  />
                  <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-y-1/2 m-auto z-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-move duration-[4800ms] pointer-events-none delay-[0.8] hidden sm:block [@media(hover:hover)]:flex [@media(hover:none)]:hidden">
                    <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                      {/* <Sparkles /> */}
                    </div>
                  </div>
                  <LogoList
                    items={techStack}
                    className="max-w-40 sm:max-w-full sm:columns-2 sm:px-5 mx-auto"
                  />
                  <div className="absolute inset-0 w-full h-full bg-primary/10 dark:bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] pointer-events-none" />
                </div>
              </div>
            </GridItem>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <GridItem>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-heading-color font-heading leading-tight mb-6">
                  Programming Languages
                </h3>
                <IconTooltips
                  items={languages}
                  className="flex justify-center w-full gap-3 flex-wrap mt-auto"
                  iconClassName="hover:-translate-y-1 border dark:shadow-inset dark:opacity-70 dark:hover:opacity-90 transition duration-300 p-2 rounded w-12 h-12 flex items-center justify-center"
                />
                <LogoList
                  items={languages}
                  className="max-w-40 w-full mx-auto"
                />
              </div>
            </GridItem>
            <GridItem>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-heading-color font-heading leading-tight mb-6">
                  Design &amp; UI/UX Tools
                </h3>
                <IconTooltips
                  items={designTools}
                  className="justify-center w-full gap-3 flex-wrap mt-auto"
                  iconClassName="hover:-translate-y-1 border dark:shadow-inset dark:opacity-70 dark:hover:opacity-90 transition duration-300 p-2 rounded w-12 h-12 flex items-center justify-center"
                />
                <LogoList
                  items={designTools}
                  className="max-w-40 w-full mx-auto"
                />
              </div>
            </GridItem>
            <GridItem>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-heading-color font-heading leading-tight mb-6">
                  Development &amp; Version Control
                </h3>

                <IconTooltips
                  items={devTools}
                  className="justify-center w-full gap-3 flex-wrap mt-auto"
                  iconClassName="hover:-translate-y-1 border dark:shadow-inset dark:opacity-70 dark:hover:opacity-90 transition duration-300 p-2 rounded w-12 h-12 flex items-center justify-center"
                />
                <LogoList
                  items={devTools}
                  className="max-w-40 w-full mx-auto"
                />
              </div>
            </GridItem>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

interface GridItemProps {
  className?: string;
  glowClassName?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  children?: ReactNode;
}

const GridItem = ({ className, glowClassName, children }: GridItemProps) => {
  return (
    <div className={cn(className)}>
      <div className="relative h-full rounded-xl border  dark:bg-black/10 group lg:col-span-2 shadow-box-inset">
        <GlowingEffect
          blur={0}
          borderWidth={1}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          className={glowClassName}
        />
        {children}
      </div>
    </div>
  );
};

/* Show for devices that have hover */
const IconTooltips = ({
  items,
  className,
  iconClassName,
  tooltipClassName,
  animateIcon,
}: {
  items: {
    id: number;
    name: string;
    icon: React.ReactNode;
  }[];
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
  animateIcon?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "[@media(hover:hover)]:flex [@media(hover:none)]:hidden",
        className
      )}
    >
      {items.map((item: SkillType, idx: number) => (
        <div
          className={cn(tooltipClassName, "relative")}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-black px-2 py-1 rounded-lg w-auto absolute -top-8 left-1/2 -translate-x-1/2"
              >
                <div className="font-medium text-white relative z-30 text-xs whitespace-nowrap">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={cn(
              iconClassName,
              `${animateIcon && `circle-` + `${idx + 1}`}`
            )}
          >
            {item?.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

/* Show for devices that have no hover */
const LogoList = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        "[@media(hover:hover)]:hidden [@media(hover:none)]:block",
        className
      )}
    >
      {items?.map((item: SkillType) => (
        <li key={item?.id} className="inline-flex items-center w-full">
          <span className="dark:shadow-inset transition duration-300 p-2 rounded w-12 h-12 flex items-center justify-center scale-75">
            {item?.icon}
          </span>
          <span className="text-sm">{item?.name}</span>
        </li>
      ))}
    </ul>
  );
};

// const Sparkles = () => {
//   const randomMove = () => Math.random() * 2 - 1;
//   const randomOpacity = () => Math.random();
//   const random = () => Math.random();

//   return (
//     <div className="absolute inset-0">
//       {[...Array(12)].map((_, i) => (
//         <motion.span
//           key={`star-${i}`}
//           animate={{
//             top: `calc(${random() * 100}% + ${randomMove()}px)`,
//             left: `calc(${random() * 100}% + ${randomMove()}px)`,
//             opacity: randomOpacity(),
//             scale: [1, 1.2, 0],
//           }}
//           transition={{
//             duration: random() * 2 + 4,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             position: "absolute",
//             top: `${random() * 100}%`,
//             left: `${random() * 100}%`,
//             width: `2px`,
//             height: `2px`,
//             borderRadius: "50%",
//             zIndex: 1,
//           }}
//           className="inline-block bg-primary dark:bg-white"
//         ></motion.span>
//       ))}
//     </div>
//   );
// };

const techStack = [
  {
    id: 1,
    name: "ReactJS",
    icon: (
      <Image src="icons/reactjs.svg" width="40" height="40" alt="ReactJS" />
    ),
  },
  {
    id: 2,
    name: "Next.js",
    icon: (
      <Image src="icons/nextjs2.svg" width="40" height="40" alt="Next.js" />
    ),
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: (
      <Image
        src="icons/tailwindcss.svg"
        width="40"
        height="40"
        alt="Tailwind CSS"
      />
    ),
  },
  {
    id: 4,
    name: "Shadcn UI",
    icon: (
      <Image
        src="icons/shadcnui.svg"
        width="40"
        height="40"
        alt="Shadcn UI"
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: 5,
    name: "Gatsby",
    icon: <Image src="icons/gatsby.svg" width="40" height="40" alt="Gatsby" />,
  },
  {
    id: 6,
    name: "Boostrap",
    icon: (
      <Image src="icons/bootstrap5.svg" width="40" height="40" alt="Boostrap" />
    ),
  },
];

const languages = [
  {
    id: 1,
    name: "Typescript",
    icon: (
      <Image
        src="icons/typescript.svg"
        width="40"
        height="40"
        alt="Typescript"
      />
    ),
  },
  {
    id: 2,
    name: "Javascript",
    icon: <Image src="icons/js.svg" width="40" height="40" alt="Javascript" />,
  },
  {
    id: 3,
    name: "HTML5",
    icon: <Image src="icons/html5.svg" width="40" height="40" alt="HTML5" />,
  },
  {
    id: 4,
    name: "CSS3",
    icon: <Image src="icons/css3.svg" width="40" height="40" alt="CSS3" />,
  },
];

const designTools = [
  {
    id: 1,
    name: "Figma",
    icon: <Image src="icons/figma.svg" width="40" height="40" alt="Figma" />,
  },
  {
    id: 2,
    name: "Photoshop",
    icon: <Image src="icons/ps.svg" width="40" height="40" alt="Photoshop" />,
  },
];

const devTools = [
  {
    id: 1,
    name: "Git",
    icon: <Image src="icons/git.svg" width="40" height="40" alt="Git" />,
  },
  {
    id: 2,
    name: "GitHub",
    icon: (
      <Image
        src="icons/github.svg"
        width="40"
        height="40"
        alt="GitHub"
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: 3,
    name: "VSCode",
    icon: <Image src="icons/vscode.svg" width="40" height="40" alt="VSCode" />,
  },
];

interface SkillType {
  id: number;
  name: string;
  icon: React.ReactNode;
}
