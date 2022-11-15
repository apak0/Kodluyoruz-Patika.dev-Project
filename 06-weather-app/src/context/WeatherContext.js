import { createContext, useState, useContext, useEffect } from "react";
import { LocaitonContext } from "./LocationContext";
import axios from "axios";


export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState();
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=`;
  const apiKey = "e591a1f820874cceb1283b604d01a663";

  useEffect(() => {
    axios(`${url}${location},NC&key=${apiKey}`)
      .then((response) => response.data.data)
      .then((item) =>  setWeatherData(item))
      .catch((err) => console.log(err));
  }, [location]);

  const data = {
    weatherData
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
