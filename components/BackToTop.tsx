"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <a href="#top" aria-label="Back to top" className="glass fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full text-teal hover:-translate-y-1 transition-transform"><ArrowUp size={18} /></a>
  );
}
