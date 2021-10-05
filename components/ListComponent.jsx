import React, {useContext, useEffect} from 'react'
import ListItem from './ListItem'
import { AppContext } from '../context/context'


export default function ListComponent() {
    const {earthquakeData, mapView, setMapView, setActiveQuake} = useContext(AppContext)

    return (
        <ul>
            {earthquakeData?.map(quake => (
                <div key={quake.timestamp} 
                    style={{margin: "0 auto", width: '90%', maxWidth: "500px"}}
                    onClick={()=> {setMapView(true), setActiveQuake(quake)}}>
                        <ListItem timestamp={quake.timestamp} size={quake.size} humanReadableLocation={quake.humanReadableLocation}/>
                </div>
            ))}

            
        </ul>
    )
}
