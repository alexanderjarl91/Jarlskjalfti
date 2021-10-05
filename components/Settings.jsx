import React, {useEffect, useContext, useState} from "react";
import styles from "../styles/Settings.module.css";
import { AppContext } from "../context/context";

export default function Settings() {
  const {fetchInterval, setFetchInterval, sortSelection, setSortSelection} = useContext(AppContext
    )
    
    const intervalSelections = [
      {text: '15s', value: 15000},
      {text: '30s', value: 30000},
      {text: '1m', value: 60000},
      {text: '5m', value: 300000},
    ]

    const sortSelections = [
      {text: 'Dagsetning'},
      {text: 'Richter'}
    ]


  return <div className={styles.container}>
      <h2>Stillingar</h2>
      <section>
        <p>Endursækja gögn á fresti</p>
        <ul className={styles.intervals__container}>
          {intervalSelections.map(selection => (
            <li key={selection.value}
            style={selection.value == fetchInterval? {color: 'black'} : {color: "lightgrey"}}
            className={styles.active}
            onClick={()=> {
              setFetchInterval(selection.value)
              }}>{selection.text}</li>
          ))}
        </ul>
      </section>

      <section>
        <p>Flokka lista eftir</p>
        <ul className={styles.intervals__container}>
          {sortSelections.map(selection => (
            <li key={selection.text}
            style={selection.text == sortSelection? {color: 'black'} : {color: "lightgrey"}}
            className={styles.active}
            onClick={()=> {
              setSortSelection(selection.text)
              }}>{selection.text}</li>
          ))}
        </ul>
      </section>
  </div>;
}
