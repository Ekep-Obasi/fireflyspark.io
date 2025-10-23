"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "transition-all duration-1000",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
