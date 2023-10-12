import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import db from "./db/db-connection.js";

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello D");
});

//Creates an endpoint for getting api from weather api
app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.apiKey;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
