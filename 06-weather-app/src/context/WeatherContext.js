import { createContext, useState, useContext, useEffect } from "react";
import { LocaitonContext } from "./LocationContext";
import axios from "axios";


export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState();
  const url = "https://weatherdbi.herokuapp.com/data/weather/";
  const apiKey = "999fe6229ff940f1ab0191452220911";
  const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

  useEffect(() => {
    fetch(`${url}${location}`)
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
