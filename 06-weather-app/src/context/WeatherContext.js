import { createContext, useState, useContext, useEffect } from "react";
import { LocaitonContext } from "./LocationContext";
import axios from "axios";


export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(LocaitonContext);
  const [weatherData, setWeatherData] = useState();
  const url = "https://api.weatherapi.com/v1/forecast.json?key=";
  const apiKey = "999fe6229ff940f1ab0191452220911";
  const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

  useEffect(() => {
     axios(`${url}${apiKey}&q=${location}&days=7&aqi`)
      .then((response) =>response.data.forecast.forecastday)
      .then((item) =>  setWeatherData(item)  )
      .catch((err) => console.log(err));
  }, [location]);

  const data = {
    weatherData,
    weekday
   
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
