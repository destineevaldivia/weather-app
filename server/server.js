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
app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
