import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";

export const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [mapView, setMapView] = useState(true);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [fetchInterval, setFetchInterval] = useState(15000);
  const [sortSelection, setSortSelection] = useState("Dagsetning");
  const [activeQuake, setActiveQuake] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [showDocs, setShowDocs] = useState(false);
  const [totalRendered, setTotalRendered] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  //on mount, check if dark is preferred & fetch data
  useEffect(() => {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(matched);
    //fetch earthquake data
    fetchData();
  }, []);

  //function to fetch data & handle loading state
  const url = "https://apis.is/earthquake/is";
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEarthquakeData(sortData(data.results));
        setLoadingData(false);
      });
  };

  //function that takes in data and sorts it by Richter or timestamp
  const sortData = (data) => {
    //sort by sortSelection state (timestamp or size)
    const sorted =
      sortSelection == "Richter"
        ? data.sort((a, b) => {
            return b.size - a.size;
          })
        : data.sort((a, b) => {
            return a.timestamp > b.timestamp
              ? -1
              : a.timestamp > b.timestamp
              ? 1
              : 0;
          });
    return sorted;
  };

  //sort array every time sortSelection changes
  useEffect(() => {
    if (earthquakeData.length < 1) return;
    const tempArr = sortData([...earthquakeData]);
    setEarthquakeData(tempArr);
  }, [sortSelection]);

  //fetch data in intervals
  useInterval(fetchData, fetchInterval);

  return (
    <AppContext.Provider
      value={{
        showSettings,
        setShowSettings,
        mapView,
        setMapView,
        earthquakeData,
        fetchInterval,
        setFetchInterval,
        sortSelection,
        setSortSelection,
        activeQuake,
        setActiveQuake,
        loadingData,
        showDocs,
        setShowDocs,
        totalRendered,
        setTotalRendered,
        darkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
