import styles from '../styles/Home.module.css'

export default function Title() {
    return (

        <div class="container" id="about">
            <h3>About me</h3>
            <div class="row">
                <div class="col">
                    <div className={styles.photo}>
                        
                    </div>
                </div>
            
                <div class="col">
                    <div>
                        <p>
                            I am a Denver-based software engineer.
                            After several years of client- and customer-facing roles in the tech industry,
                            I decided to take the plunge and pursue my passion for coding.
                        </p>
                        <p>
                            I'm passionate about local political organizing, and as I grow as an engineer,
                            I hope to apply my skillset in an impactful way that affects real change in people's lives.
                        </p>
                        <p>
                            Take a look at my<a className={styles.resume} href="/ThomasHelderopResume.pdf" target="_blank"> resume</a>!
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
                </div>
            </div>
        </div>
    )
}