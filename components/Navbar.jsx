import React, {useEffect, useContext} from 'react'
import styles from '../styles/Navbar.module.css'
import { AppContext } from "../context/context";
import Link from 'next/link'

export default function Navbar() {
    const {showSettings, setShowSettings, fetchInterval, setFetchInterval, mapView, setMapView} = useContext(AppContext);



    return (
        <nav className={styles.navbar} >
            {!mapView? <button onClick={() => {
                setShowSettings(!showSettings)
            }}>
                <img src="settings.svg" alt="" />
            </button> : null  }
            
            <Link href="/" >
                <img src="logo.svg" alt="" style={{cursor: 'pointer'}}/>
            </Link>
            <button onClick={() => {
                setMapView(!mapView)
            }}>
                <img src={mapView? 'list_view.svg' : "map_view.svg"} alt="" />
            </button>
        </nav>
    )
}
