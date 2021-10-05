import React from 'react'
import styles from '../styles/Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.container}>
            <img src="snoop.gif" alt="" />
            <h1>Loading data..</h1>
        </div>
    )
}
