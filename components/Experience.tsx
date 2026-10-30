import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience and internships">
      <ol className="relative space-y-6 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-teal" aria-hidden />
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl">{e.role}</h3>
              <p className="text-amber">{e.company} <span className="text-mute">({e.mode})</span></p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <ul className="mt-4 flex flex-wrap gap-2">{e.tech.map((t) => <li key={t} className="rounded-full bg-line px-3 py-1 text-xs">{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
