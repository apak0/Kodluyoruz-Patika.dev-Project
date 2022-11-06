import {useContext} from 'react'
import LocationContext from '../context/LocationContext'

function SearchCity() {
    const {location, setLocation} = useContext(LocationContext)
    

    const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(e.target.value)
    
    setLocation("")
  }

return (
     <div style={{backgroundColor:"crimson", border:"2px solid blue"}} >
      
        <form onSubmit={handleSubmit} >
            <input value={location} onChange={event => setLocation(event.target.value)} type="text" placeholder='Şehir Giriniz'  ></input>
        </form>
     </div>
  )
}

export default SearchCity