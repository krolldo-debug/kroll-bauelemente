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
  1: "[animation-delay:100ms]",
  2: "[animation-delay:200ms]",
  3: "[animation-delay:300ms]",
  4: "[animation-delay:400ms]",
  5: "[animation-delay:500ms]",
};

const fromClass: Record<string, string> = {
  bottom: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
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
      className={`transition-all duration-700 ease-out ${delayClass[delay]} ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${fromClass[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
