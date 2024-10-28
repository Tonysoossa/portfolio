import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div className="space-y-20">
      <section id="home" className="py-56 min-h-screen">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume" className="pb-20" style={{ marginTop: '0rem' }}>
        <Resume />
      </section>
      <section id="contact" className="pb-20">
        <Contact />
      </section>
    </div>
  )
}
