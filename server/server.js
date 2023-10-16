import express from "express";
import cors from "cors";
import "dotenv/config";

//create instance of express.js framework application, middleware, and setting the port number
const app = express();
app.use(cors());
const PORT = 5004;

//GET from public OpenWeather api
app.get("/api/weather", (req, res) => {
  const city = req.query.cityName;
  const APIKEY = process.env.API_KEY;
  console.log(city);
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

// POST request to my db
app.post("/api/home", async (req, res) => {
  try {
    const newFave = {
      user_name: req.body.user_name,
      favorite_city: req.body.favorite_city,
    };
    const result = await db.query(
      "INSERT INTO users(user_name, favorite_city) VALUES ($1, $2) RETURNING *",
      [newFave.user_name, newFave.favorite_city]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
});
// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
