import {useContext, useState} from 'react'
import {LocaitonContext} from "../context/LocationContext"
import { WeatherContext } from '../context/WeatherContext'

function SearchCity() {
  const {location, setLocation} = useContext(LocaitonContext)
  const {weatherData} = useContext(WeatherContext)

  const [prevLocation, setPrevLocation] = useState("")
  
    const  onSubmit =  (e) =>{
    e.preventDefault();
    setLocation(prevLocation)
    console.log(location);
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => {setPrevLocation(e.target.value)}} type="text" placeholder='Add City' value={prevLocation} />
      <br/>
      <button>Search</button>
      {location}
    </form>
  )
}

export default SearchCity