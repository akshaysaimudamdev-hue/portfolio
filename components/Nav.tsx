"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold text-amber">Akshay Sai</a>
        <ul className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className={`rounded-full px-3 py-1.5 text-sm transition-colors ${active === n.toLowerCase() ? "bg-line text-ink" : "text-mute hover:text-ink"}`}>{n}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="glass mx-4 mb-3 grid gap-1 rounded-2xl p-3 md:hidden">
          {nav.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-lg px-3 py-2 text-mute hover:bg-line hover:text-ink">{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
