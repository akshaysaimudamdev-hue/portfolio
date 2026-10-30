import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-prose space-y-4 text-lg text-mute">
          <p>I am a third-year Computer Science student who likes turning ideas into working products. My internships gave me experience with Node.js back ends and responsive front ends, and my main project, Lumina, taught me how retrieval-augmented generation works end to end.</p>
          <p>I am comfortable with data structures, OOP, DBMS and operating systems, and I keep practising problem solving on LeetCode and HackerEarth.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-xl">What I am looking for</h3>
          <ul className="mt-3 space-y-2 text-mute">
            <li>Internships and entry-level software development roles</li>
            <li>Teams building full-stack or AI-powered products</li>
            <li>Mentors who review code and give honest feedback</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
