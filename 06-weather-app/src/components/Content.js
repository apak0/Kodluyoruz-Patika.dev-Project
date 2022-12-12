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

function Content() {
  const { weatherData, weekday } = useContext(WeatherContext);
  const { location, setLocation } = useContext(LocaitonContext);
  console.log("asd", weatherData);
  return (
    <div className="container ">
      {/* Bugünün hava durumunu gösteren card START*/}

      {weatherData &&
        weatherData.slice(-2, -1).map((item, index) => (
          <div
            className="todayCard flex justify-center w-3/6  "
            key={index}
            style={{
              border: "1px solid #FFFBEB",
              marginBottom: "1rem",
              marginLeft:"auto",
              marginRight:"auto"
            }}
          >
            <div
              className="cityNameOnCard flex items-center pr-5  "
              style={{
                color: "#EFC050",
              }}
            >
              <h1 className="font-bold text-5xl mr-5 ">
                {location.charAt(0).toUpperCase() +
                  location.slice(1).toLowerCase()}
              </h1>
            </div>

            <div>
              <div className="dayNameCard" style={{ paddingLeft: "2rem" }}>
                <h5 color="#FFFBEB">
                  {weekday[new Date(item.datetime).getDay()]}
                </h5>
              </div>
              <div className="row flex">
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
      <div className="flex ms-auto me-auto sm:flex-nowrap flex-wrap ">
        {weatherData &&
          weatherData.slice(1, 7).map((item, index) => (
            <div
              className="flex-1"
              key={index}
              style={{
                border: "1px solid red",
                borderRadius: "2rem",
                marginBottom: "3rem",
              }}
            >
              <h5 className="font-bold" style={{ textAlign: "center" }}>
                {weekday[new Date(item.datetime).getDay()]}
              </h5>
              <div className="dayName">
                <img
                  className="cardImage"
                  alt="Card"
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                />
              </div>

              <ul flush className="cardItems">
                <li>
                  {Math.floor(item.app_max_temp)} /{" "}
                  {Math.floor(item.app_min_temp)} °C{" "}
                </li>
              </ul>
            </div>
          ))}

        {/* Haftanın devamındaki günlerin hava sıcaklığını gösteren Card END     */}
      </div>
    </div>
  );
}

export default Content;
