import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"

import LocationContext from "./context/LocationContext";
import SearchCity from "./components/SearchCity";
import City from "./components/City";
import Content from "./components/Content";

function App() {

  const [location, setLocation] = useState("")

  const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
  const apiKey = "1b32db57dbee440a8a3164812220611";
  const getWeather = `${apiUrl}${apiKey}&q=${location}&aqi=no`;

  const [dailyWeatherData, setDailyWeatherData] = useState("")

  
 

  const data = {
    location,
    setLocation,

  }
  const submitRequest = async locationTo => {
    await axios(`${apiUrl}${apiKey}&q=bursa&aqi=no`).then(response => console.log(response))
  };
  // fetch(getWeather)
  //   .then((response) => response.json())
    
  //   .catch((err) => console.log(err));

  return (
    <LocationContext.Provider className="App" value={data}>
      <div>
        {}
      </div>
      <SearchCity/>
      <Content/>
     
    </LocationContext.Provider>
  );
}

export default App;
