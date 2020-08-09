import { useEffect } from "react"
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank">Black Lives Matter</a>
        </div>
    )
}