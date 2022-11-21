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

  // const dayOfWeek = weatherData;
  // console.log(dayOfWeek)
  console.log(weatherData)

  
  
 

  return (
    <div className="cards">

      


      {weatherData &&
        weatherData.next_days.map((item, index) => (
         <Card key={index} style={{ backgroundColor: "#e5e5e5", width: "18rem",}}>
          <CardBody className="dayName" style={styles}>
            
            
            
          </CardBody>
            <img className="cardImage" alt="Card" src={item.iconURL} />
            <CardBody>
              <CardTitle className="cardTitle" tag="h5">
                {location.name}
              </CardTitle>
            </CardBody>
            <ListGroup flush  className="cardItems" >
              <ListGroupItem >Sıcaklık: {item.max_temp.c}/ °C </ListGroupItem>
              <ListGroupItem >Rüzgar: {}km/s </ListGroupItem>
              <ListGroupItem>Yağış: %{} </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
}

export default Content;
