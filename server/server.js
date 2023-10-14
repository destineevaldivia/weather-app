import express from "express";
import cors from "cors";
import "dotenv/config";

//create instance of express.js framework application
const app = express();
//enable CORS middleware
app.use(cors());
//Set the port that you want the server to run on
const PORT = 5004;

//creates an endpoint for the "root" route, at /api
app.get("/", (req, res) => {
  res.json({
    message: "This is my rooooot! Go here--->    http://localhost:5173/",
  });
});
//GET from public OpenWeather api
app.get("/api/weather", (req, res) => {
  const city = req.query.cityName;
  const APIKEY = process.env.API_KEY;
  console.log(city);
  // console.log(APIKEY)
  const params = new URLSearchParams({
    q: city,
    appid: APIKEY,
    units: "metric",
  });
  console.log(params.appid);
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  //console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
      res.send("An error occurred");
    });
});

// POST request
app.post("/api/home", async (req, res) => {
  try {
    const newFave = {
      user_name: req.body.user_name,
      favorite_city: req.body.favorite_city,
    };
    const result = await db.query(
      "INSERT INTO users(user_name, favorite_city) VALUES ($1, $2) RETURN *",
      [newFave.user_name, newFave.favorite_city]
    );
    res.json(results.rows[0]);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
});
// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
