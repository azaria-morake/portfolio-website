import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const defaultLocation = { lat: 40.7128, lon: -74.0060 }; // Default to New York

  const fetchWeather = async (lat, lon) => {
    const apiKey = 'b4c51322e42d3139ecc16e522fa5cc2a'; // Insert your OpenWeather API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data); // Update weather state with data
        setError(null);   // Clear any previous errors
      } else {
        setError('Enable location to show weather data.');
        setWeather(null); // Clear weather data if there's an error
      }
    } catch (err) {
      setError('Enable location to show weather data.');
      setWeather(null); // Clear weather data on error
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude); // Fetch weather based on user's location
        },
        () => {
          fetchWeather(defaultLocation.lat, defaultLocation.lon); // Fallback to default location
        }
      );
    } else {
      fetchWeather(defaultLocation.lat, defaultLocation.lon); // If geolocation isn't available
    }
  }, []);

  return (
    <div className="weather-container">
      {error && !weather && <p>{error}</p>} {/* Show error only if there's no weather data */}
      {weather && !error && (  // Only show weather if there's no error
        <p>
          {weather.name}: {Math.round(weather.main.temp)}°C, {weather.weather[0].description}
        </p>
      )}
    </div>
  );
};

export default Weather;
