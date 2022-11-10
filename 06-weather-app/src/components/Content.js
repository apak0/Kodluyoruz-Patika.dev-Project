import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {
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
  const data = JSON.stringify(weatherData)

  return (
    <div className="cards" >
      {data}
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src="https://picsum.photos/300/200" />
        <CardBody>
         
          <CardTitle tag="h5"></CardTitle>
          <CardText>Parçalı Bulutlu</CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>Sıcaklık: 25 °C</ListGroupItem>
          <ListGroupItem>Yağış: 1%</ListGroupItem>
          <ListGroupItem>Rüzgar: 25 km/s</ListGroupItem>
          <ListGroupItem>Nem: 71%</ListGroupItem>
        </ListGroup>
      </Card>
      
    </div>
  );
}

export default Content;
