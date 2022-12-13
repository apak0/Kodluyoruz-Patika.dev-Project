import { useContext, useState } from "react";
import { LocaitonContext } from "../context/LocationContext";

import { WeatherContext } from "../context/WeatherContext";

function SearchCity() {
  const { location, setLocation } = useContext(LocaitonContext);
  const [prevLocation, setPrevLocation] = useState("");
  const { weatherData, weekday } = useContext(WeatherContext);

  const styles = {
    color: "#64C9CF",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(prevLocation);
    setPrevLocation("");
  };

  return (
    <div className="mt-3 mb-3">
      <form className="form " onSubmit={onSubmit}>
        <input
        className="p-1"
          id="exampleSearch"
          name="search"
          type="search"
          onChange={(e) => {
            setPrevLocation(e.target.value);
          }}
          placeholder="City Name"
          value={prevLocation}
        />
        <button
          color="info"
          outline
          className="mt-2 border p-1 w-full m-auto bg-blue-300 transition "
        >
          Search{" "}
        </button>
      </form>
    </div>
  );
}

export default SearchCity;
