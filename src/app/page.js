import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Main/>
      <Skills />
      <Projects />
      <Faq />
      <Footer/>
    </>
  );
}
