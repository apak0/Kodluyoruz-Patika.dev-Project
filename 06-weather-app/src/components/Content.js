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
  const mondayClouds = weatherData && weatherData;

  console.log( typeof mondayClouds);
  console.log(mondayClouds)

  return (
    <div className="cards">
     { 
      weatherData && Object.keys(mondayClouds).map((item, index) => {
       return (
        <div key={index} >{item.clouds}</div>
       )  
      })
     }
    </div>
  );

  // <Card
  //         style={{
  //           width: "18rem",
  //         }}
  //       >
  //         <img alt="Card" src="https://picsum.photos/300/200" />
  //         <CardBody>
  //           <CardTitle tag="h5">
  //             {location} {item.datetime}
  //           </CardTitle>
            
  //         </CardBody>
  //         <ListGroup flush>
  //           <ListGroupItem>{item.high_temp}/C </ListGroupItem>
  //           <ListGroupItem>{item.rh}/km </ListGroupItem>
  //           <ListGroupItem>{item.pop} </ListGroupItem>
  //         </ListGroup>
  //       </Card>;
}

export default Content;
