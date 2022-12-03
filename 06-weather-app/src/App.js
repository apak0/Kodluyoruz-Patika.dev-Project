import React from 'react'
import './App.css';
import Content from './components/Content'
import SearchCity from "./components/SearchCity"
import SideContent from './components/SideContent';
import { LocationProvider } from './context/LocationContext'
import {  WeatherProvider } from './context/WeatherContext'



function App() {

  
  return (
    <div className='previousDiv' >
     
      <div  >
      <LocationProvider>
        <WeatherProvider className="row" >
          
            <SearchCity/>
            <Content />
          
          
          
        </WeatherProvider>
      </LocationProvider>
      </div>
       
    </div>
  )
}

export default App