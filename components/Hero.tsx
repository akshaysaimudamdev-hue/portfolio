"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5";

function NameLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="-mb-1 block overflow-hidden pb-3">
      <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
        <span className="name-shimmer">{text}</span>
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-24 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
      <div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-lg text-mute">Hello, I am</motion.p>
        <h1 className="mt-1 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden>
            <NameLine text="Mudam" delay={1.05} />
            <NameLine text="Akshay Sai" delay={1.2} />
          </span>
        </h1>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }}>
          <p className="mt-5 font-display text-xl text-teal md:text-2xl">AI-focused full-stack developer</p>
          <p className="mt-4 max-w-xl text-lg text-mute">
            I am passionate about developing full-stack web apps and AI-powered products. I enjoy working with LLMs and RAG pipelines, from document chunking and vector search to streaming answers, and I build with React, Node.js and FastAPI. I am looking for internships and entry-level software roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className={`${btn} bg-amber text-base`}><Download size={16} />Download resume</a>
            <a href="#projects" className={`${btn} border border-line hover:border-teal`}><ArrowDown size={16} />View projects</a>
            <a href="#contact" className={`${btn} border border-line hover:border-teal`}><Mail size={16} />Contact me</a>
          </div>
          <div className="mt-6 flex gap-4 text-mute">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-teal"><Linkedin /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-teal"><Github /></a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 0.8 }}
        className="relative order-first mx-auto w-full max-w-[20rem] sm:max-w-sm lg:order-last lg:max-w-none lg:justify-self-end">
        <div className="absolute -inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-teal/50" aria-hidden />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-amber/60 lg:h-[min(78vh,720px)] lg:w-auto">
          <Image src="/profile.jpg" alt="Portrait of Mudam Akshay Sai" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          <p className="glass absolute bottom-4 left-4 right-4 rounded-full px-4 py-2 text-center text-sm">Open to internships and entry-level roles</p>
        </div>
      </motion.div>
    </section>
  );
}
