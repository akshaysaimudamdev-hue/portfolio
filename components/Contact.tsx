"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { profile } from "@/lib/data";

const field = "w-full rounded-xl border border-line bg-base px-4 py-3 text-ink placeholder:text-mute/70 focus:border-teal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const row = "flex items-center gap-3 text-mute hover:text-teal";
  return (
    <Section id="contact" title="Contact" intro="Hiring for an internship or a junior role? Send me a message.">
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
          <label className="block text-sm">Your name<input required name="name" className={`${field} mt-1`} placeholder="Jane Doe" /></label>
          <label className="block text-sm">Your email<input required type="email" name="email" className={`${field} mt-1`} placeholder="jane@company.com" /></label>
          <label className="block text-sm">Message<textarea required name="message" rows={5} className={`${field} mt-1`} placeholder="Tell me about the role or project" /></label>
          <button className="rounded-full bg-amber px-6 py-2.5 text-sm font-medium text-base">Send message</button>
          {sent && <p role="status" className="text-sm text-teal">Your email app should open with the message ready to send.</p>}
        </form>
        <div className="space-y-5">
          <a className={row} href={`mailto:${profile.email}`}><Mail size={20} />{profile.email}</a>
          <a className={row} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} />LinkedIn profile</a>
          <a className={row} href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={20} />GitHub profile</a>
          <p className="flex items-center gap-3 text-mute"><MapPin size={20} />{profile.location}</p>
        </div>
      </div>
    </Section>
  );
}
