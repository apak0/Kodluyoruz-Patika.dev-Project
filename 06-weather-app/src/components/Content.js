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

console.log (weatherData )
  

  return (
    <div className="cards">

     
{/*       
        {weatherData &&
              
          <Card style={{ backgroundColor: "#e5e5e5", width: "15rem", maxHeight:"100px"}}>
            <div className="dayName" style={styles}>
            {weatherData[Object.keys(weatherData)[0]]}
            <img className="cardImage" alt="Card" />
            </div>
                
                  <CardBody>
                    <CardTitle className="cardTitle" tag="h5">
                    {}
                    </CardTitle>
                  </CardBody>
                  <ListGroup flush  className="cardItems" >
                    <ListGroupItem >Sıcaklık: {}/ {} °C </ListGroupItem>
                    <ListGroupItem >Rüzgar: {}km/s </ListGroupItem>
                    <ListGroupItem>Yağış: {} </ListGroupItem>
                    <ListGroupItem>Nem: {} </ListGroupItem>
                  </ListGroup>
                </Card>
            }
     
      */}

      
    {/* {weatherData && weatherData.slice(-2, -1).map((item, index) => (
          
          <Card style={{ backgroundColor: "#e5e5e5", width: "15rem", maxHeight:"150px"}}>
          <div className="dayName" style={styles}>
          
          <img className="cardImage" alt="Card"  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} />
          </div>
              
                <CardBody>
                  <CardTitle className="cardTitle" tag="h5">
                  {}
                  </CardTitle>
                </CardBody>
                <ListGroup flush  className="cardItems" >
                  <ListGroupItem >Sıcaklık: {}/ {} °C </ListGroupItem>
                  <ListGroupItem >Rüzgar: {}km/s </ListGroupItem>
                  <ListGroupItem>Yağış: {} </ListGroupItem>
                  <ListGroupItem>Nem: {} </ListGroupItem>
                </ListGroup>
              </Card>

            
  ))}  */}

{weatherData && weatherData.slice(-2, -1).map((item, index) => (
          
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
                <ListGroupItem >Rüzgar: {}km/s </ListGroupItem>
                <ListGroupItem>Yağış: {} </ListGroupItem>
                <ListGroupItem>Nem: {} </ListGroupItem>
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
