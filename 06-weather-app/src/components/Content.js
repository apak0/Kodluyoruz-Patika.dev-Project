import React, {useContext} from 'react'
import { WeatherContext } from '../context/WeatherContext'
import {LocaitonContext} from "../context/LocationContext"


function Content() {
  const {weatherData} = useContext(WeatherContext)
  const {location} = useContext(LocaitonContext)


  return (
    <div>
    
     <p>
      {location}
     </p>
      
    </div>
  )
}

export default Content