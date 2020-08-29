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