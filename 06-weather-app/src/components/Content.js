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

const arr = ["ahmet","mehmet","metin"]

function Content() {
  const { weatherData } = useContext(WeatherContext);
  const { location } = useContext(LocaitonContext);
  const DailyData = JSON.stringify(weatherData.data) ? JSON.stringify(weatherData.data) : null;
  console.log(DailyData)

  return (

    <div>
      {DailyData}
    </div>

    // <div className="cards">
      
    //   {data ? 
    //     data.map((day) => {
    //       return (
    //       <Card style={{ width: "18rem",}}>
    //         <img alt="Card" src="https://picsum.photos/300/200" />
    //         <CardBody>
    //           <CardTitle tag="h5"></CardTitle>
    //           <CardText>{day[1]} </CardText>
    //         </CardBody>
    //         <ListGroup flush>
    //           <ListGroupItem>Sıcaklık: 25 °C</ListGroupItem>
    //           <ListGroupItem>Yağış: 1%</ListGroupItem>
    //           <ListGroupItem>Rüzgar: 25 km/s</ListGroupItem>
    //           <ListGroupItem>Nem: 71%</ListGroupItem>
    //         </ListGroup>
    //       </Card>
    //       )
    //     })
    //    : (
    //     <div className="center">
    //       <Alert>
    //         <h4 className="alert-heading">Hoşgeldiniz</h4>
    //         <p>
    //           Lütfen haftalık hava durumunu öğrenmek istediğiniz şehrin ismini
    //           yazınız.
    //         </p>
    //         <hr />
    //       </Alert>
    //     </div>
    //   )}
    // </div>
  );
}

export default Content;
