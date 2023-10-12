import { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherForm = (props) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  //fetch weather data from BE
  const loadWeather = async (city) => {
    const params = new URLSearchParams({ cityName: city });
    const response = await fetch(`http://localhost:5004/api/weather?${params}`);
    const weatherData = await response.json();

    setData(weatherData);
  };

  // const onChange = (ev) => {
  //   setCity(ev.target.value);
  // };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   props.handleSubmit(city);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   loadCity(city);
  // };

  return (
    <div>
      <h2> Weather in </h2>
      <div className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
        <div>{!result ? null : <WeatherCard data={result} />}</div>
      </div>
    </div>
    // <div className="weather">
    //   <h1 className="App-header"> Weather App </h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       id="city-name"
    //       type="text"
    //       placeholder="Please enter the city name"
    //       name="city"
    //       value={city}
    //       onChange={onChange}
    //       required
    //     />
    //     <input type="submit" value="Submit" />
    //   </form>
    // </div>
  );
};

export default WeatherForm;
