import { useContext, useState } from "react";
import { LocaitonContext } from "../context/LocationContext";
import { Button, Input } from "reactstrap";

function SearchCity() {
  const { location, setLocation } = useContext(LocaitonContext);
  const [prevLocation, setPrevLocation] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(prevLocation);
    
  };

  return (
    <div className="mt-3">
      <form className="form" onSubmit={onSubmit}>
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
