import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import BackToTop from "@/components/BackToTop";
import { MotionRoot } from "@/components/MotionRoot";

export default function Home() {
  return (
    <MotionRoot>
      <Loader /><Cursor /><Nav />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Achievements /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">© {new Date().getFullYear()} Mudam Akshay Sai</footer>
      <BackToTop />
    </MotionRoot>
  );
}
