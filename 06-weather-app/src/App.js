import React from "react";
import "./App.css";
import Content from "./components/Content";
import SearchCity from "./components/SearchCity";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="previousDiv p-8">
      <LocationProvider>
        <WeatherProvider className="row">
          <SearchCity />
          <Content />
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
