import Home from "../components/Home";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen mx-auto max-w-6xl">
      <section id="home" className="mb-40 mt-9">
        <Home />
      </section>
      <section id="projects" className="mb-36">
        <Projects />
      </section>
      <section id="resume" className="mb-56 ">
        <Resume />
      </section>
      <section id="contact" className="min-h-70vh mb-24">
        <Contact />
      </section>
    </div>
  );
}
