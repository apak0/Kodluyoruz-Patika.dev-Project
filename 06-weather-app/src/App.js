import React from 'react'
import './App.css';
import Content from './components/Content'
import SearchCity from "./components/SearchCity"
import { LocationProvider } from './context/LocationContext'
import {  WeatherProvider } from './context/WeatherContext'
import ComponentNavbar from './components/ComponentNavbar';


function App() {

  
  return (
    <div>
      <LocationProvider>
        <WeatherProvider>
          <ComponentNavbar/>
          <SearchCity/>
          <Content/>
        </WeatherProvider>
      </LocationProvider>
      
    </div>
  )
}

export default App