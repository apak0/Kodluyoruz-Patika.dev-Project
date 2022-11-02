import './App.css';
import Container from './components/Container';
import {useState} from "react"

import WeatherContext from './context/Weather';

function App() {
  
  const apiUrl = "https://api.openweathermap.org/data/2.5/"
  const apiKey = "795f39038604487d46886d1107c6071b"
  const [weatherData, setWeatgerData] = useState({})
  

  const getWeather = `${apiUrl}weather?q=city&appid=${apiKey}&units=metric&lang=tr`
  
  console.log(getWeather);

  return (
    <div className="App">
      <WeatherContext.Provider value="" >
        <Container/>
      </WeatherContext.Provider>


    </div>
  );
}

export default App;
