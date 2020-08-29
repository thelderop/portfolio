import styles from '../../styles/Home.module.css'

export default function EventTracker() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Event Tracker</h3>
                    <p>An app to find and save to your personal calendar upcoming events in your area.
                        Built with ReactJS, MongoDB, and Bootstrap.</p>
                </div>
            </div>

            <div class="col">
                <a
                    href="https://quirky-dubinsky-cc4c26.netlify.app/"
                    target="_blank">
                        <div className={styles.event}></div>
                </a>
            </div>

        </div>
    )
}