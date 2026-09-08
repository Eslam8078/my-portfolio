import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Eslam Ayman | Full-Stack Web Developer" description="Full-Stack Web Developer portfolio featuring Angular, React.js, Node.js, Express.js, MongoDB, REST APIs, and modern responsive web applications." />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
