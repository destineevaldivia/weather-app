const WeatherCard = (props) => {
  return (
    <div className="weathercard">
      <img
        src={`https://openweathermap.org/img/wn/${props.data.data.weather[0].icon}.png`}
        alt="Weather Icon"
      />

      <h3> City: </h3>
      <p>{props.data.data.name} </p>
      <h3> Description: </h3>
      <p>{props.data.data.weather[0].description}</p>
      <h3> Temperature(Celcius): </h3>
      <p>{props.data.data.main.temp}</p>
    </div>
  );
};
export default WeatherCard;
