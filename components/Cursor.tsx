"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [big, setBig] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 14); y.set(e.clientY - 14);
      setBig(!!(e.target as HTMLElement).closest("a,button,input,textarea,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  if (!enabled) return null;
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90] h-7 w-7 rounded-full border border-teal/80"
      style={{ x: sx, y: sy }} animate={{ scale: big ? 1.8 : 1, backgroundColor: big ? "rgba(111,214,194,.15)" : "rgba(111,214,194,0)" }} />
  );
}
