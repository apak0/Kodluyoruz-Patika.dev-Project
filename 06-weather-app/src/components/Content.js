import React, {useContext} from 'react'
import { WeatherContext } from '../context/WeatherContext'


function Content() {
  const {weatherData} = useContext(WeatherContext)


  return (
    <div>
      {console.log(weatherData)}
      {/* <p>{weatherData.data.location.name}</p> */}
      
    </div>
  )
}

export default Content