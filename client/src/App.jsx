import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //fetch weather data from BE, update state
  const loadCity = async (city) => {
    const params = new URLSearchParams({ cityName: city });
    const response = await fetch(`http://localhost:5004/api/weather?${params}`);
    const weatherData = await response.json();
    setResult(weatherData);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    loadCity(city);
  };
  return (
    <>
      <h1> Weather in... </h1>
      <div className="weatherform">
        <form>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
            onChange={({ target }) => setCity(target.value)}
            required
          />
          <button className="btn" onClick={handleSubmit}>
            Search
          </button>
        </form>
        <div>
          {!result ? null : <WeatherCard data={result} loadCity={loadCity} />}
        </div>
      </div>
    </>
  );
}
export default App;
