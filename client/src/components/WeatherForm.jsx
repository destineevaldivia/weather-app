
function WeatherForm() {
    const [city, setCity] = useState('')
    const [data, setData] = useState('')
      
//fetch weather data from server API endpoint
const searchWeatherByCity = async () => {
    const response = await fetch('/api/weather');
    const weatherData = await response.json();
        //console.log(weatherData);
    setData(weatherData.data)
      
    };
    return (
    <>
    <div className="weather-form">
        <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)} >
        </input>
        <button className="btn" onClick={searchWeatherByCity}>
        Submit
        </button>
    </div>
      <WeatherCard city={city} data={data} />
    </>
      );
}

export default WeatherForm;
