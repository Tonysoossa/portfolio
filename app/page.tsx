import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div className="space-y-20">
      <section id="home" className="py-36">
        <Home />
      </section>
      <section id="projects" className="pb-10">
        <Projects />
      </section>
      <section id="resume" className="pb-10">
        <Resume />
      </section>
      <section id="contact" className="pb-10">
        <Contact />
      </section>
    </div>
  )
}
