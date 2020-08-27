import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <Head>
                <title>Helderop Portfolio</title>
            </Head>
            <navbar>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link href="#about">
                            <a>About me</a>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="#projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="#contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}