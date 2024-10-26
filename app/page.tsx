import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

export default function Page() {
  return (
    <div className="smooth-scroll">
      <section id="home" className="min-h-screen py-16">
        <Home />
      </section>
      <section id="projects" className="max-w-6xl mx-auto px-4">
        <Projects />
      </section>
      <section id="resume" className="max-w-6xl mx-auto px-4">
        <Resume />
      </section>
      <section id="contact" className="max-w-6xl mx-auto px-4">
        <Contact />
      </section>
    </div>
  );
}
