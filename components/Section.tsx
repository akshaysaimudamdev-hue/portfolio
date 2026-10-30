"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:px-8">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-mute">{intro}</p>}
      </motion.div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
