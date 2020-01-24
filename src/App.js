import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  const [weather, setWeather] = useState([]);
  const apiKey = "8fae76efc9758bfc4bf84223084aa954";

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`
    )
      .then(res => res.json())
      .then(data => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),
        feels_like: Math.round(apiData.main.feels_like - 273.15),
        error: ""
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        description: "",
        temperature: "",
        feels_like: "",
        error: alert("Please enter a City and Country!")
      });
    }
  }

  return (
    <div className="App">
      <h3>weather app!</h3>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        feels_like={weather.feels_like}
        error={weather.error}
      />
      {console.log("aaaa", weather.data)}
    </div>
  );
}

export default App;
