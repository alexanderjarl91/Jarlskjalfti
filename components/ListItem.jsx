import React from 'react'
import styles from '../styles/ListItem.module.css'
import { formatDate, formatTime } from '../utils/datestuff'

export default function ListItem({size, humanReadableLocation, timestamp }) {

 

    return (
        <div className={styles.container}>
            <div className={styles.richter__container}>
                <h1>{size}</h1>
                <p>Richter</p>
            </div>
            <div className={styles.info__container}>
                <h2>{humanReadableLocation.length > 25? humanReadableLocation.substr(0, 25) + "..." : humanReadableLocation}</h2>
                <div>
                    <div>
                        <img className={styles.icon} src="date_icon.svg"></img>
                        <p>{formatDate(timestamp)}</p>
                    </div>
                    <div>
                        <img className={styles.icon} src="time_icon.svg"></img>
                        <p>{formatTime(timestamp)}</p>
                    </div>
                </div>
                
            </div>
            <img src="arrow.svg" alt="" />
        </div>
    )
}
