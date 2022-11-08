import React from 'react'
import Content from './components/Content'
import SearchCity from "./components/SearchCity"
import { LocationProvider } from './context/LocationContext'
import { WeatherProvider } from './context/WeatherContext'

function App() {
  return (
    <div>
      <LocationProvider>
        
        <WeatherProvider>
          <SearchCity/>
          <Content/>
        </WeatherProvider>
      </LocationProvider>
      
    </div>
  )
}

export default App