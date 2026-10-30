import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education" intro="Most recent first.">
      <ol className="relative max-w-3xl space-y-6 border-l border-line pl-6">
        {education.map((e, i) => (
          <li key={e.level} className="relative">
            <span className={`absolute -left-[31px] top-2 h-3 w-3 rounded-full ${i === 0 ? "bg-teal" : "bg-line"}`} aria-hidden />
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl">{e.level}</h3>
              <p className="text-amber">{e.school}</p>
              <p className="mt-2 text-sm text-mute">{e.status}</p>
              {e.detail && <p className="mt-1 text-ink">{e.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
