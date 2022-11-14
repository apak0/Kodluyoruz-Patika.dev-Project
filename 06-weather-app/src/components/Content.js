import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {
  Alert,
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";



function Content() {
  const { weatherData } = useContext(WeatherContext);
  const { location } = useContext(LocaitonContext);
  const DailyData = !weatherData ? "data0" : weatherData  ;
  
  console.log(`dailyadata ${DailyData}`);
  // console.log( JSON.parse(DailyData)[1].high_temp );
 
  return (

    <div className="cards">
      
      {
        weatherData === "" ?  "Data yüklenmedi" :
      
      <Card style={{ width: "18rem",}}>
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardText></CardText>
            </CardBody>
            <ListGroup flush>
               <ListGroupItem></ListGroupItem>
             {/* <ListGroupItem>{DailyData[1].pop}</ListGroupItem>
              <ListGroupItem>{DailyData[1].wind_spd}km/s</ListGroupItem>
              <ListGroupItem>{DailyData[1].rh}%</ListGroupItem> */}
            </ListGroup>
          </Card>
}
    </div>
 )}


export default Content;
