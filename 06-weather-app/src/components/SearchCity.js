import {useContext, useState} from 'react'
import {LocaitonContext} from "../context/LocationContext"

function SearchCity() {

 

  const {location, setLocation} = useContext(LocaitonContext)

  

  
  const  onSubmit =  (e) =>{
    setLocation(location)
    e.preventDefault();
    setLocation("")
    
  }

  return (

    <form onSubmit={onSubmit} >
      <input onChange={(e) => {setLocation(e.target.value)}} type="text" placeholder='Add City' value={location} />
      <br/>
      <button  >Search</button>
    </form>
  )
}

export default SearchCity