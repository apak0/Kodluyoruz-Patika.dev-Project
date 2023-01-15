import { createContext, useState, useContext, useEffect } from "react";
import { LocaitonContext } from "./LocationContext";
import mockData from "./mockData.json"




export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState("");
  const url = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
  const apiKey = "93d01e6642fd45c49cac833408a1eb83";
  const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

  useEffect(() => {
   setWeatherData(mockData)
    console.log(data)
  }, [location]);

  const data = {
    weatherData,
    weekday
   
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
