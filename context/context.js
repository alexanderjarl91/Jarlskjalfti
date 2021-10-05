import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";

export const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [mapView, setMapView] = useState(false);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [fetchInterval, setFetchInterval] = useState(15000);
  const [sortSelection, setSortSelection] = useState("Dagsetning");
  const [activeQuake, setActiveQuake] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const fetchData = () => {
    fetch("https://apis.is/earthquake/is")
      .then((response) => response.json())
      .then((data) => {
        //sort data before
        setEarthquakeData(data.results);
        setLoadingData(false);
      });
  };

  const sortData = (data) => {
    if (sortSelection == "Richter") {
      //sort by date
      const sorted = data.sort((a, b) => {
        return a.size < b.size ? -1 : a.date > b.date ? 1 : 0;
      });
      return sorted;
    } else {
      //data already sorted showing newest first, return
      return data;
    }
  };

  useEffect(() => {
    if (!earthquakeData) return;
    const sortedBySize = sortData(earthquakeData);
  }, [sortSelection]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
