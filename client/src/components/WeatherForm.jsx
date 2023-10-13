import { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherForm = (props) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  //fetch weather data from BE
  const loadWeather = async () => {
    const response = await fetch(
      `http://localhost:8080/api/weather?`
      // `http://localhost:8080/api/weather?city=${city}`
    );
    const weatherData = await response.json();
    setData(weatherData);

    console.log("here is the dataaaa", data);
    console.log("here is the cityyyy", city);
  };
  return (
    <div>
      <h2> Weather in </h2>
      <div className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button className="btn" onClick={loadWeather}>
          Submit
        </button>
        <div>
          <WeatherCard data={data} city={city} />
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;
