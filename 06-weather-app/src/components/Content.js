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
  const cityName = location.charAt(0).toUpperCase() + location.slice(1);

  const mondayClouds = weatherData && weatherData;

  console.log(typeof mondayClouds);
  console.log(mondayClouds);

  return (
    <div className="cards">
      {mondayClouds &&
        mondayClouds.slice(0, 7).map((item, index) => (
         <Card key={index} style={{ width: "18rem",}}>
            <img className="cardImage" alt="Card" src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} />
            <CardBody>
              <CardTitle className="textAlight: center" tag="h5">
                {cityName}
              </CardTitle>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>{item.high_temp}/C </ListGroupItem>
              <ListGroupItem>{item.rh}/km </ListGroupItem>
              <ListGroupItem>{item.pop} </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
}

export default Content;
