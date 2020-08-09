import styles from '../styles/Home.module.css'
import Header from '../components/header.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>
          <a>Thomas Helderop</a>
        </h1>
        <div className={styles.photo}>
          <img src='/portfolio-photo.png' />
        </div>

        <p className={styles.description}>
          Junior developer who enjoys growing and learning!
        </p>

        <div className={styles.grid}>
          <a
          href="https://github.com/thelderop/Unit-1-Project"
          target="_blank"
          className={styles.card}>
            <h3>Project 1 &rarr;</h3>
            <p>A fast-paced memory game.</p>
          </a>

          <a
          href="https://hike-finder.herokuapp.com/"
          target="_blank"
          className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>Find hikes near you, and bookmark your favorites!</p>
          </a>

          <a
            href="https://shahidforchange.us/"
            target="_blank"
            className={styles.card}
          >
            <h3>Something else &rarr;</h3>
            <p>An app to encourage local participation in grassroots political events? Build my own API, seed it with some local Denver data. Something like that.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=Z_Nwm7E_iuA"
            target="_blank"
            className={styles.card}
          >
            <h3>Another thing &rarr;</h3>
            <p>
              An app that allows users to search for their legislative representatives (nationally and statewide): You can see, clearly- without procedural jargon getting in the way- and in real time, exactly what your civil servants are voting on and proposing and amending and... you get the idea.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        You can contact me at thelderop@gmail.com
      </footer>
    </div>
  )
}
