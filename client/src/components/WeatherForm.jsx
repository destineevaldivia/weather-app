import { useState } from "react";


const WeatherForm = (props) =>{

  const [city, setCity] = useState("");

  const onChange = (ev) =>{
    setCity(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleSubmit(city);
  }


    return (
        <div className="weather">
        <h1 className="App-header"> Weather App </h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            value={city}
            onChange={onChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;


