import WeatherCard from './components/WeatherCard';
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);
    
//fetch weather data from BE 
const loadCity = async (city) => {
  console.log(city);
  const params = new URLSearchParams({ cityName: city});

  const response = await fetch(`http://localhost:5004/api/weather?${params}`);
  const weatherData = await response.json();

  console.log(weatherData);
  setResult(weatherData); //<-- this means, result = weatherData;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    loadCity(city);
  }
  return (
  <>
<h2> My Weather is</h2>
  <div className="weather-form">
      <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)} >
      </input>
      <button className="btn" onClick={ handleSubmit }>
      Submit
      </button>
      <div>
        {!result ? null : <WeatherCard data={result} />}
      </div>
  </div>
  </>
    );
}
export default App;
