import React, { useContext } from "react";
import "../App.css";
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Content() {
  const { weatherData, weekday } = useContext(WeatherContext);
  console.log(weatherData);
  return (
    <div className="container ">
      
      <div className="row">
        {/* Bugünün hava durumunu gösteren card START*/}

        {weatherData &&
          weatherData.slice(-2, -1).map((item, index) => (
            <Card
              className="col-sm-7 cold-lg-2 ms-auto me-auto"
              key={index}
              style={{
                backgroundColor: "rgb(85, 180, 176, 0.5)",
                marginBottom:"1rem",
                textAlign: "center",
                height:"250px"
              }}
            >
              <h5>{weekday[new Date(item.datetime).getDay()]}</h5>
              <CardBody className="dayName">
                <img
                  className="cardImage"
                  alt="Card"
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                />
              </CardBody>
              <ListGroup flush className="cardItems">
                <ListGroupItem>
                  Sıcaklık: {Math.floor(item.app_max_temp)} /{" "}
                  {Math.floor(item.app_min_temp)} °C{" "}
                </ListGroupItem>
                <ListGroupItem>
                  Rüzgar: {Math.floor(item.wind_spd)} km/s{" "}
                </ListGroupItem>
                <ListGroupItem>Yağış: {item.pop} % </ListGroupItem>
                <ListGroupItem>Nem: {item.rh} % </ListGroupItem>
              </ListGroup>
            </Card>
          ))}
      </div>
        {/* Bugünün hava durumunu gösteren card END*/}

        {/* Haftanın devamındaki günlerin hava sıcaklığını gösteren Card START     */}
        <div className="row ms-auto me-auto">
        {weatherData &&
          weatherData.slice(1, 7).map((item, index) => (
            <Card
              className="col-sm-2 cold-lg-5  "
              key={index}
              style={{
                backgroundColor: "#E14D2A",
                border:"1rem solid white",
                borderRadius:"20px",
                marginBottom:"3rem"
                
              }}
            >
              <h5 style={{ textAlign: "center" }}>
                {weekday[new Date(item.datetime).getDay()]}
              </h5>
              <CardBody className="dayName">
                <img
                  className="cardImage"
                  alt="Card"
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                />
              </CardBody>

              <ListGroup flush className="cardItems">
                <ListGroupItem style={{ color: "" }}>
                  {Math.floor(item.app_max_temp)} /{" "}
                  {Math.floor(item.app_min_temp)} °C{" "}
                </ListGroupItem>
              </ListGroup>
            </Card>
          ))}

        {/* Haftanın devamındaki günlerin hava sıcaklığını gösteren Card END     */}
      </div>
    </div>
  );
}

export default Content;
