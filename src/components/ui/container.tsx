import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn(className, "max-w-5xl mx-auto px-4")} {...props}>
      {children}
    </div>
  );
}
