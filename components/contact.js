import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <div id="contact" className={styles.contact}>
          <h2>
            Contact
          </h2>
          <p>
            You can reach me at <a href="mailto:thelderop@gmail.com">thelderop@gmail.com</a> and on LinkedIn!
          </p>
          <div>
            <a href="https://github.com/thelderop" target="_blank">
              <img src="/GitHubIcon.png" />
            </a>
            <a className={styles.links} href="https://www.linkedin.com/in/thomas-helderop/" target="_blank">
              <img src="/LinkedInIcon.png" />
            </a>
          </div>
        </div>
    )
}