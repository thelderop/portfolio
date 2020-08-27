import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Title from '../components/title.js'
import Projects from '../components/projects.js'
import Contact from '../components/contact.js'

export default function Home() {
  return (
    <div id="body">
      <Header />
      <main>
        <Navbar />
        <Title />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}