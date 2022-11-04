import {useState} from 'react'
import Button from './Button'
import Content from './Content'

function Container() {

  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setCity(e.target.value)
    console.log(city);
  }

  return (
    <div style={{backgroundColor:"crimson", border:"2px solid blue"}} >
      
      <form  onSubmit={handleSubmit}>
              <input value={city} onChange={event => setLocation(event.target.value)} type="text" placeholder='Şehir Giriniz'  ></input>
      </form>
      
        <Button/>
        <Content/>
    </div>
  )
}

export default Container