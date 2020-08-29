import Head from 'next/head'

import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Name from '../components/name.js'
import Title from '../components/title.js'
import Projects from '../components/projects.js'
import Contact from '../components/contact.js'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Helderop Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Navbar />
      <main>
        <Name />
        <Title />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}