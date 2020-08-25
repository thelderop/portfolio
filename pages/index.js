import styles from '../styles/Home.module.css'
import Header from '../components/header.js'
import Navbar from '../components/navbar.js'

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Navbar />
        <h1 className={styles.name}>
          Thomas Helderop
        </h1>

        <div className={styles.photo}>
          <img src='/portfolio-photo.png' />
        </div>

        <div id="about">
          <h2>
            About me
          </h2>
          <p className={styles.description}>
            I am a Denver-based software engineer. After several years of client- and customer-facing roles in the tech industry, I decided to take the plunge and pursue my passion for coding.
          </p>
        </div>

        <div id="projects" className={styles.projects}>
          <div>
            <a
            href="https://simons-shapes.herokuapp.com/"
            target="_blank">
            <h3>Simon's Shapes</h3>
            <p>A fast-paced memory game. Built with vanilla Javascript.</p>
            </a>
          </div>

          <div>
            <a
            href="https://hike-finder.herokuapp.com/"
            target="_blank">
              <h3>Hike Finder</h3>
              <p>Find and save hikes near you. Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
            </a>
          </div>

          <div>
            <h3>Breaking Bread</h3>
            <p>Breaking Bread is a hackathon proof of concept that was developed by a team of UX designers and developers. It is a web application where users with different political affiliations can enter chat rooms to discuss articles they read prior to entering chat room with goal of finding compromise between the two users. Built with NextJs and Javascript.</p>
          </div>

          <a
            href="https://quirky-dubinsky-cc4c26.netlify.app/"
            target="_blank">
            <h3>Event Tracker</h3>
            <p>
              An app to find and save to your personal calendar upcoming events in your area. Built with ReactJS, MongoDB, and Bootstrap.
            </p>
          </a>
        </div>

        <div id="contact">
          <h2>
            Contact
          </h2>
          <p>
            You can reach me at <a href="mailto:thelderop@gmail.com">thelderop@gmail.com</a>
          </p>
        </div>
      </main>
    </div>
  )
}
