import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { LocaitonContext } from "./LocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState({});

  const url = "http://api.weatherapi.com/v1/current.json?key=";
  const apiKey = "1b32db57dbee440a8a3164812220611";

    // useEffect(() => {
    //     async function getStoreData () {
    //         const response = await axios(`${url}${apiKey}&q=${location}&aqi=no`)
            
    //         setWeatherData(response)
    //         console.log(response);
    //     }
    //     getStoreData();
        
    // },[location])

  // const data = {
  //   weatherData,
  // };

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};
