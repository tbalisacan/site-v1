"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item) => (
        <div
          className={cn(className, "relative group w-14 m-1.5")}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
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
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  whiteSpace: "nowrap",
                }}
                className="bg-black px-2 py-1 rounded-lg w-auto absolute -top-8 left-1/2 -translate-x-1/2"
              >
                <div className="font-medium text-white relative z-30 text-xs">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {item?.icon}
        </div>
      ))}
    </>
  );
};
