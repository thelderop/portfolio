import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1>
          <a>Thomas Helderop</a>
        </h1>

        <p className={styles.description}>
          Junior developer who enjoys growing and learning!
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/thelderop/Unit-1-Project" className={styles.card}>
            <h3>Project 1 &rarr;</h3>
            <p>A fast-paced memory game.</p>
          </a>

          <a href="https://hike-finder.herokuapp.com/" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>Find hikes near you, and bookmark your favorites!</p>
          </a>

          <a
            href="https://shahidforchange.us/"
            className={styles.card}
          >
            <h3>Something else &rarr;</h3>
            <p>An app to encourage local participation in grassroots political events? Build my own API, seed it with some local Denver data. Something like that.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=Z_Nwm7E_iuA"
            className={styles.card}
          >
            <h3>Another thing &rarr;</h3>
            <p>
              An app that allows users to search for their legislative representatives (nationally and statewide): You can see, clearly- without proedural jargon getting in the way- and in real time, exactly what your civil servants are voting on and propsing and amending and... you get the idea.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://blacklivesmatter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          We believe ourselves to be members of this family<br/>
          Not just one branch on one tree<br/>
          But a forest whose roots make up a dynasty<br/>
          So when I call you sis or bro<br/>
          It's not lightly<br/>
          - Shane Koyzcan
        </a>
      </footer>
    </div>
  )
}
