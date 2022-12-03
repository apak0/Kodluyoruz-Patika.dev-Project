import { useContext, useState } from "react";
import { LocaitonContext } from "../context/LocationContext";
import { Button, Input } from "reactstrap";
import { WeatherContext } from "../context/WeatherContext";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";

function SearchCity() {
  const { location, setLocation } = useContext(LocaitonContext);
  const [prevLocation, setPrevLocation] = useState("");
  const { weatherData, weekday } = useContext(WeatherContext);

  const styles ={
    color:"#64C9CF"
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(prevLocation);
    
  };

  return (
    <div className="mt-3">


      <form className="form " onSubmit={onSubmit}>

         {/* <div className="col-6" > 
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
        </div>   */}

        
           
          <Input
            id="exampleSearch"
            name="search"
            type="search"
            onChange={(e) => {
              setPrevLocation(e.target.value);
            }}
            placeholder="City Name"
            value={prevLocation}
          />
          <Button color="info" outline className="mt-2 ">
            Search{" "}
          </Button>
        
      </form>
    </div>
  );
}

export default SearchCity;
