import React, {useContext} from 'react'
import styles from '../styles/PopUp.module.css'
import { AppContext } from '../context/context'
import { formatDate, formatTime } from '../utils/datestuff'

export default function PopUp() {
    const {activeQuake, setActiveQuake} = useContext(AppContext)


    return (
        <div className={styles.container}>
            <h1>{activeQuake.humanReadableLocation}</h1>
            <ul>
                <li className={styles.listItem}>
                    <img src="date_icon.svg" alt="" />
                    <p>Stærð á richter: {activeQuake.size}</p>
                </li>
                <li className={styles.listItem}>
                    <img src="date_icon.svg" alt="" />
                    <p>Dagsetning: 0.6</p>
                </li>
                <li className={styles.listItem}>
                    <img src="time_icon.svg" alt="" />
                    <p>Tímasetning: 0.6</p>
                </li>
                <li className={styles.listItem}>
                    <img src="date_icon.svg" alt="" />
                    <p>Dýpt: 0.6</p> 
                    <button className={styles.close} onClick={() => {
                        setActiveQuake()
                    }}>close</button>
                </li>
            </ul>
            
        </div>
    )
}
