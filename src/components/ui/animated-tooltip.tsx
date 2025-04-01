"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconLink } from "@/types";
import { RiNextjsLine } from "react-icons/ri";
import { IconType } from "react-icons/lib";

const DynamicIcon = ({ icon }: { icon: IconType }) => {
  const IconComponent = icon;

  if (!IconComponent) {
    // Return a default one
    return <RiNextjsLine />;
  }

  return <IconComponent />;
};

export const AnimatedTooltip = ({
  items,
  className,
  iconClassName = "",
}: {
  items: IconLink[];
  className?: string;
  iconClassName?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item) => {
        return (
          <div
            className={cn(className, "relative group")}
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
                  className="bg-black px-2 py-1 rounded-lg w-auto absolute -top-8 left-1/2 -translate-x-1/2 border"
                >
                  <div className="font-medium text-white relative z-30 text-xs whitespace-nowrap">
                    {item.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {item?.link ? (
              <a
                href={item?.link}
                target={item?.target ?? "_self"}
                className={iconClassName}
                aria-label={`Link to ${item.name}`}
              >
                <DynamicIcon icon={item?.icon ?? RiNextjsLine} />
              </a>
            ) : (
              <span className={iconClassName}>
                <DynamicIcon icon={item?.icon ?? RiNextjsLine} />
              </span>
            )}
          </div>
        );
      })}
    </>
  );
};
