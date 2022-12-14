import React, { useContext } from "react";
import "../App.css";
import { WeatherContext } from "../context/WeatherContext";
import { LocaitonContext } from "../context/LocationContext";

function Content() {
  const { weatherData, weekday } = useContext(WeatherContext);
  const { location, setLocation } = useContext(LocaitonContext);
  console.log("asd", weatherData);
  return (
    <div className="topContainer">
      {/* Bugünün hava durumunu gösteren card START*/}

      {weatherData &&
        weatherData.slice(-2, -1).map((item, index) => (
          <div className="flex justify-center">
            <div
              className=" flex justify-center border mb-5 w-full lg:w-2/5"
              key={index}
            >
              <div >
               
              </div>

              <div className="flex w-full justify-evenly">
                <div className="">
                  
                <h1 className="font-bold sm:text-3xl flex items-center text-cityColor">
                  {location.charAt(0).toUpperCase() +
                    location.slice(1).toLowerCase()}
                </h1>

                  <h5 color="#FFFBEB" className="text-indigo-300 text-2xl  ">
                    {weekday[new Date(item.datetime).getDay()]}
                  </h5>



                  <img
                    className="cardImage px-2"
                    alt="Card"
                    src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                  />
                </div>
                <div className="lg:text-lg sm:text-sm grid content-center    ">
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

      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-6  ">
        {weatherData &&
          weatherData.slice(1, 7).map((item, index) => (
            <div
              className="flex-1  p-3
                rounded-xl
                border-cityColor
                bg-cyan-500  shadow-lg
                hover:shadow-cyan-500/50
                hover:text-white
                  transition ease-in duration-150"
              key={index}
            >
              <div>
                <h5 className="font-bold text-center text-2xl ">
                  {weekday[new Date(item.datetime).getDay()]}
                </h5>
                <div className="flex justify-center ">
                  <img
                    className="cardImage"
                    alt="Card"
                    src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                  />
                </div>
              </div>
              <ul flush className="cardItems text-center">
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
