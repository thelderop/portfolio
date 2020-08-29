import styles from '../../styles/Home.module.css'

export default function HikeFinder() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Hike Finder</h3>
                    <p>Find and save hikes near you.
                        Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
                </div>
            </div>

            <div class="col">
                <a
                    href="https://hike-finder.herokuapp.com/"
                    target="_blank">
                        <div className={styles.hike}></div>
                </a>
            </div>

        </div>
    )
}