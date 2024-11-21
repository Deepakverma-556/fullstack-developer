"use client"
import { useEffect } from "react"
import Main from "@/components/Main";
import Lenis from "lenis";
import Bottom from "@/components/Bottom";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, easing:
        (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical'
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);
  return (
    <>
      <Main />
      <Skills />
      <Projects/>
      <Faq />
      <Footer />
      <Bottom/>
    </>
  );
}
