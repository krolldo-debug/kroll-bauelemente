"use client";

import { useInView } from "@/hooks/useInView";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  from?: "bottom" | "left" | "right";
}

const delayClass: Record<number, string> = {
  0: "",
  1: "[animation-delay:120ms]",
  2: "[animation-delay:240ms]",
  3: "[animation-delay:360ms]",
  4: "[animation-delay:480ms]",
  5: "[animation-delay:600ms]",
};

const fromClass: Record<string, string> = {
  bottom: "translate-y-8",
  left:   "-translate-x-8",
  right:  "translate-x-8",
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: AnimateInProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${delayClass[delay]} ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${fromClass[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
