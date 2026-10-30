"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1100); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-base" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} aria-label="Loading">
          <div className="text-center">
            <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="font-display text-5xl font-semibold text-amber">AS</motion.p>
            <div className="mx-auto mt-5 h-0.5 w-32 overflow-hidden rounded bg-line">
              <motion.div className="h-full bg-teal" initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1, ease: "easeInOut" }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
