import { createContext, useState } from "react";

export const LocaitonContext = createContext();
 

export const LocationProvider = ({children}) => {
  const [location, setLocation] = useState("bursa");

  const data = {
    location,
    setLocation,
  };
  return (
    <LocaitonContext.Provider value={data}>
      {children}
    </LocaitonContext.Provider>
  );
};
