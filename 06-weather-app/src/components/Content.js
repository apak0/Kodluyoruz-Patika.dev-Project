import React, { useContext } from "react";
import '../App.css';
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";


function Content() {


  const { weatherData, weekday } = useContext(WeatherContext);
  const { location } = useContext(LocaitonContext);
  const cityName = location.charAt(0).toUpperCase() + location.slice(1);
  const styles ={
    color:"#64C9CF"
  }

  const dayOfWeek = weatherData;
  console.log(dayOfWeek)
  console.log(weatherData)

  
  
 

  return (
    <div className="cards">
      {dayOfWeek &&
        dayOfWeek.map((item, index) => (
         <Card key={index} style={{ width: "18rem",}}>
          <CardBody className="dayName" style={styles}>
            {weekday[new Date(item.date).getDay()]}
            
            
          </CardBody>
            <img className="cardImage" alt="Card" src={item.day.condition.icon} />
            <CardBody>
              <CardTitle className="cardTitle" tag="h5">
                {location.name}
              </CardTitle>
            </CardBody>
            <ListGroup flush  className="cardItems" >
              <ListGroupItem >Sıcaklık: {Math.round(item.day.maxtemp_c) }/{Math.round(item.day.mintemp_c)} °C </ListGroupItem>
              <ListGroupItem >Rüzgar: {item.day.maxwind_kph}km/s </ListGroupItem>
              <ListGroupItem>Yağış: %{item.day.daily_chance_of_rain} </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
}

export default Content;
