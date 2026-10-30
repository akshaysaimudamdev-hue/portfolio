import { Award } from "lucide-react";
import Section from "./Section";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <Section id="achievements" title="Certifications and achievements">
      <ul className="grid gap-4 md:grid-cols-3">
        {achievements.map((a) => (
          <li key={a.title} className="glass rounded-2xl p-5">
            <Award className="text-amber" size={22} aria-hidden />
            <h3 className="mt-3 font-display text-lg">{a.title}</h3>
            <p className="mt-1 text-sm text-mute">{a.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
