import React, {useContext} from 'react'
import { WeatherContext } from '../context/WeatherContext'
import {LocaitonContext} from "../context/LocationContext"


function Content() {
  const {weatherData} = useContext(WeatherContext);
  const {location} = useContext(LocaitonContext);


  return (
    <div>
    
      {location}
      <code> {JSON.stringify(weatherData)} </code>
   
      
    </div>
  )
}

export default Content