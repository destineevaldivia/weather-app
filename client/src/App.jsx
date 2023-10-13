import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/weatherForm";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  //fetch weather data from BE
  const loadWeather = async () => {
    const response = await fetch(
      `http://localhost:8080/api/weather?city=${city}`
    );
    const weatherData = await response.json();
    setData(weatherData);

    console.log("here is the dataaaa", data);
    console.log("here is the cityyyy", city);
  };
  return (
    <div>
      <WeatherForm loadWeather={loadWeather} />
      <WeatherCard />
    </div>
  );
}
export default App;
