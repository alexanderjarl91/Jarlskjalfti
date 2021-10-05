import React, {useContext, useEffect} from 'react'
import ListItem from './ListItem'
import { AppContext } from '../context/context'


export default function ListComponent() {
    const {earthquakeData, mapView, setMapView, setActiveQuake} = useContext(AppContext)

    
    useEffect(()=> {
        console.log(earthquakeData)
    }, [earthquakeData])
    
    return (
        <ul>
            {earthquakeData?.map(quake => (
                <div 
                    style={{margin: "0 auto", width: '90%', maxWidth: "768px"}}
                    onClick={()=> {setMapView(true), setActiveQuake(quake)}}>
                        <ListItem key={quake.timestamp} timestamp={quake.timestamp} size={quake.size} humanReadableLocation={quake.humanReadableLocation}/>
                </div>
            ))}

            
        </ul>
    )
}
