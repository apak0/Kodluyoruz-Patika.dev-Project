import {useState} from 'react'
import Button from './Button'
import Content from './Content'

function Container() {

  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setCity(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div style={{backgroundColor:"crimson", border:"2px solid blue"}} >
      <form onSubmit={handleSubmit} >
      <input type="text" placeholder='Şehir Giriniz'  ></input>
      </form>
        <Button/>
        <Content/>
    </div>
  )
}

export default Container