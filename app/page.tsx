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
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
