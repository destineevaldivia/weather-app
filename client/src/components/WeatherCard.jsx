const WeatherCard = (props) => {

return (
    <div>
<h3> City: {props.data.data.name} </h3>

<h3> Main: {props.data.data.weather[0].main} </h3>

    </div>

)
}
export default WeatherCard;