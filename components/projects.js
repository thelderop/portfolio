import SimonsShapes from '../components/projects/simons-shapes.js'
import HikeFinder from '../components/projects/hike-finder.js'
import BreakingBread from '../components/projects/breaking-bread.js'
import EventTracker from '../components/projects/event-tracker.js'

export default function Projects() {
    return (
        <div id="projects" class="container">

            <div>
                <h2>
                    Projects
                </h2>
            </div>

            <SimonsShapes />
            <HikeFinder />
            <BreakingBread />
            <EventTracker />

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