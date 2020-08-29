import styles from '../../styles/Home.module.css'

export default function BreakingBread() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Breaking Bread</h3>
                    <p>Breaking Bread is a hackathon proof of concept that was developed by a team of UX designers and developers.
                        It is a web application where users with different political affiliations can enter chat rooms
                        to discuss articles they read prior to entering chat room with goal of finding compromise between the two users.
                        Built with NextJs and Javascript.</p>
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