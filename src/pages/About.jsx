import Hero from "../components/Hero";
import About from "../components/About";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO title="About | Eslam Ayman" description="Learn about Eslam Ayman, a Full-Stack Web Developer specializing in MERN and MEAN technologies." />
      <Hero />
      <About />
    </>
  );
}
