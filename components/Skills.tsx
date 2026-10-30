import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Tools I have used in projects and internships.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-5">
            <h3 className="font-display text-lg text-amber">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-ink/90 transition-colors hover:border-teal hover:text-teal">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
