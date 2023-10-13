import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
// import db from "./db/db-connection.js";

const app = express();
const PORT = 8080;

// Configure cors middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET public api from openweather
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(url);
  const weatherData = await response.json();
  res.json(weatherData);
});
//GET from my weatherapp_db
app.get("/users", async (req, res) => {
  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    console.log("Get in the server", users);
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

//POST
app.post("/users", async (req, res) => {
  try {
    console.log("In the server", req.body);
    const { name, city } = req.body;
    const result = await db.query(
      "INSERT INTO users (name, city) VALUES ($1, $2) RETURNING *",
      [name, city]
    );
    let dbResponse = result.rows[0];
    console.log(dbResponse);
    res.json(dbResponse);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});
//PUT
app.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { city } = req.body;
    const result = await db.query(
      "UPDATE users SET city = $1 WHERE id = $2 RETURNING *",
      [city, userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "City not found " });
    }
    let updatedCity = result.rows[0];
    console.log(updatedCity);
    res.json(updatedCity);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
