import React, {useContext} from 'react'
import styles from '../styles/PopUp.module.css'
import { AppContext } from '../context/context'
import { formatDate, formatTime } from '../utils/datestuff'

export default function PopUp() {
    const {activeQuake, setActiveQuake} = useContext(AppContext)

    const activeDate = formatDate(activeQuake.timestamp)
    const activeTime = formatTime(activeQuake.timestamp)

    return (
        <div className={styles.container}>
            <h1>{activeQuake.humanReadableLocation}</h1>
            <ul>
                <li className={styles.listItem}>
                    <img src="richter.svg" alt="" />
                    <p>Stærð á richter: {activeQuake.size}</p>
                </li>
                <li className={styles.listItem}>
                    <img src="date_icon.svg" alt="" />
                    <p>Dagsetning: {activeDate}</p>
                </li>
                <li className={styles.listItem}>
                    <img src="time_icon.svg" alt="" />
                    <p>Tímasetning: {activeTime}</p>
                </li>
                <li className={styles.listItem}>
                    <img src="depth.svg" alt="" />
                    <p>Dýpt: {activeQuake.depth}</p> 
                    <button className={styles.close} onClick={() => {
                        setActiveQuake()
                    }}>loka</button>
                </li>
            </ul>
            
        </div>
    )
}
