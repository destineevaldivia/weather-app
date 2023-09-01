import { useEffect, useState } from 'react';
import './App.css'
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';

const App = () => {
  return (
    <>
      <div>
        <h1 className="title"> Weather Forecast App </h1>
        <h5> City: {city} </h5> 
        <h5> Description: {message}  </h5> 
        <WeatherCard city={city} data={data} />
      </div>
    </>
  );
}

export default App;
