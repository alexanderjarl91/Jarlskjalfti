import React, {useEffect, useContext} from 'react'
import styles from '../styles/Navbar.module.css'
import { AppContext } from "../context/context";
import Link from 'next/link'

export default function Navbar() {
    const {showSettings, setShowSettings, fetchInterval, setFetchInterval, mapView, setMapView, darkMode} = useContext(AppContext);



    return (
        <nav className={styles.navbar} >
            {!mapView? <button onClick={() => {
                setShowSettings(!showSettings)
            }}>
                <img src={darkMode? "settings_dark.svg" : "settings.svg"} alt="" />
            </button> : <img style={{opacity: 0.3}}src={darkMode? "settings_dark.svg" : "settings.svg"} alt="" />  }
            
            <Link href="/" >
                <img src={darkMode? "logo_dark.svg" : "logo.svg"} alt="" style={{cursor: 'pointer'}}/>
            </Link>
            <button onClick={() => {
                setMapView(!mapView)
            }}>
                <img src={mapView? darkMode? 'list_view_dark.svg' : 'list_view.svg' : darkMode? "map_view_dark.svg" : "map_view.svg"} alt="" />
            </button>
        </nav>
    )
}
