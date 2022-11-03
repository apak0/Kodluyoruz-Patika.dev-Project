import {useState} from 'react'
import Button from './Button'
import Content from './Content'

function Container() {

  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setCity(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div style={{backgroundColor:"crimson", border:"2px solid blue"}} >
      
      <input onSubmit={handleSubmit} onChange={event => setLocation(event.target.value)} type="text" placeholder='Şehir Giriniz'  ></input>
      
        <Button/>
        <Content/>
    </div>
  )
}

export default Container