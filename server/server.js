
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//create instance of express.js framework application 
const app = express();

//enable CORS
app.use(cors())

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5002;

//creates an endpoint for the "root" route, at /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hi you are getting my root!, to go /api/weather for my weather app'});
});
//creates an endpoint for /api/weather
app.get('/api/weather', (req, res) => {
    const city = req.query.cityName;
    const apiKey = process.env.API_KEY;

    const params = new URLSearchParams({
      q: city,
      appid: apiKey,
      units: "Metric",
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    //console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data })
    })
    .catch((err) => {
      console.log(err);
    });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});