import React, { useContext } from "react";
import '../App.css';
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";


function Content() {


  const { weatherData, weekday } = useContext(WeatherContext);
  // const { location } = useContext(LocaitonContext);
  // const cityName = location.charAt(0).toUpperCase() + location.slice(1);
  const styles ={
    color:"#64C9CF"
  }


  

  return (
    <div className="cards">

     
{/*       
        {weatherData &&
              
          <Card style={{ backgroundColor: "#e5e5e5", width: "15rem", maxHeight:"100px"}}>
            <div className="dayName" style={styles}>
            {weatherData.data[1]}
            <img className="cardImage" alt="Card" src={weatherData.currentConditions.iconURL}/>
            </div>
                
                  <CardBody>
                    <CardTitle className="cardTitle" tag="h5">
                    {weatherData.currentConditions.comment}
                    </CardTitle>
                  </CardBody>
                  <ListGroup flush  className="cardItems" >
                    <ListGroupItem >Sıcaklık: {weatherData.next_days[0].max_temp.c}/ {weatherData.next_days[0].min_temp.c} °C </ListGroupItem>
                    <ListGroupItem >Rüzgar: {weatherData.currentConditions.wind.km}km/s </ListGroupItem>
                    <ListGroupItem>Yağış: {weatherData.currentConditions.precip} </ListGroupItem>
                    <ListGroupItem>Nem: {weatherData.currentConditions.humidity} </ListGroupItem>
                  </ListGroup>
                </Card>
            }
     
       */}
       
          {weatherData && weatherData.slice(1, -7).map((item, index) => (
          
              <Card key={index} style={{ backgroundColor: "#e5e5e5", width: "18rem", marginTop:"5rem",}}>
                <CardBody className="dayName" style={styles}>
                  
                  <img className="cardImage" alt="Card" src=`${item.icons}`
                  
                  />
                </CardBody>
                  
                 
                  <ListGroup flush  className="cardItems" >
                    <ListGroupItem >Sıcaklık: {item.app_max_temp}/{item.app_min_temp} °C </ListGroupItem>
                    
                  </ListGroup>
                </Card>
      ))}
         
      
    </div>
  );
}

export default Content;
