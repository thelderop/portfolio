import styles from '../styles/Home.module.css'

export default function Projects() {
    return (
        <div id="projects" class="container">

            <div>
                <h2>
                    Projects
                </h2>
            </div>

            <div class="row">

                <div class="col">
                    <div>
                        <h3>Simon's Shapes</h3>
                        <p>A fast-paced pattern-recognition and memory game. Built with vanilla Javascript.</p>
                    </div>
                </div>

                <a
                    href="https://simons-shapes.herokuapp.com/"
                    target="_blank">
                        <div class="col" className={styles.simon}></div>
                </a>

            </div>

            <div class="row">

                <div class="col">
                    <div>
                        <h3>Hike Finder</h3>
                        <p>Find and save hikes near you.
                            Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
                    </div>
                </div>

                <a
                    href="https://hike-finder.herokuapp.com/"
                    target="_blank">
                        <div class="col" className={styles.hike}></div>
                </a>

            </div>

            {/* <div class="row">

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
                    <div className={styles.breaking}>

                    </div>
                </div>

            </div> */}

            <div class="row">
                <div class="col">
                    <div>
                        <h3>Event Tracker</h3>
                        <p>An app to find and save to your personal calendar upcoming events in your area.
                            Built with ReactJS, MongoDB, and Bootstrap.</p>
                    </div>
                </div>

                <a
                    href="https://quirky-dubinsky-cc4c26.netlify.app/"
                    target="_blank">
                        <div class="col" className={styles.event}></div>
                </a>

            </div>
        </div>
    )
}

// function SimonDescription() {
//     return (
//         <div>
//             <h3>Simon's Shapes</h3>
//             <p>A fast-paced pattern-recognition and memory game. Built with vanilla Javascript.</p>
//         </div>
//     )
// }

// function Simon() {
//     return (
//         <div className={styles.simon, styles.projects}>
//         </div>
//     )
// }

// function HikeDescription() {
//     return (
//         <div>
//             <h3>Hike Finder</h3>
//             <p>Find and save hikes near you. Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
//         </div>
//     )
// }

// function Hike() {
//     return (
//         <div className={styles.hike, styles.projects}>
//             <a  
//                 href="https://hike-finder.herokuapp.com/"
//                 target="_blank">
//             </a>
//         </div>
//     )
// }

// function BreakingDescription() {
//     return (
//         <div>
//             <h3>Hike Finder</h3>
//             <p>Find and save hikes near you. Built with EJS, NodeJS, Postgres SQL database, with calls to the Hiking Project API</p>
//         </div>
//     )
// }

// function Breaking() {
//     return (
//         <div className={styles.breaking, styles.projects}>

//         </div>
//     )
// }

// function EventDescription() {
//     return (
//         <div>
//             <h3>Event Tracker</h3>
//             <p>An app to find and save to your personal calendar upcoming events in your area. Built with ReactJS, MongoDB, and Bootstrap.</p>
//         </div>
//     )
// }

// function Event() {
//     return (
//         <div className={styles.event, styles.projects}>
//             <a  
//                 href="https://quirky-dubinsky-cc4c26.netlify.app/"
//                 target="_blank">
//             </a>
//         </div>
//     )
// }