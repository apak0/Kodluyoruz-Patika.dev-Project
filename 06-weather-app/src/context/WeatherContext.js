import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

import { LocaitonContext } from "./LocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const { location, setLocation } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState({});

  const url = "http://api.weatherapi.com/v1/current.json?key=";
  const apiKey = "1b32db57dbee440a8a3164812220611";

    useEffect(() => {
        async function getStoreData () {
            const response = await axios(`${url}${apiKey}&q=${location}&aqi=no`)
            
            setWeatherData(response)
        }
        getStoreData();
    },[location])

//   axios(`${url}${apiKey}&q=${location}&aqi=no`)
//       .then((locationData) => console.log(locationData));

  const data = {
    weatherData,
  };

  return (
    <WeatherContext.Provider value={data}>
      {props.children}
    </WeatherContext.Provider>
  );
};
