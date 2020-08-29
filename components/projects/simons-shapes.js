import styles from '../../styles/Home.module.css'

export default function SimonsShapes() {
    return (
        <div class="row">

            <div class="col">
                <div>
                    <h3>Simon's Shapes</h3>
                    <p>A fast-paced pattern-recognition and memory game. Built with vanilla Javascript.</p>
                </div>
            </div>


            <div class="col">
                <a
                    href="https://simons-shapes.herokuapp.com/"
                    target="_blank">
                        <div className={styles.simon}></div>
                </a>
            </div>

        </div>
    )
}