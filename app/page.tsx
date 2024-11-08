import Home from "../components/Home";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="projects" className="min-h-screen mb-36">
        <Projects />
      </section>
      <section id="resume" className="min-h-screen mb-56">
        <Resume />
      </section>
      <section id="contact" className="min-h-70vh mb-24">
        <Contact />
      </section>
    </div>
  );
}
