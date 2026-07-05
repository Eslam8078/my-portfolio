import LoadingScreen from "./components/LoadingScreen";
import GitHubStats from "./components/GitHubStats";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBackground from "./components/ParticlesBackground";
import Experience from "./components/Experience";
import SEO from "./components/SEO";

function App() {
  return (
    <LoadingScreen>
      <>
       <SEO />
      <div className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        {/* ScrollProgress */}
        <ParticlesBackground />

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        <GitHubStats />

        {/* Projects */}
        <Projects />

        {/* Exprience */}
        <Experience />


        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
        
        <ScrollToTop />
      </div>
      </>
    </LoadingScreen>
    
  );
}

export default App;