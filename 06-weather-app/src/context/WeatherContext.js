import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { LocaitonContext } from "./LocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState({});

  const url = "http://api.weatherapi.com/v1/future.json?key=";
  const apiKey = "999fe6229ff940f1ab0191452220911";

    useEffect(() => {
        async function getStoreData () {
            const response = await axios(`${url}${apiKey}&q=${location}&aqi=no`)
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
