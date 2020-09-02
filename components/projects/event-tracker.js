import styles from '../../styles/Home.module.css'

export default function EventTracker() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Event Tracker</h3>
                    <p>This was my first collaborative project. Working with three other General Assembly student engineers,
                        we decided to build something in anticipation of the end of the pandemic in America. Users can search for events in their area,
                        and save events to their personal calendar.
                    </p>
                    <p>Built with ReactJS, MongoDB, and Bootstrap, with calls to the Eventful API.</p>
                </div>
            </div>

            <div class="col">
                <a
                    href="https://quirky-dubinsky-cc4c26.netlify.app/"
                    target="_blank">
                        <div className={styles.event}>
                            <div className={styles.overlay}>
                                <div>
                                    Work-in-progress!
                                </div>
                            </div>
                        </div>
                </a>
            </div>

        </div>
    )
}