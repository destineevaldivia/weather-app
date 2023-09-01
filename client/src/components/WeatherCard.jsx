const WeatherCard = (props) => {

return (
    <div>
<h3> City: {props.data.data.name} </h3>
<h3> Description: {props.data.data.weather[0].description} </h3>
<h3> Temperature(Celcius): {props.data.data.main.temp} </h3>

    </div>

)
}
export default WeatherCard;