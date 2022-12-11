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
  const { location, setLocation } = useContext(LocaitonContext);
  console.log(weatherData);
  return (
    <div className="container ">
      {/* Bugünün hava durumunu gösteren card START*/}

      {weatherData &&
        weatherData.slice(-2, -1).map((item, index) => (
          <div
            className="todayCard"
            key={index}
            style={{
              backgroundColor: "rgb(85, 180, 176, 0.5)",
              marginBottom: "1rem",
              display: "flex",
            }}
          >
            <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                
                }}>
              <div
                className="cityNameOnCard"
                style={{
                  color: "#EFC050",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <h1>
                  {location.charAt(0).toUpperCase() +
                    location.slice(1).toLowerCase()}
                </h1>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div className="dayNameCard" style={{ paddingLeft: "2rem" }}>
                <h5>{weekday[new Date(item.datetime).getDay()]}</h5>
              </div>
              <div className="row d-flex">
                <div className="dayName col-2 ">
                  <img
                    className="cardImage"
                    alt="Card"
                    src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                  />
                </div>
                <div className="dayNameTodayDetails col-sm-5">
                  <ul className="cardItems">
                    <li>
                      Sıcaklık: {Math.floor(item.app_max_temp)} /{" "}
                      {Math.floor(item.app_min_temp)} °C{" "}
                    </li>
                    <li>Rüzgar: {Math.floor(item.wind_spd)} km/s</li>
                    <li>Yağış: {item.pop} %</li>
                    <li>Nem: {item.rh} %</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

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
                border: "1rem solid white",
                borderRadius: "2rem",
                marginBottom: "3rem",
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
