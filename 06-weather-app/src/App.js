import './App.css';
import Container from './components/Container';
import {useState} from "react"

function App() {
  

  const apiKey = "795f39038604487d46886d1107c6071b"
  const [weatherData, setWeatgerData] = useState({})
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if(event.key == "Enter") {
      fetch()
    }
  }

  return (
    <div className="App">
      <Container/>


    </div>
  );
}

export default App;
