import styles from '../styles/Home.module.css'

export default function Title() {
    return (

        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        Thomas Helderop
                    </h1>

                    <div>
                        <p>
                            I am a Denver-based software engineer.
                            After several years of client- and customer-facing roles in the tech industry,
                            I decided to take the plunge and pursue my passion for coding.
                        </p>
                    </div>
                </div>
            
                <div class="col">
                    <div className={styles.photo}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}