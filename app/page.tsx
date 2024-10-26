import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div className="space-y-20">
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>
      
      <section id="projects" className="py-20">
        <Projects />
      </section>
      
      <section id="resume" className="py-20">
        <Resume />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </div>
  )
}
