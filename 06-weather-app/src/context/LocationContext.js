import { createContext, useState } from "react";

export const LocaitonContext = createContext();

export const LocationProvider = (props) => {
  const [location, setLocation] = useState("");

  const data = {
    location,
    setLocation,
  };
  return (
    <LocaitonContext.Provider value={data}>
      {props.children}
    </LocaitonContext.Provider>
  );
};
