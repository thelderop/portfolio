import styles from '../../styles/Home.module.css'

export default function BreakingBread() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Breaking Bread</h3>
                    <p>Breaking Bread is a hackathon proof of concept that was developed by a team of General Assembly student UX designers and web developers.
                        It is an application for users of different political affilitians
                        to come together and have informed, respectful, fact-based discussions on a variety of topics.
                        A user can select a subject, spend several minutes reading an article about it,
                        and then enter a chat with another user- of a different political belief- who read the same article.
                    </p>
                    <p>Built with NextJs, Bootstrap and Javascript.</p>
                </div>
            </div>

            <div class="col">
                <a
                    href="https://github.com/thelderop/middleground"
                    target="_blank">
                        <div className={styles.breaking}>
                            <div className={styles.overlay}>
                                <div>
                                    Proof-of-concept!
                                </div>
                            </div>
                        </div>
                </a>

            </div>

        </div>
    )
}