"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stages = [
  { name: "Ingest", text: "Upload PDF or TXT files. Lumina accepts several formats at once." },
  { name: "Chunk", text: "Text is split into semantic chunks, so each piece keeps its meaning." },
  { name: "Index", text: "Chunks become vector embeddings in a FAISS index for fast search." },
  { name: "Answer", text: "Gemini replies from the matching passages and streams the answer. Switch to general chat any time." },
];
const hits = [1, 4, 5];

export default function Pipeline() {
  const [i, setI] = useState(0);
  return (
    <div className="glass rounded-3xl p-6 md:p-7" data-hover>
      <p className="text-sm text-mute">How Lumina answers a question (tap a step)</p>
      <div role="tablist" className="mt-4 grid grid-cols-4 gap-2">
        {stages.map((s, n) => (
          <button key={s.name} role="tab" aria-selected={i === n} onClick={() => setI(n)}
            className={`rounded-xl border px-2 py-2 text-sm transition-colors ${i === n ? "border-amber bg-amber/10 text-amber" : "border-line text-mute hover:text-ink"}`}>{s.name}</button>
        ))}
      </div>
      <div className={`mt-8 flex h-10 items-center ${i === 0 ? "gap-0" : "gap-2"} transition-all`} aria-hidden>
        {Array.from({ length: 8 }).map((_, k) => (
          <div key={k} className={`transition-all duration-500 ${
            i === 0 ? "h-8 flex-1 bg-line first:rounded-l-lg last:rounded-r-lg"
            : i === 1 ? "h-8 flex-1 rounded-md bg-line"
            : `h-4 flex-1 rounded-full ${i === 3 && hits.includes(k) ? "bg-amber" : "bg-teal/70"}`}`} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-6 min-h-[4.5rem] text-ink/90">
          {stages[i].text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
