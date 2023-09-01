import { useEffect, useState } from 'react';
import './App.css'
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState('')

//calling searchWeatherByCity fxn from BE, server.js 
const searchWeatherByCity = async () => {
  const response = await fetch('/api/weather');
  const weatherData = await response.json();
  //console.log(weatherData);
  setData(weatherData.data)

};
//calling message from BE, server.js 
const callForMessage = async () => {
  const response = await fetch('/api');
  const data= await response.json();
  console.log(data);
  setMessage(data.message)

};

useEffect(() => {
  callBackEnd();
  callForMessage();
}, []);

  return (
    <>
      <div>
        <h1> Weather Forecast App </h1>
        <h5> City: {city} </h5> 
        <h5> Description: {message}  </h5> 
        
  
      </div>
    </>
  )
}

export default App;
