import React, { useState } from "react";
import axios from "axios";
import cities from "./cities.json"; // Import your full city dataset
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (selectedCity) => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);

    if (value) {
      const filtered = cities
        .filter(
          (c) =>
            c.name &&
            c.country_code &&
            c.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 10);
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setFilteredCities([]);
    fetchWeather(selectedCity);
  };

  const handleSearch = () => {
    if (city.trim() === "") {
      setError("City name cannot be empty.");
      setWeather(null);
      return;
    }
    fetchWeather(city);
  };

  return (
    <div className="weather-app">
      <div className="weather-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={handleCityChange}
            className="city-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {filteredCities.length > 0 && (
          <ul className="dropdown">
            {filteredCities.map((c, index) => (
              <li
                key={index}
                onClick={() => handleCitySelect(`${c.name},${c.country_code}`)}
                className="dropdown-item"
              >
                {c.name} ({c.country_code})
              </li>
            ))}
          </ul>
        )}

        {error && <p className="error-message">{error}</p>}

        {weather && (
          <div className="weather-details">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="weather-info">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
              <p className="temperature">{weather.main.temp}°C</p>
              <p className="description">
                {weather.weather[0].description.toUpperCase()}
              </p>
            </div>
            <div className="additional-info">
              <div className="info-item">💧 Humidity: {weather.main.humidity}%</div>
              <div className="info-item">🌬️ Wind Speed: {weather.wind.speed} m/s</div>
              <div className="info-item">
                🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </div>
              <div className="info-item">
                🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </div>
              <div className="info-item">
                📍 Coordinates: [{weather.coord.lat}, {weather.coord.lon}]
              </div>
              <div className="info-item">🔻 Pressure: {weather.main.pressure} hPa</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
