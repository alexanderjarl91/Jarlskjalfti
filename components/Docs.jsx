import React, {useContext} from 'react'
import { AppContext } from "../context/context";

import styles from '../styles/Docs.module.css'

export default function Docs() {
    const {setShowDocs, showDocs} = useContext(AppContext)
    
    const handleClose = () => {
        setShowDocs(!showDocs)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.docs}>
                <h3>Velkomin!</h3>
                <p>Jarðskjálftar eru birtir á korti sem rauðir hringir.
                    Þvermál hringsins merkir stærð á richter en styrkur lits merkir dýpt.
                </p>
                <p>Einnig er hægt að sjá jarðskjálftagögn í lista með því að smella á blaðsíðuhnappinn í efra hægri horninu.</p>
                <button onClick={handleClose}>close</button>
            </div>
        </div>
    )
}
