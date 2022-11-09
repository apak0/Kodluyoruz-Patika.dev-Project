import {useContext, useState} from 'react'
import {LocaitonContext} from "../context/LocationContext"


function SearchCity() {
  const {location, setLocation} = useContext(LocaitonContext)
  

  const [prevLocation, setPrevLocation] = useState("")
  
    const onSubmit = (e) =>{
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