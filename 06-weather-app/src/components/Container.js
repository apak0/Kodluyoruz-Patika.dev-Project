import {useState} from 'react'
import Button from './Button'
import Content from './Content'

function Container() {

  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setLocation(e.target.value)
    console.log(location)
  }

  return (
    <div style={{backgroundColor:"crimson", border:"2px solid blue"}} >
      
            <form onSubmit={handleSubmit} >
                            <input value={location} onChange={event => setLocation(event.target.value)} type="text" placeholder='Şehir Giriniz'  ></input>

            </form>
     
      
        <Button/>
        <Content/>
    </div>
  )
}

export default Container