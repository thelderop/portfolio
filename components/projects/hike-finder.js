import styles from '../../styles/Home.module.css'

export default function HikeFinder() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Hike Finder</h3>
                    <p>I deeply enjoy the outdoors-
                        so what better idea for a second project than to build an app to help me find nearby hikes?
                        Hike Finder allows users to search for hikes within their provided area.
                        Additionally, users can save their favorite hikes to their profile.
                    </p>
                    <p>Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
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