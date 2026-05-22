"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HomeHeroParallaxProps {
  src: string;
  children: React.ReactNode;
}

export default function HomeHeroParallax({ src, children }: HomeHeroParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-[1.12] origin-top"
      >
        <Image
          src={src}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/88 via-sky-900/80 to-cyan-900/70" />

      {/* Content fades out as you scroll */}
      <motion.div
        style={{ opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center w-full"
      >
        {children}
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,28 1440,28 L1440,56 L0,56 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
