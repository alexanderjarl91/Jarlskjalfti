import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";

export const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [mapView, setMapView] = useState(false);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [fetchInterval, setFetchInterval] = useState(15000);
  const [sortSelection, setSortSelection] = useState("Richter");
  const [activeQuake, setActiveQuake] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [showDocs, setShowDocs] = useState(false);

  const url = "https://apis.is/earthquake/is";

  // 1. sækja gögn
  // 2. sortera eftir sortSelection state
  // 3. setja sortuð gögn í state
  // 4. endursortera þegar sortSelection state breytist
  // 5. setja endursorteruð gögn í state

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEarthquakeData(sortData(data.results));
        setLoadingData(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sortData = (data) => {
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

  useEffect(() => {
    if (earthquakeData.length < 1) return;
    const tempArr = sortData([...earthquakeData]);

    console.log(sortSelection, tempArr[0].size, tempArr[0].timestamp);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
