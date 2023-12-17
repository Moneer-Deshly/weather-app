import './App.css'
import Header from './Header'
import Input from './Input'
import Button from './Button'
import BigText from './BigText'
import TemperatureDetails from './TemperatureDetails'
import Background from './Background'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [searchTerm, setSearchTerm] = useState("Lund");
  const [weather, setWeather] = useState();
  const [error, setError] = useState();

  const search = () => {
    fetch(`${api.base}weather?q=${searchTerm}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      if (result.cod === "404") {
        setError(result.message);
      }
      else {
        setWeather(result);
        setError("");
      }
    })
  }

  useEffect(() => {
    search();
  }, [])

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      search();
    }
  }

  return (
    typeof weather !== "undefined" ? (
      <main className="main-container">
        <Background weatherData={weather} className="background"/>
        <div className="content-container">
          <Header className="header" title="Weather App"/>
          <div className="mainContent">
            <div className="searchArea">
              <Input className="input" type="text" placeholder="Enter city name..." onChange={(e) => setSearchTerm(e.target.value)} onKeyUp={handleKeyUp}/>
              <Button className="searchButton" onClick={search}>Search</Button>
            </div>
              <div className="info">
                <BigText className="cityName">{weather.name}</BigText>
                <div className="weatherDetails">
                  <TemperatureDetails className="temperature">{Math.round(weather.main.temp)}°C</TemperatureDetails>
                  <TemperatureDetails className="condition">{weather.weather[0].main}</TemperatureDetails>
                </div>
              </div>
              {error.length > 0 && <ErrorMessage message={error}/>}
          </div>
        </div>
      </main>
    ) : (
      ""
    )
  );
}

export default App
