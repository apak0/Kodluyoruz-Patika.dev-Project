import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { LocaitonContext } from "./LocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState({});

  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=`;
  const apiKey = "e591a1f820874cceb1283b604d01a663";

    useEffect(() => {
        async function getStoreData () {
            const response = await axios(`${url}${location}&key=${apiKey}`)
            setWeatherData(response)
            console.log(response);
        }
        getStoreData();
        
    },[location])

    const data = {
      weatherData
    }
  return (
    <WeatherContext.Provider value={data}>
      {children}
    </WeatherContext.Provider>
  );
};
