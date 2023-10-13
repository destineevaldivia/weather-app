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
  try {
    const city = req.query.city;
    const API_KEY = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
});

// app.get("/users", async (req, res) => {
//   try {
//     const { rows: users } = await db.query("SELECT * FROM users");
//     console.log("Get. from my server", users);
//     res.send(users);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ error: error.message });
//   }
// });

// app.post("/users", async (req, res) => {
//   try {
//     console.log("Post. in my server", req.body);
//     const { user_name, favorite_city } = req.body;
//     const result = await db.query(
//       "INSERT INTO users (user_name, favorite_city) VALUES ($1, $2) RETURNING *",
//       [user_name, favorite_city]
//     );
//     let dbResponse = result.rows[0];
//     console.log(dbResponse);
//     res.json(dbResponse);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ err });
//   }
// });

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
