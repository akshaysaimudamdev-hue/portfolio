"use client";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import Pipeline from "./Pipeline";
import { profile, project as p } from "@/lib/data";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const link = "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-teal hover:text-teal";
  return (
    <Section id="projects" title="Featured project">
      <div ref={ref} onMouseMove={onMove} data-hover
        className="glass group relative overflow-hidden rounded-3xl p-6 md:p-10"
        style={{ backgroundImage: "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(111,214,194,.12), transparent 60%)" }}>
        <p className="text-sm text-teal">{p.status}</p>
        <h3 className="mt-1 font-display text-2xl md:text-3xl">{p.name}</h3>
        <p className="mt-3 max-w-2xl text-lg text-mute">{p.summary}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-display text-lg text-amber">Problem it solves</h4>
            <p className="mt-2 text-mute">{p.problem}</p>
          </div>
          <div>
            <h4 className="font-display text-lg text-amber">Key features</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-line px-3 py-1 text-xs">{t}</li>)}</ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {p.liveUrl && <a className={link} href={p.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />Live demo</a>}
          <a className={link} href={p.repoUrl || profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} />{p.repoUrl ? "Source code" : "GitHub profile"}</a>
        </div>
      </div>
      <div className="mt-8 max-w-2xl"><Pipeline /></div>
    </Section>
  );
}
