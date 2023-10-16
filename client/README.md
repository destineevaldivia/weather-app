# My weather app

Overview: A fullstack weather app that allows you to search weather by city. It has functionality to search current weather from a public api, OpenWeather. You can also save your favorite city to the database so that it persists.

Technology: React, JavaScript / NodeJs,Express,SQLPostgres

3 components: App.jsx (parent)- Responsible for making the fetch API call to my server side, initializing the state of my form, and rendering the weather card if a city is submitted
WeatherCard.jsx- Accepts props from parent and renders the data about the weather including icon, city name, description, and temperature. It also renders the MakeFavorite component
MakeFavorite.jsx - Generates a form for adding a name and favorite city to my database

Database: Using PostgresSQL. See bd.sql file for the schema.
