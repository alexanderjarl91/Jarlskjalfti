import React, {useContext, useEffect} from 'react'
import ListItem from './ListItem'
import { AppContext } from '../context/context'


export default function ListComponent() {
    const {earthquakeData, mapView, setMapView, setActiveQuake, totalRendered, setTotalRendered} = useContext(AppContext)

    const addFive = () => {
        setTotalRendered(totalRendered + 5)
    }
    return (
        <div style={{textAlign: 'center'}}>
        <ul>
            {earthquakeData?.slice(0, totalRendered).map(quake => (
                <div key={quake.timestamp} 
                    style={{margin: "0 auto", width: '90%', maxWidth: "500px"}}
                    onClick={()=> {setMapView(true), setActiveQuake(quake)}}>
                        <ListItem timestamp={quake.timestamp} size={quake.size} humanReadableLocation={quake.humanReadableLocation}/>
                </div>
            ))}

        </ul>
        {totalRendered < earthquakeData.length&& <button onClick={addFive} style={{fontWeight: '500', opacity: 0.6, marginBottom: '2rem'}}>see more</button>}
        </div>
        
     
    )
}
