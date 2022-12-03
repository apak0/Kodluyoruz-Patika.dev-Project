import React, { useContext } from "react";
import '../App.css';
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";


function Content() {


  const { weatherData, weekday } = useContext(WeatherContext);
  const styles ={
    color:"#64C9CF"
  }

console.log (weatherData )
  

  return (
    <div className="cards">

  {weatherData && weatherData.slice(-2, -1).map((item, index) => (
          
          <Card key={index} style={{ backgroundColor: "aqua", width: "33rem", maxHeight:"150px",}}>
            <h5> 
            {weekday[new Date(item.datetime).getDay()]}
            </h5>
            <CardBody className="dayName" style={styles}>
              
              <img className="cardImage" alt="Card"  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              />
            </CardBody>
              
             
              <ListGroup flush  className="cardItems" >
                <ListGroupItem >Sıcaklık: {item.app_max_temp} / {item.app_min_temp} °C </ListGroupItem>
                <ListGroupItem >Rüzgar: {item.wind_spd}km/s </ListGroupItem>
                <ListGroupItem>Yağış: {item.pop} </ListGroupItem>
                <ListGroupItem>Nem: {item.rh} </ListGroupItem>
              </ListGroup>
            </Card>

            
  ))}
     

        
       
          {weatherData && weatherData.slice(1, -8).map((item, index) => (
          
              <Card key={index} style={{ backgroundColor: "#e5e5e5", width: "18rem", maxHeight:"150px", marginTop:"5rem",}}>
                <h5> 
                {weekday[new Date(item.datetime).getDay()]}
                </h5>
                <CardBody className="dayName" style={styles}>
                  
                  <img className="cardImage" alt="Card"  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                  />
                </CardBody>
                  
                 
                  <ListGroup flush  className="cardItems" >
                    <ListGroupItem >Sıcaklık: {item.app_max_temp} / {item.app_min_temp} °C </ListGroupItem>
                    
                  </ListGroup>
                </Card>

                
      ))}
         
      
    </div>
  );
}

export default Content;
