"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

interface ParallaxHeroProps {
  src: string;
  alt: string;
  /** Extra Tailwind classes on the outer <section> (height / padding) */
  className?: string;
  /** Tailwind class for the gradient overlay (e.g. "bg-gradient-to-br from-sky-950/90 to-sky-800/80") */
  overlay?: string;
  children: React.ReactNode;
  priority?: boolean;
}

export default function ParallaxHero({
  src,
  alt,
  className = "relative py-20 sm:py-28 overflow-hidden",
  overlay = "absolute inset-0 bg-gradient-to-br from-sky-950/90 to-sky-800/80",
  children,
  priority = false,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image moves at 35% of scroll speed — creates the parallax depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section ref={ref} className={className}>
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-[1.15] origin-top"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className={overlay} />

      {/* Content */}
      <div className="relative">{children}</div>
    </section>
  );
}
