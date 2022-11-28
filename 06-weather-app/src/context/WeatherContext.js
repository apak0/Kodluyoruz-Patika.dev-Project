import { createContext, useState, useContext, useEffect } from "react";
import { LocaitonContext } from "./LocationContext";
import axios from "axios";


export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState();
  const url = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
  const apiKey = "e591a1f820874cceb1283b604d01a663";
  const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

  useEffect(() => {
    fetch(`${url}${location}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }, [location]);

  const data = {
    weatherData,
    weekday
   
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
