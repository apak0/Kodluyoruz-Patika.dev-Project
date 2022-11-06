import {useContext} from 'react'
import WeatherContext from '../context/WeatherContext'

function Content() {
    const data = useContext(WeatherContext);

   
  
    return (
      <div style={{display:"flex", justifyContent:"center", backgroundColor:"crimson", border:"2px solid blue"}}>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
          <div style={{width:"50px", height:"80px", padding:"20px"}}>Wednesday</div>
      </div>
    )
  }
  

export default Content