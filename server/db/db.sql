-- PostgreSQL database dump
CREATE DATABASE weatherapp_db;

-- blogpost table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  favorite_city TEXT NOT NULL
);