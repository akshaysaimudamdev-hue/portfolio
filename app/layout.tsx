import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Mudam Akshay Sai | AI-focused Full-Stack Developer",
  description:
    "Portfolio of Mudam Akshay Sai, a B.Tech CSE student building full-stack and RAG-powered web apps with React, Node.js, FastAPI and LLM APIs.",
  keywords: ["Akshay Sai", "full-stack developer", "RAG", "FastAPI", "React", "internship", "KITS Huzurabad"],
  openGraph: { title: "Mudam Akshay Sai | Portfolio", description: "AI-focused full-stack developer. Projects, internships and contact.", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0F1424", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
