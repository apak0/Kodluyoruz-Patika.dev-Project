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
    setPrevLocation("")
   
    
  };

  return (
    <div className="mt-3">
      <h2 style={{display:"flex"}} >{location}</h2>

      <form className="form " onSubmit={onSubmit}>
        <Input
            id="exampleSearch"
            name="search"
            type="search"
            onChange={(e) => {
              setPrevLocation(e.target.value)
             
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
