import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Title from '../components/title.js'
import Projects from '../components/projects.js'
import Contact from '../components/contact.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <Navbar />
      <main>
        <div className={styles.nameDiv}>
          <h1 className={styles.name}>
            Thomas
          </h1>
          <h1 className={styles.name}>
            Helderop
          </h1>
        </div>
        <Title />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}